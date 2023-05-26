import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';
import { useLottie, useLottieInteractivity } from 'lottie-react';
import spaceManData from '../images/spaceman.json';
import './about.scss';
import { Button, Grid, useMediaQuery } from '@mui/material';

const style = {
  height: 500,
  border: 0,
  borderStyle: 'solid',
  borderRadius: 7,
};

const options = {
  animationData: spaceManData,
  loop:true,
};


function ClientList() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0.4, 0.9],
        type: 'seek',
        frames: [0, 180],
      },
    ],
  }); 
  const matches = useMediaQuery('(min-width:500px)');
  return (
    <div>
    <Grid
      container
      className="hero"
      style={{ backgroundColor: theme.palette.background.main }}
      direction={matches ? "row" : "column-reverse"}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} sm={6}>
        <h1>{t("landingPage.clientList.sectionTitle")}</h1>
        <h2>{t("landingPage.clientList.heading")}</h2>
        <h2>{t("landingPage.clientList.paragraph")}</h2>
        <Button variant="contained" color="primary">
          {t("landingPage.header.callToActionButton")}
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        {lottieObj.View}
      </Grid>
    </Grid>



  </div>
);
}

export default ClientList;

