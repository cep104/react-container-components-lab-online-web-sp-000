import React from "react";
//div being returned for each review, pass the reviews object to use or deconstruct it {headline,byline,link,summary_short}
//make sure each review is wrapped in a div with className = review
const Review = (reviews) => {
  return (
    <div key={reviews.headline} className="review">
      <header>
        <a href={reviews.link.url}>{reviews.headline}</a>
        <span>{reviews.byline}</span>
        <p>{reviews.summary_short}</p>
      </header>
    </div>
  );
};

const MovieReviews = ({ reviews }) => (
  //
  <div className="review-list">{reviews.map(Review)}</div>
  //for each review run through the Review const.
  //must have className review list
);

MovieReviews.defaultProps = {
  reviews: [],
};

export default MovieReviews;
