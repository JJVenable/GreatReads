import React from 'react'
import ReviewCard from './ReviewCard'

export default function ReviewsContainer(props) {
  console.log(props.reviews.reviews)
  return (
    <div> 
     {props.reviews.reviews.map((review) => (
        <ReviewCard review={review} />
      ))}
    </div>
  )
}
