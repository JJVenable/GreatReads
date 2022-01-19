import React from "react";
import ReviewCard from "./ReviewCard";


export default function ReviewsContainer(props) {

  console.log('props:', props.reviews.reviews.Reviews)

  return (
    <div>
      {props.reviews.reviews.map((review) => (
        <ReviewCard review={review} />
      ))}

    </div>
  );
}
