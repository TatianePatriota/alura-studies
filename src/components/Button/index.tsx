import React from "react";
import style from "./Button.module.scss";


function Button(props: { children: string, type?: "button" | "submit" | "reset" | undefined })  {
  const {type = "button"} = props;
  return (
    <button type={type} className={style.botao}>
      {props.children}
    </button>
  );
}

export default Button;