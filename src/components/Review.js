import React, { useState } from 'react'


const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'Web Developer',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse...",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'Web Designer',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle...',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'Intern',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn...',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'The Boss',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom...',
    }
  ];
  

const Review = () => {

    const [index, setIndex] = useState(0);


    const prevReview = () => {
        setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const nextReview = () => {
        setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const randomReview = () => {
        let newIndex;

        do {
            newIndex = Math.floor(Math.random()* reviews.length);
        } while(newIndex === index);

        setIndex(newIndex);
    };

    const {id, name, job, image, text } = reviews[index];


  return (
    <article className="review">
      <div className="image">
        <img src={image} alt={name} className="person-img" />
      </div>
      <h3 className="author" id={`author-${id}`}>{name}</h3>
      <h4 className="job">{job}</h4>
      <p className="info">{text}</p>

      <div>
        <button className="prev-btn" onClick={prevReview}>Prev</button>
        <button className="next-btn" onClick={nextReview}>Next</button>
      </div>

      <button className="random-btn" onClick={randomReview}>Surprise Me</button>
    </article>
  )
}

export default Review