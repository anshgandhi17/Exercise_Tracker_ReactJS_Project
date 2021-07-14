import { useState } from 'react';
import './ExerciseForm.css';

const ExerciseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredTime, setEnteredTime] = useState('0');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] =
    // useState({
    //     enteredTitle: '',
    //     enteredTime: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // react 

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
    };

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
        setEnteredDate(event.target.value);

    };

    const timeChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTime: event.target.value,
        // })   
        setEnteredTime(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const exercsieData = {
            title: enteredTitle,
            time : enteredTime, 
            date: new Date(enteredDate)
        };

        props.onSaveExerciseData(exercsieData);
        setEnteredTime('');
        setEnteredTitle('');
        setEnteredDate('');
    };



    return(
        <form onSubmit={submitHandler}>
            <div className="new-exercise__controls">
                <div className="new-exercise__control">
                    <label> Name </label>
                    <input type = "text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>

                <div className="new-exercise__control" >
                    <label> Time </label>
                    <input type = "number" min="10" step="5" max="120" onChange={timeChangeHandler} value = {enteredTime}/> 
                </div>

                <div className="new-exercise__control">
                    <label> Date </label>
                    <input type = "date" min="2021-06-26" max="2023-12-31" onChange={dateChangeHandler} value = {enteredDate}/>
                </div>
            </div>

            <div className="new-exercise__actions">
                 <button type ="button" onClick={props.onCancel}>Cancel</button> 
                 <button type="submit">Add exercise</button>
            </div>
           
        </form>
    )

};

export default ExerciseForm;