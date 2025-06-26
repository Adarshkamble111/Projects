import "./App.css";
import { Routes, Route } from "react-router-dom"; // In the place of the switch component we used the routes.
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';

// import { Switch} from "react-router-dom";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
        <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<AboutView/>} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />}>
          </Route>
        <Route path="/movies/:id" element={<MovieView/>} />
        
        </Routes>
    </div>
  );
}

export default App;
