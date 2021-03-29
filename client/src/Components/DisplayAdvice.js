import React from 'react'
import {Button } from 'react-bootstrap'
import '../Styling/DisplayAdvice.css'

export default class DisplayAdvice extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            advice: ''
        }

        this.generateAdvice = this.generateAdvice.bind(this)
    }


    
    

    generateAdvice() {
        const url = "https://api.adviceslip.com/advice";
        // console.log(url)
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                    isLoaded:true,
                    advice: result.slip
                })
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                  });
            }
          )
    }

    
    render() {
        const {error, isLoaded, advice} = this.state;
        return (
            <div>
                  
                {error ? <p>{error.message}</p>: null}
                

                
                {isLoaded ? <p>{advice.advice}</p> :<p>Loading...</p>}

                <Button variant='outline-dark' onClick={this.generateAdvice} id='button'>
                    Generate Advice
                </Button>
                
            </div>
        )
    }
}
