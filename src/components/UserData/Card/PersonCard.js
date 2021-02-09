import React from "react";
import classes from "./PersonCard.module.css";

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <img src={props.person.avatar} alt={props.person.first_name} />
      <p className={classes.PersonName}>
       User Name:{" "}
        <h3>
          {props.person.first_name} {props.person.last_name}
       </h3>
      </p>
      <p className={classes.PersonEmail}>
        Email:{" "}
        <strong>
          <em>{props.person.email}</em>
        </strong>
      </p>
    </div>
  );
};

export default Card;
