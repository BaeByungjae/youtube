import React from 'react';
import Videoitem from '../video_item/video_item';

const Videolist = (props) => {
    return <ul>
        {props.videos.map(video=><Videoitem video={video}/>)}
    </ul>
}

export default Videolist;