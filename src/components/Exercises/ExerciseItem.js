import './ExerciseItem.css';
import './ExerciseDate.css'
import Card from '../UserInterface/Card';
import ExerciseDate from './ExerciseDate';
import { useState } from 'react';

const ExerciseItem = props => {

   
  return (
    <li>
    <Card className="exercise-item">
      <ExerciseDate date={props.date}/>
      <div className="exercise-item__type">
        <h2> {props.title} </h2>
      <div className="exercise-item__time"> {props.time} mins </div>
      </div>
    </Card>
    </li>
  );
}

export default ExerciseItem;


