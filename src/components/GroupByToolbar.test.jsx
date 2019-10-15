import React from "react";
import { mount } from "enzyme";

import { GroupByToolbar } from "./GroupByToolbar";
import expectExport from "expect";

describe("GroupByToolbar", () => {
  it("on click examination date it calls onChange", () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <GroupByToolbar groupByType="examinationDate" onChange={onChange} />
    );

    const input = wrapper.find("[data-test-id='group-by-examination-date']");
    input.simulate("change");

    expectExport(onChange).toHaveBeenCalledWith("examinationDate");
  });

  it("on click modality it calls onChange", () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <GroupByToolbar groupByType="examinationDate" onChange={onChange} />
    );

    const input = wrapper.find("[data-test-id='group-by-modality']");
    input.simulate("change");

    expectExport(onChange).toHaveBeenCalledWith("modality");
  });
});
