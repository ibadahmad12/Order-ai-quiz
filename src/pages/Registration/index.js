import React, { useState, useEffect, useRef } from "react";
import TitleBar from "../../components/TitleBar";
import "./style.css";
import BackgroundImage from "../../assets/images/texting-skater-mycguld.jpg";
import RegistrationPhone from "../../assets/images/registration-phone.png";
import { useNavigate } from "react-router-dom";
import ChachedImage from "../../components/ChachedImage";
import Loader from "react-loader-spinner";
var ie = require("ie-version");

const Registration = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/order", {
      state: {
        phoneNumber,
        firstName,
      },
    });
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      ie.version && ie.version <= 8
        ? "https://js.hsforms.net/forms/v2-legacy.js"
        : "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms
          .create({
            region: "na1",
            portalId: "4750273",
            formId: "c94e3f45-9e94-49d2-875f-c60ada662902",
            sfdcCampaignId: "7011W000001g1taQAA",
            target: "#hubspotForm",
          })
          .onReady(() => {
            setLoading(false);
          });
      }
    });
  }, []);

  return (
    <div className="page-wrap">
      <TitleBar />
      <ChachedImage className="d-none" alt="" src={BackgroundImage} />
      <ChachedImage className="d-none" alt="" src={RegistrationPhone} />
      <div
        className="content-registration"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <div className="form-wrap">
          <div className="black-background">
            <p className="title-text">ORDERAI TEXT</p>
            <div className="description-text">
              <p>See HungerRush 360</p>
              <p> OrderAI Text Demo in action</p>
            </div>
          </div>

          <div className="registration-form-card">
            <p>We just need a bit of information before you start the demo.</p>

            {loading && (
              <div className="loading-wrapper">
                <Loader type="Oval" color="#008574" height={100} width={100} />
              </div>
            )}

            <div id="hubspotForm"></div>
          </div>
          <div className="phone-wrap">
            <div
              className="registration-phone-img"
              style={{ backgroundImage: `url(${RegistrationPhone})` }}
            >
              <p className="registration-phone-number">(555) 555-1212</p>
              <div className="text-messages-wrap wrap">
                <div className="colored-message-box first-message-box block_1">
                  <p className="colored-message-text">
                    1 large cheese and 1 large pepperoni for delivery
                  </p>
                </div>

                <div className="white-message-box second-message-box block_2">
                  <p className="white-message-text">
                    Joe’s Pizza. Please review:
                    <br />
                    <br />
                    Delivery to 123 South Main St
                    <br />
                    Ann Arbor, MI 48103
                    <br />
                    - 1 Large pizza, cheese
                    <br />
                    - 1 Large pizza, pepperoni
                    <br />
                    Total w/ tax: $21.35
                    <br />
                  </p>
                </div>

                <div className="white-message-box third-message-box block_3">
                  <p className="white-message-text">
                    Make Edits:
                    <br />
                    <br />
                    txtordr.com/myordr/dkfh2334
                    <br />
                    <br />
                    To Pay: Type your 4-Digit Text PIN to charge card ending in
                    1111
                    <br />
                  </p>
                </div>

                <div className="colored-message-box fourth-message-box block_4 ">
                  <p className="colored-message-text">5333</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
