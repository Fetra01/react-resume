import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérets</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Course à pied</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-basketball-ball"></i>
                    <span>BasketBall</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-gamepad"></i>
                    <span>Jeux vidéo</span>
                </li>
                <li className="hobby">
                  <i className="fas fa-hiking"></i>
                  <span>Randonnées</span>
                </li>
            </ul>            
        </div>
    );
};

export default Hobbies;