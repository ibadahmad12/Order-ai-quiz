import React from "react";
import "./style.css";
import TitleIcon from "../../assets/images/header-desktop.jpg";
import CalendarIcon from "../../assets/images/icons-insights-days.png";

const TitleBar = ({ showSchedule }) => {
  return (
    <div className="nav-bar-wrap">
      {showSchedule && (
        <div className="schedule-button-wrap">
          <button className="order-ai-button schedule-button">
            <img
              src={CalendarIcon}
              alt="Calender Icon"
              className="calendar-icon"
            />
            <a
              href="https://pos.hungerrush.com/orderai-consultation"
              className="link-style"
            >
              Schedule a Consultation
            </a>
          </button>
        </div>
      )}
      <img src={TitleIcon} className="title-image" alt="Title Icon" />
    </div>
  );
};

TitleBar.defaultProps = {
  showSchedule: false,
};

export default TitleBar;
