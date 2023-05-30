import React, { useState } from 'react';
import "./Collapse.css"

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse_container">
            <div className='collapse_title' onClick={() => setIsOpen(!isOpen)}>
                <h3>{props.title}</h3>
                <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
            </div>
            <div className={`collapse_content ${isOpen ? "" : "disabled"}`}>
                {Array.isArray(props.content) && <ul> {props.content.map(equipment => <li key={equipment} >{equipment}</li>)} </ul>}
                {!Array.isArray(props.content) && props.content}
            </div>
        </div>
    );
};

export default Collapse;