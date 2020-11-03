import React from 'react';

const Experiences = () => {
    return (
        <div className="experiences">
            <h3>Expérience</h3>
            <div className="exp1">
                <h4>Développeur web | <a href="http://www.cigaloisirs.fr" target="_blank" rel="noopener noreferrer">Cigaloisirs</a></h4>
                <h5>Juin-Août 2020</h5>
                <p>Refonte du site web de la société Cigaloisir: 
                    <br/>- Création de logo
                    <br/>- Création du contenu</p>
            </div>  

            <div className="exp2">
                <h4>Stagiaire Développeur web | <a href="http://www.emity.io" target="_blank" rel="noopener noreferrer">Emity</a></h4>
                <h5>Septembre-Décembre 2019</h5>
                <p>Création d'une application web:
                    <br/>- Développer la partie Back-end 
                    <br/>- Développer la partie Front-end 
                    <br/>- Utillisation de l' API SNCF 
                </p>
            </div>          
        </div>
    );
};

export default Experiences;