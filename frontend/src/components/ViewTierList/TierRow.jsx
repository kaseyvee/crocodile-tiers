import React from 'react';

function TierRow(props) {
  return (
    <div>
      {props.getTierItemsByRank(props.ranking)}
    </div>
  );
}

export default TierRow;