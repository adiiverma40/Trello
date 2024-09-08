import { nanoid } from '@reduxjs/toolkit';
import React, { forwardRef } from 'react';

const Input = forwardRef(
  (
    {
      name,
      label,
      placeholder,
      type = "text",
      ...params
    },
    ref // receiving the forwarded ref here
  ) => {
    const id = nanoid();
    
    return (
      <div className="mx-3 my-1 w-full">
        {label && (
          <label
            className="text-zinc-600 text-sm block p-1"
            htmlFor={id}
            id={id}
          >
            {label}
          </label>
        )}
        <input
          placeholder={placeholder}
          className="w-full border text-black border-blue-500 outline-none h-12 p-3 text-base"
          type={type}
          name={name}
          id={id}
          ref={ref} // attaching the ref to the input
          {...params} // spreading any other props
        />
      </div>
    );
  }
);

export default Input;
