import React from 'react';

function AnswerList(props) {
  return (
    <ul>
      {
        props.answers.map(function(answer, index) {
          return (
            <div key={answer.id} className="radio control-label">
              <label>
                <input type="radio" value={answer.body} />
                { answer.body }
              </label>
            </div>
          )
        })
      }
    </ul>
  )
}

export default AnswerList;
