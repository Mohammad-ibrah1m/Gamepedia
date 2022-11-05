import React, { useContext } from "react";
import { AccordionContext } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Style from "./styles.module.css";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{
        backgroundColor: "transparent",
        border: "transparent",
        width: "100%",
        textAlign: "left",
        color: "white",
        fontSize: "14px",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Accor = () => {
  const list = [
    {
      title: "GAMES",
      items: [],
    },
    {
      title: "ALL Games",
      items: [],
    },
    {
      title: "Categories",
      items: [
        { name: "Action", icon: "icon1" },
        { name: "Adventure", icon: "icon2" },
        { name: "Indie", icon: "icon2" },
        { name: "Strategy", icon: "icon2" },
        { name: "Intellect", icon: "icon2" },
      ],
    },
    {
      title: "Recommended",
      items: [],
    },
    {
      title: "New!",
      items: [],
    },
    {
      title: "Most Played",
      items: [],
    },
  ];
  return (
    <div className={Style.container}>
      <Accordion defaultActiveKey="0">
        {list.map((row, index) => {
          return (
            <Card key={index} className={Style.myCard}>
              <Card.Header className={Style.myCardHeader}>
                <ContextAwareToggle eventKey={index}>
                  {row.title}
                </ContextAwareToggle>
              </Card.Header>
              {row.items.length == 0 ? (
                <div></div>
              ) : (
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                    <ul>
                      {row.items.map((item, index) => {
                        return (
                          <ContextAwareToggle>
                            <li key={index}>
                              <div>{item.name}</div>
                            </li>
                          </ContextAwareToggle>
                        );
                      })}
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              )}
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Accor;
