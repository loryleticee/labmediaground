// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// //import Social from '../social/social'
// import Soundcloud from '../soundcloud/soundcloud'
// import IconSoundcloud from '../soundcloud/base'
// import IconSpotify from '../spotify/base'

// import Shop from '../shop/shop'
// import Spotify from '../spotify/spotify'

// const Index = () => {
//   const dispatch = useDispatch()

//   const isSoundcloud = useSelector((state) => state.home.soundcloud)
//   const isSpotify = useSelector((state) => state.home.spotify)

//   const soundcloud = !isSoundcloud ?  <IconSoundcloud /> : <Soundcloud />
//   const spotify = !isSpotify ?  <IconSpotify /> : <Spotify /> 

//   const handleClickSoundcloud = () => {
//     if(!isSoundcloud)
//       dispatch({ type: 'ACTIVESOUNDCLOUD'}) 
//   }

//   const handleClickSpotify = () => {
//     if(!isSpotify)
//       dispatch({ type: 'ACTIVESPOTIFY'}) 
//   }

//   return (
//     <>
//       <div className='page-group'>
//         <div className='social-group' />
//         <div className='youtube-canvas'>
//             <>
//               <span onClick={handleClickSoundcloud}>{soundcloud}</span>
//             </>
//             <Shop />
//             <>
//               <span onClick={handleClickSpotify}>{spotify}</span>
//             </>
//             <>
//               <span onClick={handleClickSpotify}>{spotify}</span>
//             </>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Index

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function randomPictureBackground () {
  const array = [
    {'url' :'3000x3000-833536--2B2FDBC5-6578-4B26-90B49466F8FA9618--1615598846428--AYRLOMUSICAyrloRedCastle.jpg', 'src': "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/846989611&color=%23bf3232&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"},
    {'url' :'3000x3000-833536--4C41CA74-062E-4BB6-864D042CFC8D686F--1610075332921--Malika.jpg', 'src': "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/924382822&color=%23949494&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"},
    {'url' :'3000x3000-833536--DC107A2C-F60F-46C8-910F4C9E98421476--1586357299325--AyrlofeatSkwepagetmoney.jpg', 'src': "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/787794382&color=%239a651f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"},
    {'url' :'833536--F8422073-66AF-4DFC-90C21270673A652D--1558274731020--wynalayrlococonut.jpg', 'src': "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/624435822&color=%23a6ffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"},
    {'url' :'833536--B93DF3A8-C88E-435C-9BA96D7284A4DFA3--1572712047436--AyrloSundayAfternoon.jpg', 'src': "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578595366&color=%23a6ffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"},
    {'url' :'3000x3000-833536--6111A5A0-D3E7-478A-8DE1D59A6E7BE74B--1577637422153--LoryLETICEEINTENSITYAyrlo.jpg', 'src': "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/735067288&color=%23a6ffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"},
    {'url' :'3000x3000-833536--C198689A-856F-4BDA-A298F896314D473F--1604247700252--AyrlomusicFUEGO.jpg' , 'src': "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/879240145&color=%23a35d2b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"},
  ]
  
  return array[getRandomInt(array.length-1)]
}

const Soundcloud = (props) => {
  return (
    <div className='robots-noindex robots-nofollow'>
      <iframe
        key='soundcloud' title='AYRLOMUSIC Soundcloud playlist'
        scrolling='no' frameBorder='no' allow='autoplay'
        src={randomPictureBackground().src}
      />
    </div>
  )
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://ayrlomusic.com/">
        Ayrlomusic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      {Soundcloud()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: "url(https://ayrlomusic.com/"+randomPictureBackground().url+")",
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            VISITE 
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ACCÉDER AU CONTENU INÉDIT
            </Button>
            
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
