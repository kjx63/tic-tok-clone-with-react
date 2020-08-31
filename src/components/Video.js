import React, { useRef, useState } from 'react';
import './Video.css';

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className='video'>
      <video
        className='video__player'
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src='https://v16m.tiktokcdn.com/21a1901487c06077aea568fbfcc68bf7/5f4d5824/video/tos/useast2a/tos-useast2a-ve-0068c001/7fe234c83a9c454c91698234986951f6/?a=1233&amp;br=1746&amp;bt=873&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;l=20200831140548010115004061081B792D&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=Mzl1ODp2aXJodzMzZjczM0ApNGQ4aGk6aDs0NztpaGhnNWctMDZeanFsNi5fLS1hMTZzcy5hMjQ2MTQwLS1hYl8zX2E6Yw%3D%3D&amp;vl=&amp;vr='
      ></video>
    </div>
  );
};

export default Video;
