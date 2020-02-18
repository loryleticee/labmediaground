import React, {useState} from "react";
import './Home.scss';
import Flexbox from 'flexbox-react';

const Home = (props) => {
    return (
      <Flexbox flexDirection="column" minHeight="100vh">
        <Flexbox element="header" height="60px">
          Header
        </Flexbox>

        <Flexbox flexGrow={1}>
          Content
        </Flexbox>

        <Flexbox element="footer" height="60px">
          Footer
        </Flexbox>
      </Flexbox>
    );
};

export default Home;