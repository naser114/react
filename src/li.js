    import React from "react";

    const ListItem = props => {
      return (
        <li>
            {props.item}
            <button onClick={
          () => {props.itemRemove(props.index)}
        }>
        delete
      </button>
        </li>
      );
    };
    
    export default ListItem;




