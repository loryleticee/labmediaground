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
          videoId: "A8kPN-4YQj8"
        }
    },
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
