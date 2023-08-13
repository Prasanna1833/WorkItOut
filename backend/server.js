import express from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/workoutRouter.js";
import mongoose from "mongoose";
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", router);


//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and server is running at the port 4000");
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
