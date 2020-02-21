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
        <div className="d-flex flex-column ml-auto mr-5 my-5 align-content-center flex-wrap overflow-auto">
            {
              videos.map((video, index) => {
              return (
                <a target={"_blank"} key={index} href={`https://www.youtube.com/embed/${video.id.videoId}`} className="w-100 my-3">
                  <img
                    title={index}
                    key={index}
                    className="flex-wrap w-100"
                    src={video.snippet.thumbnails.default.url}
                  />
                </a>
                )
              })
            }
        </div>
    );
};

export default Home;