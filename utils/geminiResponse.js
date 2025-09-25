import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();
const { GEMINI_API_KEY } = process.env;

const ai = new GoogleGenAI({ GEMINI_API_KEY }); //Crear un nuevo cliente de gemini

export const chatAI = async (message) => {
  if (!message || message.trim().length === 0) {
    throw new Error("Mensaje vacio");
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });
    if (!response || !response.text) {
      throw new Error("Respuesta de gemini es Invalida o no existe");
    }
    return response.text;
  } catch (err) {
    throw new Error("Ocurrio un error en Gemini", err);
  }
};
