import React from 'react';
import Navigation from '../components/Navigation'; 
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>
                      Bienvenue
                    </h1>
                    <h2> 
                        <Typewriter 
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Moi c'est Fetra,")
                                    .pauseFor(2500)
                                    .typeString(" Développeur Web et application")
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString(' Je Développes en Php/Symfony')
                                    .pauseFor(1500)
                                    .deleteChars(11)
                                    .typeString(' Js/React')
                                    .start()
                                    .deleteAll()
                            }}
                        />
                    </h2>

                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank" >Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;