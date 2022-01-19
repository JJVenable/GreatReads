import React from 'react'
import ReviewCard from './ReviewCard'

export default function ReviewsContainer(props) {
  console.log(props.reviews.reviews.Reviews)
  console.log('i hope this works')
  return (
    <div> 
  {props.reviews.reviews.Reviews.map((review) => ( 
        <ReviewCard review={review} /> 
      ))} 
    </div>
  )
}
