import React from 'react';
import YouTube from 'react-youtube';

const VideoMixmate = ({songData }) => {
  const uri = songData?.hub.actions[0].uri

  const videoId = uri?.split('youtu.be/')[1]?.split('?')[0];
  const width = 760;
 const height = 500; 
  return (
    <div>
      {videoId && <YouTube videoId={videoId} opts={{ width: width, height:height, playerVars: { autoplay: 1 } }} className='w-[800px]' />}
    </div>
  );
};

export default VideoMixmate;
