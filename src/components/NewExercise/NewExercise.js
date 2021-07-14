import { useState } from "react";
import ExerciseForm from "./ExerciseForm"
import './NewExercise.css';

const NewExercise = (props) => {
    


    const [isEditing,setIsEditing] = useState(false);

    const saveExerciseDataHandler = (enteredExerciseData) => {

        const exerciseData = {
            ...enteredExerciseData,
            id: Math.random().toString()
        };

        props.onAddExercise(exerciseData);
        setIsEditing(false);

    };    


    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    
    const startEditingHandler = () => {
        setIsEditing(true);
    };


    return <div className="new-exercise">
        {!isEditing && <button onClick={startEditingHandler}> Add Exercise </button>}
        {isEditing && <ExerciseForm onSaveExerciseData = {saveExerciseDataHandler}
        onCancel={stopEditingHandler}></ExerciseForm>}
    </div>


};

export default NewExercise;