import React from "react";
import "./styles.css";
import bakcground from "../../assets/images/background@2x.png";
import TitleBar from "../../components/TitleBar/index";
import { useNavigate } from "react-router-dom";

export default function QuizLanding() {
  const navigate = useNavigate();
  return (
    <>
      <TitleBar />
      <div className="quiz-landing-container">
        <div className="quiz-hero-image">
          <img src={bakcground} alt="background img" />
        </div>

        <div className="quiz-content-container">
          <h6>Test your Knowledge</h6>
          <h1>Restaurant Customer Experience</h1>
          <p>
            Optimizing your restaurant's customer experience can help you reap
            big rewards. Answer these five true/false questions to find out why.
          </p>
          <button
            className="start-quiz-button"
            onClick={() => navigate("/quiz")}
          >
            Start the Quiz
          </button>
        </div>
      </div>
    </>
  );
}
