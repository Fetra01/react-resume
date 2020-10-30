import React from 'react';

const Languanges = () => {
    return (
        <div className="languangesContent">
            <h3>Languages & Framworks</h3>
            <div className="languages">
                <h4>Languages</h4>
                <ul>
                    <li>
                        <i className="fab fa-js"></i> 
                        <span>Javascript</span>
                    </li>
                    <li>
                        <i className="fab fa-php"></i>
                        <span>Php</span>
                    </li>
                    <li>
                        <i className="fab fa-css3"></i>
                        <span>Css</span>
                    </li>
                    <li>
                        <i className="fas fa-database"></i>
                        <span>SQL</span>
                    </li>
                </ul>
            </div>

            <div className="frameworks">
                <h4>Framworks</h4>
                <ul>
                    <li>
                        <i className="fab fa-react"></i>
                        <span>React</span>
                    </li>
                    <li>
                        <i className="fab fa-bootstrap"></i>
                        <span>Bootstrap</span>
                    </li>
                    <li>
                        <i className="fab fa-sass"></i>
                        <span>Sass</span>
                    </li>
                    <li>
                        <i className="fab fa-symfony"></i>
                        <span>Symphony</span>
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

export default Languanges;