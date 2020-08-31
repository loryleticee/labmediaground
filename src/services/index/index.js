import React from 'react'
//import Social from '../social/social'
import Soundcloud from '../soundcloud/soundcloud'
import Shop from '../shop/shop'
import Spotify from '../spotify/spotify'

//const Soundcloud = React.lazy(() => import('../soundcloud/soundcloud'))
//const Bandcamp = React.lazy(() => import('../bandcamp/bandcamp'))
//const Spotify = React.lazy(() => import('../spotify/spotify'))
//const Tidal = React.lazy(() => import('../tidal/tidal'))

const Index = (props) => {
  return (
    <>
      <div className='page-group'>
        <div className='social-group' />
        <div className='youtube-canvas'>
            <Soundcloud />
            <Shop />
            <Spotify />
        </div>
      </div>
    </>
  )
}

export default Index
