import React from 'react';
import { Link } from 'react-router-dom';
import Moment from "react-moment";
import './TierCard.scss';

function TierCard(props) {
  const tierList = props.tierList;
  console.log("tierList: ", tierList);

  return (
    <div className='tier-card'>
      <div className='left-half'>
        <div className='tier-list-name'>
          <Link to={`/${tierList.id}`}>{tierList.name}</Link>
        </div>
        <div className='tier-list-author'>
          <p>by {tierList.username}</p>
        </div>
        <p>last edited at <Moment fromNow>{tierList.created_at}</Moment></p>
      </div>
      <div className='right-half'>
        <div><i class="fa-regular fa-thumbs-up"></i> {tierList.upvote}</div>
        <div><i class="fa-regular fa-thumbs-down"></i> {tierList.downvote}</div>
      </div>
    </div>
  );
}

export default TierCard;