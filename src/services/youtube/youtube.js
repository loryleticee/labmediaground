const TOKEN = "AIzaSyDt-Jo0h8x-uQ7EhMHR4GB7Ug2PY_3bt3w";
const URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=ayrlo&type=video&key="+TOKEN;

export const getVideos = () => {
    return fetch(URL)
      .then(response => response.json())
      .catch(err => err || {});
};

export default getVideos;