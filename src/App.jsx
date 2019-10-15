import React, { useState } from "react";
import styled from "styled-components";

import { GroupByToolbar } from "./components/GroupByToolbar";
import { ExaminationsContainer } from "./components/ExaminationsContainer";

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
`;

const StyledContainer = styled.div`
  width: 1200px;
  background-color: white;
  height: 3000px;
`;

function App() {
  const [groupByType, setGroupByType] = useState("examinationDate");

  const handleGroupByTypeChange = type => {
    setGroupByType(type);
  };

  return (
    <StyledApp>
      <StyledContainer>
        <GroupByToolbar
          groupByType={groupByType}
          onChange={handleGroupByTypeChange}
        />
        <ExaminationsContainer groupByType={groupByType} />
      </StyledContainer>
    </StyledApp>
  );
}

export default App;
