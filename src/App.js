import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import QuestionsList from './components/questions_list';

const BASE_URL = 'http://localhost:3000/api/v1/questions/'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
    }
  }

  getQuestions() {
    fetch(BASE_URL, {
      method:  'GET',
    })
    .then(this.checkStatus)
    .then(function(questions) {
      this.setState({ questions: questions })
    }.bind(this))
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      response.json()
      .then(function(data) {
        var error = new Error(data.errors.join(', '));
        throw error
      })
    }
  }

  componentDidMount() {
    this.getQuestions()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Snap Quiz</h2>
        </div>
        <div className="App-intro col-md-6 col-md-offset-3">
          <div>Below is the Questions List Component</div>
          <QuestionsList questions={ this.state.questions } />
        </div>
      </div>
    );
  }
}

export default App;
