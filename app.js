import axios from "axios";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express(); //Instancia de Express o inicialización de express
const PORT = 3000;

//Esto ayuda a entender las peticiones que llegan al servidor
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hola" });
});

app.post("/webhook", async (req, res) => {
  const evento = req.body;
  if (evento.event === "messages.upsert") {
    const mensaje = evento.data.message.conversation;
    const numero = evento.data.key.remoteJid;

    console.log("De: ", numero, "Texto: ", mensaje);

    //Respuesta general
    await axios.post(
      "http://localhost:8080/message/sendText/ivanTest",
      {
        number: numero,
        text: "Gracias por tu mensaje, en breve te respondemos",
      },
      {
        headers: { apiKey: process.env.AUTHENTICATION_API_KEY },
      }
    );
  }
  res.status(200);
});

app.listen(PORT, () => {
  console.log(`El servidor se esta ejecutando en http://localhost:${PORT}`);
});
