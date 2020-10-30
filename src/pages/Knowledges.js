import React from 'react';
import Experiences from '../component/knowledges/Experiences';
import Hobbies from '../component/knowledges/Hobbies';
import Languanges from '../component/knowledges/Languanges';
import OtherSkills from '../component/knowledges/OtherSkills';
import Navigation from '../component/Navigation';

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