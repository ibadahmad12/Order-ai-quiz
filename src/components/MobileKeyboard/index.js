import React, { useState } from "react";
import "./style.css";
import ArrowUp from "../../assets/images/Arrow.png";
import Backspace from "../../assets/images/backspace.png";

const MobileKeyboard = ({
  handleKeyboardButtonClick,
  handleBackspace,
  handleSpaceClick,
  handleSendClick,
  disableSendButton,
}) => {
  const [capslockEnabled, setCapslockEnabled] = useState(false);
  const [displayNumbers, setDisplayNumbers] = useState(false);
  const [displaySymbols, setDisplaySymbols] = useState(false);

  const toggleNumberDisplay = () => setDisplayNumbers(!displayNumbers);
  const toggleCapslock = () => setCapslockEnabled(!capslockEnabled);
  const toggleSymbols = () => setDisplaySymbols(!displaySymbols);

  const renderSymbols = () => {
    return (
      <>
        <div className="buttons-row">
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            [
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            ]
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {"{"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {"}"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {"#"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            %
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            ^
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            *
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            +
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            =
          </div>
        </div>

        <div className="buttons-row">
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            -
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            \
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            |
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            ~
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {"<"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {">"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            €
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            $
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            ¥
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            •
          </div>
        </div>

        <div className="buttons-row">
          <div
            className="keyboard-button symbol-button-wrap"
            onClick={toggleSymbols}
          >
            123
          </div>
          <div className="keyvoard-symbol-wrap">
            <div
              className="keyboard-button"
              onClick={handleKeyboardButtonClick}
            >
              .
            </div>
            <div
              className="keyboard-button"
              onClick={handleKeyboardButtonClick}
            >
              ,
            </div>
            <div
              className="keyboard-button"
              onClick={handleKeyboardButtonClick}
            >
              ?
            </div>
            <div
              className="keyboard-button"
              onClick={handleKeyboardButtonClick}
            >
              !
            </div>
            <div
              className="keyboard-button"
              onClick={handleKeyboardButtonClick}
            >
              !
            </div>
            <div
              className="keyboard-button"
              onClick={handleKeyboardButtonClick}
            >
              '
            </div>
          </div>
          <div
            className="keyboard-button grey-background"
            onClick={handleBackspace}
          >
            <img src={Backspace} alt="Backspace" className="backspace-button" />
          </div>
        </div>
      </>
    );
  };

  const renderNumbers = () => {
    return (
      <>
        <div className="buttons-row">
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            1
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            2
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            3
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            4
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            5
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            6
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            7
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            8
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            9
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            0
          </div>
        </div>

        <div className="buttons-row">
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            -
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            /
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            :
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            ;
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            (
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            )
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            £
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {"&"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            @
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            "
          </div>
        </div>

        <div className="buttons-row">
          <div
            className="keyboard-button symbol-button-wrap"
            onClick={toggleSymbols}
          >
            #+=
          </div>
          <div className="keyvoard-symbol-wrap">
            <div
              className="keyboard-button"
              onClick={handleKeyboardButtonClick}
            >
              .
            </div>
            <div
              className="keyboard-button"
              onClick={handleKeyboardButtonClick}
            >
              ,
            </div>
            <div
              className="keyboard-button"
              onClick={handleKeyboardButtonClick}
            >
              ?
            </div>
            <div
              className="keyboard-button"
              onClick={handleKeyboardButtonClick}
            >
              !
            </div>
            <div
              className="keyboard-button"
              onClick={handleKeyboardButtonClick}
            >
              !
            </div>
            <div
              className="keyboard-button"
              onClick={handleKeyboardButtonClick}
            >
              '
            </div>
          </div>
          <div
            className="keyboard-button grey-background"
            onClick={handleBackspace}
          >
            <img src={Backspace} alt="Backspace" className="backspace-button" />
          </div>
        </div>
      </>
    );
  };

  const renderAlphabets = () => {
    return (
      <>
        <div className="buttons-row">
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "Q" : "q"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "W" : "w"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "E" : "e"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "R" : "r"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "T" : "t"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "Y" : "y"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "U" : "u"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "I" : "i"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "O" : "o"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "P" : "p"}
          </div>
        </div>

        <div className="buttons-row button-second-row">
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "A" : "a"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "S" : "s"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "D" : "d"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "F" : "f"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "G" : "g"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "H" : "h"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "J" : "j"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "K" : "k"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "L" : "l"}
          </div>
        </div>

        <div className="buttons-row">
          <div
            className="keyboard-button arrow-up-button-wrap"
            onClick={toggleCapslock}
          >
            <img src={ArrowUp} alt="ArrowUp" className="arrow-up" />
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "Z" : "z"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "X" : "x"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "C" : "c"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "V" : "v"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "B" : "b"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "N" : "n"}
          </div>
          <div className="keyboard-button" onClick={handleKeyboardButtonClick}>
            {capslockEnabled ? "M" : "m"}
          </div>
          <div
            className="keyboard-button grey-background"
            onClick={handleBackspace}
          >
            <img src={Backspace} alt="Backspace" className="backspace-button" />
          </div>
        </div>
      </>
    );
  };

  const renderKyboard = () => {
    if (displayNumbers) {
      if (displaySymbols) return renderSymbols();
      else return renderNumbers();
    } else return renderAlphabets();
  };

  return (
    <>
      {renderKyboard()}

      <div className="buttons-row">
        <div className="number-button" onClick={toggleNumberDisplay}>
          {displayNumbers ? "ABC" : "123"}
        </div>
        <div className="space-button" onClick={handleSpaceClick}>
          space
        </div>
        <button
          className="send-button"
          onClick={handleSendClick}
          disabled={disableSendButton}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default MobileKeyboard;
