import { useEffect } from "react";
import Workoutdetails from "../components/Workoutdetails.js";
import Workoutform from "../components/Workoutform.js";
import { useWorkoutContext } from "../hooks/useWorkoutContext.js";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  useEffect(() => {
    const fetchworkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    }
    fetchworkouts()
  // eslint-disable-next-line
  }, [])
  return (
    <div className="home">
      <div className="workout">
        {workouts &&
          workouts.map((workout) => (
            <Workoutdetails key={workout._id} workout={workout} />
          ))}
      </div>
      <Workoutform />
    </div>
  );
};

export default Home;
