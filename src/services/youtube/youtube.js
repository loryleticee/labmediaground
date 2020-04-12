import React, { useEffect, useState } from 'react'
import tumb from '../../images/tumblr-icon.svg'
import insta from '../../images/instagram-icon.svg'
import faceb from '../../images/facebook-icon.svg'
import pinte from '../../images/pinterest-icon.svg'
import twitt from '../../images/twitter-icon.svg'
import vimeo from '../../images/vimeo-icon.svg'
import youtu from '../../images/youtube-icon.svg'
import twitch from '../../images/twitch-icon.svg'
const URL = process.env.REACT_APP_YOUTUBE_URL + process.env.REACT_APP_YOUTUBE_API_TOKEN

const getVideos = () => {
  return fetch(URL)
    .then(response => response.json())
    .catch(err => err || {})
}

const Youtube = (props) => {
  const [videos, setVideos] = useState([])
  const init = [
    {
      id:
          {
            videoId: 'kPEA6Kc-6sc'
          }
    }
  ]

  useEffect(() => {
    let vdz = videos
    getVideos().then(data => {
      if (vdz.length > 0) {
      } else {
        vdz = ['', '']

        if (data.error !== undefined) {
          setVideos(
            init
          )
          return
        }
        setVideos(data.items)
      }
    })
  }, [videos])

  return (
    <>
      <div className='page-group'>
        <div className='social-group' />
        <div className='youtube-canvas'>
          
          <div class='robots-noindex robots-nofollow'>
            <iframe
              key='soundcloud' title='AYRLOMUSIC Soundcloud playlist'
              scrolling='no' frameBorder='no' allow='autoplay'
              src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4529664&color=%2364f7f7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
            />
          </div>

          <div class='robots-noindex robots-nofollow'>
            <iframe
              key='bandcamp' title='AYRLOMUSIC Bandcamp playlist'
              src='https://bandcamp.com/EmbeddedPlayer/album=3994137191/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/' seamless
            >
              <a href='http://ayrlo.bandcamp.com/album/love-is-a-real-suffering-ep'>Love is A Real Suffering EP by Ayrlo</a>
            </iframe>
          </div>

          <div class='robots-noindex robots-nofollow'>
            <iframe 
              ùkey='bandcamp' title='AYRLOMUSIC Bandcamp playlist'
              src="https://open.spotify.com/embed/artist/6HWyQdeOe1NedWpHroXRxB" 
              width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">
            </iframe>
          </div>
<iframe src="https://embed.tidal.com/albums/75413011" style="border: 0; width: 100%; height: 300px;" allowfullscreen allow="encrypted-media"></iframe>
          <div class='robots-noindex robots-nofollow networks'>
            <a href='https://ayrlomusic.tumblr.com' target='_top'><img src={tumb} alt='Ayrlo on Tumblr' /></a>
            <a href='https://www.twitch.tv/ayrlomusic' target='_top'><img src={twitch} alt='Ayrlo on Twitch' /></a>
            <a href='https://www.youtube.com/channel/UCazuAKGOsC6XXc-h1zRNWYw' target='_top'><img src={youtu} alt='Ayrlo on Youtube' /></a>
            <a href='https://vimeo.com/user110800363' target='_top'><img src={vimeo} alt='Ayrlo on Vimeo' /></a>
            <a href='https://www.pinterest.fr/Ayrlomusic' target='_top'><img src={pinte} alt='Ayrlo on Pinterest' /></a>
            <a href='https://twitter.com/ayrlo_music' target='_top'><img src={twitt} alt='Ayrlo on Twitter' /></a>
            <a href='https://www.instagram.com/ayrlomusic_lory' target='_top'><img src={insta} alt='Ayrlo on Instagram' /></a>
            <a href='https://www.facebook.com/AyrloOfficiel' target='_top'><img src={faceb} alt='Ayrlo on Facebook' /></a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Youtube
