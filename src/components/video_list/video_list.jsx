import React from 'react';
import Videoitem from '../video_item/video_item';
import styles from './video_list.module.css';


const Videolist = (props) => {
    return <ul className={styles.videos}>
        {props.videos.map(video=><Videoitem video={video}/>)}
    </ul>
}

export default Videolist;