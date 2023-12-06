import { Todo } from "@prisma/client";
import { prisma } from "../db";

export async function listTodo(): Promise<Todo[]> {
  return await prisma.todo.findMany();
}

export async function todo(id: number): Promise<Todo | null> {
  return prisma.todo.findUnique({ where: { id } });
}

export async function createTodo(
  title: string,
  description: string
): Promise<Todo> {
  return prisma.todo.create({ data: { title, description } });
}

export async function updateTodo(
  id: number,
  title: string,
  description: string
): Promise<Todo | null> {
  return prisma.todo.update({ where: { id }, data: { title, description } });
}

export async function deleteTodo(id: number): Promise<Todo | null> {
  return prisma.todo.delete({ where: { id } });
}

export async function doneTodo(id: number): Promise<Todo | null> {
  return prisma.todo.update({ where: { id }, data: { done: true } });
}

export async function undoneTodo(id: number): Promise<Todo | null> {
  return prisma.todo.update({ where: { id }, data: { done: false } });
}
