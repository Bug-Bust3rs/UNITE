import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "./config/config";
import corsOptions from "./lib/corsConfig";
import limiter from "./lib/rateLimitConfig";
import CheckError from "./lib/checkError";
import errorHandler from "./middleware/errorMiddleware";
import authRoutes from "./routes/authRouter";
import profileRoutes from "./routes/profileRoutes";
import jobRoutes from "./routes/jobRoutes";
import petPostRoutes from "./routes/petPostRoutes";
import userRoutes from './routes/user.routes'
import donationPostRoutes from "./routes/donationPostsRoutes";

const app: Express = express();

app.use(express.json());
app.use(morgan("dev"));
// app.use(config.DEV_ENV === "PROD" ? cors(corsOptions) : cors());
app.use(limiter);

app.use("/api/v0.1/auth", authRoutes);
app.use("/api/v0.1/profiles", profileRoutes);
app.use("/api/v0.1/job", jobRoutes);
app.use("/api/v0.1/petPosts", petPostRoutes);
app.use("/api/v0.1/donationPosts", donationPostRoutes);
app.use("/api/v0.1", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new CheckError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`[⚡] Server Is Running on http://localhost:${config.PORT}`);
});


export default app;