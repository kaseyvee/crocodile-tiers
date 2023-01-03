import React, { useState, useEffect } from 'react';
import './ViewTierList.scss';
import TierRankItem from './TierRankItem';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ViewTierList(props) {
  const [loading, setLoading] = useState(false);
  const [sortedTierItems, setSortedTierItems] = useState({
    "S": [],
    "A": [],
    "B": [],
    "C": [],
    "D": [],
    "F": []
  });

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/tier_items/${id}`)
      .then((res) => {
        let output = {};
        for (let item of res.data) {
          let rank = item.ranking;
          if (!output[rank] && rank !== null) {
            output[rank] = [];
            output[rank].push(item);
          } else if (rank !== null) {
            output[rank].push(item);
          }
        }
        setSortedTierItems(prev => ({ ...prev, ...output }));
      })
      .then(() => setLoading(false))
      .catch(err => { console.log("err:", err); });
  }, []);

  const getTierItemsByRank = function(rank) {
    return sortedTierItems[rank].map((tierItem) => {
      return (
        <img
          src={tierItem.photo}
          alt=""
        />
      );
    });
  };

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
      <TierRankItem
        key={tiers.indexOf(tier)}
        ranking={tier.ranking}
        colour={tier.colour}
      />
    );
  });

  return (
    <>
      {loading ? (<p>loading...</p>) : (<div className='ViewTierList'>
        <div>
          ViewTierList
        </div>

        <div className='tier-list-main'>
          <div className='tier-list-left'>
            {tierRanks}
          </div>
          <div className='tier-list-right'>
            <div>
              {getTierItemsByRank("S")}
            </div>

            <div>
              {getTierItemsByRank("A")}
            </div>

            <div>
              {getTierItemsByRank("B")}
            </div>

            <div>
              {getTierItemsByRank("C")}
            </div>

            <div>
              {getTierItemsByRank("D")}
            </div>

            <div>
              {getTierItemsByRank("F")}
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
      </div>)}
    </>
  );
}

export default ViewTierList;