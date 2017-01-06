import React from 'react';

import Question from './question';

function QuestionsList(props) {
  return (
    <ul className='list-group'>
      {
        props.questions.map(function(question, index) {
          return (
            <Question key={ question.id } question={ question } />
          )
        })
      }
    </ul>
  )
}

QuestionsList.defaultProps = {
  questions: [],
}

export default QuestionsList;
