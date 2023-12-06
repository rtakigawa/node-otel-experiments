import { Router } from "express";
import { prisma } from "../db";
import {
  createTodo,
  doneTodo,
  listTodo,
  todo,
  undoneTodo,
  updateTodo,
} from "../usecase/todo";

export const todoRouter = Router();

todoRouter.get("/", async (req, res) => {
  const data = await listTodo();
  res.json({ data });
});

todoRouter.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const data = await todo(id);
  res.json({ data });
});

todoRouter.post("/", async (req, res) => {
  const { title, description } = req.body;

  const data = await createTodo(title, description);
  res.json({ data });
});

todoRouter.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;

  const data = await updateTodo(id, title, description);
  res.json({ data });
});

todoRouter.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const data = await prisma.todo.delete({ where: { id } });
  res.json({ data });
});

todoRouter.put("/:id/done", async (req, res) => {
  const id = parseInt(req.params.id);

  const data = await doneTodo(id);
  res.json({ data });
});

todoRouter.put("/:id/undone", async (req, res) => {
  const id = parseInt(req.params.id);

  const data = await undoneTodo(id);
  res.json({ data });
});

export default todoRouter;
