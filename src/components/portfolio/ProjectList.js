import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

class ProjectList extends Component {
    state = {
        radios: [
            {id: 1, value: "javascript"},
            {id: 2, value: "css"},
            {id: 3, value: "react"},
            {id: 4, value: "php"}
        ],
        projects: portfolioData,
        selectRadio: "javascript"
    }

    handleRadio = (event) => {
        let radio = event.target.value
        this.setState({selectRadio: radio})
    }

    render() {
        let {projects, radios, selectRadio} = this.state;

        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id}>
                                   <input 
                                        type="radio"
                                        name="radio"
                                        checked={radio.value === selectRadio}
                                        value={radio.value}
                                        id={radio.value}
                                        onChange={this.handleRadio}
                                    /> 
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="projects">
                    {
                        projects
                        .filter(item => item.languages.includes(selectRadio))
                        .map(item => {
                            return (
                                <Project
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;
