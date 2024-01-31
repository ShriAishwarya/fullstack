// PaymentPage.jsx

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Step, StepLabel, Stepper } from '@mui/material';
import CustomNavbar from '../CustomNabar';
import './Payment.css';

const PaymentPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Payment details state
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  // Billing details state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  const steps = ['Payment Details', 'Billing Address', 'Review & Confirm'];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handlePayment = () => {
    // Implement payment processing logic here
    console.log('Payment processed successfully!');
    // You may navigate to a success page or handle other post-payment actions
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Expiry Date"
                variant="outlined"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CVV"
                variant="outlined"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="ZIP Code"
                variant="outlined"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <div>
            <Typography variant="h6" gutterBottom>
              Review & Confirm
            </Typography>
            <Typography variant="body1">
              Payment Details: **** **** **** {cardNumber.slice(-4)}
            </Typography>
            <Typography variant="body1">
              Billing Address: {firstName} {lastName}, {address}, {city}, {zipCode}
            </Typography>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <header>
        <CustomNavbar />
      </header>
      <main>
         <Container maxWidth="md" className="payment-container">
          <Typography variant="h4" align="center" gutterBottom>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {getStepContent(activeStep)}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
            <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={activeStep === steps.length - 1 ? handlePayment : handleNext}
            >
              {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
            </Button>
          </div>
        </Container>
      </main>
      <footer className="sticky-footer">
        <Container>
          <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
            &copy; 2022 AquaVoyage CloudPort. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default PaymentPage;
