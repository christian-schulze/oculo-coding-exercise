import React from "react";
import { shallow } from "enzyme";

import { ImageDetail } from "./ImageDetail";
import expectExport from "expect";

describe("ImageDetail", () => {
  const image = {
    eye: "L",
    modality: "OCT",
    note: "Left eye thickness is 2um"
  };

  it("renders eye meta data", () => {
    const wrapper = shallow(<ImageDetail image={image} />);

    expect(
      wrapper
        .find("[data-test-id='eye']")
        .first()
        .text()
    ).toEqual("L");
  });

  it("renders modality meta data", () => {
    const wrapper = shallow(<ImageDetail image={image} />);

    expect(
      wrapper
        .find("[data-test-id='modality']")
        .first()
        .text()
    ).toEqual("OCT");
  });

  it("renders note meta data", () => {
    const wrapper = shallow(<ImageDetail image={image} />);

    expect(
      wrapper
        .find("[data-test-id='note']")
        .first()
        .text()
    ).toEqual("Left eye thickness is 2um");
  });

  it("renders date meta data when available", () => {
    const wrapper = shallow(
      <ImageDetail image={{ ...image, date: "2019-04-13" }} />
    );

    expect(
      wrapper
        .find("[data-test-id='date']")
        .first()
        .text()
    ).toEqual("2019-04-13");
  });

  it("does not render date if date is not available", () => {
    const wrapper = shallow(<ImageDetail image={image} />);

    expect(wrapper.find("[data-test-id='date']")).not.toHaveLength(1);
  });
});
