import React from "react";

const ButtonPagination = (props) => {
  const { handlePagination, link } = props;
  return (
    <button
      className={link.disabled ? "disabled" : ""}
      disabled={link.disabled}
      onClick={() => handlePagination(link.page)}>
      {link.text}
    </button>
  );
};

export default ButtonPagination;
