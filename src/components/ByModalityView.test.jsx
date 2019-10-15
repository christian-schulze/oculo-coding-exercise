import React from "react";
import { shallow } from "enzyme";

import { ByModalityView } from "./ByModalityView";

describe("ByModalityView", () => {
  const imagesByModalityMock = [
    {
      modality: "OCT",
      images: [
        {
          eye: "L",
          modality: "OCT",
          note: "",
          thumbnail: "",
          date: "2019-10-15"
        },
        {
          eye: "R",
          modality: "OCT",
          note: "",
          thumbnail: "",
          date: "2019-10-15"
        }
      ]
    },
    {
      modality: "OP",
      images: [
        {
          eye: "L",
          modality: "OP",
          note: "",
          thumbnail: "",
          date: "2019-10-16"
        },
        {
          eye: "R",
          modality: "OP",
          note: "",
          thumbnail: "",
          date: "2019-10-16"
        }
      ]
    }
  ];

  it("renders examinations and images", () => {
    const wrapper = shallow(
      <ByModalityView imagesByModality={imagesByModalityMock} />
    );

    const dates = wrapper.find("[data-test-id='modality']");
    expect(dates.at(0).text()).toEqual("OCT");
    expect(dates.at(1).text()).toEqual("OP");

    const imageDetails = wrapper.find("ImageDetail");
    expect(imageDetails).toHaveLength(4);
  });
});
