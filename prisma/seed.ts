import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.todo.create({
    data: {
      id: 1,
      title: "book flight to Tokyo",
      description: "due date is this weekend.",
      done: true,
    },
  });

  await prisma.todo.create({
    data: {
      id: 2,
      title: "write blog post",
      done: false,
    },
  });
}

main().then(() => {});
