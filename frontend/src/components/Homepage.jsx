import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Homepage.scss';

function Homepage() {
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

  const tierList = tierLists.map((tierList) => {
    return (
      <div
        key={tierList.id}
      >
        <Link to={`/${tierList.id}`}>{tierList.name}</Link>
        <p>id: {tierList.id}</p>
        <p>user_id: {tierList.user_id}</p>
        <p>Upvotes: {tierList.upvote}</p>
        <p>Downvotes: {tierList.downvote}</p>
        <p>Created At: {tierList.created_at}</p>
      </div>
    );
  });

  return (
    <div className='Homepage'>
      <div>
        Home Page <br />
        {tierList}
      </div>
      <Link to="/new">Add new tier list</Link>
    </div>
  );
}

export default Homepage;