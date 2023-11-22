import React from "react";
import { CustomBtnType } from "../utils/types";
import style from "../styles/customBtn.module.css";

const CustomBtn: React.FC<CustomBtnType> = (props) => {
  return (
    <button className={style["button"]} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default CustomBtn;
