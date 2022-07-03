import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Login.css'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import instagram from'../Images/instagram.jpg'
import bg from'../Images/carbg.jpg'
import bg1 from'../Images/bg1.jpg'
import bg2 from'../Images/bg2.jpg'
import bg3 from'../Images/bg3.jpg'
import bg4 from'../Images/bg4.jpeg'

import {Link} from 'react-router-dom';


export default function Login() {
    const useStyle = makeStyles({
        text1:{
            color:'grey',
            textAlign :'center',
        },
        card2:{
           height: '5vh',
           marginTop: '5%',
           textAlign: 'center',
           textDecoration:'none',
        }
    })
    const classes = useStyle();
  return (
    <div className='login-page'>
        <div className="loginWrapper">
            <div className="imgcar" style={{backgroundImage: 'url('+bg+')', backgroundSize:'cover'}}>
                <div className="car">
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={4}

                    naturalSlideWidth={100}
                    naturalSlideHeight={176}
                    hasMasterSpinner
                    isPlaying={true}
                    infinite={true}
                    dragEnabled={false}
                    touchEnabled={false}
                    
                >
                    <Slider>
                    <Slide index={0}><Image src={bg1}/></Slide>
                    <Slide index={1}><Image src={bg2}/></Slide>
                    <Slide index={2}><Image src={bg3}/></Slide>
                    <Slide index={2}><Image src={bg4}/></Slide>
                    </Slider>
                </CarouselProvider>
                </div>
            </div>
        </div>
    <div className="loginWrapper">
        <div className="logincard">
        <Card >
            <div className="insta-logo">
                <img src={instagram} alt="" />
            </div>
        <CardContent>
          
          {true && <Alert size="small" severity="error">This is an error alert — check it out!</Alert> }
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" fontSize={10}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small"/>
          <Typography className={classes.text1} variant="subtitle1" fontSize={15} color='primary'>
            Forget password ?
          </Typography>
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary" variant='contained' fullWidth={true}>
          Login
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.card2} >
        <Typography className={classes.text1} variant="subtitled1">
            Dont't have an account? <Link style={{textDecoration:'node'}} to="/Signup" >Signup</Link>
        </Typography>
    </Card>
        </div>
    </div>
    </div>
    
  );
}
