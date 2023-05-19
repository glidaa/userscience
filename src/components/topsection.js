import React from 'react';
import { useLottie, useLottieInteractivity } from 'lottie-react';
import spaceManData from '../images/spaceman.json';
import { useTheme } from '@mui/material/styles';
const style = {
  height: 300,
  border: 3,
  borderStyle: 'solid',
  borderRadius: 7,
};

const options = {
  animationData: spaceManData,
};

const spaceMan = () => {
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

  return Animation;
};

export default spaceMan;