import React, {useEffect, useState} from "react";
import "./Home.scss";
import Youtube from "../../../services/youtube/youtube";
import {Helmet} from "react-helmet";

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
          <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
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
