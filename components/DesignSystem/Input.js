import React from "react";

const Input = ({ labelText, value, setValue, ...rest }) => {
  return (
    <>
      {labelText ? <label>{labelText}</label> : null}
      <input
        className="ps-ds__input"
        value={value}
        onChange={(e) => setValue(e)}
        {...rest}
      />
    </>
  );
};

export default Input;
