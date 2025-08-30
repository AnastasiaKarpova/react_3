import React from 'react';
import './Hello.css';

class Hello extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            text: "Hello",
            sign: "Eng"
        }
    }
    changeText = () =>{
        this.setState({text: this.state.text === "Hello" ? "Привет" : "Hello"});
        this.setState({sign: this.state.sign === "Rus" ? "Eng" : "Rus"});
    }
    render()
    {
        return(
            <div>
                <button onClick={this.changeText}>Изменить</button>
                <div className='Hello'>{this.state.text}</div>
            </div>
        );
    }
}

export default Hello;