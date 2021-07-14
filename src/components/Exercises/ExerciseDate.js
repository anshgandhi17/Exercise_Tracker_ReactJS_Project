import React from 'react';
import './ExerciseDate.css';

function ExerciseDate(props){
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();

    return(
        <div className="exercise-date"> 
         <div className="exercise-date__month">{month}</div>
         <div className="exercise-date__day">{day}</div>
         <div className="exercise-date__year">{year}</div>          
        </div>
    );
}

export default ExerciseDate;


