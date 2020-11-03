import React from 'react';
import Experiences from '../components/knowledges/Experiences';
import Hobbies from '../components/knowledges/Hobbies';
import Languanges from '../components/knowledges/Languanges';
import OtherSkills from '../components/knowledges/OtherSkills';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languanges />
                <Experiences />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;