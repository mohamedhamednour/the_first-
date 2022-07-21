import React from "react";
import ReactPlayer from "react-player/youtube";

const Card = () => {
  return (
    <>
      <center>منصة تعليمة </center>
      {/* <div class="container_fluid "> */}
      {/* <div class="row "> */}
      <div align='center' className="container_fluid videos">
        <div className="row">
        <ReactPlayer
        className="react-player col-12 col-md-6"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="40%"
        height="250px"
        controls="true"
      />
      <ReactPlayer
        className="react-player col-12 col-md-6"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="40%"
        height="250px"
        controls="true"
      />
        
        </div>
      </div>
      </>
        
      
    
    
  );
};

export default Card;
