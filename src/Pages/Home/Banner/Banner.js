import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import chair from '../../../images/chair.png';

const Banner = () => {
    return (
        <Container sx={{marginTop : '100px'}}>
            <Grid container spacing={3}>
                <Grid xs={12} md={6} sx={{width : 400, mx : 'auto'}}>
                  <Typography variant='h3'>Your New Smile <br />  Start here
                  </Typography>

                  <Typography sx={{fontSize : 17, color : 'grey'}}>lorem impie df8ie sdfjhoe fsdfhs sdhfs fsf sfwoiiw df fieif sdffiofu sifsiof faiof siofasoidfs fasiofasof siof fosdfosid fsiofasfo asfoasjdfidf asdfasiodfas</Typography>

                  <Button sx={{backgroundColor : 'rgba(40, 229, 168, 0.83)', color : 'white', fontSize : 14}}>Get Appoinment</Button>
                </Grid>

                <Grid xs={12} md={6}>
                   <img
                   src={chair}
                   style={{width : '400px'}}
                   alt=""
                   />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;