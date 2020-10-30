import React from 'react';
import Navigation from '../component/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Fetra ANDRIAMAHALY</h1>
                    <h2>Développeur web et application</h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank">Télécharger</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;