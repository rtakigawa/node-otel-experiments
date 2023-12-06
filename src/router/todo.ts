import { Router } from "express";
import { listTodo } from "../usecase/todo";

export const todoRouter = Router();

todoRouter.get("/", async (req, res) => {
  const data = await listTodo();
  res.json({ data });
});
