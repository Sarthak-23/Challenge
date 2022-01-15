import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  OverlayTrigger,
  Tooltip,
  Row,
} from "react-bootstrap";
import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
import ModalView from "./ModalView";

const Cards = ({ data }) => {
  const [reaction, setReaction] = useState();
  const [description, setDescription] = useState(false);
  const [showmodal, setshowmodal] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip">{props}</Tooltip>
  );

  const handleReaction = (id, bool) => {
    localStorage.setItem(id, bool);
    setReaction(bool);
  };

  if (!data) return <div></div>;

  //maxlength of description string
  var maxlength = 150;
  var trimmedString =
    data.data[0].description.length > maxlength
      ? data.data[0].description.slice(0, maxlength)
      : data.data[0].description;

  // Formating the Date
  var date = new Date(data.data[0].date_created).toLocaleDateString();

  return (
    <Col className="mt-3">
      <Card style={{ width: "25rem" }} className="mb-5 card1">
        <Card.Img
          variant="top"
          src={data.links[0].href}
          style={{ width: "25rem", height: "300px" }}
        />
        <Card.Body>
          <Card.Text className="d-flex justify-content-between align-items-center">
            {localStorage.getItem(data.data[0].nasa_id) === "true" ? (
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("UnLike")}
              >
                <span>
                  <RiHeart2Fill
                    onClick={() => {
                      handleReaction(data.data[0].nasa_id, false);
                    }}
                    size="30px"
                    color="red"
                  />
                </span>
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("Like")}
              >
                <span>
                  <RiHeart2Line
                    onClick={() => {
                      handleReaction(data.data[0].nasa_id, true);
                    }}
                    size="30px"
                    color="red"
                  />
                </span>
              </OverlayTrigger>
            )}
            <span>{date}</span>
          </Card.Text>
          <Card.Title style={{ textAlign: "center" }} className="mb-4">
            {data.data[0].title}
          </Card.Title>
          <Card.Title style={{ fontSize: "15px" }}>
            {description ? (
              data.data[0].description
            ) : (
              <>
                {trimmedString + " ... "}
                <span
                  style={{ color: "blue" }}
                  onClick={() => setshowmodal(true)}
                >
                  Read More
                </span>
                <ModalView
                  show={showmodal}
                  onHide={() => setshowmodal(false)}
                  data={data}
                />
              </>
            )}
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
