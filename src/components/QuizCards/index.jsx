import React from "react";
import "./styles.css";
import true_logo from "../../assets/images/true.png";
import false_logo from "../../assets/images/false.png";

// import bs from "../../assets/icons/media/bs.png";
// import noBS from "../../assets/icons/media/0-bs.png";

export default function QuizCard({ id, statementText }) {
  const getProgerss = () => {
    if (id === 1) return "24%";
    else if (id === 2) return "40%";
    else if (id === 3) return "60%";
    else if (id === 4) return "80%";
    else return "100%";
  };

  return (
    <div className="quiz-card-container">
      <div className="choice-images">
        <img src={true_logo} alt="no bs img" className="no-bs-image" />
        <img src={false_logo} alt="bs img" className="bs-image" />
      </div>
      <div className="overlay-container">
        <div className="progress" style={{ width: getProgerss() }}></div>
      </div>
      <h4>Statement {id} of 4</h4>
      <h1>{statementText}</h1>
    </div>
  );
}
