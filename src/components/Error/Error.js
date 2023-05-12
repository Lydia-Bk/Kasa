import React from 'react';
import '../Error/Error.css'

const Error = () => {
    return (
        <div>
            <p className='error_number'>404</p>
            <p className='error_title'>Oups! La page que vous demandez n'existe pas.</p>
            <p className='error_return'>Retourner sur la page d'accueil</p>

        </div>
    );
};

export default Error;