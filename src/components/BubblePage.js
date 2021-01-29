import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { fetchColors } from "../api/fetchColors";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);



  //When `BubblePages` renders, make a GET request to fetch the color data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchColors();
      setColorList(res.data);
    }
    fetchData();

    // axiosWithAuth()
    //   .get('/colors')
    //   .then(res => {
    //     setColorList(res.data)
    //   })
    //   .catch(err => {
    //     console.log('');
    //   })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting. X
