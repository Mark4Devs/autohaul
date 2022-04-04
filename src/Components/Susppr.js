import React from "react";

export const Susppr = (props) =>{
    return(
    <div className="prices_holder">
        <div className="prices_category">
            <h4>Category</h4>
            <h4>Price</h4>
        </div>
        <div className="prices_stats">
            <div className="cat">
                <ul>
                    {props.data.map((job, id) =>
                        <li key={id}>
                            <span>{job.work}</span>
                            <span>{job.price} $</span>
                        </li>
                    )}     
                </ul>  
            </div> 
        </div>
    </div>
      );
}

export default Susppr; 