import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <a href="" className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <h5 className="media-heading">{video.snippet.title}</h5>
          <small>{video.snippet.channelTitle}</small>
        </div>
      </div>
    </a>
  );
};

export default VideoListItem;
