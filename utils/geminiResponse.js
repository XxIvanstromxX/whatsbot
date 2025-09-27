import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();
const { GEMINI_API_KEY } = process.env;

const ai = new GoogleGenAI({ GEMINI_API_KEY }); //Crear un nuevo cliente de gemini

const systemInstructions = {
  admin:
    "You are an admin assistant. Provide detailed and technical responses. Your name is EvoBot. The user is an admin",
  user: "You are a friendly assistant. Keep responses simple and concise. Your name is EvoBot",
};

export const chatAI = async (message, userType) => {
  if (!message || message.trim().length === 0) {
    throw new Error("Mensaje vacio");
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction:
          systemInstructions[userType] || systemInstructions.user,
      },
    });
    if (!response || !response.text) {
      throw new Error("Respuesta de gemini es Invalida o no existe");
    }
    return response.text;
  } catch (err) {
    throw new Error("Ocurrio un error en Gemini", err);
  }
};
