"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SearchInput = ({
  iconEl = null,
  labelText = "Placeholder",
  passedValue = "",
  placholderText = "",
  callback = null,
}) => {
  const [value, setValue] = useState(passedValue);

  const handleOnChange = (e) => {
    let val = e.target.value;
    setValue(val);
    if (!callback) return;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HiddenLabel htmlFor="textInput">{labelText}</HiddenLabel>
      <Input
        id="textInput"
        type="text"
        value={value}
        placeholder={placholderText}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchInput;

const HiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const Input = styled.input`
  height: 100%;
  min-height: 2rem;
  width: 95%;
  border-radius: 10px;
  padding: 0 5px;
`;
