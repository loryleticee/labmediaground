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
      console.log('SUCCES', data.items)
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
                   <img
                     title={index}
                     key={index}
                     className={'item'}
                     width="130rem"
                     height="100rem"
                     src={video.snippet.thumbnails.default.url}
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