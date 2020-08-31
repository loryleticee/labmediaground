import React from 'react'

const Soundcloud = (props) => {
  return (
    <div className='robots-noindex robots-nofollow'>
      <iframe samesite='None'
        key='soundcloud' title='AYRLOMUSIC Soundcloud playlist'
        scrolling='no' frameBorder='no' allow='autoplay'
        src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4529664&color=%2364f7f7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
      />
    </div>
  )
}

export default Soundcloud
