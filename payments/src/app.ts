import "express-async-errors";
import express from "express";
import cookieSession from "cookie-session";
import { json } from "body-parser";
import { createChargeRouter } from "./routes/new";
import { errorHandler, NotFoundError, currentUser } from "@pepe_tickets/common";

const app = express();

app.set("trust proxy", true);

app.use(json());

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

// install validations
app.use(currentUser);

// install routers
app.use(createChargeRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
