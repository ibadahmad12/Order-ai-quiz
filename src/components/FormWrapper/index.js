import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { numberOfLocations, concept, cuisine } from "./Text";

import "./styles.css";

export default function FormWrapper() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [formValues, setFormValues] = useState({
    context: {
      pageUri: "orderai.hungerrush.com",
      pageName: "Registration",
      sfdcCampaignId: "7011W000001g1taQAA",
    },
  });

  // Maps through the options from an external file to propogate the options
  const conceptOptions = concept.map((item) => {
    return <option>{item}</option>;
  });
  const numberOfLocationsOptions = numberOfLocations.map((item) => {
    return <option>{item}</option>;
  });
  const cuisineOptions = cuisine.map((item) => {
    return <option>{item}</option>;
  });
  // The functions that set the state to send to the hubspot form
  const selectRestaurantSize = (e) => {
    setFormValues({
      ...formValues,
      fields: [
        ...formValues.fields,
        {
          obejectTypeId: "0-1",
          name: "restaurant_size",
          value: e?.target.value,
        },
      ],
    });
  };
  const selectConcept = (e) => {
    setFormValues({
      ...formValues,
      fields: [
        ...formValues.fields,
        { obejectTypeId: "0-1", name: "concept", value: e?.target.value },
      ],
    });
  };
  const selectCuisine = (e) => {
    setFormValues({
      ...formValues,
      fields: [
        ...formValues.fields,
        { obejectTypeId: "0-1", name: "cuisine", value: e?.target.value },
      ],
    });
  };

  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();
    var finalData = JSON.stringify(formValues);
    navigate("/quiz", {
      state: {
        phoneNumber,
        firstName,
      },
    });

    fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/4750273/e4ac46c1-da58-4564-a867-79472998a504",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: finalData,
      }
    ).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="form-content-container">
      <h1>Learn More About Customer Experience Trends in 2022</h1>
      <div className="registration-form-card">
        <form className="registration-form" onSubmit={handleButtonClick}>
          <div className="input-wrap">
            <input
              placeholder="First Name*"
              className="small-input"
              onChange={(e) => {
                setFirstName(e.target.value);
                setFormValues({
                  ...formValues,
                  fields: [
                    {
                      obejectTypeId: "0-1",
                      name: "firstname",
                      value: e.target.value,
                    },
                  ],
                });
              }}
              required
            />
            <input
              placeholder="Last Name*"
              className="small-input"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  fields: [
                    ...formValues.fields,
                    {
                      obejectTypeId: "0-1",
                      name: "lastname",
                      value: e.target.value,
                    },
                  ],
                })
              }
              required
            />
          </div>
          <input
            placeholder="Phone Number (xxx-xxx-xxxx)*"
            className="large-input"
            type="tel"
            // pattern="\+[0-9]{11,11}"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setFormValues({
                ...formValues,
                fields: [
                  ...formValues.fields,
                  {
                    obejectTypeId: "0-1",
                    name: "phone",
                    value: e.target.value,
                  },
                ],
              });
            }}
            required
          />
          <input
            placeholder="Email*"
            className="large-input"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                fields: [
                  ...formValues.fields,
                  {
                    obejectTypeId: "0-1",
                    name: "email",
                    value: e.target.value,
                  },
                ],
              })
            }
            required
          />
          <input
            placeholder="Company*"
            className="large-input"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                fields: [
                  ...formValues.fields,
                  {
                    obejectTypeId: "0-1",
                    name: "company",
                    value: e.target.value,
                  },
                ],
              })
            }
            required
          />
          <select
            name="concept"
            className="large-input select"
            onChange={selectRestaurantSize}
            required
          >
            <option value="" disabled selected>
              # of Locations*
            </option>
            {numberOfLocationsOptions}
          </select>
          <div className="input-wrap">
            <select
              name="concept"
              className="large-input small-select"
              onChange={selectConcept}
              required
            >
              <option value="" disabled selected>
                Concept*
              </option>
              {conceptOptions}
            </select>
            <select
              name="concept"
              className="large-input small-select"
              onChange={selectCuisine}
              required
            >
              <option value="" disabled selected>
                Cuisine*
              </option>
              {cuisineOptions}
            </select>
          </div>

          <div className="submit-wrap">
            <button type="submit">Download Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}
