import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Spinner } from "../../components/Loading";
import { getBook } from "./BookDetail.handler";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await getBook(id);
        setBook(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      <h1>Book : {book.name ?? "No Name"}</h1>
      <p>ISBN : {book.isbn ?? "0"}</p>
    </div>
  );
};

export default BookDetail;
