// Import necessary components and styles
import React from 'react';
import { Nav, Navbar } from 'rsuite';
// import HomeIcon from '@rsuite/icons/legacy/Home';
// import CalendarIcon from '@rsuite/icons/Calendar';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from 'react-router-dom';

// General navbar styles
const navbarStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '10px',
};

// Brand styles
const brandStyle = {
  fontSize: '1.5em',
  fontWeight: 'bold',
  color: 'white',
};

// Link styles
const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginRight: '10px',
};


const exploreMenuStyle = {
  // backgroundColor: 'black', // Set your desired background color for the Explore menu
};

const exploreItemStyle = {
  color: 'black',
  // backgroundColor: 'black',
};

// CustomNavbar component
const CustomNavbar = () => {
  return (
    <Navbar style={navbarStyle}>
      <Navbar.Brand style={brandStyle} href="#">
        AQUAQ
      </Navbar.Brand>
      <Nav>
        <Nav.Item>  
        {/* <Nav.Item icon={<HomeIcon />}></Nav.Item> */}
          <Link to={'/home'} style={linkStyle}>
            Home
          </Link>
        </Nav.Item>
        <Nav.Item ><Link to={'/booking'} style={linkStyle}>Booking</Link></Nav.Item>
        <Nav.Item><Link to={'/contact'} style={linkStyle}>Contact</Link></Nav.Item>
        <Nav.Item><Link to={'/about'} style={linkStyle}>About Us</Link></Nav.Item>

        <Nav.Menu title="Explore" style={exploreMenuStyle}>
          <Nav.Item><Link to={'/bookinghistory'} style={{ ...linkStyle, ...exploreItemStyle }}>Booking History</Link></Nav.Item>
          <Nav.Item style={exploreItemStyle}> <Link to={'/stays'} style={{ ...linkStyle, ...exploreItemStyle }}>Stays</Link></Nav.Item>
        {/* <Nav.Item><Link to={'/about'}>About Us</Link></Nav.Item>  */}
          {/* Nested Contact Menu with specific styles */}
          {/* <Nav.Menu title="Contact" style={exploreMenuStyle}>
            <Nav.Item style={exploreItemStyle}>Via email</Nav.Item>
            <Nav.Item style={exploreItemStyle}>Via telephone</Nav.Item>
          </Nav.Menu> */}
        </Nav.Menu>
      </Nav>


      <Nav pullRight>
      {/* <Nav.Item>
        <Link to={'/login'} style={linkStyle}>Login</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to={'/signin'} style={linkStyle}>Signin</Link>
        </Nav.Item> */}
        <Nav.Item icon={<CogIcon />} style={linkStyle}>
        <Link to={'/profile'} style={linkStyle}>User Profile</Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;








// import { Nav, Navbar } from "rsuite";
// import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';
// import { Link } from "react-router-dom";
// import './NavBar.css';

// const navbarStyle = {
//   backgroundColor: "black", // Set your desired background color
  
//   color: "white",             // Set your desired text color
//   padding: "10px",            // Adjust padding as needed
// };

// const linkStyle = {
//   color: "white",             // Set link text color
//   textDecoration: "none",     // Remove default link underline
//   marginRight: "10px",        // Adjust spacing between links
// };

// const CustomNavbar = () => {
//   return (
//     <Navbar style={navbarStyle}>
//       <Navbar.Brand href="#">AQUAQ</Navbar.Brand>
//       <Nav>
//         <Nav.Item icon={<HomeIcon />}><Link to={'/home'} style={linkStyle}>Home</Link></Nav.Item>
//         <Nav.Item><Link to={'/booking'} style={linkStyle}>Booking</Link></Nav.Item>
//         <Nav.Item><Link to={'/contact'} style={linkStyle}>Contact</Link></Nav.Item>
//         <Nav.Item><Link to={'/about'} style={linkStyle}>About Us</Link></Nav.Item>
//     {/* <Navbar style={navbarStyle}>
//     <Navbar.Brand href="#">AQUAQ</Navbar.Brand> */}
//     {/* <Nav>
//       <Nav.Item icon={<HomeIcon />}><Link to={'/home'} >Home</Link></Nav.Item>
//       <Nav.Item><Link to={'/booking'}>Booking</Link></Nav.Item>
//       <Nav.Item><Link to={'/contact'} >Contact</Link></Nav.Item>
//       <Nav.Item><Link to={'/about'}>About Us</Link></Nav.Item> */}
//         <Nav.Menu title="Explore">
//           {/* <Nav.Item>Booking History</Nav.Item> */}
//           {/* <Nav.Item><Link to={'/bookinghistory'}>Booking History</Link></Nav.Item> */}
//           <Nav.Item><Link to={'/bookinghistory'} style={linkStyle}>Booking History</Link></Nav.Item>
//           <Nav.Item>Stays</Nav.Item>
//           <Nav.Menu title="Contact">
//             <Nav.Item>Via email</Nav.Item>
//             <Nav.Item>Via telephone</Nav.Item>
//           </Nav.Menu>
//         </Nav.Menu>
//         {/* <Nav.Item><Link to={'/login'} style={linkStyle}>Login</Link></Nav.Item> */}
//       </Nav>
//       <Nav>
//       </Nav>
//       <Nav pullRight>
//         <Nav.Item icon={<CogIcon />} >Settings</Nav.Item>
//       </Nav>
//     </Navbar>
//   );
// }

// export default CustomNavbar;



// import { Nav, Navbar } from "rsuite";
// import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';
// import { Link } from "react-router-dom";

// // rafce
// const CustomNavbar=()=>
// {
//     return (

//         <Navbar>
//         <Navbar.Brand href="#">DASHBOARD</Navbar.Brand>
//         <Nav>
//           <Nav.Item icon={<HomeIcon />}><Link to={'/home'}>Home</Link></Nav.Item>
//           <Nav.Item><Link to={'/about'}>About</Link></Nav.Item>
//           <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
//           <Nav.Menu title="About">
//             <Nav.Item>Company</Nav.Item>
//             <Nav.Item>Team</Nav.Item>
//             <Nav.Menu title="Contact">
//               <Nav.Item>Via email</Nav.Item>
//               <Nav.Item>Via telephone</Nav.Item>
//             </Nav.Menu>
//           </Nav.Menu>
//         </Nav>
//         <Nav pullRight>
//           <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
//         </Nav>
//         </Navbar>

//     );
// }

// export default CustomNavbar












// import { Nav, Navbar } from "rsuite";
// import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';
// import { Link } from "react-router-dom";

// // rafce
// const CustomNavbar=()=>
// {
//     return (

//         <Navbar>
//         <Navbar.Brand href="#">RSUITE</Navbar.Brand>
//         <Nav>
//           <Nav.Item icon={<HomeIcon />}><Link to={'/home'}>Home</Link></Nav.Item>
//           <Nav.Item><Link to={'/about'}>About</Link></Nav.Item>
//           <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
//           {/* <Nav.Menu title="About">
//             <Nav.Item>Company</Nav.Item>
//             <Nav.Item>Team</Nav.Item>
//             <Nav.Menu title="Contact">
//               <Nav.Item>Via email</Nav.Item>
//               <Nav.Item>Via telephone</Nav.Item>
//             </Nav.Menu>
//           </Nav.Menu> */}
//         </Nav>
//         <Nav pullRight>
//           <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
//         </Nav>
//         </Navbar>

//     );
// }

// export default CustomNavbar