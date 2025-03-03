import React, { useState } from 'react';
import reviews from './data';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const checkIndex = (num) => {
    if (num < 0) return reviews.length - 1;
    if (num >= reviews.length) return 0;
    return num;
  };

  const nextReview = () => setIndex((prevIndex) => checkIndex(prevIndex + 1));
  const prevReview = () => setIndex((prevIndex) => checkIndex(prevIndex - 1));
  const randomReview = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * reviews.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  return (
    <article className="review">
      <img src={image} alt={name} className="person-img" />
      <h4 id={`author-${id}`} className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>&lt;</button>
        <button className="next-btn" onClick={nextReview}>&gt;</button>
      </div>
      <button className="random-btn" onClick={randomReview}>surprise me</button>
    </article>
  );
};

export default Review;