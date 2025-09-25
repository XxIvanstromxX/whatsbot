import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { message } from "./utils/messageHandler.js";

dotenv.config();

const app = express(); //Instancia de Express o inicialización de express
const { PORT } = process.env;

//Esto ayuda a entender las peticiones que llegan al servidor
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hola" });
});

app.post("/webhook", message);

app.listen(PORT, () => {
  console.log(`El servidor se esta ejecutando en http://localhost:${PORT}`);
});
