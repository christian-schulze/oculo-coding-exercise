import React from "react";
import { shallow } from "enzyme";

import { ByExaminationDateView } from "./ByExaminationDateView";

describe("ByExaminationDateView", () => {
  const mockExaminations = [
    {
      date: "2019-10-15",
      images: [
        {
          eye: "L",
          modality: "OCT",
          note: "",
          thumbnail: ""
        },
        {
          eye: "R",
          modality: "OCT",
          note: "",
          thumbnail: ""
        }
      ]
    },
    {
      date: "2019-10-16",
      images: [
        {
          eye: "L",
          modality: "OP",
          note: "",
          thumbnail: ""
        },
        {
          eye: "R",
          modality: "OP",
          note: "",
          thumbnail: ""
        }
      ]
    }
  ];

  it("renders examinations and images", () => {
    const wrapper = shallow(
      <ByExaminationDateView examinations={mockExaminations} />
    );

    const dates = wrapper.find("[data-test-id='date']");
    expect(dates.at(0).text()).toEqual("2019-10-15");
    expect(dates.at(1).text()).toEqual("2019-10-16");

    const imageDetails = wrapper.find("ImageDetail");
    expect(imageDetails).toHaveLength(4);
  });
});
