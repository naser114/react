import React from 'react';
const List = props => (
  <ul>
    {
      props.items.map((item, index) =>{
         return (<>
         <li key={index}>{item}</li>
         <button style={{display: "inline-block"}} onClick={()=> props.onDelete(index)}>Delete</button>
         <button onClick={()=>props.onComplete(index)}>cross</button>
         </>
         )
    })
  }
  </ul>
);


export default List;