import React from 'react';

const VideoCard = ({ embedHtml }) => {
  return (
    <div className="card bg-base-100 shadow-sm p-2">
      <div
        className="overflow-hidden rounded"
        dangerouslySetInnerHTML={{ __html: embedHtml }}
      />
    </div>
  );
};

export default VideoCard;
