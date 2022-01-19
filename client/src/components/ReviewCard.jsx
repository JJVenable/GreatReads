import React from 'react'

const ReviewCard = (props) => {
  console.log(props.review)
  return (
    <div> 
      <div>Comment: {props.review.comments} Rating: {props.review.rating}</div>
        </div>
  )
}

export default ReviewCard

