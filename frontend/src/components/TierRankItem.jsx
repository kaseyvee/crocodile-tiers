import React from 'react';

function TierRankItem(props) {
  return (
    <div>
      <div style={{ backgroundColor: `${props.colour}`, width: '100%' }}>
        {props.ranking}
      </div>
    </div>
  );
}

export default TierRankItem;