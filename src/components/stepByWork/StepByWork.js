import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepContent, Button, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    'Step 1: Lorem ipsum dolor',
    'Step 2: Lorem ipsum dolor',
    'Step 3: Lorem ipsum dolor', 
    'Step 4: Lorem ipsum dolor', 
    'Step 5: Lorem ipsum dolor'
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod
              justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis 
              lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros.
              Nam id leo nec eros dignissim posuere.`;
    case 1:
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod
              justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis 
              lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros.
              Nam id leo nec eros dignissim posuere.`;
    case 2:
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod
              justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis 
              lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros.
              Nam id leo nec eros dignissim posuere.`;
    case 3:
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod
              justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis 
              lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros.
              Nam id leo nec eros dignissim posuere.`;
    case 4:
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod
              justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis 
              lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros.
              Nam id leo nec eros dignissim posuere.`;
    default:
      return 'Unknown step';
  }
}

function StepByWork() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(null);
  const steps = getSteps();

  const handleNext = (index) => {
    if (activeStep === null && activeStep !== index) {
      setActiveStep(index);
    } else if (activeStep === steps.length - 1) {
      setActiveStep(null);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel onClick={() => {handleNext(index)}}>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>

                  {
                    activeStep === 0
                      ? null
                      : <Button onClick={handleBack} className={classes.button}>Back</Button>
                  }
                  
                  {
                    activeStep === steps.length - 1
                      ? null
                      : <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          Next
                        </Button>
                  }
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default StepByWork;
