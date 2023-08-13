import express from "express";

import {
  createWorkout,
  getallworkout,
  getworkout,
  deleteworkout,
  updateworkout,
} from "../controller/workoutController.js";

const router = express.Router();

//get all workouts
router.get("/", getallworkout);

//get a single workout
router.get("/:id", getworkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", deleteworkout);

//UPDATE a workout
router.patch("/:id", updateworkout);

export default router;
