import React, {Component} from 'react';

class Decrement extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <button onClick={this.props.dec} type="button" className="btn btn-dark">-</button>
            </div>
        );
    }
}
export default Decrement;
