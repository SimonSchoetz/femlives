import React from 'react';
import Plyr, { APITypes, PlyrProps } from 'plyr-react';
import 'plyr-react/plyr.css'; // Import Plyr styles

interface VideoPlayerProps {
  srcUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ srcUrl }) => {
  const videoOptions: PlyrProps['source'] = {
    type: 'video',
    sources: [
      {
        src: srcUrl,
        type: 'video/mp4',
      },
    ],
  };

  return <Plyr source={videoOptions} />;
};

export default VideoPlayer;
