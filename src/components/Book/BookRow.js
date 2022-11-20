import React from "react";
import { NavLink } from "react-router-dom";

const BookRow = (props) => {
  const { book } = props;
  return (
    <tr>
      <td>{book.isbn ?? "0"}</td>
      <td>{book.name ?? "no title"}</td>
      <td>
        <NavLink to={`/books/${book.id}`}>See details</NavLink>
      </td>
    </tr>
  );
};

export default BookRow;
