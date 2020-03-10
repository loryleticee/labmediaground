import React, {useEffect, useState} from "react";

const URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=date&q=ayrlo&type=video&key="+process.env.REACT_APP_YOUTUBE_API_TOKEN;

 const getVideos = () => {
    return fetch(URL)
      .then(response => response.json())
      .catch(err => err || {});
};

 const Youtube = (props) => {

    const [videos, setVideos] = useState([]);
    const init = [
        {
            id :
              {
                videoId: "kPEA6Kc-6sc"
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
          <div className="social-group">

          </div>
          <div className={"youtube-canvas"}>
            <iframe
              width="100%" height="450"
              scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4529664&color=%2364f7f7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
          </div>
      </div>
    </>
    );
 };

export default Youtube;
