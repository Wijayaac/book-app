import React, { useEffect, useState } from "react";
import { Books } from "../../components/Book";
import { ButtonPagination } from "../../components/Button";
import { Spinner } from "../../components/Loading";
import { Search } from "../../components/Search";

import { getAllBooks, searchBooks } from "./Dashboard.handler";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      setIsLoading(true);
      try {
        const { data, links } = await getAllBooks(1);
        setBooks(data);
        setLinks(links);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getBooks();
  }, []);

  const handlePagination = async (page) => {
    setIsLoading(true);
    try {
      const { data, links } = await getAllBooks(page);
      setBooks(data);
      setLinks(links);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = async (val) => {
    setIsLoading(true);
    try {
      const { data } = await searchBooks(val);
      setBooks(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Search handleChange={handleChange} />
      <Books books={books} />
      <div className='pagination'>
        {links &&
          links.map((link, key) => (
            <ButtonPagination
              key={key}
              handlePagination={handlePagination}
              link={link}
            />
          ))}
      </div>
    </>
  );
};

export default Dashboard;
