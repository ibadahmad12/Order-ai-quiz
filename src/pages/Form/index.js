import React from "react";
import "./styles.css";
import TitleBar from "../../components/TitleBar";
import bakcground from "../../assets/images/background@2x.webp";
import FormWrapper from "../../components/FormWrapper";

export default function Form() {
  return (
    <>
      <TitleBar />
      <div className="form-container">
        <div className="quiz-hero-image">
          <img src={bakcground} alt="background img" />
        </div>
        <div className="image-overlay" />

        <div className="form-wrapper-container">
          <FormWrapper />
        </div>
      </div>
    </>
  );
}
