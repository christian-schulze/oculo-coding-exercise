import React from "react";
import PropTypes from "proptypes";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 16px;
`;

const StyledMetaLabel = styled.span`
  font-weight: bold;
`;

export const ImageDetail = ({ image }) => {
  return (
    <StyledContainer>
      <img
        src={"http://localhost:8000" + image.thumbnail}
        alt={image.thumbnail}
      />
      <div>
        <StyledMetaLabel>Eye: </StyledMetaLabel>
        <span data-test-id="eye">{image.eye}</span>
      </div>
      <div>
        <StyledMetaLabel>Modality: </StyledMetaLabel>
        <span data-test-id="modality">{image.modality}</span>
      </div>
      <div>
        <StyledMetaLabel>Note: </StyledMetaLabel>
        <span data-test-id="note">{image.note}</span>
      </div>
      {!!image.date && (
        <div>
          <StyledMetaLabel>Examination Date: </StyledMetaLabel>
          <span data-test-id="date">{image.date}</span>
        </div>
      )}
    </StyledContainer>
  );
};

ImageDetail.propTypes = {
  image: PropTypes.shape({
    eye: PropTypes.oneOf(["L", "R"]),
    modality: PropTypes.string,
    note: PropTypes.string,
    thumbnail: PropTypes.strin
  })
};
