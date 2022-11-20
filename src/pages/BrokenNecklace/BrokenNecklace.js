import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { brokenNecklace } from "./BrokenNecklace.handler";

const BrokenNecklace = () => {
  const [result, setResult] = useState(0);

  const { register, handleSubmit } = useForm();
  const countResult = (data) => {
    let result = brokenNecklace(data.necklace);
    setResult(result);
  };

  return (
    <div className='necklace'>
      <h1>Broken Necklace Problem</h1>

      <div className='wrapper'>
        <form onSubmit={handleSubmit(countResult)}>
          <div className='input'>
            <label htmlFor='necklace'>Input</label>
            <input type='text' {...register("necklace")} />
          </div>
          <button>Count</button>
        </form>

        <div className='result'>
          <h2>Output : {result}</h2>
        </div>
      </div>
    </div>
  );
};

export default BrokenNecklace;
