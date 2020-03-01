import React, {useEffect, useState} from "react";
import "./Home.scss";
import Youtube from "../../../services/youtube/youtube";

const Home = () => {
  const [you, setYou] = useState([]);

  useEffect(() => {
    if(you.length < 1){
      setYou([1,2])
    }
  },[you.length]);

    if(you.length > 0){
      return (
        <>
          <Youtube/>
        </>
      );
    }
  return (
    <>
      <small>Wainting for a moment </small>
    </>
  );
};

export default Home;
