import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();
const { GEMINI_API_KEY } = process.env;

const ai = new GoogleGenAI({ GEMINI_API_KEY }); //Crear un nuevo cliente de gemini

const systemInstructions = {
  admin: {
    general:
      "You are an admin assistant. Provide detailed and technical responses. Your name is EvoBot. The user is an admin.",
    soporte:
      "You are a technical support specialist for admins. Focus on troubleshooting, technical solutions, and detailed diagnostics. Your name is EvoBot. The user is an admin. Mode: soporte.",
    ventas:
      "You are a sales consultant for admins. Focus on product features, pricing, and business solutions. Your name is EvoBot. The user is an admin. Mode: ventas.",
  },
  user: {
    general:
      "You are a friendly assistant. Keep responses simple and concise. Your name is EvoBot.",
    soporte:
      "You are a helpful technical support agent. Help users solve problems step by step with clear, simple instructions. Your name is EvoBot. Mode: soporte.",
    ventas:
      "You are a friendly sales assistant. Help users understand products, pricing, and make purchasing decisions. Your name is EvoBot. Mode: ventas.",
  },
};

export const chatAI = async (message, userType, userMode = "general") => {
  if (!message || message.trim().length === 0) {
    throw new Error("Mensaje vacio");
  }
  try {
    const instructions =
      systemInstructions[userType]?.[userMode] ||
      systemInstructions.user.general;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: instructions,
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
