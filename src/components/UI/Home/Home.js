import React, {useEffect, useState} from "react";
import "./Home.scss";
import getVideos from "../../../services/youtube/youtube";

const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() =>{
    let vdz = videos;
    getVideos().then(data => {
      if (vdz.length > 0 ) {
      } else{
      vdz = ['',''];
        setVideos(data.items);
      }
    });
  },[videos]);

    return (
      <>
        <div className="page-group">
            {
              videos.map((video, index) => {
               return (
                   <iframe
                      title={index}
                      key={index}
                      className={'item'}
                      width="100px"
                      height="100px"
                      src={`https://www.youtube.com/embed/${video.id.videoId}`}
                      frameBorder="0"
                   />
               )
              })
            }
        </div>
      </>
    );
};

export default Home;