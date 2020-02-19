const URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=ayrlo&type=video&key="+process.env.REACT_APP_YOUTUBE_API_TOKEN;

export const getVideos = () => {
    return fetch(URL)
      .then(response => response.json())
      .catch(err => err || {});
};

export default getVideos;