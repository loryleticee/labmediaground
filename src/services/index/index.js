import React, { useState } from 'react';
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
import axios from 'axios';
import { useToasts } from 'react-toast-notifications'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// let token = process.env.REACT_APP_PRINTFULL_API_TOKEN;
// axios.defaults.headers.Authorization = 'Basic ' + token;

const config = {
  headers: {
    'mode': 'cors',
    "Content-type": "application/json; charset=UTF-8",
  },
  'Access-Control-Allow-Origin' : '*',
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function randomPictureBackground() {
  const array = [
    { 'url': '3000x3000-833536--2B2FDBC5-6578-4B26-90B49466F8FA9618--1615598846428--AYRLOMUSICAyrloRedCastle.jpg', 'src': "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/846989611&color=%23bf3232&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
    { 'url': '3000x3000-833536--4C41CA74-062E-4BB6-864D042CFC8D686F--1610075332921--Malika.jpg', 'src': "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/924382822&color=%23949494&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
    { 'url': '833536--F8422073-66AF-4DFC-90C21270673A652D--1558274731020--wynalayrlococonut.jpg', 'src': "" },
    { 'url': '3000x3000-833536--6111A5A0-D3E7-478A-8DE1D59A6E7BE74B--1577637422153--LoryLETICEEINTENSITYAyrlo.jpg', 'src': "" },
    { 'url': '833536--B93DF3A8-C88E-435C-9BA96D7284A4DFA3--1572712047436--AyrloSundayAfternoon.jpg', 'src': "" },
    { 'url': '3000x3000-833536--C198689A-856F-4BDA-A298F896314D473F--1604247700252--AyrlomusicFUEGO.jpg', 'src': "" },
  ]

  return array[getRandomInt(array.length)]
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
    </Typography>
  );
}

const Printfull = () => {
  let url = process.env.REACT_APP_PRINTFULL_API_URL;
  let token = process.env.REACT_APP_PRINTFULL_API_TOKEN;

  return axios.get(url, { 'api-key': token }, config).then((res) => {
    console.log(res.data);
    // <Typography variant="body2" color="textSecondary" align="center">
    //   {/* <img src></img> */}
    // </Typography>
  })
}

//Printfull()

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: "url(/" + randomPictureBackground().url + ")",
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
    backgroundColor: theme.palette.primary.main,
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
  const { addToast } = useToasts();

  const [values, setValues] = useState({
    email: '',
    error: false,
    msg: '',
  });
  /**
   * 
   * @param {e} value email
   * @param {*} method post /get 
   * @param {*} uri  endpoint
   */
  const emailed = async (value, method = 'POST', uri = process.env.REACT_APP_BACK_API_URL) => {
    let data = {};
    data.method = method;
    data.email = value;


    return await axios.post(uri, data, config).then(res => ( res.data ))
  }

  const handleChange = prop => event => {
    if (/[a-z]/.test(event.target.value) === true) {
      setValues({ ...values, [prop]: event.target.value });
    }
  }

  const handleSubmit = async () => {
    let success = false;

    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email) === true) {
      success += 1;
      await emailed(values.email).then(() => {
        setValues({ ...values, 'error': false })
      });

    } else { setValues({ ...values, 'error': true }) }

    if (success) {
      addToast(values.msg, { appearance: 'success' })
      // addToast("🍁😄〽️ TipTop ! À très vite ", { appearance: 'success' })
    }
  }

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
            〽️
          </Typography>
          <form className={classes.form} noValidate onSubmit={(e) => { e.stopPropagation(); e.preventDefault(); handleSubmit() }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange("email")}
              value={values.email ? values.email : ''}
              autoFocus
              error={values.error}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ACCÉDER
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
