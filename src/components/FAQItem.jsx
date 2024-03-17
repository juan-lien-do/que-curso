import React from "react";
import Accordion from "react-bootstrap/Accordion";

export const FAQItem = ({ id, title, description }) => {
  return (
    <Accordion.Item eventKey={id}>
      <Accordion.Header>
        <strong style={{ color: "#8446CF" }}>{title}</strong>
      </Accordion.Header>
      <Accordion.Body>{description}</Accordion.Body>
    </Accordion.Item>
  );
};
