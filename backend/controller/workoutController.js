import Workout from "../models/workoutModel.js";
import mongoose from "mongoose";
//get all workouts
export const getallworkout = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//get single workout
export const getworkout = async (req, res) => {
  const { id } = req.params;

  const workout = await Workout.findById(id);

  if (!workout) return res.status(404).json({ error: "no such workout" });

  res.status(200).json(workout);
};

//create a new workout
export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  let emptyfields=[]

  if(!title)
  {
    emptyfields.push('title')
  }
  if(!load)
  {
    emptyfields.push('load')
  }
  if(!reps)
  {
    emptyfields.push('reps')
  }
  if(emptyfields.length >0)
  {
    return res.status(400).json({error:'Please fill in all the fields',emptyfields})
  }
  //add to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
export const deleteworkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) return res.status(404).json({ error: "no workout found" });

  res.status(200).json({workout});
};

//update a workout
export const updateworkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Type.ObjectId.isValid(id))
    return res.status(404).json({ error: "no such workout" });

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) return res.status(404).json({ error: "no workout" });

  res.status(200).json(workout);
};
