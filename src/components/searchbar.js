import React, {Component} from 'react';
//import YTSearch from 'youtube-api-search';
//const API_KEY= 'AIzaSyD_UZQQV-OcpZyjL0ppWCLBGyFgqNpiytg';
class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state =
        {
            term:'',
            //newTerm: 'yo'
        };
        //console.log(props);
        props.onSearchTermChange(this.state.term);
    }


    onInputChange(term)
    {
        //console.log(term);
        this.setState({term});
        this.props.onSearchTermChange(term);
    }



    render(){
        return (
            <div className={"card"} style= {{width:"65%"}}>
                <input style={{width:'706px', borderColor:'white' ,borderStyle: 'solid',borderWidth: 'medium'}}
                    value={this.state.term}
                    placeholder={'Search YouTube.....'}
                    onChange={(event)=>this.onInputChange(event.target.value)}/>
            </div>
        );
    }
}
export default SearchBar;
