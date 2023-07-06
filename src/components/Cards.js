import React from "react";


import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope);

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
