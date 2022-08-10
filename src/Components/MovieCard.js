import React,{useState} from 'react';
import FilterList from './FilterList'
import NewMovie from "./Newmovie"

function MovieCard() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Rate");
  
  const [show, setShow] = useState(false);
  return (
    <div className ="container">
      <h1 style={{textAlign: 'center', backgroundColor:"wheat", marginTop: "10px"}}>My Movies</h1>
      <label htmlFor="filter" style={{padding: "10px"}}>Filter By:</label>
      <select
        id="filter"
        onChange={(e) => 
          setFilter(e.target.value)
        }
      >
        <option value="Rate">Rate</option>
        <option value="Title">Title</option>
      </select>
      <label htmlFor="Search" style={{marginLeft:"300px", padding:"10px"}}> Search: </label>
      <input
        type="text"
        placeholder="Search"
        className="Search"
        onChange={(e) => setSearch(e.target.value)} style = {{boxSizing: "border-box"}}
      />
      <NewMovie show={show} setShow={setShow}/>
      <FilterList search={search} filter={filter}/>
    </div>
  );
}

export default MovieCard;
