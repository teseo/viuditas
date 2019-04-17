import React, { Component } from "react";
import ScottishWidowsLogo from "./SW_Logo.svg";
import styled from "styled-components";

const ScottishWidowsContainer = styled.div`
  min-width: 54px;
  max-width: 152px;
  padding-left: 18px;
`;
const ScottishWidowsImage = styled.img``;

class App extends Component {
  render() {
    return (
      <ScottishWidowsContainer>
        <ScottishWidowsImage src={ScottishWidowsLogo} alt="Scottish Widows" />
      </ScottishWidowsContainer>
    );
  }
}

export default App;
