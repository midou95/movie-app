 
import React, { useState } from "react";
import { list } from "./data";

import  'bootstrap/dist/css/bootstrap.min.css';
import Search from './serch';
import MoviesList from './components/movielist'
import AddMovie from './components/addmovie';


function App() {
  const [movies, setMovies] = useState(list);

  const [searchValue, setSearchValue] = useState("");
  const [serachRate, setSerachRate] = useState(1);

  //handleValue
  const handleValue = (e) => setSearchValue(e.target.value);
  //handleRate
  const handleRate = (Rating) => setSerachRate(Rating);
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <h1 id="mylogo">MOVIEAPP</h1>

        </div>
        <Search
            handleValue={handleValue}
            searchValue={searchValue}
            serachRate={serachRate}
            handleRate={handleRate}
          />
       

      </div>
      <div>
      <MoviesList
            movies={movies.filter(
              (el) =>
                el.name
                  .toUpperCase()
                  .includes(searchValue.toUpperCase().trim()) &&
                el.rate >= serachRate
            )}
          />

    
    </div>
    <div>
      <AddMovie setMovies={setMovies} movies={movies} />
    </div>
    </div>
  );
}

export default App;
