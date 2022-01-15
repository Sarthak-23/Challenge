import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const EmptyContent = () => {
  return (
    <Container className="mt-5 mb-5 pt-5 justify-content-center align-items-center">
      <Row className="justify-content-center align-items-center">
        <Col>
          <p>No Data to show.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default EmptyContent;
