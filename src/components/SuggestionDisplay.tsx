import React from "react";
import style from "../styles/suggestionDisplay.module.css";
import { SuggestionDisplayType } from "../utils/types";

const SuggestionDisplay: React.FC<SuggestionDisplayType> = (props) => {
  return (
    <button
      className={`${style["suggestion_btn"]} ${
        props.isSelected ? style["suggestion_btn__active"] : ""
      }`}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
};

export default SuggestionDisplay;
