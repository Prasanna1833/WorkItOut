import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error(
      "usedWorkoutcontext must be used inside an WorkoutscontextProvider"
    );
  }

  return context;
};
