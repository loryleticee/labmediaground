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
              <iframe
                scrolling="no" frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/127696064&color=%236e9dc7"
                key={1}
                title="1"
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

export default Youtube;
