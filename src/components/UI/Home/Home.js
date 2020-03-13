import React, { useEffect, useState } from 'react'
import './Home.scss'
import Youtube from '../../../services/youtube/youtube'
import { Helmet } from 'react-helmet'

const Home = () => {
  const [you, setYou] = useState([])

  useEffect(() => {
    if (you.length < 1) {
      setYou([1, 2])
    }
  }, [you.length])

  if (you.length > 0) {
    return (
      <>
        <Helmet>
          <meta charSet='utf-8' />
          <meta name='description' content='Nested component' />
          <meta property='og:site_name' content='Ayrlomusic' />
          <meta property='og:title' content='Ayrlomusic' />
          <meta property='og:url' content='https://www.ayrlomusic.com' />
          <meta property='og:type' content='website' />
          <meta property='og:description' content='The official website of Ayrlo.' />
          <meta itemProp='name' content='Ayrlo' />
          <meta itemProp='url' content='https://www.ayrlomusic.com' />
          <meta itemProp='description' content='The official website of Ayrlo.' />
          <meta name='twitter:title' content='Ayrlo' />
          <meta name='twitter:url' content='https://www.ayrlomusic.com' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:description' content='The official website of Ayrlo.' />
          <meta name='description' content='The official website of Ayrlo.' />
          <title>Ayrlo Music</title>
          <link rel='canonical' href='https://www.ayrlomusic.com' />
        </Helmet>
        <Youtube />
      </>
    )
  }
  return (
    <>
      <small>Wainting for a moment </small>
    </>
  )
}

export default Home
