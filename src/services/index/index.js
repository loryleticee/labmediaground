import React, { Suspense } from 'react'
//import Social from '../social/social'

const Soundcloud = React.lazy(() => import('../soundcloud/soundcloud'))
const Bandcamp = React.lazy(() => import('../bandcamp/bandcamp'))
const Spotify = React.lazy(() => import('../spotify/spotify'))
//const Tidal = React.lazy(() => import('../tidal/tidal'))

const Index = (props) => {
  return (
    <>
      <div className='page-group'>
        <div className='social-group' />
        <div className='youtube-canvas'>
          <Suspense fallback={
            {/* */}
          }
          >
            <Soundcloud />
            <Bandcamp />
            <Spotify />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Index
