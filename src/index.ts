import express, { Express, Request, Response } from "express";
import CONFIG from "./config";

const app: Express = express();
const port = CONFIG.ENV.PORT || 3000;

app.get("/", (_: Request, res: Response) => {
  res.send("====== Home Cost Management API ======");
});

app.listen(port, () => {
  const runAt =
    CONFIG.ENV.NODE_ENV === "local" ? `http://127.0.0.1:${port}` : port;

  console.log(`[server]: Server is running at ${runAt}`);
});
