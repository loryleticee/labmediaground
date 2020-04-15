import React from 'react'
import tumb from '../../images/tumblr-icon.svg'
import insta from '../../images/instagram-icon.svg'
import faceb from '../../images/facebook-icon.svg'
import pinte from '../../images/pinterest-icon.svg'
import twitt from '../../images/twitter-icon.svg'
import vk from '../../images/vk-icon.svg'
import vimeo from '../../images/vimeo-icon.svg'
import youtu from '../../images/youtube-icon.svg'
import snap from '../../images/snap-icon.jpg'
import twitch from '../../images/twitch-icon.svg'

const Youtube = (props) => {

  return (
    <>
      <div className='page-group'>
        <div className='social-group' />
        <div className='youtube-canvas'>
          
          <div className='robots-noindex robots-nofollow'>
            <iframe
              key='soundcloud' title='AYRLOMUSIC Soundcloud playlist'
              scrolling='no' frameBorder='no' allow='autoplay'
              src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4529664&color=%2364f7f7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
            />
          </div>

          <div className='robots-noindex robots-nofollow'>
            <iframe
              key='bandcamp' title='AYRLOMUSIC Bandcamp playlist'
              src='https://bandcamp.com/EmbeddedPlayer/album=3994137191/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/' seamless
            >
              <a href='http://ayrlo.bandcamp.com/album/love-is-a-real-suffering-ep'>Love is A Real Suffering EP by Ayrlo</a>
            </iframe>
          </div>

          <div className='robots-noindex robots-nofollow'>
            <iframe 
              key='spotify' title='AYRLOMUSIC Spotify playlist'
              src="https://open.spotify.com/embed/artist/6HWyQdeOe1NedWpHroXRxB" 
              frameBorder="0" allowtransparency="true" allow="encrypted-media">
            </iframe>
          </div>

          <div className='robots-noindex robots-nofollow networks'>
              <iframe 
                key='tidal' title='AYRLOMUSIC Tidal playlist'
                src="https://embed.tidal.com/albums/121629603?layout=gridify" 
                frameBorder="0" 
                allowFullScreen 
              >
              </iframe>
          </div>

          <div className='robots-noindex robots-nofollow networks'>
            <img src={snap} alt='Ayrlo on Snapchat' />
            <a href='https://www.twitch.tv/ayrlomusic' target='_top'><img src={twitch} alt='Ayrlo on Twitch' /></a>
            <a href='https://twitter.com/ayrlo_music' target='_top'><img src={twitt} alt='Ayrlo on Twitter' /></a>
            <a href='https://www.instagram.com/ayrlomusic_lory' target='_top'><img src={insta} alt='Ayrlo on Instagram' /></a>
            <a href='https://vk.com/id588664621' target='_top'><img src={vk} alt='Donate to Ayrlo' /></a>
            <a href='https://ayrlomusic.tumblr.com' target='_top'><img src={tumb} alt='Ayrlo on Tumblr' /></a>
            <a href='https://www.youtube.com/channel/UCazuAKGOsC6XXc-h1zRNWYw' target='_top'><img src={youtu} alt='Ayrlo on Youtube' /></a>
            <a href='https://vimeo.com/user110800363' target='_top'><img src={vimeo} alt='Ayrlo on Vimeo' /></a>
            <a href='https://www.pinterest.fr/Ayrlomusic' target='_top'><img src={pinte} alt='Ayrlo on Pinterest' /></a>
            <a href='https://www.facebook.com/AyrloOfficiel' target='_top'><img src={faceb} alt='Ayrlo on Facebook' /></a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Youtube
