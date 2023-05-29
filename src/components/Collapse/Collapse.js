import React, { useState } from 'react';
import "./Collapse.css"

const Collapse = (props) => {
    // Variable qui définit l'état du dropdown (Ouvert ? true ou false)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown_description">
            
            <p className='dropdown_description_title' onClick={() => setIsOpen(!isOpen)}> 
                {props.title}
                <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
            </p>
            <div className={`dropdown_description_content ${isOpen ? "" : "disabled"}`}>
                {Array.isArray(props.content) && <ul>
                    {props.content.map(equipment => <li key={equipment} >{equipment}</li>)}
                    </ul>}
                {!Array.isArray(props.content) && props.content}
            </div>
        </div>
    );
};

export default Collapse;