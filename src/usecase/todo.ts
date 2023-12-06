import { Span, trace } from "@opentelemetry/api";
import { Todo } from "@prisma/client";
import { prisma } from "../db";

const tracer = trace.getTracer("usecase");

type UsecaseArgument<P, R> = (span: Span, params: P) => Promise<R>;
function usecase<P, R>(name: string, fn: UsecaseArgument<P, R>) {
  return (params: P) => {
    return tracer.startActiveSpan(
      `usecase:${name}`,
      {
        attributes: {
          "usecase.name": name,
        },
      },
      async (span: Span) => {
        const result = await fn(span, params);
        span.end();
        return result;
      }
    );
  };
}

export const listTodo = usecase<void, Todo[]>("listTodo", async (span) => {
  const result = await prisma.todo.findMany();
  span.setAttribute("todo.count", result.length);
  return result;
});
