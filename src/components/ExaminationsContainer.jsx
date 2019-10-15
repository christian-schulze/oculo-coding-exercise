import React, { useEffect, useState } from "react";
import PropTypes from "proptypes";

import { ByModalityView } from "./ByModalityView";
import { ByExaminationDateView } from "./ByExaminationDateView";

import { groupByModality } from "../utils/examinations";

export const ExaminationsContainer = ({ groupByType }) => {
  const [examinations, setExaminations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/examinations")
      .then(response => {
        return response.json();
      })
      .then(json => {
        setExaminations(json);
      });
  }, []);

  const renderGroupBy = () => {
    switch (groupByType) {
      case "examinationDate":
        return <ByExaminationDateView examinations={examinations} />;
      case "modality":
        const byModality = groupByModality(examinations);

        return <ByModalityView imagesByModality={byModality} />;
      default:
        return `unhandled GroupByType '${groupByType}'.`;
    }
  };

  return <div>{renderGroupBy()}</div>;
};

ExaminationsContainer.propTypes = {
  groupByType: PropTypes.oneOf(["examinationDate", "modality"])
};
