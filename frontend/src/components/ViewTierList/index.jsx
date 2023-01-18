import React, { useState, useEffect } from 'react';
import './ViewTierList.scss';
import Tier from './Tier';
import Thumbnail from './Thumbnail';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddTierItemForm from './AddTierItemForm';
import TierRow from './TierRow';

function ViewTierList(props) {
  const [tierList, setTierList] = useState({});
  const [sortedTierItems, setSortedTierItems] = useState({
    "S": [],
    "A": [],
    "B": [],
    "C": [],
    "D": [],
    "F": []
  });
  const [deleteItem, setDeleteItem] = useState(false);

  const { id } = useParams();

  function fetchData() {
    Promise.all([
      axios.get(`/api/tier_items/${id}`),
      axios.get(`/api/tier_lists/${id}`)
    ])
      .then((res) => {
        if (res[0].data.length === 0) return;
        let output = {
          "S": [],
          "A": [],
          "B": [],
          "C": [],
          "D": [],
          "F": []
        };

        for (let item of res[0].data) {
          let rank = item.ranking;

          if (!output[rank] && rank !== null) {
            output[rank].push(item);
          } else if (rank !== null) {
            output[rank].push(item);
          }
        }
        setSortedTierItems({ ...output });
        setTierList(res[1].data[0]);
      })
      .catch(err => { console.log("err:", err); });
  }

  useEffect(() => {
    fetchData();
  }, [deleteItem]);

  function handleDeleteItem(id) {
    return axios
      .delete(`/api/tier_items/${id}`)
      .then(() => {
        deleteItem === false ? setDeleteItem(true) : setDeleteItem(false);
      });
  };

  function getTierItemsByRank(rank) {
    return sortedTierItems[rank].map((tierItem) => {
      return (
        <Thumbnail
          key={tierItem.id}
          id={tierItem.id}
          tierId={id}
          photo={tierItem.photo}
          handleDeleteItem={handleDeleteItem}
        />
      );
    });
  };

  const tiers = [
    { ranking: "S", colour: "#FF7F7E" },
    { ranking: "A", colour: "#FFBF7F" },
    { ranking: "B", colour: "#FEFF7F" },
    { ranking: "C", colour: "#7EFE7E" },
    { ranking: "D", colour: "#0A89FF" },
    { ranking: "F", colour: "#FF7FFE" }
  ];

  const tierRanks = tiers.map((tier) => {
    return (
      <Tier
        key={tiers.indexOf(tier)}
        ranking={tier.ranking}
        colour={tier.colour}
      />
    );
  });

  const itemsByRank = tiers.map((tier) => {
    return (
      <TierRow
        key={tiers.indexOf(tier)}
        ranking={tier.ranking}
        getTierItemsByRank={getTierItemsByRank}
      />
    );
  });

  return (
    <div className='ViewTierList'>
      {tierList.name ?
        <h1>"{tierList.name}" by {tierList.username}</h1>
        :
        <div></div>}

      <div className='tier-list-main'>
        <div className='tier-list-left'>
          {tierRanks}
        </div>
        <div className='tier-list-right'>
          {itemsByRank}
        </div>
      </div>

      <AddTierItemForm
        sortedTierItems
        setSortedTierItems
        tier_list_id={id}
        tierListName={tierList.name}
      />
    </div>
  );
}

export default ViewTierList;