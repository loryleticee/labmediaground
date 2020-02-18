import React, {useEffect, useState} from "react";
import "./Home.scss";
import getVideos from "../../../services/youtube/youtube";

const Home = () => {

  const [videos, setVideos] = useState([]);
  useEffect(() =>{
    let u = videos;
    getVideos().then(data => {
      if (u.length > 0 ) {
        //setVideos(data.items);
      } else{console.log('MISSS');
      u = ['',''];
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
                      key ={index}
                      className={'item'}
                      width= "400px"
                      height= "400px"
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