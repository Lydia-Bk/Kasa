import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_logo">
                <img src="/logo_footer.png" alt="logo" />
            </div>
            <div className="footer_text">© 2020 Kasa. All rights reserved</div>

        </div>
    );
};

export default Footer;