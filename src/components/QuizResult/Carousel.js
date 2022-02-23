import React from "react";
import Slider from "react-slick";
import { settings } from "./CarouselSettings";
import "./carousel.css";

export default function Carousel({ challengeQuestion, userAnswers }) {
  console.log(challengeQuestion, userAnswers);
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {challengeQuestion.map(({ answer, justification, question }) => {
          return (
            <div className="carousel-item">
              <h6>{answer.toString()} is correct</h6>
              <h4>{question}</h4>
              <p>{justification}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
