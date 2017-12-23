import React, {Component} from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
    console.log("props:" + props.videos);
    const videoListItem = props.videos.map((video) => {
        return (
            <VideoListItem
                video={video}
                key={video.etag}
                onVideoSelect={props.onVideoSelect}
            />
        );
    });


    return (
        <div >
            <ul >
                {videoListItem}
            </ul>
        </div>
    );
}
export default VideoList;
