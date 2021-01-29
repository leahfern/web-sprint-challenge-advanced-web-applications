import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {

    // Arrange - render page
  const { getByText } = render (<BubblePage />)

  // Act - grab the title 'bubbles' and the title 'colors' to make sure both child components render
  const bubblesTitle = getByText(/bubbles/i);
  const colorsTitle = getByText(/colors/i);

  //Assert - bubbles and colors are available on page
  expect(bubblesTitle).toBeInTheDocument();
  expect(colorsTitle).toBeInTheDocument();
})

test("Fetches data and renders the bubbles on mounting", () => {
  //Arrange - render page and make sure there are no colors listed and no bubbles rendered
  const { rerender, queryAllByTestId, getAllByTestId } = render(<BubblePage />);
  const noColors = queryAllByTestId('color');
  const noBubbles = queryAllByTestId('bubble');
  expect(noColors).toHaveLength(0);
  expect(noBubbles).toHaveLength(0);

    //Act - rerender with fake data
    rerender(<BubblePage colorList={data}/>)
    const colors = screen.getAllByTestId('color');

})

const data = [
  {
    "color": "aliceblue",
    "code": {
      "hex": "#f0f8ff"
    },
    "id": 1
  },
  {
    "color": "limegreen",
    "code": {
      "hex": "#99ddbc"
    },
    "id": 2
  },
  {
    "color": "aqua",
    "code": {
      "hex": "#00ffff"
    },
    "id": 3
  },
  {
    "color": "aquamarine",
    "code": {
      "hex": "#7fffd4"
    },
    "id": 4
  },
  {
    "color": "lilac",
    "code": {
      "hex": "#9a99dd"
    },
    "id": 5
  },
  {
    "color": "softpink",
    "code": {
      "hex": "#dd99ba"
    },
    "id": 6
  },
  {
    "color": "bisque",
    "code": {
      "hex": "#dd9a99"
    },
    "id": 7
  },
  {
    "color": "softyellow",
    "code": {
      "hex": "#dcdd99"
    },
    "id": 8
  }
]