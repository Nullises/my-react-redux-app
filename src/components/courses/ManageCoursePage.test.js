import React from "react";
import ManageCoursePage from "./ManageCoursePage";
import { screen } from "@testing-library/react";
import { renderWithContext } from "../../test/utils/renderConnected";

test("should contain a heading", () => {
  renderWithContext(<ManageCoursePage />);
  expect(
    screen.getByRole("heading", {
      name: /Add Course/i,
    })
  );
});
