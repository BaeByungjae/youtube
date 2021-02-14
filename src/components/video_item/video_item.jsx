import React from 'react';

const Videoitem = (props) => {
    return (
        <h1>{props.video.snippet.title}</h1>
    );
}
export default Videoitem;