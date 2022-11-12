import React from "react";
import Style from "./Style.module.css";
import BoldTitle from "../Texts/BoldTitle";
import LightWords from "../Texts/LightWords";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Box = ({}) => {
  return (
    <Card
      style={{ width: "255px", backgroundColor: "#333442" }}
      className={Style.boxContainer}
    >
      <Card.Img
        variant="top"
        src="https://dummyjson.com/image/i/products/3/1.jpg"
        className={Style.BoxImage}
      />
      <Card.Body>
        <Card.Title>
          <BoldTitle />
        </Card.Title>
        <Card.Text>
          <LightWords />
        </Card.Text>
        <Card.Text className={Style.fixedTitle}>Action</Card.Text>
        <hr className={Style.hrBox} />
        <div className={Style.AcceptButtonDiv}>
          <Button className={Style.AcceptButton}>Accept</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Box;
