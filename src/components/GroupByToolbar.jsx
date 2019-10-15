import React from "react";
import PropTypes from "proptypes";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 48px;
  background-color: #ee8a7c;
`;

const StyledGroupByLabel = styled.span`
  color: white;
  font-weight: bold;
  padding-right: 16px;
`;

const StyledGroupByOptionLabel = styled.label`
  padding-right: 16px;

  > input {
    margin-left: 8px;
  }
`;

export const GroupByToolbar = ({ groupByType, onChange }) => {
  const handleChange = event => {
    onChange(event.currentTarget.value);
  };

  return (
    <StyledContainer>
      <StyledGroupByLabel>Group by: </StyledGroupByLabel>
      <StyledGroupByOptionLabel>
        Examination Date
        <input
          data-test-id="group-by-examination-date"
          type="radio"
          name="group-by"
          value="examinationDate"
          onChange={handleChange}
          checked={groupByType === "examinationDate"}
        />
      </StyledGroupByOptionLabel>
      <StyledGroupByOptionLabel>
        Modality
        <input
          data-test-id="group-by-modality"
          type="radio"
          name="group-by"
          value="modality"
          onChange={handleChange}
          checked={groupByType === "modality"}
        />
      </StyledGroupByOptionLabel>
    </StyledContainer>
  );
};

GroupByToolbar.propTypes = {
  groupByType: PropTypes.oneOf(["examinationDate", "modality"]),
  onChange: PropTypes.func
};
