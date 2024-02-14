import React from 'react';
import CustomNavbar from '../CustomNabar';
import './AboutUs.css';
import { Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <div className="container">
      <header>
        <CustomNavbar />
      </header>
      <div className='empty'>
      
      </div>
      <main>
        <section className="about-content">
          <h1>About AquaVoyage CloudPort</h1>
          <p>
            AquaVoyage CloudPort is a leading provider of waterfront retreats, offering a seamless
            and delightful booking experience for our customers. Nestled at the intersection of
            natural beauty and modern technology, we bring you the best waterfront destinations
            with the power of AWS-integrated Java full-stack technology.
          </p>
          <p>
            Our mission is to simplify the process of booking waterfront retreats, making it
            accessible to everyone. Whether you seek the tranquility of a beach retreat, the
            serenity of a mountain escape, or the peacefulness of a lakefront haven, AquaVoyage
            CloudPort has the perfect destination for you.
          </p>
          <p>
            With a commitment to excellence, we leverage cutting-edge technology to ensure a
            secure, reliable, and enjoyable experience for our users. Our team of dedicated
            professionals is passionate about connecting people with nature and creating
            unforgettable memories.
          </p>
        </section>
      </main>
     
      <footer className="sticky-footer">
        <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
          &copy; 2022 AquaVoyage CloudPort. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default AboutUs;
