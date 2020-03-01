import React, {useEffect, useState} from "react";
import "./Home.scss";
import getVideos from "../../../services/youtube/youtube";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const init = [
    {
      id :
        {
          videoId: "Kxwwv6swXQk"
        }
    },
    {
      id :
        {
          videoId: "hoGY5RYvT0U"
        }
    },
    {
      id :
        {
          videoId: "xhKivXtrsGU"
        }
    },
  ];

  const social = [
    ""
  ];

  useEffect(() =>{
    let vdz = videos;
    getVideos().then(data => {
      if (vdz.length > 0 ) {
      } else{
        vdz = ['',''];

        if(data['error'] !== undefined){
          setVideos(
            init
          );
          return;
        }
        setVideos(data.items);
      }
    });
  },[videos]);

    return (
      <>

        <div className="page-group">
          <div className="social-group">
            <iframe
              width="78%" height="144"
              scrolling="no" frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/127696064&color=%23ffffff"
            >
            </iframe>

          </div>
          <div className={"youtube-canvas"}>
            {
              videos.map((video, index) => {
               return (
                 <iframe
                   title={index}
                   key ={index}
                   src={`https://www.youtube.com/embed/${video.id.videoId}`}
                   frameBorder="0"
                 />
               )
              })
            }
          </div>
        </div>
      </>
    );
};

export default Home;
