import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <h1 className="title">Results</h1>
      <br/>
      <div className="quiz-results">
        Your risk factor to others is <strong>{props.quizResult}</strong>.<br/><br/>

        Resources here<br/><br/>
        <form action="/quiz">
        <button className="playAgain">Play Again</button>
        </form>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
