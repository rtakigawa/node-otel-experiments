import express from "express";
import { todoRouter } from "./router/todo";

const app = express();
app.use(express.json());

app.use("/todo", todoRouter);

const PORT = parseInt(process.env.PORT || "8080");
app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
