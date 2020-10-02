import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/logo.svg';
import Graph from './components/Graph';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LongQuiz from './quiz-component/Quiz';
import { quiz } from './components/quiz.jsx';
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
            <Route path="/quiz" exact component={() => <QuizChoose />} />
            <Route path="/articles" exact component={() => <Articles />} />
            <Route path="/about" exact component={() => <About />} />
            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

class QuizChoose extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz: 0,
    };
  }

  componentDidMount() {
    const quizOne = document.querySelectorAll('.quiz1');
    const quizTwo = document.querySelectorAll('.quiz2');

    quizOne.forEach((item) => {
      item.addEventListener('click', function() {
        this.setState({quiz: 1});
      }.bind(this));
    });

    quizTwo.forEach((item) => { 
      item.addEventListener('click', function() {
        this.setState({quiz: 2});
      }.bind(this));
    });

  }

  renderChoices() {
    return (
      <div className="container short">
        <br/>
        <h1 className="title">Choose a Quiz</h1>
        <div className="row">
          <div className="card quiz1">
            <h1 className="title">Quiz 1</h1>
          </div>
          <br/>

          <div className="card quiz2">
          <h1 className="title">Quiz 2</h1>
          </div>
      </div>
      </div>
    );
  }

  renderQuiz1() {
    return (
      <div className="container med">
        <br/>
        <LongQuiz 
          width="100%"
          quiz={quiz}
          shuffle={false}
          showInstantFeedback={true}
          continueTillCorrect={false}
          //onComplete={setQuizResult}
        />
      </div>
    );
  }

  renderQuiz2() {
    return (
      <div className="container short">
        <br/>
      <QuizGame />
      </div>
    );
  }

  render() {
    return (
      <>
      {this.state.quiz===0 ? this.renderChoices() : (this.state.quiz===1 ? this.renderQuiz1() : this.renderQuiz2())}
      </>
    )
  }
};

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

class GraphImage extends Component {
  render() {
    return (
      <div className="App"><Graph /></div>
    )
  }
}

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: 0,
    };
  }

  componentDidMount() {
    const detail = document.querySelector('.detail');
    const detailTitle = document.querySelector('.detail-title');
    const detailBody = document.querySelector('.detail-body');
    const graphItem = document.querySelector('.graphItem');
    const nonGraphItem = document.querySelectorAll('.nonGraphItem');
    const masterItems = document.querySelectorAll('.master-item');

    const terms = [
      {category: 'Antibody Test', text: 'Some text', img: '', graph: ''},
      {category: 'Asymptomatic', text: 'Some text', img: '', graph: ''},
      {category: 'Bacteria', text: 'Some text', img: '', graph: ''},
      {category: 'COVID-19', text: 'Some text', img: '', graph: ''},
      {category: 'Deadliness', text: 'Some text', img: '', graph: ''},
      {category: 'Disease', text: 'Some text', img: '', graph: ''},
      {category: 'Epidemic', text: 'Some text', img: '', graph: ''},
      {category: 'False Negative/Positive', text: 'Some text', img: '', graph: ''},
      {category: 'Herd immunity', text: 'Some text', img: '', graph: ''},
      {category: 'ICU', text: 'Some text', img: '', graph: ''},
      {category: 'Immunity', text: 'Some text', img: '', graph: ''},
      {category: 'Infectiousness', text: 'Some text', img: '', graph: ''},
      {category: 'Pathogen', text: 'Some text', img: '', graph: ''},
      {category: 'Placebo', text: 'Some text', img: '', graph: ''},
      {category: 'Protein', text: 'Some text', img: '', graph: ''},
      {category: 'Respiration', text: 'Some text', img: '', graph: ''},
      {category: 'SARS-CoV-2', text: 'Some text', img: '', graph: ''},
      {category: 'Spike protein', text: 'Some text', img: '', graph: ''},
      {category: 'Vaccine', text: 'A vaccine is a biological preparation that provides active acquired immunity to a particular infectious disease. A vaccine typically contains an agent that resembles a disease-causing microorganism and is often made from weakened or killed forms of the microbe, its toxins, or one of its surface proteins.', img: '', graph: 'GraphImage'},
      {category: 'Virus', text: 'Some text', img: '', graph: ''}
    ];

    graphItem.addEventListener('click', function() {
      this.setState({graph: 1});
    }.bind(this));

    nonGraphItem.forEach((item) => {
      item.addEventListener('click', function() {
        this.setState({graph: 0});
      }.bind(this));
    });

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

  renderNone() {
    return (
      <div></div>
    );
  }

  renderGraph() {
    return (
      <GraphImage />
    );
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
            <div className="master-item nonGraphItem active">Antibody Test</div>
            <div className="master-item nonGraphItem">Asymptomatic</div>
            <div className="master-item nonGraphItem">Bacteria</div>
            <div className="master-item nonGraphItem">COVID-19</div>
            <div className="master-item nonGraphItem">Deadliness</div>
            <div className="master-item nonGraphItem">Disease</div>
            <div className="master-item nonGraphItem">Epidemic</div>
            <div className="master-item nonGraphItem">False Negative/Positive</div>
            <div className="master-item nonGraphItem">Herd immunity</div>
            <div className="master-item nonGraphItem">ICU</div>
	          <div className="master-item nonGraphItem">Immunity</div>
            <div className="master-item nonGraphItem">Infectiousness</div>
            <div className="master-item nonGraphItem">Pathogen</div>
	          <div className="master-item nonGraphItem">Placebo</div>
            <div className="master-item nonGraphItem">Protein</div>
            <div className="master-item nonGraphItem">Respiration</div>
            <div className="master-item nonGraphItem">SARS-CoV-2</div>
            <div className="master-item nonGraphItem">Spike protein</div>
            <div className="master-item graphItem">Vaccine</div>
            <div className="master-item nonGraphItem">Virus</div>
          </div>
          <div className="coll-9 detail">
            <button id="back" className="hidden-md" onClick={back}>Back</button>
            <h1 className="detail-title text-center">Antibody Test</h1>
            <p className="detail-body"></p>
            <div className="detail-graph">
              {this.state.graph===0 ? this.renderNone() : this.renderGraph()}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const About = () => {
  return (
    <div className="container short">
      <br/>
      <h1 className="title">About</h1>
      <div className="ctn"> 
        <p className="detail-sp">This project was created by:
        <ul>
          <li>Dr. Kelly Hallstrom, an assistant professor of microbiology at Saint Rose</li>
          <li>Sharon Lin, a student at MIT</li>
          <li>Philippa Steinberg, a student at UC Berkeley</li>
          <li>Tarun Martheswaran, a high school student from Utah</li>
        </ul><br/>

        All graphics are reproduced with permission from the creator.
        </p>
      </div>
    </div>
  )
};

const Home = () => {
  return (
    <div className="container short">
      <br/>
      <h1 className="title">Welcome!</h1>
      <div className="ctn"> 
        <p className="detail-sp">The COVID-19 Illustrated Project is an initiative to make epidemiology terms easier to digest for the average human. You can play our quiz to test your knowledge of risk factors, find animations of common terms to share with your friends, and read about the latest science surrounding COVID-19.<br/><br/>
        
        This project is funded through the #SciCommMake competition hosted by Sigma Xi, The Scientific Research Honor Society and Science Talk.<br/><br/>
        <center><img alt="" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.maneinsights.com%2Fwp-content%2Fuploads%2F2015%2F12%2FSigma-Xi.png&f=1&nofb=1" width="300px"></img></center>
        </p>
        
      </div>
    </div>
  )
};

export default App;
