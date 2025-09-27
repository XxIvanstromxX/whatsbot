import axios from "axios";
import dotenv from "dotenv";
import { chatAI } from "./geminiResponse.js";

dotenv.config();
const { AUTHENTICATION_API_KEY } = process.env;

const URL = "http://localhost:8080/message/sendText/ivanTest";

const sendMenssage = async (number, text) => {
  try {
    await axios.post(
      URL,
      {
        number: number,
        text: text,
      },
      {
        headers: { apiKey: AUTHENTICATION_API_KEY },
      }
    );
  } catch (e) {
    console.log("Error enviando mensaje", e.message);
  }
};

const commandsLogic = {
  "/help": (userType) =>
    userType === "admin"
      ? "Comandos Admin: /help, /info, /usuarios"
      : "Comandos disponibles: /help, /info",
  "/info": () =>
    "Este es un bot de ejemplo que responde a comandos y mensajes.",
};

const getUserType = (number) => {
  const adminNumbers = ["521563435924@s.whatsapp.net"];
  return adminNumbers.includes(number) ? "admin" : "user";
};

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

    let responseText;
    if (commandsLogic[message]) {
      responseText = commandsLogic[message](userType);
    } else {
      responseText = await chatAI(message, userType);
      if (!responseText) {
        responseText = "Lo siento, no pude procesar tu mensaje";
      }
    }

    await sendMenssage(number, responseText);

    return res.status(200).json({ status: "Mensaje enviado" });
  } catch (err) {
    return res.status(500).json({ error: "Ocurrio un error en el servidor" });
  }
};
