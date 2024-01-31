import './UserProfile.css';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CustomNavbar from '../CustomNabar';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="container">
    <header>
      <CustomNavbar />
    </header>
    <div className="user-profile-container">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper className="user-profile-card">
            <Typography variant="h5" className="user-profile-title">
              Edit Profile
            </Typography>
            <form className="user-profile-form">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <input type="text" placeholder="First Name" className="profile-input" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input type="text" placeholder="Last Name" className="profile-input" />
                </Grid>
                <Grid item xs={12}>
                  <input type="email" placeholder="Email Address" className="profile-input" />
                </Grid>
                <Grid item xs={12}>
                  <TextareaAutosize
                    placeholder="About Me"
                    className="profile-textarea"
                    rowsMin={4}
                  />
                </Grid>
              </Grid>
              <Button className="button-63" type="submit" variant="contained" color="primary" >
                Update Profile
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="user-avatar-card">
            <div className="user-avatar">
              <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
            </div>
            <div className="user-info">
              <Typography variant="h6" className="user-name">
                Mike Andrew
              </Typography>
              <Typography variant="subtitle1" className="username">
                michael24
              </Typography>
              <Typography variant="body2" className="user-description">
              "Dive into the serenity of aqua yoga, where the gentle flow of water mirrors the tranquility within.
               Let the waves of each pose guide you to balance, strength, and inner peace. In the dance of aqua yoga, 
               find not only fluidity but also a reflection of your own resilience and fluid spirit."
              </Typography>
            </div>
            <div className="social-icons">
              <Button variant="outlined" className="social-icon">
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button variant="outlined" className="social-icon">
                <i className="fab fa-twitter"></i>
              </Button>
              <Button variant="outlined" className="social-icon">
                <i className="fab fa-google-plus-square"></i>
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );
};

export default UserProfile;

