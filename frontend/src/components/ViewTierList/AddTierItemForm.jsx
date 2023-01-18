import React, { useState } from 'react';
import axios from 'axios';
import './ViewTierList.scss';

function AddTierItemForm(props) {
  const [ranking, setRanking] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState(props.tierListName);

  const tier_list_id = props.tier_list_id;

  function handleChoosePhoto(e) {
    setError("");
    setPhoto(e.target.value);
    console.log("handlechoosephoto: ", e.target.value);
  }

  function handleChooseRanking(e) {
    setError("");
    setRanking(e.target.value);
    console.log("handlechooseranking: ", e.target.value);
  }

  function handleAddNewItem(e) {
    // e.preventDefault();
    // console.log("handleClick");

    axios.post(`/api/tier_items/${tier_list_id}/new`, {
      ranking: ranking,
      photo: photo
    });
  }

  function handleTierListNameChange(e) {
    setError("");
    setName(e.target.value);

  }

  function handleTierListNameUpdate(e) {
    axios.put(`/api/tier_lists/${tier_list_id}/edit`, {
      name: name
    });
  }

  return (
    <form className='form'>
      <h3>Add new item</h3>
      <div className='inputs'>
        {/* <div className="form-group col-16">
          <label for="name">Name</label>
          <input type="email" className="form-control" id="name" aria-describedby="emailHelp" placeholder="e.g. " />
        </div> */}
        <div className="col-16">
          <label htmlFor="image">Image</label>
          <input type="text" className="form-control" id="image" placeholder="e.g. imgur.com/h3rj3.png" value={photo} onChange={handleChoosePhoto} />
        </div>
        <div>
          <label htmlFor="tier">Tier</label>
          <select className="form-select" onChange={handleChooseRanking}>
            <option selected>Choose tier</option>
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-primary" onClick={handleAddNewItem}>Submit</button>
        </div>
      </div>
      <br />
      <div className='edit-tier-list-name'>
        <h3>Edit tier list name</h3>
        <div>
          <input type="text" value={name} onChange={handleTierListNameChange} className="form-control" />
          <button type="submit" className="btn btn-primary" onClick={handleTierListNameUpdate}>Submit</button>
        </div>
      </div>
    </form>
  );
}

export default AddTierItemForm;