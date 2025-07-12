import express, { Express } from "express";
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRouter from "./routes/auth.route";
import blogRouter from "./routes/blog.route";

const app: Express = express();


app.use(cors({
  origin: "http://localhost:5173",
   credentials:true,
  methods: ["POST", "GET", "PUT", "PATCH", "DELETE"]
}));
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("<h1>welcome to BlogIt Api</h1>");
});

app.use("/api/auth", authRouter)
app.use("/api",blogRouter)

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app is live on port ${port}`);
});
