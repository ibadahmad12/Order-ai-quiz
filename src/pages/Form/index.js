import React from "react";
import "./styles.css";
import TitleBar from "../../components/TitleBar";
import bakcground from "../../assets/images/background@2x.png";
import FormWrapper from "../../components/FormWrapper";

export default function Form() {
  return (
    <>
      <TitleBar />
      <div className="form-container">
        <div className="quiz-hero-image">
          <img src={bakcground} alt="background img" />
        </div>
        <div className="form-wrapper-container">
          <FormWrapper />
        </div>
      </div>
    </>
  );
}
