import { React, useState } from "react";
import List from "./List";
import Card from "react-bootstrap/Card";

function FilterList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Rate");
  return (
    <div style={{padding: "5px, 5px"}}>
      <h1 style={{textAlign: 'center', backgroundColor:"wheat", marginTop: "10px"}}>My Movies</h1>
      <label htmlFor="filter">Filter By:</label>
      <select
        id="filter"
        onChange={(e) => 
          setFilter(e.target.value)
        }
      >
        <option value="Rate">Rate</option>
        <option value="Title">Title</option>
      </select>
      <input
        type="text"
        placeholder="Search"
        className="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ margin: "auto 0px", display: "grid",  "grid-template-columns": "6fr 6fr 6fr", gap: 5 }}>
        {List.sort((a, b) =>
          filter === "Rate"
            ? b.Rating - a.Rating
            : a.Title.localeCompare(b.Title)
        )
          .filter((a) => a.Title.toLocaleLowerCase().includes(search))
          .map((item) => (
            <Card style={{ width: "18rem" }} key={item.id}>
              <Card.Img variant="top" src={item.url} alt={item.Title} />
              <Card.Body>
                <Card.Title>{item.Title}</Card.Title>
                <Card.Text>{item.Des}</Card.Text>
                <Card.Subtitle>{item.Rating}/10</Card.Subtitle>
              </Card.Body>
            </Card>
          ))};
      </div>
    </div>
  );
}

export default FilterList;
