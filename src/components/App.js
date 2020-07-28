import React from "react";

import GlobalStyles from "./GlobalStyles";
import data from "../data";
import Typeahead from "./Typeahead";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  margin: 30px auto;
  vertical-align: center;
  ul {
    padding: 5px;
    border-radius: 4px;
    box-shadow: 4px 4px 9px 4px rgba(0, 0, 0, 0.75);
  }
`;

const BoxBox = styled.div`
  position: absolute;
  top: 50%;
`;

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BoxBox>
          <Typeahead
            suggestions={data.books}
            handleSelect={(suggestion) => {
              window.alert(suggestion);
            }}
          />
        </BoxBox>
      </Wrapper>
    </>
  );
};

export default App;
