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
import antibody from './img/antibody.png';
import antibodyTest from './img/antibodyTest.png';
import asymptomatic from './img/asymptomatic.png';
import bacterium from './img/bacterium.png';
import coronavirus from './img/coronavirus.png';
import covid from './img/COVID19.png';
import deadliness from './img/deadliness.png';
import disease from './img/disease.png';
import dna from './img/DNA.png';
import epidemic from './img/epidemic.png';
import falseNeg from './img/falsenegative.png';
// import herdImmunity from './img/herdImmunity.png';
import host from './img/host.png';
import icu from './img/icu.png';
import immuneSystem from './img/immunesystem.png';
import immunity from './img/immunity.gif';
import infectiousness from './img/infectiousness.png';
import mutation from './img/mutation.png';
import pathogen from './img/pathogens.png';
import placebo from './img/placebo.png';
import protein from './img/protein.png';
import respiration from './img/respiration.png';
import sars from './img/sars.png';
import spikeProtein from './img/spikeprotein.png';
import treatment from './img/treatment.png';
import vaccine from './img/vaccine.png';
import virus from './img/viruses.png';
import virusTest from './img/virustest.png';

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
      image: '',
    };
  }

  componentDidMount() {
    const detail = document.querySelector('.detail');
    const detailTitle = document.querySelector('.detail-title');
    const detailBody = document.querySelector('.detail-body');
    const masterItems = document.querySelectorAll('.master-item');
    const antibodyElem = document.querySelector('.antibody-div');
    const antibodyTestElem = document.querySelector('.antibodyTest-div');
    const asymptomaticElem = document.querySelector('.asymptomatic-div');
    const bacteriumElem = document.querySelector('.bacterium-div');
    const coronavirusElem = document.querySelector('.coronavirus-div');
    const covidElem = document.querySelector('.covid-div');
    const deadlinessElem = document.querySelector('.deadliness-div');
    const diseaseElem = document.querySelector('.disease-div');
    const dnaElem = document.querySelector('.dna-div');
    const epidemicElem = document.querySelector('.epidemic-div');
    const falseNegElem = document.querySelector('.falseNeg-div');
    const herdImmunityElem = document.querySelector('.herdImmunity-div');
    const hostElem = document.querySelector('.host-div');
    const icuElem = document.querySelector('.icu-div');
    const immuneSystemElem = document.querySelector('.immuneSystem-div');
    const immunityElem = document.querySelector('.immunity-div');
    const infectiousnessElem = document.querySelector('.infectiousness-div');
    const mutationElem = document.querySelector('.mutation-div');
    const pathogenElem = document.querySelector('.pathogen-div');
    const placeboElem = document.querySelector('.placebo-div');
    const proteinElem = document.querySelector('.protein-div');
    const respirationElem = document.querySelector('.respiration-div');
    const sarsElem = document.querySelector('.sars-div');
    const spikeProteinElem = document.querySelector('.spikeProtein-div');
    const treatmentElem = document.querySelector('.treatment-div');
    const vaccineElem = document.querySelector('.vaccine-div');
    const virusElem = document.querySelector('.virus-div');
    const virusTestElem = document.querySelector('.virusTest-div');

    const terms = [
      {category: 'Antibody', text: 'Antibodies are proteins made by white blood cells called B-cells. Antibodies help other cells in the immune system find and attack pathogens. They have a distinct Y-shaped appearance.', img: "antibodyPic", graph: ''},
      {category: 'Antibody Test', text: 'This is a diagnostic test that examines if someone was exposed to a pathogen. It can show evidence of past exposure even if the person is not currently sick. It works by detecting antibodies that were made during the infection. Because antibodies stay in the body after an infection is gone, an antibody test is not reliable for diagnosing a current infection.', img: 'antibodyTest', graph: ''},
      {category: 'Asymptomatic', text: 'The state of having a disease but showing no symptoms of it. Asymptomatic people who are carrying infectious diseases may still be able to pass the infection onto others.', img: 'asymptomatic', graph: ''},
      {category: 'Bacterium', text: 'Each bacterium is a single, living cell. Many bacteria are harmless, but some are pathogens. Infections caused by bacteria can be treated with antibiotics, but can not be treated with antivirals. Vaccines can prevent some infections caused by bacteria.', img: 'bacterium', graph: ''},
      {category: 'Coronavirus', text: 'Coronaviruses are types of viruses that have a unique pattern of proteins on their surface, and they use these proteins to attach to cells. Under a microscope, these proteins look like a crown around the virus, which is why we call these viruses coronaviruses: "corona" is Latin for crown. Some coronaviruses cause very mild illnesses while others, like SARS-CoV, MERS-CoV, and SARS-CoV-2 are associated with more severe illnesses.', img: 'coronavirus', graph: ''},
      {category: 'COVID-19', text: 'This is the current name for the respiratory illness caused by SARS-CoV-2. It stands for Coronavirus Disease 2019. Current COVID-19 infections are diagnosed through tests that look specifically for the virus, while past infections are diagnosed through antibody tests. COVID-19 is generally associated with respiratory symptoms, but non-respiratory symptoms may also occur.', img: 'covid', graph: ''},
      {category: 'Deadliness', text: 'The measure of the ability of something to cause death. The deadliness of a pathogen is determined by the fatality rate, or rate at which infected individuals die from the infection.', img: 'deadliness', graph: ''},
      {category: 'Disease', text: 'A general state of being unwell as a result of a condition other than an injury. Diseases may be communicable (spread from person to person) or non-communicable, or acute (short-lasting) or chronic (long-term). Diseases are generally associated with specific symptoms that can be used for diagnoses.', img: 'disease', graph: ''},
      {category: 'DNA', text: 'A type of genomic material that is passed from one organism to another. It contains all of the information needed for the organism to remain alive, and is passed down to future generations. Although viruses are not technically alive like cells, some have genomes that are made of DNA.', img: 'dna', graph: ''},
      {category: 'Epidemic', text: 'An outbreak of a disease that is restricted to a particular region.', img: '', graph: ''},
      {category: 'False Negative/Positive', text: 'No diagnostic test is 100% accurate all of the time. A false negative test result is one that comes back negative when it should have come back positive. A false positive test result is one that comes back positive when it should have come back negative. Different factors can affect whether a particular test is more or less likely to return false results.', img: 'falseneg', graph: ''},
      {category: 'Herd immunity', text: 'Herd immunity is when a majority of the people in a community are immune to an infection. This stops pathogens from spreading throughout a community, which means even people without immunity are protected. It is acquired through infection or vaccination.', img: 'herdimmunity', graph: ''},
      {category: 'Host', text: '', img: 'host', graph: ''},
      {category: 'ICU', text: 'Intensive care unit. This is a specific area of a hospital that provides critical care to patients.', img: 'icu', graph: ''},
      {category: 'Immune System', text: '', img: 'immunesystem', graph: ''},
      {category: 'Immunity', text: 'Immunity is protection a person has from a pathogenic illness. This protection relies on the immune system knowing how to fight off the pathogen that causes the illness. Immunity is acquired through infection or through vaccination.', img: 'immunity', graph: ''},
      {category: 'Infectiousness', text: 'How easily a person can transmit an infection to another individual. The level of infectiousness for a particular pathogen depends on a number of factors including the number of bacteria or viruses that are needed to cause an infection and the symptoms an infected person has. ', img: 'infectiousness', graph: ''},
      {category: 'Mutation', text: '', img: 'mutation', graph: ''},
      {category: 'Pathogen', text: 'Pathogens are microbes that cause an illness. Pathogens include bacteria, viruses, fungi, and parasites.', img: 'pathogen', graph: ''},
      {category: 'Placebo', text: 'A treatment given to a person that is not expected to have a clinically-proven therapeutic benefit. Placebos are often used as a control when new drugs are tested.', img: 'placebo', graph: ''},
      {category: 'Protein', text: 'A type of biological molecule that completes a variety of cell processes that are critical to life. Proteins can be found inside cells, on the surface of cells, and make up different kinds of structures including nails, hair, and skin. Many types of proteins are also found in plants, bacteria, and even viruses.', img: 'protein', graph: ''},
      {category: 'Respiration', text: 'In terms of the human body, respiration is defined as the movement of oxygen from the environment into body tissues and the release of carbon dioxide from body tissues into the environment. It can also be thought as the act of inhaling oxygen and exhaling carbon dioxide.', img: 'respiration', graph: ''},
      {category: 'SARS-CoV-2', text: 'This is the name currently given to the virus that causes COVID-19 disease. It stands for Severe Acute Respiratory Syndrome Coronavirus 2. ', img: 'sars', graph: ''},
      {category: 'Spike protein', text: 'This is a type protein found on the surface of some types of viruses. If it is present on a virus, a spike protein helps that virus attach to cells.', img: 'spikeprotein', graph: ''},
      {category: 'Treatment', text: 'A course of action that is taken to relieve someone of the symptoms associated with a disease. ', img: 'treatment', graph: ''},
      {category: 'Vaccine', text: 'A vaccine is a biological preparation that provides active acquired immunity to a particular infectious disease. A vaccine typically contains an agent that resembles a disease-causing microorganism and is often made from weakened or killed forms of the microbe, its toxins, or one of its surface proteins.', img: 'vaccine', graph: 'GraphImage'},
      {category: 'Virus', text: 'Non-living pathogen that consists of a genome, such as DNA or RNA, surrounded by proteins that form a layer called a capsid. Some viruses also have a membrane and spike proteins around the capsid similar to a cell membrane, although viruses themselves are not cells. Viruses must find and infect cells in order to reproduce.', img: 'virus', graph: ''},
      {category: 'Virus Test', text: 'A test that determines if someone is currently sick with a virus. The test looks for the presence of the virus, such as virus proteins or virus genome, in patient samples.', img: 'virustest', graph: ''}
    ];

    antibodyElem.addEventListener('click', function() {
      this.setState({image: 'antibody'});
    }.bind(this));
    antibodyTestElem.addEventListener('click', function() {
      this.setState({image: 'antibodyTest'});
    }.bind(this));
    asymptomaticElem.addEventListener('click', function() {
      this.setState({image: 'asymptomatic'});
    }.bind(this));
    bacteriumElem.addEventListener('click', function() {
      this.setState({image: 'bacterium'});
    }.bind(this));
    coronavirusElem.addEventListener('click', function() {
          this.setState({image: 'coronavirus'});
    }.bind(this));
    covidElem.addEventListener('click', function() {
          this.setState({image: 'covid'});
    }.bind(this));
    deadlinessElem.addEventListener('click', function() {
          this.setState({image: 'deadliness'});
    }.bind(this));
    diseaseElem.addEventListener('click', function() {
          this.setState({image: 'disease'});
    }.bind(this));
    dnaElem.addEventListener('click', function() {
          this.setState({image: 'dna'});
    }.bind(this));
    epidemicElem.addEventListener('click', function() {
          this.setState({image: 'epidemic'});
    }.bind(this));
    falseNegElem.addEventListener('click', function() {
          this.setState({image: 'falseNeg'});
    }.bind(this));
    herdImmunityElem.addEventListener('click', function() {
          this.setState({image: 'herdImmunity'});
    }.bind(this));
    hostElem.addEventListener('click', function() {
          this.setState({image: 'host'});
    }.bind(this));
    icuElem.addEventListener('click', function() {
          this.setState({image: 'icu'});
    }.bind(this));
    immuneSystemElem.addEventListener('click', function() {
          this.setState({image: 'immuneSystem'});
    }.bind(this));
    immunityElem.addEventListener('click', function() {
          this.setState({image: 'immunity'});
    }.bind(this));
    infectiousnessElem.addEventListener('click', function() {
          this.setState({image: 'infectiousness'});
    }.bind(this));
    mutationElem.addEventListener('click', function() {
          this.setState({image: 'mutation'});
    }.bind(this));
    pathogenElem.addEventListener('click', function() {
          this.setState({image: 'pathogen'});
    }.bind(this));
    placeboElem.addEventListener('click', function() {
          this.setState({image: 'placebo'});
    }.bind(this));
    proteinElem.addEventListener('click', function() {
          this.setState({image: 'protein'});
    }.bind(this));
    respirationElem.addEventListener('click', function() {
          this.setState({image: 'respiration'});
    }.bind(this));
    sarsElem.addEventListener('click', function() {
          this.setState({image: 'sars'});
    }.bind(this));
    spikeProteinElem.addEventListener('click', function() {
          this.setState({image: 'spikeProtein'});
    }.bind(this));
    treatmentElem.addEventListener('click', function() {
          this.setState({image: 'treatment'});
    }.bind(this));
    vaccineElem.addEventListener('click', function() {
          this.setState({image: 'vaccine'});
    }.bind(this));
    virusElem.addEventListener('click', function() {
          this.setState({image: 'virus'});
    }.bind(this));
    virusTestElem.addEventListener('click', function() {
          this.setState({image: 'virusTest'});
    }.bind(this));

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
            <div className="master-item active antibody-div">Antibody</div>
            <div className="master-item antibodyTest-div">Antibody Test</div>
            <div className="master-item asymptomatic-div">Asymptomatic</div>
            <div className="master-item bacterium-div">Bacterium</div>
            <div className="master-item coronavirus-div">Coronavirus</div>
            <div className="master-item covid-div">COVID-19</div>
            <div className="master-item deadliness-div">Deadliness</div>
            <div className="master-item disease-div">Disease</div>
            <div className="master-item dna-div">DNA</div>
            <div className="master-item epidemic-div">Epidemic</div>
            <div className="master-item falseNeg-div">False Negative/Positive</div>
            <div className="master-item herdImmunity-div">Herd immunity</div>
            <div className="master-item host-div">Host</div>
            <div className="master-item icu-div">ICU</div>
            <div className="master-item immuneSystem-div">Immune System</div>
	          <div className="master-item immunity-div">Immunity</div>
            <div className="master-item infectiousness-div">Infectiousness</div>
            <div className="master-item mutation-div">Mutation</div>
            <div className="master-item pathogen-div">Pathogen</div>
	          <div className="master-item placebo-div">Placebo</div>
            <div className="master-item protein-div">Protein</div>
            <div className="master-item respiration-div">Respiration</div>
            <div className="master-item sars-div">SARS-CoV-2</div>
            <div className="master-item spikeProtein-div">Spike protein</div>
            <div className="master-item treatment-div">Treatment</div>
            <div className="master-item vaccine-div">Vaccine</div>
            <div className="master-item virus-div">Virus</div>
            <div className="master-item virusTest-div">Virus Test</div>
          </div>
          <div className="coll-9 detail">
            <button id="back" className="hidden-md" onClick={back}>Back</button>
            <h1 className="detail-title text-center"></h1>
            <p className="detail-body"></p>
            <center>
            {this.state.image==="antibody" ? 
                <img src={antibody} width="500px" alt=""/> : this.state.image==="antibodyTest" ?
                <img src={antibodyTest} width="500px" alt=""/> : this.state.image==="asymptomatic" ?
                <img src={asymptomatic} width="500px" alt=""/> : this.state.image==="bacterium" ?
                <img src={bacterium} width="500px" alt=""/> : this.state.image==="coronavirus" ? 
                <img src={coronavirus} width="500px" alt=""/> : this.state.image==="covid" ?
                <img src={covid} width="500px" alt=""/> : this.state.image==="deadliness" ?
                <img src={deadliness} width="500px" alt=""/> : this.state.image==="disease" ?
                <img src={disease} width="500px" alt=""/> : this.state.image==="dna" ?
                <img src={dna} width="500px" alt=""/> : this.state.image==="epidemic" ?
                <img src={epidemic} width="500px" alt=""/> : this.state.image==="falseNeg" ?
                <img src={falseNeg} width="500px" alt=""/> : this.state.image==="host" ?
                // <img src={herdImmunity} width="500px" alt=""/> : this.state.image==="antibodyTest" ?
                <img src={host} width="500px" alt=""/> : this.state.image==="icu" ?
                <img src={icu} width="500px" alt=""/> : this.state.image==="immuneSystem" ?
                <img src={immuneSystem} width="500px" alt=""/> : this.state.image==="immunity" ?
                <img src={immunity} width="500px" alt=""/> : this.state.image==="infectiousness" ?
                <img src={infectiousness} width="500px" alt=""/> : this.state.image==="mutation" ?
                <img src={mutation} width="500px" alt=""/> : this.state.image==="pathogen" ?
                <img src={pathogen} width="500px" alt=""/> : this.state.image==="placebo" ?
                <img src={placebo} width="500px" alt=""/> : this.state.image==="protein" ?
                <img src={protein} width="500px" alt=""/> : this.state.image==="respiration" ?
                <img src={respiration} width="500px" alt=""/> : this.state.image==="sars" ?
                <img src={sars} width="500px" alt=""/> : this.state.image==="spikeProtein" ?
                <img src={spikeProtein} width="500px" alt=""/> : this.state.image==="treatment" ?
                <img src={treatment} width="500px" alt=""/> : this.state.image==="vaccine" ?
                <img src={vaccine} width="500px" alt=""/> : this.state.image==="virus" ?
                <img src={virus} width="500px" alt=""/> : this.state.image==="virusTest" ?
                <img src={virusTest} width="500px" alt=""/> : null
            }
            </center>
            {/* {this.state.graph===0 ? this.renderNone() : this.renderGraph()} */}
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
