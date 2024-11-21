import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: ['http://localhost:4000'], 
  credentials: true, 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



import schoolRouter from "./routes/school.routes.js";
//routes declaration
app.get('/', (req, res) => {
  res.send('Hi, World! Welcome to School Management');
 
});
app.use("/api", schoolRouter);


export { app };
