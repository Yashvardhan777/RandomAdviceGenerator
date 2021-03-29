import React, { PureComponent } from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../Styling/Heading.css'




export default class Heading extends PureComponent {

    
    render() {
        return (
            <Jumbotron className="jumbotron">
                <h1>Advice Generator</h1>
                
            </Jumbotron>
        )
    }
}
