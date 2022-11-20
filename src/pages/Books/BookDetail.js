import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  return <div>BookDetail {id}</div>;
};

export default BookDetail;
