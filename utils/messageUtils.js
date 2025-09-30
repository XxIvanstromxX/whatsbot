import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const { AUTHENTICATION_API_KEY } = process.env;

const URLs = {
  sendMenssage: "http://localhost:8080/message/sendText/ivanTest",
  sendMedia: "http://localhost:8080/message/sendMedia/ivanTest",
};

export const sendMenssage = async (number, text) => {
  try {
    await axios.post(
      URLs.sendMenssage,
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

//Almacen temporal de modos de Usuario (En produccion usar DB)
const userModes = new Map();

export const getUserMode = (number) => {
  return userModes.get(number) || "general";
};

export const setUserMode = (number, mode) => {
  userModes.set(number, mode);
};

export const commandsLogic = {
  "/help": {
    type: "text",
    handler: (userType) =>
      userType === "admin"
        ? "Comandos Admin: /help, /info, /usuarios, /manual, /modo_soporte, /modo_ventas, /modo_general"
        : "Comandos Usuario: /help, /info, /manual, /modo_soporte, /modo_ventas, /modo_general",
  },
  "/info": {
    type: "text",
    handler: () =>
      "Este es un bot de ejemplo que responde a comandos y mensajes.",
  },
  "/manual": {
    type: "document",
    handler: () => ({
      caption: "Aquí tienes el manual de usuario. 📄",
      mediatype: "document",
      mimetype: "application/pdf",
      media:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      filename: "manual.pdf",
    }),
  },
  "/modo_soporte": {
    type: "mode",
    handler: (number) => {
      setUserMode(number, "soporte");
      return "Modo soporte activado. ¿En qué puedo ayudarte? 🛠️";
    },
  },
  "/modo_ventas": {
    type: "mode",
    handler: (number) => {
      setUserMode(number, "ventas");
      return "Modo ventas activado. ¿Qué producto te interesa? 🛒";
    },
  },
  "/modo_general": {
    type: "mode",
    handler: (number) => {
      setUserMode(number, "general");
      return "Modo general activado. ¿Cómo puedo asistirte hoy? 🌐";
    },
  },
};

export const getUserType = (number) => {
  const adminNumbers = ["5215634359240@s.whatsapp.net"];
  return adminNumbers.includes(number) ? "admin" : "user";
};

// ejecutar comando
export const executeCommand = async (command, userType, number) => {
  const commandConfig = commandsLogic[command];

  if (!commandConfig) {
    return null;
  }

  const result = commandConfig.handler(userType, number); // Pasar number para modos

  if (commandConfig.type === "text" || commandConfig.type === "mode") {
    await sendMenssage(number, result);
  } else if (commandConfig.type === "document") {
    await sendMedia(number, result);
  }

  return commandConfig.type;
};

export const sendMedia = async (number, mediaData) => {
  try {
    await axios.post(
      URLs.sendMedia,
      {
        number: number,
        ...mediaData,
      },
      {
        headers: { apiKey: AUTHENTICATION_API_KEY },
        timeout: 10000,
      }
    );
  } catch (e) {
    console.log("Error enviando media", e.message);
  }
};
