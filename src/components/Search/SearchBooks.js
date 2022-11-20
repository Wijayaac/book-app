import React from "react";
import { useForm } from "react-hook-form";

import style from "./SearchBook.module.scss";

const SearchBooks = ({ handleChange }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { name_like } = data;
    handleChange(name_like);
  };

  return (
    <div className={style.search}>
      <form aria-label='formSearch' onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Search Book by name'
          {...register("name_like")}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBooks;
