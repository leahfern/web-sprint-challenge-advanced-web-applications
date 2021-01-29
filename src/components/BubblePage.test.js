import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColors as MockFetchColors } from '../api/fetchColors'
jest.mock('../api/fetchColors');

test("Renders BubblePage without errors", () => {
  MockFetchColors.mockResolvedValueOnce({
    data: fakeData
  });
    // Arrange - render page
  const { getByText } = render (<BubblePage />)

  // Act - grab the title 'bubbles' and the title 'colors' to make sure both child components render
  const bubblesTitle = getByText(/bubbles/i);
  const colorsTitle = getByText(/colors/i);

  //Assert - bubbles and colors are available on page
  expect(bubblesTitle).toBeInTheDocument();
  expect(colorsTitle).toBeInTheDocument();
})

test("Fetches data and renders the bubbles on mounting", async () => {
  MockFetchColors.mockResolvedValueOnce({
    data: fakeData
  });

  //Arrange - render page and make sure there are no colors listed and no bubbles rendered
  const { getAllByTestId } = render(<BubblePage />);

    //Act - wait for useEffect
    await waitFor(()=>{
      //Assert - check if there are 8 bubbles
      expect (getAllByTestId('bubble')).toHaveLength(8);
    })

})

const fakeData = [
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