import React from 'react'
import logo from '../../../images/logo192.png'

import { Helmet } from 'react-helmet'

import Index from '../../../services/index'

const Home = () => {
  return (
    <>
      <Helmet>
        <link rel='shortcut icon' type='image/x-icon' href='./favicon.ico' />
        <meta charSet='utf-8' />
        <meta name='description' content='Ayrlo official website' />
        <meta property='og:site_name' content='AYRLOMUSIC' />
        <meta property='og:title' content='AYRLO' />
        <meta property='og:url' content='https://www.ayrlomusic.com' />
        <meta property='og:type' content='website' />
        <meta property='og:description' content='The official website of AYRLO.' />
        <meta property='og:image' content={logo} />
        <meta itemProp='name' content='AYRLOMUSIC' />
        <meta itemProp='url' content='https://www.ayrlomusic.com' />
        <meta itemProp='description' content='The official website of AYRLO' />
        <meta name='twitter:title' content='AYRLOMUSIC' />
        <meta name='twitter:url' content='https://twitter.com/ayrlo_music' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:description' content='The official website of AYRLO.' />
        <meta name='description' content='The official website of AYRLO.' />
        <link rel='canonical' href='https://www.ayrlomusic.com' />
      </Helmet>
      <Index />
    </>
  )
}

export default Home
