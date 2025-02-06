import React from 'react';

const Card = ({ name, image, text, job }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={name} />
      </div>

      <div className="text">
        <h3>{name}</h3>
        <p><strong>Job:</strong> {job}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
