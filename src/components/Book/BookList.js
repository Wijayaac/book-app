import React from "react";

import BookRow from "./BookRow";
import style from "./BookList.module.scss";

const BookList = (props) => {
  const { books } = props;
  return (
    <div className={style.book}>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 &&
            books.map((book) => <BookRow key={book.id} book={book} />)}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
