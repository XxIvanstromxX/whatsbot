import {
  sendMenssage,
  executeCommand,
  getUserType,
  getUserMode,
} from "../utils/messageUtils.js";
import { chatAI } from "../utils/geminiResponse.js";

export const message = async (req, res) => {
  try {
    const evento = req.body;

    if (evento.event !== "messages.upsert") {
      return res.status(400).json({ error: "Evento no soportado" });
    }

    const message = evento.data.message.conversation;
    const number = evento.data.key.remoteJid;

    if (!message || !number) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    const userType = getUserType(number); //Tipo de usuario basado en el numero
    const userMode = getUserMode(number); // Modo del usuario

    // Intenta ejecutar un comando
    const commandResult = await executeCommand(message, userType, number);

    if (commandResult) {
      return res.status(200).json({ status: "Comando ejecutado" });
    }

    // Si no es un comando, procesa con Gemini
    const responseAI =
      (await chatAI(message, userType, userMode)) ||
      "No se pudo generar una respuesta";
    await sendMenssage(number, responseAI);

    return res.status(200).json({ status: "Mensaje enviado" });
  } catch (err) {
    return res.status(500).json({ error: "Ocurrio un error en el servidor" });
  }
};
