import { useState } from "react";
import Exercises from "./components/Exercises/Exercises";
import NewExercise from "./components/NewExercise/NewExercise";

function App() {
  const DUMMY_EXERCISES = [
    { id: 1, date: new Date(2021, 6, 17), title: "Arm Workout", time: 35 },
    { id: 2, date: new Date(2021, 6, 16), title: "Leg Workout", time: 45 },
    { id: 3, date: new Date(2021, 6, 15), title: "Core Workout", time: 55 },
    { id: 4, date: new Date(2021, 6, 14), title: "Chest Workout", time: 25 },
    { id: 5, date: new Date(2020, 6, 11), title: "Cardio", time: 25 },
  ];



  const [exercises,setExercises] = useState(DUMMY_EXERCISES);

  const addExerciseHandler = (exercise) => {
    setExercises((prevExercises) => {
      return [exercise, ...prevExercises];
    });
  };

  return (
    <div>
      <NewExercise onAddExercise = {addExerciseHandler}></NewExercise>
     <Exercises item={exercises} />
    </div>
  );
}

export default App;
