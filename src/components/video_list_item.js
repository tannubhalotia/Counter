import React, {Component} from 'react';


import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const VideoListItem  = (props) =>
{
    //const video=props.video;
        return (
            <div className={"card"} style= {{width:"100%" ,backgroundColor:"#252629  "}}>

            <li onClick={()=>{props.onVideoSelect(props.video)}} style={{listStyleType:"none"}}>
                    <div className={"row"}>
                         <div id="cc1" className={"col-6"}>
                              <img src={props.video.snippet.thumbnails.default.url} style={{ borderColor:' grey',borderStyle: 'solid',borderWidth: 'medium'}}/>
                         </div>
                         <div id="cc2" className={"col-5"}>
                              <p style={{color:'white'}}>{props.video.snippet.title}</p>
                         </div>
                    </div>

              </li>
              </div>
        );
}
export default VideoListItem;
