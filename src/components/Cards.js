import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Cards(props) {
    return (

        <div className="card lines-background">
            <div className="icon">
                <FontAwesomeIcon icon={props.icon} />
            </div>               
            <div className="title">
                <h3>{props.title}</h3>
            </div>
            <div className="description">
                <p>{props.desc}</p>
            </div>
        </div>      
    );
}
