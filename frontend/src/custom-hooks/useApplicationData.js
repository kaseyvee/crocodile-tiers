import React, { useState } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    users: [],
    tierLists: [],
    tierItems: []
  });

  function loadApplicationData() {
    console.log("loadApplicationData start");
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/tier_lists"),
      axios.get("/api/tier_items"),
    ])
      .then((res) => {
        console.log("res", res);
        // console.log("res[0].data", res[0].data);
        // console.log("res[1].data", res[1].data);
        // console.log("res[2].data", res[2].data);
        setState((prev) => ({
          ...prev,
          users: res[0].data,
          tierLists: res[1].data,
          tierItems: res[2].data
        }));
      })
      .then(() => console.log("loadApplicationData end"))
  }

  return {
    state, setState, loadApplicationData
  };
}