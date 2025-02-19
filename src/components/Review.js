import React, { useState } from 'react'
import reviews from './data';

const Review = () => {

  const [index, setIndex] = useState(0);
  const {id , name , job , image, text} = reviews[index];

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex -1));
  }

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  }

  const randomReview = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * reviews.length);

    } while(randomIndex === index){
      setIndex(randomIndex);
    }
  } 

  return (
    <article className="review">
      <img src={image} alt={name} className="person-img" />
      <h4 id={`author${id}`} className="author"> {name} </h4>
      <p className="job"> {job} </p>
      <p className="info"> {text} </p>

      <div>
        <button className="prev-btn" onClick={prevReview}> Prev </button>
        <button className="next-btn" onClick={nextReview}> Next </button>
      </div>

      <button className="random-btn" onClick={randomReview}> Surprice Me </button>

    </article>
  )
}

export default Review