import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import ReviewComment from "./ReviewComment";
import "../Styles/CarouselReviews.css";

const reviews = [
  { id: 1, name: "Juan Pérez", rating: 4.5, date: "15 de noviembre, 2024", comment: "Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.Muy buen lugar, cómodo y limpio.", photo: "../public/images/revelo.png" },
  { id: 2, name: "María López", rating: 5, date: "2024-11-19", comment: "Excelente ubicación y servicio.", photo: "user2.jpg" },
  { id: 3, name: "Carlos Ramírez", rating: 3, date: "2024-11-18", comment: "Aceptable, pero puede mejorar.", photo: "user3.jpg" },
  { id: 4, name: "Carlos Ramírez", rating: 3, date: "2024-11-18", comment: "Aceptable, pero puede mejorar.", photo: "user3.jpg" },
  { id: 5, name: "Carlos Ramírez", rating: 3, date: "2024-11-18", comment: "Aceptable, pero puede mejorar.", photo: "user3.jpg" },
  { id: 6, name: "Carlos Ramírez", rating: 3, date: "2024-11-18", comment: "Aceptable, pero puede mejorar.", photo: "user3.jpg" },
];





const CarouselReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={handlePrev}>
        &#8592;
      </button>
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 70}%)` }}>
        {reviews.map((review) => (
          <div className="carousel-review" key={review.id}>
            <div className="review-header">
            <img src={review.photo} alt={review.name} className="review-photo" />
            <div className="review-info">
            <h3 className="review-name">{review.name}</h3>
            <p className="review-date">{`Publicado el ${review.date}`}</p>
            
            </div>
            <div className="review-rating">
              {/* <span>Calificación:</span>{" "} */}
              
              <Rating name="read-only" value={review.rating} readOnly precision={0.5} size="medium"  />
            </div>
            
            </div>
            <div className="review-comment">
              <ReviewComment text={review.comment} maxVisibleChars={150} />
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button right" onClick={handleNext}>
        &#8594;
      </button>
    </div>
  );
};

export default CarouselReviews;
