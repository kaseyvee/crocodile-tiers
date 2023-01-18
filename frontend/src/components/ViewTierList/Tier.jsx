import React from 'react';
import './ViewTierList.scss';

function Tier(props) {
  return (
    <div className='tier-rank-item'>
      <div style={{ backgroundColor: `${props.colour}`, width: '100%' }}>
        {props.ranking}
      </div>
    </div>
  );
}

export default Tier;