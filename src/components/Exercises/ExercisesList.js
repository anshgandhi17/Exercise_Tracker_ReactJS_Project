
import ExerciseItem from "./ExerciseItem";
import "./ExercisesList.css";



const ExercisesList = props => {

let exercisesContent = <p>No EXERCISES FOUND!!!!!!!!!!</p> 

if(props.item.length > 0 ) {

  exercisesContent = "";
}
return(

    <ul className="exercises-list">

    {props.item.map((exercise) => <ExerciseItem 
    key = {exercise.id}
    title = {exercise.title}
    time = {exercise.time} 
    date = {exercise.date}></ExerciseItem>)}

</ul>
);
};

export default ExercisesList;