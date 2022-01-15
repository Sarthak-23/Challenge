import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Appbar = () => {
  const [searchvalue, setSearchvalue] = useState("");

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">Spacestagram</Navbar.Brand>
          <Form className="d-flex justify-content-end">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchvalue}
              name="search"
              onChange={(e) => setSearchvalue(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default Appbar;
