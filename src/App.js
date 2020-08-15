import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/logo.svg';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component { 


  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <Navbar>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/quiz">Quiz</Nav.Link>
              <Nav.Link href="/articles">Articles</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>COVID-19 Illustrated</h2>
        </div>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/quiz" exact component={() => <QuizGame />} />
            <Route path="/articles" exact component={() => <Articles />} />
            <Route path="/about" exact component={() => <About />} />
            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

class QuizGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    console.log(this.state.answersCount["Low"]);
    console.log(this.state.answersCount["Medium"]);
    console.log(this.state.answersCount["High"]);
    console.log(answersCountKeys);
    console.log(answersCountValues);
    console.log(maxAnswerCount);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1 || result.length === 2) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="quiz">
      {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    )
  }
};

class Articles extends Component {
  componentDidMount() {
    const detail = document.querySelector('.detail');
    const detailTitle = document.querySelector('.detail-title');
    const detailBody = document.querySelector('.detail-body');
    const masterItems = document.querySelectorAll('.master-item');

    const terms = [
      {category: 'Antibody Test', text: 'Some text', img: ''},
      {category: 'Asymptomatic', text: 'Some text', img: ''},
      {category: 'Bacteria', text: 'Some text', img: ''},
      {category: 'COVID-19', text: 'Some text', img: ''},
      {category: 'Deadliness', text: 'Some text', img: ''},
      {category: 'Disease', text: 'Some text', img: ''},
      {category: 'Epidemic', text: 'Some text', img: ''},
      {category: 'False Negative/Positive', text: 'Some text', img: ''},
      {category: 'Herd immunity', text: 'Some text', img: ''},
      {category: 'ICU', text: 'Some text', img: ''},
      {category: 'Immunity', text: 'Some text', img: ''},
      {category: 'Infectiousness', text: 'Some text', img: ''},
      {category: 'Pathogen', text: 'Some text', img: ''},
      {category: 'Placebo', text: 'Some text', img: ''},
      {category: 'Protein', text: 'Some text', img: ''},
      {category: 'Respiration', text: 'Some text', img: ''},
      {category: 'SARS-CoV-2', text: 'Some text', img: ''},
      {category: 'Spike protein', text: 'Some text', img: ''},
      {category: 'Vaccine', text: 'Some text', img: ''},
      {category: 'Virus', text: 'Some text', img: ''}
    ];

    masterItems.forEach((item) => {
      item.addEventListener('click', function() {
        clearSelected();
        this.classList.add('active');

        detail.classList.remove('hidden-md-down');

        const page = this.innerHTML;
        detailTitle.innerHTML = page;
        detailBody.innerHTML = terms.filter(
          function(terms) {
            return terms.category === page;
          }
        )[0].text;
      });
    });

    function clearSelected() {
      for (let item of masterItems) {
        item.classList.remove('active');
      }
    }
  }

  render() {
    const masterItems = document.querySelectorAll('.master-item');

    function back() {
      console.log("clc");
      document.querySelector('.detail').classList.add('hidden-md-down');
      clearSelected();
    }

    function clearSelected() {
      for (let item of masterItems) {
        item.classList.remove('active');
      }
    }

    return (
      <div className="container long">
        <br/>
        <h1 className="title">Illustrated Glossary</h1>
        <div className="ctn">
          <div className="coll-3 master">
            <div className="master-item active">Antibody Test</div>
            <div className="master-item">Asymptomatic</div>
            <div className="master-item">Bacteria</div>
            <div className="master-item">COVID-19</div>
            <div className="master-item">Deadliness</div>
            <div className="master-item">Disease</div>
            <div className="master-item">Epidemic</div>
            <div className="master-item">False Negative/Positive</div>
            <div className="master-item">Herd immunity</div>
            <div className="master-item">ICU</div>
	          <div className="master-item">Immunity</div>
            <div className="master-item">Infectiousness</div>
            <div className="master-item">Pathogen</div>
	          <div className="master-item">Placebo</div>
            <div className="master-item">Protein</div>
            <div className="master-item">Respiration</div>
            <div className="master-item">SARS-CoV-2</div>
            <div className="master-item">Spike protein</div>
            <div className="master-item">Vaccine</div>
            <div className="master-item">Virus</div>
          </div>
          <div className="coll-9 detail">
            <button id="back" className="hidden-md" onClick={back}>Back</button>
            <h1 className="detail-title text-center">Bacteria</h1>
            <p className="detail-body">Some text</p>
          </div>
        </div>
      </div>
    )
  }
};

const About = () => {
  return (
    <div className="container long">
      <br/>
      <h1 className="title">About</h1>
    </div>
  )
};

const Home = () => {
  return (
    <div className="container long">
      <br/>
      <h1 className="title">Home</h1>
      <div className="ctn"> 
        <p>Hello</p>
      </div>
    </div>
  )
};

export default App;
