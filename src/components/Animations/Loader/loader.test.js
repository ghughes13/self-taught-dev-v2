import React from "react";
import renderer from "react-test-renderer";
import Loader from "./index";

jest.mock("./styles.scss");

it("Should match snapshot", () => {
  const component = renderer.create(<Loader></Loader>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
