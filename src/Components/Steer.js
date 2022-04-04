import React from "react";

export const Steer = (props) =>{
    return(
    <div className="cats_desc_holder">
      <div className="text_holder">
        <h2>{props.data[0].title}</h2>
        <p>  
          {props.data[0].desc}
        </p>
        <ul>
          <h3>{props.data[0].listTitle}</h3>
          {props.data.map((tool, id) =>
            <li key={id}>{tool.item}</li>
          )} 
        </ul>
      </div>
      <div className="image_holder">
        <img src={props.data[0].image} />
      </div>
    </div>
      );
}

export default Steer; 