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

        if(data.error.errors){
          setVideos([{
          0:{
            id : {
              videoId: "Kxwwv6swXQk"
            }
          },
          1:{id : {
              videoId: "Kxwwv6swXQk"
            }
          }}]);
          return;
        }
        setVideos(data.items);
      }
    });
  },[videos]);

  console.log('SUCCES',videos)
    return (
      <>
        <div className="page-group">
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
      </>
    );
};

export default Home;