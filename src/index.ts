import express from "express";
import todoRouter from "./router/todo";

const PORT = parseInt(process.env.PORT || "8080");
const app = express();

app.use(express.json());

app.use("/todo", todoRouter);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err);
    res.status(500).send("internal server error");
  }
);

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
