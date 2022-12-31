import React from 'react';
import './ViewTierList.scss';

function ViewTierList() {
  const tiers = [
    { ranking: "S", colour: "#FF7F7E" },
    { ranking: "A", colour: "#FFBF7F" },
    { ranking: "B", colour: "#FEFF7F" },
    { ranking: "C", colour: "#7EFE7E" },
    { ranking: "D", colour: "#7FFFFF" },
    { ranking: "F", colour: "#FF7FFE" }
  ];

  const tierRanks = tiers.map((tier) => {
    return (
      <div className='tier-row'>
        <div className='tier-rank' style={{ backgroundColor: `${tier.colour}` }}>
          {tier.ranking}
        </div>
        <div className='items-row'></div>
      </div>
    );
  });

  return (
    <div className='ViewTierList'>
      <div>
        ViewTierList
      </div>

      <div className='tier-box'>
        {tierRanks}
      </div>

      <form className='form'>
        <h3>Add new item</h3>
        <div className='inputs'>
          {/* <div className="form-group col-16">
            <label for="name">Name</label>
            <input type="email" className="form-control" id="name" aria-describedby="emailHelp" placeholder="e.g. " />
          </div> */}
          <div className="col-16">
            <label for="image">Image</label>
            <input type="text" className="form-control" id="image" placeholder="e.g. imgur.com/h3rj3.png" />
          </div>
          <div>
            <label for="tier">Tier</label>
            <select class="form-select">
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
    </div>
  );
}

export default ViewTierList;