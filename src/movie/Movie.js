import React from "react";
import "./Movie.css";
import LoadingMovie from "./LoadingMovie";

class Movie extends React.Component {
  state = {
    movie: {},
    isLoading: true,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;
    fetch(movieUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ movie: data, isLoading: false }))
      .catch((error) => console.log("Error: ", error));
  }
  render() {
    const {
      title,
      backdrop_path,
      release_date,
      genres,
      overview,
      vote_average,
      runtime,
    } = this.state.movie;
    const releaseYear = release_date ? release_date.substring(0, 4) : null;
    const backdropStyle = {
      backgroundImage: `url(http://image.tmdb.org/t/p/w1280/${backdrop_path})`,
    };
    return (
      <div className="movie-page">
        {this.state.isLoading ? (
          <LoadingMovie />
        ) : (
          <div>
            <div className="movie-image" style={backdropStyle} />
            <div className="movie-details">
              <h1>
                {title}
                <span>({releaseYear})</span>
              </h1>
              <div className="genres">
                {genres.map((genre, index) => (
                  <div key={genre.id}>
                    <span>{genre.name}</span>
                    {index < genres.length - 1 && (
                      <span className="separator">|</span>
                    )}
                  </div>
                ))}
              </div>
              <h5>
                Rating:
                <span>{vote_average}</span>
              </h5>
              <h5>
                Runtime:
                <span>{`${runtime} min`}</span>
              </h5>
              <h4>Overview</h4>
              <p>{overview}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Movie;
