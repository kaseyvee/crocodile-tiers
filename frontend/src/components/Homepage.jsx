import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Homepage.scss';

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
        })
        return length;
      })
      .then((length) => {
        navigate(`/${length + 1}`)
      })
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
      <button onClick={handleAddNewTierList}>Add new tier list</button>
    </div>
  );
}

export default Homepage;