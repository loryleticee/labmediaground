import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import Social from '../social/social'
import Soundcloud from '../soundcloud/soundcloud'
import IconSoundcloud from '../soundcloud/base'
import IconSpotify from '../spotify/base'

import Shop from '../shop/shop'
import Spotify from '../spotify/spotify'

const Index = () => {
  const dispatch = useDispatch()

  const isSoundcloud = useSelector((state) => state.home.soundcloud)
  const isSpotify = useSelector((state) => state.home.spotify)

  const soundcloud = !isSoundcloud ?  <IconSoundcloud /> : <Soundcloud />
  const spotify = !isSpotify ?  <IconSpotify /> : <Spotify /> 

  const handleClickSoundcloud = () => {
    if(!isSoundcloud)
      dispatch({ type: 'ACTIVESOUNDCLOUD'}) 
  }

  const handleClickSpotify = () => {
    if(!isSpotify)
      dispatch({ type: 'ACTIVESPOTIFY'}) 
  }

  return (
    <>
      <div className='page-group'>
        <div className='social-group' />
        <div className='youtube-canvas'>
            <>
              <span onClick={handleClickSoundcloud}>{soundcloud}</span>
            </>
            <Shop />
            <>
              <span onClick={handleClickSpotify}>{spotify}</span>
            </>
        </div>
      </div>
    </>
  )
}

export default Index
