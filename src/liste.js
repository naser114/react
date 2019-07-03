import React from "react";

const ListItem = props => {
  return (
    <li>
        {props.task}
        <button onClick={(index) => {props.itemRemove(props.index)}}>
    delete
  </button>
    </li>
  );
};

export default ListItem;