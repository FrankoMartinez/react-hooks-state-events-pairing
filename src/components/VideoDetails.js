import React from "react";

function VideoDetails({ VideoDetails }) {
    

    return (
        <div key={VideoDetails.id}>
            <h1>{VideoDetails.title}</h1>
            <p>{VideoDetails.views} Views | Uploaded {VideoDetails.createdAt}</p>
            <button>{VideoDetails.upvotes} 👍</button><button>{VideoDetails.downvotes} 👎</button>
        </div>
    )

}

export default VideoDetails