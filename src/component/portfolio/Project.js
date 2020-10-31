import React, { Component } from 'react';

class Project extends Component {
    state = {
        showInfo: false
    }
    
    
    
    
    render() {
        const {name, languagesIcons, source, info, picture} = this.props.item;

        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon => 
                        <i className={icon} key={icon}></i>    
                    )}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt={picture}/>
                <span className="info">
                    <i className="fas fa-plus-circle"></i>
                </span>
            </div>
        );
    }
}

export default Project;
