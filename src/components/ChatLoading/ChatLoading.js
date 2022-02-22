import React, { useEffect, useState } from "react";
import "./style.css";

const ChatLoading = () => {
  const [activeCircle, setActiveCircle] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (activeCircle === 2) {
        setActiveCircle(0);
      } else {
        setActiveCircle(activeCircle + 1);
      }
    }, 300);
  }, [activeCircle]);

  return (
    <div className="loadingMessage">
      {[...Array(3)].map((num, index) => {
        return (
          <div
            key={index}
            className={`loadingCircle ${
              activeCircle === index ? "activeLoadingCircle" : ""
            }`}
          ></div>
        );
      })}
    </div>
  );
};

export default ChatLoading;
