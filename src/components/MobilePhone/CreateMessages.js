import React, { useEffect } from "react";
import "./style.css";

import greenRight from "../../assets/images/green-right.png";
import grayLeft from "../../assets/images/gray-left.png";
import ChatLoading from "../ChatLoading/ChatLoading";

export default function CreateMessages({
  messages,
  setIframe,
  setCloudMessage,
  setUserID,
}) {
  useEffect(() => {
    const chat_wrapper = document.querySelector(".chat-wrapper");
    chat_wrapper.scrollTop = chat_wrapper.scrollHeight;
  }, [messages]);

  const handleUrlClick = (url) => {
    setUserID(url.slice(-6));
    setIframe(url);
    if (
      url === "https://ordr-assets.s3.us-east-2.amazonaws.com/hungerrush360.png"
    ) {
      setCloudMessage(
        "Once you know what you want, just send your full order in one text message! HINT: If you’ve ordered from there restaurant before, you can quickly reorder by texting 'REPEAT' or 'REPEAT ORDER'"
      );
    } else {
      setCloudMessage(
        "You're all set to checkout! You can make any ﬁnal updates or add special instructions. Then, press “Checkout.”"
      );
    }
  };

  const urlify = (text, type) => {
    if (type !== "response") return text;
    var urlRegex =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

    const matchedURL = text.match(urlRegex);

    if (!!matchedURL?.length) {
      return (
        <span className="response-text">
          {text.slice(0, text.indexOf(matchedURL[0])).replaceAll("\n", "\n")}
          <span
            onClick={() => handleUrlClick(matchedURL[0])}
            className="response-text-url"
          >
            {matchedURL[0]}
          </span>
          {text
            .slice(text.indexOf(matchedURL[0]) + matchedURL[0].length, -1)
            .replaceAll("\n", "\n")}
        </span>
      );
    } else return text.replace("say", "text");
  };

  return (
    <div className="chat-wrapper">
      {messages?.map(({ type, text }, index) => {
        return (
          <div
            className={`${type === "message" ? "user-text" : "text-response"} ${
              type === "loading" ? "loading-text-response" : ""
            }`}
            key={index}
          >
            {type === "loading" ? (
              <ChatLoading />
            ) : (
              <span>{urlify(text?.trim(), type)}</span>
            )}
            <img
              src={type === "message" ? greenRight : grayLeft}
              className={type === "message" ? "text-border" : "response-border"}
              alt="border img"
            ></img>
          </div>
        );
      })}
    </div>
  );
}
