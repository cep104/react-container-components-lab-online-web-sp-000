//last test for LatestMovieReviews container won't pass till we get MovieReviews passing.
//comment SearchableMovieReviews out if getting errors till you set it up.

import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: [],
  };
  //make fetch request to get review data and set reviews, data is set under results
  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then(
        (movieData) =>
          this.setState({
            reviews: movieData.results,
          })
        //   ,() => console.log(this.state)
        // )
      );
  }
  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />

        {/* //pass reviews down to movieReviews */}
      </div>
    );
  }
}
export default LatestMovieReviewsContainer;
