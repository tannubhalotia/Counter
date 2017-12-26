import React, {Component} from 'react';

class Increment extends Component{
     constructor(props){
        super(props);
     }
    render(){
        return (
            <div>
                <button onClick={this.props.inc} type="button" className="btn btn-dark">+</button>
            </div>
        );
    }
}
export default Increment;
