import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Homepage.scss';
import TierCard from './TierCard';

function Homepage() {
  const navigate = useNavigate();
  const [tierLists, setTierLists] = useState([]);

  useEffect(() => {
    fetchTierLists();
  }, []);

  function fetchTierLists() {
    axios.get("/api/tier_lists").then((data) => {
      console.log("data", data.data);
      setTierLists(data.data);
    });
  }

  function handleAddNewTierList() {
    axios.get("api/tier_lists").then((res) => {
      return res.data.length;
    })
      .then(length => {
        axios.post(`/api/tier_lists/new`, {
          id: 1,
          name: "new list"
        });
        return length;
      })
      .then((length) => {
        navigate(`/${length + 1}`);
      });
  }

  const allTierLists = tierLists.map((tierList) => {
    return (
      <TierCard
        key={tierList.id}
        tierList={tierList}
      />
    );
  });

  return (
    <div className='Homepage'>
      <div>
        Home Page <br />
        {allTierLists}
      </div>
      <button onClick={handleAddNewTierList}>Add new tier list</button>
    </div>
  );
}

export default Homepage;