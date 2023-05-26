import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';
import './hero.scss';
import { Button, Grid, useMediaQuery } from '@mui/material';

import VideoBackground from './VideoBackground';



  

function Hero() {

  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const matches = useMediaQuery('(min-width:500px)');
  return (
    <div>
    <Grid container 
                className="hero" 
               
                direction={matches ? 'row' : 'column-reverse'}
                alignItems="center" 
                justifyContent="center">
            <Grid item xs={12} sm={6}>
                <h1>{t("landingPage.header.title")}</h1>
                <h2>{t("landingPage.header.subtitle")}</h2>
                <Button variant="contained" color="primary">
                    {t("landingPage.header.callToActionButton")}
                </Button>
            </Grid>
           
            </Grid>
        <VideoBackground />
    </div>
  );
};

export default Hero;

