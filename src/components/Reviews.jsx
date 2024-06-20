import React from 'react';
import 'index.css';

const Reviews = ({ reviews }) => {
  if (!reviews.length) return <p>No reviews available.</p>;

  return (
    <div>
      <h2>Reviews</h2>
      <ul className="reviews-ul">
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
