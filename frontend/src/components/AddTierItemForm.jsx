import React from 'react';

function AddTierItemForm(props) {
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
          <input type="text" className="form-control" id="image" placeholder="e.g. imgur.com/h3rj3.png" />
        </div>
        <div>
          <label htmlFor="tier">Tier</label>
          <select className="form-select">
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default AddTierItemForm;