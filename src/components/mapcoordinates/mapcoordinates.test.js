import React from "react";
import { shallow } from "enzyme";
import Mapcoordinates from "./mapcoordinates";

describe("Mapcoordinates", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Mapcoordinates />);
    expect(wrapper).toMatchSnapshot();
  });
});
