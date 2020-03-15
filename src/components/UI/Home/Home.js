import React, { useEffect, useState } from 'react'
import './Home.scss'
import logo from '../../../images/logo.svg'

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
          <link rel="shortcut icon" type="image/x-icon" href="dee/favicon.ico"></link>
          <meta charSet='utf-8' />
          <meta name='description' content='Nested component' />
          <meta property='og:site_name' content='AYRLOMUSIC' />
          <meta property='og:title' content='AYRLOMUSIC' />
          <meta property='og:url' content='https://www.ayrlomusic.com' />
          <meta property='og:type' content='website' />
          <meta property='og:description' content='The official website of AYRLOMUSIC.' />
          <meta property='og:image' content={logo} />
          <meta itemProp='name' content='AYRLOMUSIC' />
          <meta itemProp='url' content='https://www.ayrlomusic.com' />
          <meta itemProp='description' content='The official website of AYRLOMUSIC' />
          <meta name='twitter:title' content='AYRLOMUSIC' />
          <meta name='twitter:url' content='https://www.ayrlomusic.com' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:description' content='The official website of AYRLOMUSIC.' />
          <meta name='description' content='The official website of AYRLOMUSIC.' />
          <title>Ayrlo Music</title>
          <link rel='canonical' href='https://www.ayrlomusic.com' />
        </Helmet>
        <Youtube />
      </>
    )
  }
  return (
    <>
      <div className='nopage'> AYRLOMUSIC load... </div>
    </>
  )
}

export default Home
