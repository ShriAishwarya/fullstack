import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Style.css';

const defaultTheme = createTheme();

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const validateEmail = () => {
    const { email } = formData;
    if (!email) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
      return false;
    }

    setFormErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    return true;
  };

  const validatePassword = () => {
    const { password } = formData;
    if (!password) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required',
      }));
      return false;
    }

    if (password.length < 6) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 6 characters',
      }));
      return false;
    }

    setFormErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      // For demonstration purposes, assume authentication is successful
      // In a real application, check credentials with a backend API

      // Set login state in sessionStorage
      sessionStorage.setItem('isLoggedIn', 'true');
      
      // Navigate to the home page
      navigate('/home');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.pinimg.com/736x/ce/9c/71/ce9c718b86efb8c06d506fe16a9abf08.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'purple' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleInputChange}
                onBlur={validateEmail}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={validatePassword}
                error={!!formErrors.password}
                helperText={formErrors.password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button className="button-63 "
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signin" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LoginForm;

// // import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import './Style.css';
// import { useState } from 'react';
// const defaultTheme = createTheme();

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [formErrors, setFormErrors] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const validateEmail = () => {
//     const { email } = formData;
//     if (!email) {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         email: 'Email is required',
//       }));
//       return false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         email: 'Invalid email address',
//       }));
//       return false;
//     }

//     setFormErrors((prevErrors) => ({ ...prevErrors, email: '' }));
//     return true;
//   };

//   const validatePassword = () => {
//     const { password } = formData;
//     if (!password) {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         password: 'Password is required',
//       }));
//       return false;
//     }

//     if (password.length < 6) {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         password: 'Password must be at least 6 characters',
//       }));
//       return false;
//     }

//     setFormErrors((prevErrors) => ({ ...prevErrors, password: '' }));
//     return true;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const isEmailValid = validateEmail();
//     const isPasswordValid = validatePassword();

//     if (isEmailValid && isPasswordValid) {
//       // For demonstration purposes, assume authentication is successful
//       // In a real application, check credentials with a backend API

//       // Set login state in sessionStorage
//       sessionStorage.setItem('isLoggedIn', 'true');
      
//       // Navigate to the profile page
//       navigate('/');
//     }
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             // backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLUbdTjakMz-xWyDQM98mvngpp-BMP_K3EA&usqp=CAU)',
//             backgroundImage:'url(https://i.pinimg.com/736x/ce/9c/71/ce9c718b86efb8c06d506fe16a9abf08.jpg)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'purple  ' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 onBlur={validateEmail}
//                 error={!!formErrors.email}
//                 helperText={formErrors.email}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 onBlur={validatePassword}
//                 error={!!formErrors.password}
//                 helperText={formErrors.password}
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button className="button-63 "
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="/signin" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }

// export default LoginForm;













// // components/LoginForm.jsx
// import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes
// import { Form, Button, ButtonToolbar, Panel } from 'rsuite';
// import TextField from '../TextField';
// import loginModel from '../../forms/loginModel';
// import './Style.css';

// const LoginForm = ({ onSubmit }) => {
//   const formRef = useRef();
//   const [formValue, setFormValue] = useState({
//     email: '',
//     password: '',
//   });

//   const handleSubmit = () => {
//     if (!formRef.current.check()) {
//       console.error('Form Error');
//       return;
//     }
//     console.log(formValue, 'Form Value');
//     onSubmit(formValue);
//   };

//   return (
//     <Panel header={<h3>Login</h3>} bordered>
//       <Form
//         ref={formRef}
//         onChange={setFormValue}
//         formValue={formValue}
//         model={loginModel}
//       >
//         <TextField name="email" label="Email" />
//         <TextField
//           name="password"
//           label="Password"
//           type="password"
//           autoComplete="off"
//         />

//         <ButtonToolbar>
//           <Button appearance="primary" onClick={handleSubmit}>
//             Login
//           </Button>
//         </ButtonToolbar>
//       </Form>
//     </Panel>
//   );
// };

// // Add prop type validation
// LoginForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default LoginForm;


// // components/LoginForm.jsx
// import React, { useRef, useState } from 'react';
// import { Form, Button, ButtonToolbar, Panel } from 'rsuite';
// // import TextField from './TextField';
// import TextField from '../TextField';
// import loginModel from '../../forms/loginModel';
// import PropTypes from 'prop-types'; // Import PropTypes


// const LoginForm = ({ onSubmit }) => {
//   const formRef = useRef();
//   const [formValue, setFormValue] = useState({
//     email: '',
//     password: '',
//   });

//   const handleSubmit = () => {
//     if (!formRef.current.check()) {
//       console.error('Form Error');
//       return;
//     }
//     console.log(formValue, 'Form Value');
//     onSubmit(formValue);
//   };

//   return (
//     <Panel header={<h3>Login</h3>} bordered>
//       <Form
//         ref={formRef}
//         onChange={setFormValue}
//         formValue={formValue}
//         model={loginModel}
//       >
//         <TextField name="email" label="Email" />
//         <TextField
//           name="password"
//           label="Password"
//           type="password"
//           autoComplete="off"
//         />

//         <ButtonToolbar>
//           <Button appearance="primary" onClick={handleSubmit}>
//             Login
//           </Button>
//         </ButtonToolbar>
//       </Form>
//     </Panel>
//   );
// };

// LoginForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default LoginForm;
