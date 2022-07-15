import React from 'react';
import '../App.css';

import {
  Stepper,
  Step,
  useStepper,
  StepNumber,
  StepTitle,
  StepStatus,
  StepDescription,
} from "react-progress-stepper";
import { useContext } from "react";
import AuthContext from './useContext';
import { useTranslation } from "react-i18next";


export function Setpar({ state }) {
  const { step, incrementStep, decrementStep } = useStepper(0, 4);
  const { todo } = useContext(AuthContext);
  const { CurrentStatus, TransitEvents } = todo
  const [t, i18n] = useTranslation()


  const ncrementStep = () => {
    // incrementStep 4 numbers

    if (state === 'DELIVERED') {
      for (var i = 1; i <= 4; ++i) {
        incrementStep(i);
      }
          // incrementStep 4 numbers

    } else if (state === 'DELIVERED_TO_SENDER') {
      for (var i = 1; i <= 2; ++i) {
        incrementStep(i);
      }
    } else {
      console.log(Error)
    }

  };


  React.useEffect((p) => {
    ncrementStep()


  }, [todo]); // Only re-run the effect if count changes

  const moment = require('moment');



  return (
    <>
      <Stepper step={step}>
        <Step>
          <StepDescription>  <h5>{t('arabic.TransitEvents.0.state')}</h5></StepDescription>


        </Step>
        <Step>
        <StepDescription>  {todo.TrackingNumber ? t('arabic.TransitEvents.1.state') : ''}</StepDescription>

        </Step>
        <Step>
          <StepTitle>          {!todo.TransitEvents ?     '' : <h5>{t('arabic.TransitEvents.0.state')}</h5>}</StepTitle>
        </Step>
        <Step>
          <StepDescription>{state}</StepDescription>

        </Step>
      </Stepper>




    </>
  )
}



