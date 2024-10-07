import React from "react";
import styled from "styled-components";

import SearchInput from "./SearchInput";
import Button from "./Button";

import { motion } from "framer-motion";

const Header = () => {
  const handleJobTextChange = () => {};

  const handleLocationChange = () => {};

  return (
    <HeaderMotion>
      <SearchInput
        iconEl=""
        labelText={"Search Jobs"}
        passedValue={""}
        placholderText={"Search Jobs"}
        handleChange={handleJobTextChange}
      />

      <SearchInput
        iconEl=""
        labelText={"Location"}
        passedValue={""}
        placholderText={"Enter your location"}
        handleChange={handleLocationChange}
      />

      <Button text="Find" />
    </HeaderMotion>
  );
};

export default Header;

const HeaderMotion = styled(motion.header)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid white;

  & > div {
    flex: 2 1 400px;
    max-width: 30vw;
  }

  & < button {
    flex: 1 2 200px;
  }

  & > * {
    margin: 0 5px;
    height: 40px;
  }
`;
