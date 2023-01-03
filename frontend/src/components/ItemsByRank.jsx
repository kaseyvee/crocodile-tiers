import React from 'react';

function ItemsByRank(props) {
  return (
    <div>
      {props.getTierItemsByRank(props.ranking)}
    </div>
  );
}

export default ItemsByRank;