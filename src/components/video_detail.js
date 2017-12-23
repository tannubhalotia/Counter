import React from 'react';

const VideoDetail  = (props) =>
{
    if(!props.video)
    {
        return(<h1 style={{color:'white'}}>Loading.......</h1>);
    }
   // const url="https://youtube.com/embed/"+props.video.id.videoId;
    const url=`https://youtube.com/embed/${props.video.id.videoId}`;
    //console.log(props);
    return (


            <div>
                <div className={"card"} style= {{width:"100%" ,backgroundColor:"#0C0C0C  "}}>
                   <iframe src={url} allowFullScreen={true} style={{ width:'100%',height:'500px',borderColor:'#201F1F ',borderStyle: 'solid',borderWidth: 'medium'}}> </iframe>
                </div>
                <div className={"card"} style= {{width:"100%" ,backgroundColor:"#0C0C0C  "}}>
                   <h4 id="a" style={{color:'white'}}> {props.video.snippet.title}</h4>
                    <p id="b" style={{color:'white'}}>{props.video.snippet.description}</p>
                </div>
            </div>
    );
}
export default VideoDetail;
