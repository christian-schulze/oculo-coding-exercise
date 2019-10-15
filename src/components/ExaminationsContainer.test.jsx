import React from "react";
import { shallow } from "enzyme";

import { ExaminationsContainer } from "./ExaminationsContainer";
import { ByExaminationDateView } from "./ByExaminationDateView";
import { ByModalityView } from "./ByModalityView";

global.fetch = require("jest-fetch-mock");

describe("ExamniationsContainer", () => {
  const mockResponse = {};

  beforeEach(() => {
    global.fetch.mockResponseOnce(JSON.stringify(mockResponse));
  });

  describe("When groupByType is examniationDate", () => {
    it("renders ByExaminationDateView", () => {
      const wrapper = shallow(
        <ExaminationsContainer groupByType="examinationDate" />
      );

      expect(wrapper.find(ByExaminationDateView)).toHaveLength(1);
    });
  });

  describe("When groupByType is modality", () => {
    it("renders ByModalityView", () => {
      const wrapper = shallow(<ExaminationsContainer groupByType="modality" />);

      expect(wrapper.find(ByModalityView)).toHaveLength(1);
    });
  });
});
