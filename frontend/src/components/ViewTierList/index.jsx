import React, { useState, useEffect } from 'react';
import './ViewTierList.scss';
import TierRankItem from './TierRankItem';
import TierPhotoItem from './TierPhotoItem';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddTierItemForm from './AddTierItemForm';
import ItemsByRank from './ItemsByRank';

function ViewTierList(props) {
  const [loading, setLoading] = useState(false);
  const [tierList, setTierList] = useState({});
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

    Promise.all([
      axios.get(`/api/tier_items/${id}`),
      axios.get(`/api/tier_lists/${id}`)
    ])
      .then((res) => {
        if (res[0].data.length === 0) return;
        let output = {};

        for (let item of res[0].data) {
          let rank = item.ranking;

          if (!output[rank] && rank !== null) {
            output[rank] = [];
            output[rank].push(item);
          } else if (rank !== null) {
            output[rank].push(item);
          }
        }
        setSortedTierItems(prev => ({ ...prev, ...output }));
        setTierList(res[1].data[0]);
      })
      .then(() => setLoading(false))
      .catch(err => { console.log("err:", err); });

  }, []);

  function getTierItemsByRank(rank) {
    return sortedTierItems[rank].map((tierItem) => {
      return (
        <TierPhotoItem
          key={tierItem.id}
          photo={tierItem.photo}
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
      <TierRankItem
        key={tiers.indexOf(tier)}
        ranking={tier.ranking}
        colour={tier.colour}
      />
    );
  });

  const itemsByRank = tiers.map((tier) => {
    return (
      <ItemsByRank
        key={tiers.indexOf(tier)}
        ranking={tier.ranking}
        getTierItemsByRank={getTierItemsByRank}
      />
    );
  });

  return (
    <>
      {loading
        ?
        (<p>loading...</p>)
        :
        (<div className='ViewTierList'>
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

        </div>)}
    </>
  );
}

export default ViewTierList;