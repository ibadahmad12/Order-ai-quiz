import React, { useState, useEffect, useRef } from "react";
import "./style.css";

import RegistrationPhone from "../../assets/images/registration-phone.png";
import Mic from "../../assets/images/mic@3x.png";
import Simely from "../../assets/images/smileycopy.png";
import Camera from "../../assets/images/camera.png";
import AImage from "../../assets/images/A.png";
import Cloud from "../../assets/images/group-6-copy-8@3x.png";
import CloudEye from "../../assets/images/oval@2x.png";

import CommentLeft from "../../assets/images/Left.png";
import MobileKeyboard from "../MobileKeyboard";
import CreateMessages from "./CreateMessages";

import axios from "axios";
import { IoCaretBackOutline } from "react-icons/io5";
import {
  handleSocketResponse,
  updateHeader,
  handleIframeClosingCloudys,
  handleAPIResponseCloudys,
} from "./_helpers";

const restaurantId = "+15512911234";

const MobilePhone = ({
  phoneNumber,
  firstName,
  socketResponse,
  setSocketResponse,
}) => {
  const [cloudMessage, setCloudMessage] = useState(
    `Hi, ${
      firstName ? firstName : "Michelle"
    }! I’m Cloudie. I'm going to show you how OrderAI works!\nType “HELLO” below and we'll get started!`
  );

  const [blink, setBlink] = useState(false);
  const [message, setMessage] = useState("");
  const [addMessage, setAddMessage] = useState([]);
  const [customerId, _] = useState("+73272376237");
  const [iframe, setIframe] = useState(null);
  const [disableSendButton, setDisableSendButton] = useState(false);
  const [userID, setUserID] = useState(null);
  const addMessageStateRef = useRef();
  addMessageStateRef.current = addMessage;

  useEffect(() => {
    if (
      addMessage.length > 0 &&
      addMessage[addMessage.length - 1].type === "message"
    ) {
      setAddMessage([...addMessage, { text: null, type: "loading" }]);
    }
  }, [addMessage]);

  useEffect(() => {
    const response = handleSocketResponse(socketResponse, userID, firstName);
    if (response?.message) {
      setCloudMessage(response?.message);
    }
    if (response?.paymentComplete === true) {
      setTimeout(() => {
        handlePaymentComplete(socketResponse?.userID);
      }, 5000);
    }
    setSocketResponse(null);
  }, [socketResponse]);

  useEffect(() => {
    setTimeout(() => {
      setBlink(true);
    }, 5000);
  }, []);

  useEffect(() => {
    const el = document.querySelectorAll(
      ".cloud-animation-right-eye,.cloud-animation-left-eye"
    );
    if (!!el.length) {
      el[0].style.webkitAnimation = "none";
      setTimeout(function () {
        el[0].style.webkitAnimation = "";
      }, 10);
      el[1].style.webkitAnimation = "none";
      setTimeout(function () {
        el[1].style.webkitAnimation = "";
      }, 10);
    }
  }, [cloudMessage, blink]);

  const handleKeyboardButtonClick = (e) => {
    setMessage(message.concat(e.target.textContent));
  };

  const handleSpaceClick = () => setMessage(message.concat(" "));
  const handleBackspace = () => setMessage(message.slice(0, -1));

  const handleSendClick = () => {
    if (!message) return;
    setAddMessage([...addMessage, { text: message, type: "message" }]);
    getOrderAPIResponse(message.toLowerCase());
  };

  const getOrderAPIResponse = (message) => {
    setDisableSendButton(true);
    if (message !== "hello" && message !== "menu") {
      setCloudMessage("Easy, right?! Watch while we conﬁrm your order!");
    }
    setMessage("");
    axios
      .post("https://ordradminbk.com/hr360Demo", {
        restaurantId: restaurantId,
        customerId,
        customerMessage: message.toLowerCase(),
      })
      .then(({ data }) => {
        setCloudMessage(handleAPIResponseCloudys(message));

        setNewMessage(data);
        setDisableSendButton(false);
      });
  };

  const setNewMessage = (data) => {
    const newMessage = {
      type: "response",
      text: data?.textResponse,
    };

    let tempArray = [...addMessageStateRef.current];

    if (
      tempArray.length > 0 &&
      tempArray[tempArray.length - 1].type === "loading"
    ) {
      tempArray[tempArray.length - 1].type = "response";
      tempArray[tempArray.length - 1].text = data?.textResponse;
      setAddMessage([...tempArray]);
    } else {
      setAddMessage([...addMessage, newMessage]);
    }
  };

  const updateHeaderImage = () => {
    return updateHeader(iframe);
  };

  const closeIframe = () => {
    setCloudMessage(handleIframeClosingCloudys(iframe));
    setIframe(null);
  };

  const handlePaymentComplete = (sessionUserID) => {
    if (userID && sessionUserID && sessionUserID === userID) {
      setIframe(null);

      setAddMessage((oldArray) => [
        ...oldArray,
        {
          type: "response",
          text: "Payment Approved! Your order has been sent to the store. We will send you an ETA shortly.",
        },
      ]);
      setUserID(null);
    }
  };

  const selectIframe = () => {
    return iframe ===
      "https://ordr-assets.s3.us-east-2.amazonaws.com/hungerrush360.png" ? (
      <img src={iframe} className="order-menu" alt="menu img" />
    ) : (
      <iframe
        src={iframe}
        width="93%"
        height="72%"
        id="iframe"
        title={iframe}
      />
    );
  };

  return (
    <div className="mobile-phone-wrap">
      <div className={iframe ? "menu-message-wrap" : "cloud-message-wrap"}>
        <img src={CommentLeft} alt="CommentLeft" className="cloud-comment" />
        <div>
          {cloudMessage?.split("\n").map((str) => (
            <p>{str}</p>
          ))}
        </div>
      </div>

      {iframe && (
        <div>
          <p className="current-time">
            <br />
            {(new Date().getHours() % 12) + ":" + new Date().getMinutes()}
          </p>
          <p className="close-icon" onClick={closeIframe}>
            <IoCaretBackOutline /> Messages
          </p>
        </div>
      )}

      <div className="cloud-wrap">
        <img src={Cloud} alt="Cloud" className="cloud-image" />
        <img
          src={CloudEye}
          alt="LeftCloudEye"
          className="left-eye cloud-image-eye cloud-animation-left-eye"
        />
        <img
          src={CloudEye}
          alt="RightCloudEye"
          className="right-eye cloud-image-eye cloud-animation-right-eye"
        />
      </div>

      <div className="order-phone-wrap">
        <img
          src={RegistrationPhone}
          alt="RegistrationPhone"
          className="order-phone"
        />
        <img
          src={updateHeaderImage()}
          alt="PhoneHeader"
          className={!iframe ? "order-phone-header" : "menu-phone-header"}
        />

        {iframe ? (
          <div className="iframe-wrapper">{selectIframe()}</div>
        ) : (
          <div>
            <div className="order-phone-text-wrap">
              <CreateMessages
                messages={addMessage}
                setIframe={setIframe}
                setCloudMessage={setCloudMessage}
                setUserID={setUserID}
              />
            </div>

            <div className="text-input-wrap">
              <img src={Camera} alt="Camera" />
              <img src={AImage} alt="AImage" />
              <input
                className="phone-text-input"
                placeholder="Text Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && !disableSendButton && handleSendClick()
                }
              />
            </div>
            <div className="order-phone-buttons-wrap">
              <MobileKeyboard
                handleKeyboardButtonClick={handleKeyboardButtonClick}
                handleBackspace={handleBackspace}
                handleSpaceClick={handleSpaceClick}
                handleSendClick={handleSendClick}
                disableSendButton={disableSendButton}
              />

              <div className="bottom-buttons-wrap">
                <img src={Simely} alt="Simely" className="simely" />
                <hr className="bottuns-bar" />
                <img src={Mic} alt="Mic" className="mic" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobilePhone;
