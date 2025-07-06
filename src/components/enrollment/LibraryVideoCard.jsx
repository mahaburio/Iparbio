import React from "react";

const LibraryVideoCard = ({ type, src, title }) => {
  return (
    <div className="lb-itm">
      <div className="img-vd-sec">
        {type === "youtube" ? (
          <iframe
            width="100%"
            height="200"
            src={src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={src}
            controls
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </div>
      <div className="video-dsc p-2">
        <div className="video-ht">{title}</div>
        <div className="type">{type === "youtube" ? "YouTube Embed" : "Video mp4"}</div>
      </div>
    </div>
  );
};

export default LibraryVideoCard;
