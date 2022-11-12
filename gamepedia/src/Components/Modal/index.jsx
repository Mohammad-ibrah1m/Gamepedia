import style from './style.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Col,Row,Container } from 'react-bootstrap';


import React from 'react'

const PopUp = ({title,description}) => {
    const [show, setShow] = useState(false);
    const[data,setData] = useState({name:"Hlel",desc:"lorem ipsum"});
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setData({title:title,description:description});
  };
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {title}
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {description}
          </Button>
        </Modal.Footer>
      </Modal>
      <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={12}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    </>
  )
}

export default PopUp;