/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`property-default-wrapper property-1-0-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="overlap-group-2">
        {state.property1 === "variant-2" && (
          <img
            className="img"
            alt="Rectangle"
            src="https://generation-sessions.s3.amazonaws.com/298acaa8220cc5989c699dbdb966551f/img/rectangle-11-5@2x.png"
          />
        )}

        <div className="rectangle-2" />
        {state.property1 === "variant-2" && (
          <>
            <img
              className="vector-2"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/298acaa8220cc5989c699dbdb966551f/img/vector-15-2.svg"
            />
            <img
              className="group-2"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/298acaa8220cc5989c699dbdb966551f/img/group-48193-2@2x.png"
            />
          </>
        )}

        {state.property1 === "default" && (
          <img
            className="img"
            alt="Rectangle"
            src="https://generation-sessions.s3.amazonaws.com/298acaa8220cc5989c699dbdb966551f/img/rectangle-11-5@2x.png"
          />
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
