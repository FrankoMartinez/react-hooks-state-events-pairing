import React, { useState } from "react";
import video from "../data/video.js";
import VideoDetails from "./VideoDetails.js";

function App() {
  console.log("Here's your data:", video);


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetails VideoDetails={video} />
    </div>
  );
}

export default App;
