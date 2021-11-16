import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import flouride from '../../../images/fluoride.png';
import { Box } from '@mui/system';

const Services = () => {
    return (
        <Container sx={{my : 5}}>

            <Typography align='center' variant='h6' color="success.main">OUR SERVICES</Typography>
            <Typography sx={{mb : 5}} align='center' variant='h3'>Services We Provide</Typography>

            <Grid container spacing={{xs : 2, md : 3}} align='center'>

                <Grid item xs={12} md={4}>
                   <Box sx={{ p: 2}}>
                       <img width='100' height='100' src={cavity} alt="" />
                       <Typography variant='h6' sx={{my:2}}>Cavity</Typography>
                       <Typography variant='body2' color="text.secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, odio? Expedita in, doloremque maiores cum distinctio quam neque unde, eaque id numquam perspici</Typography>
                   </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                   <Box sx={{ p: 2}}>
                       <img width='100' height='100' src={whitening} alt="" />
                       <Typography variant='h6' sx={{my:2}}>whitening</Typography>
                       <Typography variant='body2' color="text.secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, odio? Expedita in, doloremque maiores cum distinctio quam neque unde, eaque id numquam perspici</Typography>
                   </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                   <Box sx={{ p: 2}}>
                       <img width='100' height='100' src={flouride} alt="" />
                       <Typography variant='h6' sx={{my:2}}>flouride</Typography>
                       <Typography variant='body2' color="text.secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, odio? Expedita in, doloremque maiores cum distinctio quam neque unde, eaque id numquam perspici</Typography>
                   </Box>
                </Grid>

            </Grid>

        </Container>
    );
};

export default Services;