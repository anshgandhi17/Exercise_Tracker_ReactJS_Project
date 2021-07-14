import { useState } from "react";
import Card from "../UserInterface/Card";
import ExerciseItem from "./ExerciseItem";
import './Exercises.css';
import ExercisesFilter from "./ExercisesFilter";
import ExercisesList from "./ExercisesList";
import ExercisesChart from "./ExercisesChart";

function Exercises(props) {

  const [filteredYear,setFilteredYear]  = useState('2021');


  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    
  }

  const filteredExercises = props.item.filter((exercise) => {
      return filteredYear === exercise.date.getFullYear().toString();
  });


 


    return ( 
      <div>
    
            <Card className="exercises">
            <ExercisesFilter selected={filteredYear} 
            onChangeFilter = {filterChangeHandler}/>
            <ExercisesChart exercises={filteredExercises}/>
            <ExercisesList item={filteredExercises}>  </ExercisesList>            



            
    </Card>
    </div>
    );
}


export default Exercises;