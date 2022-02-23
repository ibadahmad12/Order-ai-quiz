import React from "react";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";

import "./styles.css";
import Carousel from "./Carousel";

export default function QuizResult({ challengeQuestion, userAnswers }) {
  return (
    <div className="quiz-results-container">
      <h6>Thanks for Playing</h6>
      <h1>You got 4 out of 5 correct</h1>
      <p>
        We put together research to identify five ways you can improve your
        profitability by making modest improvements to your customer experience.
      </p>
      <div className="share-quiz-container">
        <button>Get the FREE eBook</button>
        <p>Share this quiz</p>
        <div>
          <img src={linkedin} alt="twitter icon" />
          <img src={facebook} alt="twitter icon" />
          <img src={twitter} alt="twitter icon" />
        </div>
      </div>
      <div className="carousel-wrapper">
        <Carousel
          challengeQuestion={challengeQuestion}
          userAnswers={userAnswers}
        />
      </div>
    </div>
  );
}
