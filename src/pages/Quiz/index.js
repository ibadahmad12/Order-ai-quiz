import React from "react";
import "./styles.css";
import TitleBar from "../../components/TitleBar";
import bakcground from "../../assets/images/background@2x.png";
import QuizWrapper from "../../components/QuizWrapper/index";

export default function QuizQuestions() {
  return (
    <>
      <TitleBar />
      <div className="quiz-questions-container">
        <div className="quiz-hero-image">
          <img src={bakcground} alt="background img" />
        </div>
        <div className="quiz-cards-container">
          <QuizWrapper />
        </div>
      </div>
    </>
  );
}
