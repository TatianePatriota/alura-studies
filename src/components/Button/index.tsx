import React from "react";
import style from "./Button.module.scss";


function Button(props: { children: string })  {
  return (
    <button className={style.botao}>
      {props.children}
    </button>
  );
}

export default Button;