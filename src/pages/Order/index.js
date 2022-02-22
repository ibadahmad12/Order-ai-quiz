import React, { useState } from "react";
import TitleBar from "../../components/TitleBar";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

import Footer from "../../components/Footer";
import MobilePhone from "../../components/MobilePhone";
import ChachedImage from "../../components/ChachedImage";

import Bigblue from "../../assets/images/Bigblue.png";
import BigWhiteCircle from "../../assets/images/bigwhitecircle.png";
import BlueLeft from "../../assets/images/BlueLeft.png";
import Pizza from "../../assets/images/pizza@2x.png";
import SmallWite from "../../assets/images/Smallwhite.png";
import SmallBlue from "../../assets/images/smallblue.png";
import Dots from "../../assets/images/dots.png";

import DemoIphone from "../../assets/images/i-phone-x-clay-white-perspective-mockup-copy@2x.png";
import CheckMark from "../../assets/images/icons-checkmark.png";
import FastEasy from "../../assets/images/fasteasy@3x.png";
import PreditictiveAnalysis from "../../assets/images/PreditictiveAnalysis@3x.png";

import SmsMarketing from "../../assets/images/smsmarketing@3x.png";
import CheckMarkLarge from "../../assets/images/icons-checkmark@2x.png";
import WastBin from "../../assets/images/icons-waste-bin@2x.png";
import IntegratrionIcon from "../../assets/images/icons-integrations@2x.png";

import AmountIcon from "../../assets/images/icons-amount@2x.png";
import EffeciencyIcon from "../../assets/images/icons-effeciency@2x.png";
import GuestsIcon from "../../assets/images/icons-guests@2x.png";
import { useLocation } from "react-router";
import axios from "axios";
import socketClient from "socket.io-client";
import { toast, ToastContainer } from "react-toastify";

const restaurantId = "+15512911234";

const SERVER = "https://order-ai-new.herokuapp.com/";
const socket = socketClient(SERVER);

toast.configure();
const Order = () => {
  const [socketResponse, setSocketResponse] = useState(null);

  socket.on("orderCompletion", (res) => {
    setSocketResponse(res);
  });

  const location = useLocation();

  const accessMobileDemo = () => {
    let phoneNumber = location?.state?.phoneNumber;

    axios
      .post("https://ordradminbk.com/hrDemoSendSms", {
        restaurantId: restaurantId,
        customerId: "+12159608808",
        customerMessage:
          "Welcome to HungerRush Demo Store. Text Hello to start! Thanks.",
      })

      .then(({ data }) => {
        toast(
          `We've received your request and sending a SMS to mobile number[${
            phoneNumber || "+12159608808"
          }]`,
          {
            position: "bottom-left",
            autoClose: 5000,
            closeButton: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            bodyClassName: "toast-body",
            style: {
              backgroundColor: "#0e8476",
            },
          }
        );
      });
  };

  return (
    <div className="page-wrap">
      <TitleBar showSchedule={true} />
      <div className="content">
        <div className="title-text-wrap">
          <p className="hunger-rush-text">HungerRush 360 OrderAI Text</p>
          <p className="srsly-smart-text">A SRSLY smart way to order</p>
          <p className="sms-description-text">
            Your customers get seamless SMS ordering. You get predictive
            analytics AND a new venue for marketing and promos. It's a win-win
            powered by AI.
          </p>
        </div>
        <div className="pizza-images-wrap">
          <ChachedImage src={Dots} alt="Dots" className="top-dots" />
          <ChachedImage src={FastEasy} alt="FastEasy" className="fast-easy" />
          <ChachedImage
            src={PreditictiveAnalysis}
            alt="PreditictiveAnalysis"
            className="predictive-analysis"
          />

          <ChachedImage src={Bigblue} alt="Bigblue" className="big-blue-img" />
          <ChachedImage
            src={BigWhiteCircle}
            alt="BigWhiteCircle"
            className="big-white-img"
          />
          <ChachedImage
            src={BlueLeft}
            alt="BlueLeft"
            className="left-blue-img"
          />
          <ChachedImage src={Pizza} alt="Pizza" className="pizza-img" />
          <ChachedImage
            src={SmallWite}
            alt="SmallWite"
            className="small-white-img"
          />
          <ChachedImage
            src={SmallBlue}
            alt="SmallBlue"
            className="small-blue-img"
          />

          <ChachedImage src={Dots} alt="Dots" className="bottom-dots" />
          <ChachedImage
            src={SmsMarketing}
            alt="SmsMarketing"
            className="sms-marketing"
          />
        </div>

        <MobilePhone
          phoneNumber={location?.state?.phoneNumber}
          firstName={location?.state?.firstName}
          setSocketResponse={setSocketResponse}
          socketResponse={socketResponse}
        />

        <div className="demo-wrap no-margin">
          <p className="demo-device">
            You can view this demo on your mobile device!
          </p>
          <p className="sample-easy">
            Sample how easy ordering can be with OrderAI Text.
          </p>
          <button
            className="order-ai-button access-demo-button"
            onClick={accessMobileDemo}
          >
            Access Mobile Demo
          </button>
          <ChachedImage
            src={DemoIphone}
            alt={DemoIphone}
            className="demo-iphone-img"
          />
        </div>

        <div className="ordering-simplified-wrap">
          <p className="ordering-title">Digital ordering—simplified</p>
          <p className="ordering-description">
            There's no app to download or even a website to visit. Ordering from
            your restaurant can be as easy as sending a text.
          </p>
          <span className="check-mark-wraper">
            <ChachedImage src={CheckMark} alt="CheckMark" />
            <p className="check-mark-text">
              Customers can use plain language to order— from anywhere
            </p>
          </span>
          <span className="check-mark-wraper">
            <ChachedImage src={CheckMark} alt="CheckMark" />
            <p className="check-mark-text">
              Securely saves payment method for future orders
            </p>
          </span>
          <span className="check-mark-wraper">
            <ChachedImage src={CheckMark} alt="CheckMark" />
            <p className="check-mark-text">
              Repeat orders are a snap with order histories, preferences and
              integrated loyalty tools
            </p>
          </span>
          <span className="check-mark-wraper">
            <ChachedImage src={CheckMark} alt="CheckMark" />
            <p className="check-mark-text">
              Over 1 million text orders have already been placed with OrderAI
              Text
            </p>
          </span>
          <ChachedImage
            src={Dots}
            alt="Dots"
            className="digital-ordering-img"
          />
        </div>

        <div className="approachable-ai-wrap">
          <p className="approachable-ai-title">Approachable AI</p>
          <p className="approachable-ai-description">
            OrderAI Text is simple to implement (no advanced degrees necessary).
            Plus, it uses advanced natural language processing tools so that
            every order is easy to place and accurate.
          </p>
          <div className="approachable-items-wrap">
            <div className="approachable-item">
              <ChachedImage src={CheckMarkLarge} alt="CheckMarkLarge" />
              <p className="approachable-item-title">Get it right</p>
              <p className="approachable-item-description">
                Orders are 99% more accurate with OrderAI Text
              </p>
            </div>

            <div className="approachable-item">
              <ChachedImage src={WastBin} alt="WastBin" />
              <p className="approachable-item-title">Waste not</p>
              <p className="approachable-item-description">
                Order accuracy means less food waste
              </p>
            </div>

            <div className="approachable-item approachable-item-top">
              <ChachedImage src={IntegratrionIcon} alt="IntegratrionIcon" />
              <p className="approachable-item-title">Connect it all</p>
              <p className="approachable-item-description">
                Easily integrates with your POS system
              </p>
            </div>
          </div>
        </div>

        <div className="demo-wrap">
          <p className="demo-device">
            You can view this on your mobile device!
          </p>
          <p className="sample-easy">
            Sample how easy ordering can be with OrderAI Text.
          </p>
          <button
            className="order-ai-button access-demo-button"
            onClick={accessMobileDemo}
          >
            Access Mobile Demo
          </button>
          <ChachedImage
            src={DemoIphone}
            alt={DemoIphone}
            className="demo-iphone-img"
          />
        </div>

        <div className="approachable-ai-wrap">
          <p className="approachable-ai-title">
            Reduce costs and make more dough
          </p>
          <p className="approachable-ai-description">
            Like cabbage? You'll be rolling in the green when you give your
            business's operational efficiency (and average order size) a boost
            with OrderAI Text.{" "}
          </p>
          <div className="approachable-items-wrap">
            <div className="approachable-item">
              <ChachedImage src={AmountIcon} alt="AmountIcon" />
              <p className="approachable-item-title">They’ll want more</p>
              <p className="approachable-item-description">
                The frequency of customers placing 3+ orders increases 77%
              </p>
            </div>

            <div className="approachable-item">
              <ChachedImage src={GuestsIcon} alt="GuestsIcon" />
              <p className="approachable-item-title">They’re YOUR guests</p>
              <p className="approachable-item-description">
                Reduce reliance on margin-eroding third-party services.
              </p>
            </div>

            <div className="approachable-item approachable-item-top">
              <ChachedImage src={EffeciencyIcon} alt="EffeciencyIcon" />
              <p className="approachable-item-title">No more bottlenecks</p>
              <p className="approachable-item-description">
                With POS integration, you can capture valuable data and avoid
                kitchen errors
              </p>
            </div>
          </div>
        </div>

        <div className="ordering-simplified-wrap">
          <p className="ordering-title">...and keep growing your business.</p>
          <p className="ordering-description">
            Did you know that texts have 98% open rates? Grow your business with
            personalized marketing, promo and loyalty programs powered and
            delivered by text.
          </p>
          <span className="check-mark-wraper">
            <ChachedImage src={CheckMark} alt="CheckMark" />
            <p className="check-mark-text">
              AI-powered text marketing for more relevant promotions and higher
              response rates
            </p>
          </span>
          <span className="check-mark-wraper">
            <ChachedImage src={CheckMark} alt="CheckMark" />
            <p className="check-mark-text">
              Integrate orders into unified customer profiles
            </p>
          </span>
          <span className="check-mark-wraper">
            <ChachedImage src={CheckMark} alt="CheckMark" />
            <p className="check-mark-text">
              Capture customer preferences for more relevant offers and rewards
            </p>
          </span>
          <span className="check-mark-wraper">
            <ChachedImage src={CheckMark} alt="CheckMark" />
            <p className="check-mark-text">
              Send special offers via text to encourage additional orders
            </p>
          </span>

          <ChachedImage
            src={Dots}
            alt="Dots"
            className="digital-ordering-img"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Order;
