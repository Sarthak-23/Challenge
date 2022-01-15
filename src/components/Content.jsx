import React from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "./Cards";

const Content = ({ data }) => {
  return (
    <Container className="mt-5 mb-5 pt-5">
      <Row className="justify-content-center align-items-center">
        {data &&
          data.map((item, index) => {
            return <Cards data={item} key={index} />;
          })}
      </Row>
    </Container>
  );
};

export default Content;
