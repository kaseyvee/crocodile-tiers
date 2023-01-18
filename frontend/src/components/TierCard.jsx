import React from 'react';
import { Link } from 'react-router-dom';

function TierCard(props) {
  const tierList = props.tierList;

  return (
    <div
      key={tierList.id}
    >
      <Link to={`/${tierList.id}`}>{tierList.name}</Link>
      <p>id: {tierList.id}</p>
      <p>user_id: {tierList.user_id}</p>
      <p>Upvotes: {tierList.upvote}</p>
      <p>Downvotes: {tierList.downvote}</p>
      <p>Created At: {tierList.created_at}</p>
    </div>
  );
}

export default TierCard;