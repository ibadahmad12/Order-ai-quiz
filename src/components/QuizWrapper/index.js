import React, { useState, useEffect } from "react";

import "./styles.css";

import QuizCard from "../QuizCards";
import { questions } from "./Text";
import QuizResult from "../QuizResult";

export default function QuizWrapper() {
  const [challengeQuestion, setChallengeQuestions] = useState(questions);
  const [cardsCounter, setCardsCounter] = useState(0);
  const [showResults, isShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [_, isSwiped] = useState(false);

  useEffect(() => {
    // var randomQuestions = [];
    // var indexes = [];
    // while (randomQuestions.length < 5) {
    //   var r = Math.floor(Math.random() * 13) + 1;
    //   if (indexes.indexOf(r) === -1) {
    //     randomQuestions.push(questions[r]);
    //     indexes.push(r);
    //   }
    // }
    // setChallengeQuestions(randomQuestions);
  }, []);

  useEffect(() => {
    if (cardsCounter === 5) {
      setTimeout(() => {
        isShowResults(true);
      }, 1000);
    }
  }, [cardsCounter]);

  useEffect(() => {
    let touchstartX = 0;
    let touchendX = 0;

    const slider = document.querySelector(".quiz-questions-wrapper");

    function handleGesture() {
      if (touchendX < touchstartX) {
        handleUserChoice("cross");
        isSwiped(true);
      }
      if (touchendX > touchstartX) {
        handleUserChoice("tick");
        isSwiped(true);
      }
    }

    slider?.addEventListener("touchstart", (e) => {
      touchstartX = e.changedTouches[0].screenX;
    });

    slider?.addEventListener("touchend", (e) => {
      touchendX = e.changedTouches[0].screenX;
      handleGesture();
    });
  });

  const handleUserChoice = (type) => {
    const [el] = document.getElementsByClassName(`card-${cardsCounter + 1}`);
    removeScaling(el);
    if (type === "cross") {
      el?.classList.add("hide-wrong-choice");
      setUserAnswers((prevAnswers) => [...prevAnswers, false]);
      document
        .querySelector(
          `.card-${
            cardsCounter + 1
          } .quiz-card-container .choice-images .bs-image`
        )
        ?.classList.add("fade-in");
    } else {
      el?.classList.add("hide-correct-choice");
      setUserAnswers((prevAnswers) => [...prevAnswers, true]);
      document
        .querySelector(
          `.card-${
            cardsCounter + 1
          } .quiz-card-container .choice-images .no-bs-image`
        )
        ?.classList.add("fade-in");
    }
    setCardsCounter(cardsCounter + 1);
    scaleUpCards(cardsCounter + 1);
  };

  const scaleUpCards = (counter) => {
    const [card2] = document.getElementsByClassName(`card-2`);
    const [card3] = document.getElementsByClassName(`card-3`);
    const [card4] = document.getElementsByClassName(`card-4`);
    const [card5] = document.getElementsByClassName(`card-5`);
    if (counter === 1) {
      card2?.classList.add("scale-to-100");
      card3?.classList.add("scale-to-90");
      card4?.classList.add("scale-to-80");
      card5?.classList.add("scale-to-70");
    } else if (counter === 2) {
      card3?.classList.remove("scale-to-90");
      card3?.classList.add("scale-to-100");
      card4?.classList.remove("scale-to-80");
      card4?.classList.add("scale-to-90");
      card5?.classList.remove("scale-to-70");
      card5?.classList.add("scale-to-80");
    } else if (counter === 3) {
      card4?.classList.remove("scale-to-90");
      card4?.classList.add("scale-to-100");
      card5?.classList.remove("scale-to-80");
      card5?.classList.add("scale-to-90");
    } else if (counter === 4) {
      card5?.classList.remove("scale-to-90");
      card5?.classList.add("scale-to-100");
    }
  };

  const removeScaling = (el) => {
    el?.classList.remove("scale-to-100");
    el?.classList.remove("scale-to-90");
    el?.classList.remove("scale-to-80");
  };

  if (showResults) {
    return (
      <QuizResult
        challengeQuestion={challengeQuestion}
        userAnswers={userAnswers}
      />
    );
  }

  return (
    <>
      <div className="quiz-questions-wrapper">
        <div className="cards-wrapper">
          {challengeQuestion?.map(({ id, question }, index) => {
            return (
              <div className={`card-${index + 1}`} key={index}>
                <QuizCard id={index + 1} statementText={question} />
              </div>
            );
          })}
        </div>
        <div className="control-container">
          <div className="control-buttons">
            <button
              className="true-button"
              onClick={() => handleUserChoice("cross")}
            >
              False
            </button>
            <button
              className="false-button"
              onClick={() => handleUserChoice("tick")}
            >
              True
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
