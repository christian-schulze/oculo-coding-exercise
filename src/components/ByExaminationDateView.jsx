import React from "react";
import PropTypes from "proptypes";
import styled from "styled-components";

import { ImageDetail } from "./ImageDetail";

const StyledHeader = styled.div`
  background-color: #e75844;
  padding: 16px;
  color: white;
`;

const StyledLabel = styled.span`
  font-weight: bold;
`;

export const ByExaminationDateView = ({ examinations }) => {
  return (
    <div>
      {examinations.map((examination, index) => {
        return (
          <div key={index}>
            <StyledHeader>
              <StyledLabel>Examination Date: </StyledLabel>
              <span data-test-id="date">{examination.date}</span>
            </StyledHeader>
            <div>
              {examination.images.map((image, index) => {
                return <ImageDetail key={index} image={image} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

ByExaminationDateView.propTypes = {
  examinations: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          eye: PropTypes.oneOf(["L", "R"]),
          modality: PropTypes.string,
          note: PropTypes.string,
          thumbnail: PropTypes.strin
        })
      )
    })
  )
};
