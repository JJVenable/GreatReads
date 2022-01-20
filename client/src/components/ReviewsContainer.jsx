import React from 'react'
import ReviewCard from './ReviewCard'


export default function ReviewsContainer(props) {

  return (
    <div>
      {props.reviews.reviews.Reviews.map((review, index) => (
        <ReviewCard
          key={index}
          review={review}
        />
      ))}
    </div>
  )
}