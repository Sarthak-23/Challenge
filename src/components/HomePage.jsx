import React, { useState, useEffect } from "react";
import { Navbar, Container, Form, FormControl, Row } from "react-bootstrap";
import Content from "./Content";
import EmptyContent from "./EmptyContent";

var api = process.env.REACT_APP_API_URL;

const HomePage = () => {
  const [data, setData] = useState([]);
  const [searchvalue, setSearchvalue] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (searchvalue.length > 0) {
        searchvalue.replace(/\s+/g, "");
        api = `https://images-api.nasa.gov/search?year_start=2010&title=${searchvalue}&q=`;
      }
      const res = await fetch(`${api}`);
      const result = await res.json();
      setData(result.collection.items);
    }
    fetchData();
  }, [searchvalue]);
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/shopify-challenge/">Spacestagram</Navbar.Brand>
          <Form className="d-flex justify-content-end">
            <FormControl
              type="title"
              placeholder="Search by title"
              className="me-2"
              aria-label="Search"
              value={searchvalue}
              name="search"
              onChange={(e) => setSearchvalue(e.target.value)}
            />
          </Form>
        </Container>
      </Navbar>
      {data.length > 0 ? <Content data={data} /> : <EmptyContent />}
    </>
  );
};

export default HomePage;
