import React from "react";
import style from "../styles/indicatorQuestion.module.css";
import { IndicatorQuestionType } from "../utils/types";

const IndicatorQuestion: React.FC<IndicatorQuestionType> = (props) => {
  return (
    <div
      className={`${style.round} ${
        props.isActive ? style["round__active"] : style["round__inactive"]
      }`}
    
    >
      {props.content}
    </div>
  );
};

export default IndicatorQuestion;
