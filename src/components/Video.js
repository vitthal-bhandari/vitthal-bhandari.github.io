import React from "react";
import YouTube from "react-youtube";


const MovieClip = (props) => {
  console.log('hi: ', props.isTabletOrMobile)
     const options = {
       height: props.isTabletOrMobile ? '195': '390',
       width: props.isTabletOrMobile ? '320': '640',
       playerVars: {
         autoplay: 1,
         controls: 1,
       },
     };
 
     return (
     <YouTube videoId="n6aqluNrxGY" opts={options} id="video"/>
     );
 }

 export default MovieClip;