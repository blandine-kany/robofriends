import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // When looping in react a key property must be created
  // the vDOM tracks the array elements but without a key prop
  // if one element gets modified or deleted react won't know
  // which one is which so the entire DOM would have to be reloaded
  // which is something we don't want - minimise DOM manipulation
  // So the key prop has to be something unique & doesn't change
  const cardsArray = robots.map((user, i) => {
    return (
      <Card
        key={robots[i].id}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardsArray} </div>;
};

export default CardList;
