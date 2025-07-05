import express, { Express, NextFunction, Request, Response } from "express";

const app: Express = express();
const port: number = 3000;
app.use(express.json());

interface CustomRequest extends Request {
  startTime?: number;
}

app.use((req: CustomRequest, res: Response, next: NextFunction) => {
  req.startTime = Date.now();
  next();
});

interface User {
  name: string;
  email: string;
}

app.post("/", (req: Request<{}, {}, User>, res: Response) => {
  const { name, email } = req.body;
  res.json({
    message: `User ${name} with ${email} created`,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Welcome to India",
  });
});

app.listen(port, () => {
  console.log("Server is running on port", 3000);
});
