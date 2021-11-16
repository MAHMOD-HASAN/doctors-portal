import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const AppoinmentBanner = () => {
    const appoinmentBg = {
        background : `url(${bg})`,
        backgroundColor : 'rgba(49, 28, 49, 0.9)',
        backgroundBlendMode : 'darken, luminosity',
        margin : '100px auto'
    }
    return (
        <Container style={appoinmentBg} >
            <Grid container spacing={3}>
                <Grid xs={12} md={6} align='center'>
                     <img
                     style={{marginTop : -80}}
                     width= '400'
                     src={doctor}
                     alt=''
                     />
                </Grid>

                <Grid xs={12} md={6} sx={{mt : 2}}>
                     <Typography color="rgba(40, 229, 168, 0.83)" variant='h6'>Appoinment</Typography>
                     <Typography variant='h4' sx={{color : 'white'}}>Make an Appoinment Today</Typography>
                     <Typography variant='body2' color='white' my={2}>make an appoinment today make an appoinment today make an appoinment today make an appoinment today make an appoinment today make an appoinment today</Typography>
                     <Button sx={{backgroundColor : 'rgba(40, 229, 168, 0.83)', color : 'white', fontSize : 14}}>Learn More</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentBanner;