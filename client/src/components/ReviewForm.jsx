import React from 'react'

export default function ReviewForm(props) {
  return (
    <div>
      <div>Add a review here: </div>
      <input type="text" name="comments" placeholder="Enter comment"/>  
      <input type="text" name="rating" placeholder="Enter rating"/>  
      <button>Submit review</button>
        </div>
  )
}
