import React from 'react';
import axios from 'axios';

export default function Thumbnail(props) {

  return (
    <div className='thumbnail'>
      <img
        src={props.photo}
        alt=""
      />
      <img
        className='delete-button-img'
        src='https://i.imgur.com/mCxH3yG.png'
        alt='delete button'
        onClick={() => props.handleDeleteItem(props.id)}
      />
    </div>
  );
}
