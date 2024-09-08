import React from 'react';

function Button({
    type="button" ,
    children,
    bgColor="bg-blue-500"
}) {
  return (
    <button type={type} className={`${bgColor} text-white text-center px-6 mx-3 my-3  py-2 rounded-lg`}>
        {children}
    </button>
  );
}

export default Button;