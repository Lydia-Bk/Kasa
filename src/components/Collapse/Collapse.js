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
            <p className={`dropdown_description_content ${isOpen ? "" : "disabled"}`}>
                {Array.isArray(props.content) && <ul>
                    {props.content.map(equipment => <li>{equipment}</li>)}
                    </ul>}
                {!Array.isArray(props.content) && props.content}

           
            </p>
        </div>
    );
};

export default Collapse;