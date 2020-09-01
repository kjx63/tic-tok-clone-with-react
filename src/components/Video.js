import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
// import VideoSidebar from './VideoSidebar';

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
        src='https://v16m.tiktokcdn.com/d394b6f4107753ef5fbc35524a6ccb39/5f4de0fe/video/tos/alisg/tos-alisg-pve-0037/4863973ddeb64580b54ec54243cdbc5e/?a=1180&br=2604&bt=1302&cr=0&cs=0&dr=3&ds=3&er=&l=202008312349340101152280831B559895&lr=tiktok&mime_type=video_mp4&qs=0&rc=MzR3dWQ1dndldzMzPDgzM0ApaWk4PDY5aDs4N2ZkNjRkaGcuYWUwMGM0YzNfLS00LzRzc14vXy80XmItMzMtXzMtNTM6Yw%3D%3D&vl=&vr='
      ></video>
      <VideoFooter
        channel='rafehqazi'
        description='Check out this dance'
        song='Usher - Yeah'
      />
      {/* <VideoSidebar /> */}
    </div>
  );
};

export default Video;
