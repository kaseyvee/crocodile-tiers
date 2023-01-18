import React from 'react';
import './ViewTierList.scss';

function TierRankItem(props) {
  return (
    <div className='tier-rank-item'>
      <div style={{ backgroundColor: `${props.colour}`, width: '100%' }}>
        {props.ranking}
      </div>
    </div>
  );
}

export default TierRankItem;