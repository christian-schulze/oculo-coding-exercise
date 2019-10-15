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

export const ByModalityView = ({ imagesByModality }) => {
  return (
    <div>
      {imagesByModality.map((modality, index) => {
        return (
          <div key={index}>
            <StyledHeader>
              <StyledLabel>Modality: </StyledLabel>
              <span data-test-id="modality">{modality.modality}</span>
            </StyledHeader>
            <div>
              {modality.images.map((image, index) => {
                return <ImageDetail key={index} image={image} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

ByModalityView.propTypes = {
  imagesByModality: PropTypes.arrayOf(
    PropTypes.shape({
      modality: PropTypes.string,
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
