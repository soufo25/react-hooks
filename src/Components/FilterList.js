import React,{ useState, useEffect } from "react";
import List from "./List";
import Card from "react-bootstrap/Card";

function FilterList({search,filter}) {
  

  
 
   return (
    <div style={{padding: "5px, 5px"}}>
      
        
       

      <div style={{ margin: "auto 0px", display: "grid",  gridTemplateColumns: "6fr 6fr 6fr", gap: "5"}}>
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
          ))}
      </div>
    </div>
  );
}

export default FilterList;
