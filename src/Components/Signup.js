import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Signup.css'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import instagram from'../Images/instagram.jpg'

import {Link} from 'react-router-dom';


export default function Signup() {
    const useStyle = makeStyles({
        text1:{
            color:'grey',
            textAlign :'center',
        },
        card2:{
           height: '5vh',
           marginTop: '2%',
           textAlign: 'center',
           textDecoration:'none'
        }
    })
    const classes = useStyle();
  return (
    <div className="signupWrapper">
        <div className="signupcard">
        <Card >
            <div className="insta-logo">
                <img src={instagram} alt="" />
            </div>
        <CardContent>
          <Typography className={classes.text1} variant="subtitle1" fontSize={15}>
            Sign Up to see photos and videos from friends
          </Typography>
          {true && <Alert size="small" severity="error">This is an error alert — check it out!</Alert> }
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" fontSize={10}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small"/>
          <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth={true} margin="dense" size="small"/>
          <Button size="small" color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={<CloudUploadIcon/>} component="label">
          Upload Profile Image
          <input type="file" accept='image/*' hidden/>
          </Button>
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary" variant='contained' fullWidth={true}>
          Sign Up
        </Button>
      </CardActions>
      <CardContent>
          <Typography className={classes.text1} variant="subtitle1" fontSize={15}>
            By signing up, you agree to our Terms, Condition and Cookies policy.
          </Typography>
      </CardContent>
    </Card>
    <Card className={classes.card2}>
        <Typography className={classes.text1} variant="subtitled1">
            Having an account? <Link style={{textDecoration:'node'}} to="/login" >Login</Link>
        </Typography>
    </Card>
        </div>
    </div>
  );
}
