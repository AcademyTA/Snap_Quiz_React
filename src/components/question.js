import React from 'react';

import AnswerList from './answer_list';

function Question(props) {
  return (
    <li key={ props.question.id } className='list-group-item'>
      <h4>{ props.question.title}</h4>
      <AnswerList answers={props.question.answers}/>
    </li>
  )
}

export default Question;
