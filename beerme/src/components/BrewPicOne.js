import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SearchContainer from './SearchContainer';

export default function BrewPicOne() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className='brewPicOne'>
        <Button variant="warning" onClick={handleShow} className="searchButton">
          Search For Breweries
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Lets Get Drinking!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SearchContainer />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* <div className='picOneContainer'>
            <img src={brewPic} alt="outdoor patio of brewing company" className="brewPicOne"></img>
        </div> */}
      </div>
    );
}