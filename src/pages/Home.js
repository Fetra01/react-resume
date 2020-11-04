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
                                    .deleteChars(18)
                                    .typeString("React")
                                    .start();
                            }}
                           
                        />
                        {/*<Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Hello World!')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(2500)
                                .deleteAll()
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                             }}
                        />
                        <Typewriter
                            options={{
                                strings: ['Hello', 'World'],
                                autoStart: true,
                                loop: true,
                            }}
                        />*/}
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