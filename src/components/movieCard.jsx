import React from 'react'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }) => {
  const { title, vote_average, poster_path, release_date, original_language } = movie;
  
  const posterUrl = poster_path 
    ? `${IMAGE_BASE_URL}${poster_path}` 
    : './no-movie.png';
  
  const year = release_date 
    ? new Date(release_date).getFullYear() 
    : 'N/A';
  
  const language = original_language ? original_language.toUpperCase() : 'N/A';

  return (
    <div className="movie-card">
      <img 
        src={posterUrl} 
        alt={title}
        onError={(e) => {
          e.target.src = './no-movie.png';
        }}
      />
      <div className="content">
        <h3>{title}</h3>
        <div className="rating">
          <img src="./star.svg" alt="star" />
          <p>{vote_average?.toFixed(1)}</p>
        </div>
        <span>•</span>
        <span className="lang">{language}</span>
        <span>•</span>
        <span className="year">{year}</span>
      </div>
    </div>
  );
};

export default MovieCard;