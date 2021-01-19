import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "XMTwWMQrQXhpur00gQQGmW5pNGw93rRx";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}&query=`;
//have to add &query= at end
//may need to signup and get API key, go to page sign up and click on email and apps to get an API key.
class SearchableMovieReviews extends Component {
  state = {
    reviews: [],
    searchTerm: "",
  };
  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };
  handleSearch = (event) => {
    event.preventDefault();
    //prevent going to a new page
    fetch(URL.concat(this.state.searchTerm))
      //URL plus your searchterm
      .then((response) => response.json())
      .then((searchData) =>
        //set the reviews to the fetch results with searchterm
        this.setState({
          reviews: searchData.results,
        })
      );
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.searchTerm}
          />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviews;
