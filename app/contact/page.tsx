'use client'
import "./styles.css";
import "./mobi.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ContactUser from './ui/contactUser/page';
import OwnerData from './ui/ownerData/page';
import Payment from './ui/payment/page';
import MainLayout from "@/layouts/MainLayout";

const steps = ['Basic Information', 'Owner Data', 'Payment Information'];

export default function Contact() {

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <MainLayout>
            <Box className="form_background min-h-[800px] pt-10" sx={{ width: '40%' }}>
                <p className="frame_banner"></p>
                <div >
                    {allStepsCompleted() ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 1 }}>
                                THANKS YOU
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                            </Box>
                            <Button onClick={handleReset}>Reset</Button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <div className="form_contact  mt: 3, mb: 1, py: 1"  >
                                <div className="form">
                                    <div className="basic_information">
                                        <a href="#">Basic Information</a>
                                    </div>
                                    <Stepper nonLinear activeStep={activeStep}>
                                        {steps.map((label, index) => (
                                            <Step key={label} completed={completed[index]}>
                                                <StepButton color="inherit">
                                                    {label}
                                                </StepButton>
                                            </Step>
                                        ))}
                                    </Stepper>
                                    {activeStep === 0 && <ContactUser />}
                                    {activeStep === 1 && <OwnerData />}
                                    {activeStep === 2 && <Payment />}

                                    <Box className='form_buttom' sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        {activeStep !== steps.length &&
                                            (completed[activeStep] ? (
                                                <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                                </Typography>
                                            ) :
                                                <Button className='text_button' onClick={handleComplete}>
                                                    {completedSteps() === totalSteps() - 1
                                                        ? 'Continue'
                                                        : 'Continue'}
                                                </Button>
                                            )}
                                    </Box>

                                </div>

                            </div>
                        </React.Fragment>
                    )}
                </div>
            </Box>
        </MainLayout>
    )
}