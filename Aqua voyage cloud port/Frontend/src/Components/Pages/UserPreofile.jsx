import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../CustomNabar'; // Assuming CustomNavbar component is defined

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledFormBox = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
`;

const StyledDetailsBox = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const ChangeProfileIcon = styled.span`
  cursor: pointer;
  color: #007bff;
  font-size: 20px;
  margin-left: 5px;
`;

const UserProfileForm = () => {
  const [userDetails, setUserDetails] = useState({
    userName: 'User Name',
    userEmail: 'user@example.com',
    userRole: 'User',
    userPhone: '123-456-7890',
    profilePic: 'path_to_default_image.jpg', // Default profile picture
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUserDetails({ ...userDetails, profilePic: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log('Form submitted');
    navigate('/profile'); // Navigate to profile page after submission
  };

  return (
    <div>
      <CustomNavbar/>
      <StyledContainer>
        <StyledFormBox>
          <StyledTitle>Edit User Profile</StyledTitle>
          <form onSubmit={handleSubmit}>
            <ProfileImage src={userDetails.profilePic} alt="Profile" />
            <label htmlFor="profilePic">Change Profile Picture:</label>
            <input
              type="file"
              id="profilePic"
              name="profilePic"
              accept="image/*"
              onChange={handleProfilePicChange}
            />
            <StyledLabel htmlFor="userName">Name:</StyledLabel>
            <StyledInput
              type="text"
              id="userName"
              name="userName"
              value={userDetails.userName}
              onChange={handleChange}
            />
            <StyledLabel htmlFor="userEmail">Email:</StyledLabel>
            <StyledInput
              type="email"
              id="userEmail"
              name="userEmail"
              value={userDetails.userEmail}
              onChange={handleChange}
            />
            <StyledLabel htmlFor="userRole">Role:</StyledLabel>
            <StyledInput
              type="text"
              id="userRole"
              name="userRole"
              value={userDetails.userRole}
              onChange={handleChange}
            />
            <StyledLabel htmlFor="userPhone">Phone:</StyledLabel>
            <StyledInput
              type="tel"
              id="userPhone"
              name="userPhone"
              value={userDetails.userPhone}
              onChange={handleChange}
            />
            <StyledButton type="submit">Submit</StyledButton>
          </form>
        </StyledFormBox>

        <StyledDetailsBox>
          <StyledTitle>User Details</StyledTitle>
          <div>
            <StyledLabel>Name:</StyledLabel>
            <div>{userDetails.userName}</div>
          </div>
          <div>
            <StyledLabel>Email:</StyledLabel>
            <div>{userDetails.userEmail}</div>
          </div>
          <div>
            <StyledLabel>Role:</StyledLabel>
            <div>{userDetails.userRole}</div>
          </div>
          <div>
            <StyledLabel>Phone:</StyledLabel>
            <div>{userDetails.userPhone}</div>
          </div>
        </StyledDetailsBox>
      </StyledContainer>
      <footer className="black-footer">
        <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
          &copy; 2022 AquaVoyage CloudPort. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default UserProfileForm;





// import './UserProfile.css';
// import React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import CustomNavbar from '../CustomNabar';
// import './UserProfile.css';

// const UserProfile = () => {
//   return (
//     <div className="container">
//     <header>
//       <CustomNavbar />
//     </header>
//     <div className="user-profile-container">
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={8}>
//           <Paper className="user-profile-card">
//             <Typography variant="h5" className="user-profile-title">
//               Edit Profile
//             </Typography>
//             <form className="user-profile-form">
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <input type="text" placeholder="First Name" className="profile-input" />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <input type="text" placeholder="Last Name" className="profile-input" />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <input type="email" placeholder="Email Address" className="profile-input" />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextareaAutosize
//                     placeholder="About Me"
//                     className="profile-textarea"
//                     rowsMin={4}
//                   />
//                 </Grid>
//               </Grid>
//               <Button className="button-63" type="submit" variant="contained" color="primary" >
//                 Update Profile
//               </Button>
//             </form>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Paper className="user-avatar-card">
//             <div className="user-avatar">
//               <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
//             </div>
//             <div className="user-info">
//               <Typography variant="h6" className="user-name">
//                 Mike Andrew
//               </Typography>
//               <Typography variant="subtitle1" className="username">
//                 michael24
//               </Typography>
//               <Typography variant="body2" className="user-description">
//               "Dive into the serenity of aqua yoga, where the gentle flow of water mirrors the tranquility within.
//                Let the waves of each pose guide you to balance, strength, and inner peace. In the dance of aqua yoga, 
//                find not only fluidity but also a reflection of your own resilience and fluid spirit."
//               </Typography>
//             </div>
//             <div className="social-icons">
//               <Button variant="outlined" className="social-icon">
//                 <i className="fab fa-facebook-square"></i>
//               </Button>
//               <Button variant="outlined" className="social-icon">
//                 <i className="fab fa-twitter"></i>
//               </Button>
//               <Button variant="outlined" className="social-icon">
//                 <i className="fab fa-google-plus-square"></i>
//               </Button>
//             </div>
//           </Paper>
//         </Grid>
//       </Grid>
//     </div>
//     </div>
//   );
// };

// export default UserProfile;

