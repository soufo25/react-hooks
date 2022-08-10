import React, { useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import List from "./List";
import { v4 as uuidv4 } from "uuid";

function NewMovie({ show, setShow }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [des, setDes] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);



  const handleClick = () => {
    if (title == "" || rating == "" || des == "" || url == "") {
      setError("please fill all the data");
      return;
    } else {
    
     
      const obj = {
        id: uuidv4(),
        Title: title,
        Rating: rating,
        Des: des,
        url: url,
      };
      //make sure all data are filed
      List.push(obj);
      setTitle("");
      setRating("");
      setDes("");
      setUrl("");
      setError(null);
      setShow(false)
    }
  };

  const handleClose = () => {
    
      setShow(false);
    
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && (
            <>
              <p>{error}</p>
            </>
          )}
          <label> Add Movie: </label>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            style={{ border: "none" }}
          ></input>
          <br></br>
          <label> Description: </label>
          <input
            type="text"
            onChange={(e) => {
              setDes(e.target.value);
            }}
            style={{ border: "none" }}
          ></input>
          <br></br>
          <label> Rating: </label>
          <input
            type="number"
            onChange={(e) => {
              setRating(e.target.value);
            }}
            style={{ border: "none" }}
          ></input>
          <br></br>
          <label> URL: </label>
          <input
            type="text"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            style={{ border: "none" }}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClick();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewMovie;
