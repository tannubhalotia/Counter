import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import VideoList from './components/videol_list';
import VideoDetail from './components/video_detail';
import {NavBar} from './components/navbar';
import YTSearch from 'youtube-api-search';
const API_KEY='AIzaSyDQruPK8ScGJElgIAQQzN8zyFMLlGbo5dc';


import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{

    constructor(props) {
        super(props);
        this.state={
            videos:[],
            selectedVideo:null
        };

    }

    videoSearch(term) {
        YTSearch({key:API_KEY,term:term}, (videos) =>{
            console.log(videos);
            this.setState({videos:videos,selectedVideo:videos[0]});
        });
    }
    render()
    {
        return(

            <div className={"container"} style={{backgroundColor:"#0C0C0C "}}>
                   <div id="row1" className={"row"}>

                            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Npkr_FlABN5_DUfA4upioY23mzadUx3XQgWn5tAwLDUmfq-U'}
                                 style={{width:'35px',height:'35px',backgroundColor:'#E5DDDD'}}/>

                           <h2 style={{color:'white'}}> MyYouTube </h2>

                   </div>
                   <div id="row2" className={"row"}>
                       <SearchBar onSearchTermChange={this.videoSearch.bind(this)} />
                   </div>
                   <div id="row3" className={"row"}>
                       <div className={"col-8"}>
                            <VideoDetail video={this.state.selectedVideo}/>
                       </div>
                       <div className={"col-4"}>
                            <VideoList videos={this.state.videos}
                                   onVideoSelect={(video) => {this.setState({selectedVideo:video})}}/>
                       </div>
                   </div>

            </div>

        );
    }
}
ReactDOM.render(<App/>,document.querySelector(".container"));