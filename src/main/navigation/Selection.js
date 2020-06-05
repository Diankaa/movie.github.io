import React from "react";
import "./Selection.css";

const Selection = ({ genre, genres, onGenreChange }) => (
  <div className="selection">
    <label>Genre</label>
    <select value={genre} onChange={onGenreChange}>
    <option value="All">All</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.name}>
          {genre.name}
        </option>
      ))}
    </select>
  </div>
);

export default Selection;
