// Mocking the store
import React, { Component } from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { authors, courses } from "../../../tools/mockDataReact";
import { render } from "@testing-library/react";

// Mocking the state
const initialState = { authors: authors, courses: courses };
const mockStore = configureStore();

export function renderWithContext(element) {
  render(
    <Provider store={mockStore(initialState)}>
      <Router>{element}</Router>
    </Provider>
  );
}
