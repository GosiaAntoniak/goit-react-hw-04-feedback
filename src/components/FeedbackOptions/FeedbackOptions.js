import React from "react";
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;

  return (
    <ul className={css["option-list"]}>
      {options.map((option, index) => {
        return (
          <li className={css["option-item"]} key={index}>
            <button
              type="button"
              className={css["option-btn"]}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
