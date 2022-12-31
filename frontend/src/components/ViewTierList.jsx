import React from 'react';
import './ViewTierList.scss';

function ViewTierList() {



  return (
    <div className='ViewTierList'>
      <div>
        ViewTierList
      </div>

      {/* main tier list div */}
      <div className='tier-list-main'>
        <div className='tier-list-left'>
          <div>S</div>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>F</div>
        </div>
        <div className='tier-list-right'>
          {/* S rating */}
          <div>
            <img src='https://i.imgur.com/nFPH5Pf.png' alt='tier list item' />
            <img src='https://i.imgur.com/N5ZdQzO.png' alt='tier list item' />
            <img src='https://i.imgur.com/AnOdNDC.png' alt='tier list item' />
          </div>

          {/* A rating */}
          <div>
            <img src='https://i.imgur.com/sLCkGhk.png' alt='tier list item' />
          </div>

          {/* B rating */}
          <div>
            <img src='https://i.imgur.com/nfrl1Rs.png' alt='tier list item' />
          </div>

          {/* C rating */}
          <div>
            <img src='https://i.imgur.com/7EpYJJL.png' alt='tier list item' />
          </div>

          {/* D rating */}
          <div>
            <img src='https://i.imgur.com/XVIxZwI.png' alt='tier list item' />
          </div>

          {/* F rating */}
          <div>
            <img src='https://i.imgur.com/cttPzot.png' alt='tier list item' />
          </div>
        </div>
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