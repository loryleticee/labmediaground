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

export const Social = (props) => {
  return (
    <div className='robots-noindex robots-nofollow networks'>
      <img src={snap} alt='Ayrlo on Snapchat' />
      <a href='https://www.twitch.tv/ayrlomusic' target='_blank' rel='noopener noreferrer'><img src={twitch} alt='Ayrlo on Twitch' /></a>
      <a href='https://twitter.com/ayrlo_music' target='_blank' rel='noopener noreferrer'><img src={twitt} alt='Ayrlo on Twitter' /></a>
      <a href='https://www.instagram.com/ayrlomusic_lory' target='_blank' rel='noopener noreferrer'><img src={insta} alt='Ayrlo on Instagram' /></a>
      <a href='https://vk.com/ayrlomusic' target='_blank' rel='noopener noreferrer'><img src={vk} alt='Donate to Ayrlo' /></a>
      <a href='https://ayrlomusic.tumblr.com' target='_blank' rel='noopener noreferrer'><img src={tumb} alt='Ayrlo on Tumblr' /></a>
      <a href='https://www.youtube.com/channel/UCazuAKGOsC6XXc-h1zRNWYw' target='_blank' rel='noopener noreferrer'><img src={youtu} alt='Ayrlo on Youtube' /></a>
      <a href='https://vimeo.com/user110800363' target='_blank' rel='noopener noreferrer'><img src={vimeo} alt='Ayrlo on Vimeo' /></a>
      <a href='https://www.pinterest.fr/Ayrlomusic' target='_blank' rel='noopener noreferrer'><img src={pinte} alt='Ayrlo on Pinterest' /></a>
      <a href='https://www.facebook.com/AyrloOfficiel' target='_blank' rel='noopener noreferrer'><img src={faceb} alt='Ayrlo on Facebook' /></a>
    </div>
  )
}

export default Social
