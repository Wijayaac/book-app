import React from "react";

import style from "./LoadingSpinner.module.scss";
const LoadingSpinner = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.loader}></div>
    </div>
  );
};

export default LoadingSpinner;
