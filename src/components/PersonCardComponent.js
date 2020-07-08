import React, { Component } from 'react';

class PersonCardComponent extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <div>
                <div className="container">
                    <div className="card mt-4 mx-auto w-50">
                        <div className="card-header bg-dark text-white">
                            <h1>{lastName}, {firstName}</h1>
                        </div>
                        <div className="card-body bg-success">
                            <p>Age: {age}</p>
                            <p>Hair Color: {hairColor}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonCardComponent;