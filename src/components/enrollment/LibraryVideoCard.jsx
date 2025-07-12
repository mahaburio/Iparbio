import React from "react";

const LibraryVideoCard = ({ type, src, title }) => {
  return (
    <div className="lb-itm">
      <div className="img-vd-sec">
        {type === "youtube" ? (
          <iframe
            src={src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : type === "video" ? (
          <video
            src={src}
            controls
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
        ) : type === "image" ? (
          <img
            src={src}
            alt={title}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
        ) : null}
      </div>
      <div className="video-dsc p-2">
        <div className="video-ht">{title}</div>
        <div className="type">
          {type === "youtube"
            ? "YouTube Embed"
            : type === "video"
            ? "Video mp4"
            : type === "image"
            ? "Image"
            : ""}
        </div>
      </div>
    </div>
  );
};

export default LibraryVideoCard;
