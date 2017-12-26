import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Increment from './components/increment.js'
import Decrement from './components/decrement.js'
class App extends Component{

    constructor(props){
        super(props);
        this.state={
            inputValue:4
        };
        this.inc=this.inc.bind(this);
        this.dec=this.dec.bind(this);
    }
    inc()
    {
        console.log(this.state.inputValue)
        if(this.state.inputValue!=100) {
            this.setState({inputValue: this.state.inputValue + 1})
        }
    }
    dec()
    {
        console.log(this.state.inputValue)
        if(this.state.inputValue!=0) {
            this.setState({inputValue: this.state.inputValue - 1})
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 id="hdd">{this.state.inputValue}</h1>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p></p>
                    </div>
                    <div className="col-1">
                        <Increment id="plus" inc={this.inc}/>
                    </div>
                    <div className="col-1">
                        <Decrement id="minus" dec={this.dec}/>
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App/>,document.querySelector(".container"));
