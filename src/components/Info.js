import React, { Component } from 'react';

class Info extends Component {
    state = {
        show: false
    };

    handleShow = () => {
        this.setState({
            show:!this.state.show
        })
    };
    render() {
      return (
            <div className="info">
                <div className="button" onClick={this.handleShow}>A-propos</div>
            {
                this.state.show && (
                    <div className="show">
                        <div className="showContent">
                            <h2>A propos de moi</h2>
                            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat similique id dolore ullam fugit quaerat dignissimos ducimus est voluptate libero itaque natus nulla mollitia, cum a. Esse odit eaque delectus?Commodi maiores laboriosam nostrum repellendus unde architecto iste fugiat nihil voluptatum ex? Vitae rem quo repellendus ipsa consequatur alias natus a autem aperiam, ex suscipit maxime dicta eos facere ea?</p>
                            <div className="button return" onClick={this.handleShow}>Retour</div>
                        </div>
                    </div>
                )
            }
            
            </div>            
        );
    }
}

export default Info;