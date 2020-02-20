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
                 <a target={"_blank"} key={index} href={`https://www.youtube.com/embed/${video.id.videoId}`}>
                   <iframe
                     title={index}
                     key={index}
                     src={`https://www.youtube.com/embed/${video.id.videoId}`}
                     frameBorder="0"
                   />
                 </a>
               )
              })
            }
        </div>
      </>
    );
};

export default Home;