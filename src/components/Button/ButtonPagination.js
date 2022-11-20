import React from "react";

import style from "./ButtonPagination.module.scss";
const ButtonPagination = (props) => {
  const { handlePagination, link } = props;
  return (
    <button
      className={`${link.disabled ? style.disabled : ""} ${style.button}`}
      disabled={link.disabled}
      onClick={() => handlePagination(link.page)}>
      {link.text}
    </button>
  );
};

export default ButtonPagination;
