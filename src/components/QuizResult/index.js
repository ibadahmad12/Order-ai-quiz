import React, { useLayoutEffect, useState } from "react";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";

import "./styles.css";
import Carousel from "./Carousel";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

export default function QuizResult({ challengeQuestion, userAnswers }) {
  const [userScore, setUserScore] = useState(0);

  useLayoutEffect(() => {
    let score = 0;
    challengeQuestion.map((quizCard, index) => {
      if (quizCard?.answer === userAnswers[index]) {
        score += 1;
      }
      setUserScore(score);
      return userScore;
    });
  }, []);

  return (
    <div className="quiz-results-container">
      <h6>Thanks for Playing</h6>
      <h1>
        You got {userScore} out of {challengeQuestion.length} correct
      </h1>
      <p>
        We put together research to identify five ways you can improve your
        profitability by making modest improvements to your customer experience.
      </p>
      <div className="share-quiz-container">
        <button>Get the FREE eBook</button>
        <p>Share this quiz</p>
        <div style={{ display: "flex" }} className="social-buttons">
          <FacebookShareButton
            url={"https://order-ai-quiz.netlify.app"}
            quote="Hungerrush Quiz"
          >
            <img src={facebook} alt="facebook icon" />
          </FacebookShareButton>
          <TwitterShareButton
            url={"https://order-ai-quiz.netlify.app"}
            title="Hungerrush Quiz"
          >
            <img src={twitter} alt="twitter icon" />
          </TwitterShareButton>
          <LinkedinShareButton
            url={"https://order-ai-quiz.netlify.app"}
            title="Hungerrush Quiz"
          >
            <img src={linkedin} alt="twitter icon" className="linkedin-icon" />
          </LinkedinShareButton>
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
