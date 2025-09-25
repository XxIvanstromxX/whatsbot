import axios from "axios";
import dotenv from "dotenv";
import { chatAI } from "./geminiResponse.js";

dotenv.config();
const { AUTHENTICATION_API_KEY } = process.env;

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

    const aiResponse = await chatAI(message);

    if (!aiResponse) {
      return res.status(500).json({ error: "Error en IA" });
    }

    await axios.post(
      "http://localhost:8080/message/sendText/ivanTest",
      {
        number: number,
        text: aiResponse,
      },
      {
        headers: { apiKey: AUTHENTICATION_API_KEY },
      }
    );

    return res.status(200).json({ status: "Mensaje enviado" });
  } catch (err) {
    return res.status(500).json({ error: "Ocurrio un error en el servidor" });
  }
};
