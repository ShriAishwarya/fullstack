// Home.jsx

import React from 'react';
import PropTypes from 'prop-types';
import CustomNavbar from '../CustomNabar';
import FeaturedRetreat from './FeaturedRetreat'; // Import the FeaturedRetreat component
import RetreatDetails from './RetreatDetails';// Assuming you have a RetreatDetails component
import { Button, Container, Typography } from '@mui/material';
import './Home.css'; // Import local styles

const Home = ({ heroText }) => {
  // Sample data for featured retreats
  const featuredRetreats = [
    {
      title: 'Lake House Retreat',
      description: 'A cozy retreat on the water with stunning views.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ6H4Lyitce4FRC2JBhIy2Lt_cZSUjlV5ztA&usqp=CAU',
      price: 150,
    },
    {
      title: 'Boat House Retreat',
      description: 'A cozy retreat on the water with stunning views.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtlx37InNDST5ltWz90UA0tXCXIt0KqEdcg&usqp=CAU',
      price: 150,
    },
    {
      title: 'Beach House Retreat',
      description: 'A cozy retreat on the water with stunning views.',
      imageUrl: 'https://cdn.autonomous.ai/static/upload/images/new_post/tiny-beach-house-designs-for-privacy-6520-1685693866974.webp',
      price: 150,
    },
    // Add more retreats as needed
  ];

  return (
    <div className="home-container">
      <header>
        <CustomNavbar />
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to AquaVoyage Retreat</h1>
            <p>{heroText}</p>
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <h2>Explore Beautiful Retreats</h2>
            <p>Discover serene waterfront locations for your perfect getaway.</p>
          </div>
          <div className="feature">
            <h2>Easy Booking Process</h2>
            <p>Simple and secure booking process to make your retreat planning hassle-free.</p>
          </div>
          <div className="feature">
            <h2>AWS-Integrated Technology</h2>
            <p>CloudPort leverages AWS to provide a seamless and reliable experience.</p>
          </div>
        </section>

        <section className="featured-retreats">
          <Container>
            <Typography variant="h4" gutterBottom>
              Featured Retreats
            </Typography>
            <div className="featured-retreats-container">
              {featuredRetreats.map((retreat, index) => (
                <FeaturedRetreat key={index} {...retreat} />
              ))}
            </div>
            
            <Button variant="contained" color="primary" href="/stays">
              Explore All Retreats
            </Button>
          </Container>
        </section>

        {/* <section className="retreat-details">
          <Container>
            <Typography variant="h4" gutterBottom>
              Featured Retreat Details
            </Typography>
            <RetreatDetails />
          </Container>
        </section> */}
      </main>

      <footer className="black-footer">
        <Container>
          <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
            &copy; 2022 AquaVoyage CloudPort. All rights reserved.
          </Typography>
        </Container>
      </footer>
      
    </div>
  );
};

Home.propTypes = {
  heroText: PropTypes.string.isRequired,
};

export default Home;



// import React from 'react';
// import PropTypes from 'prop-types';
// import CustomNavbar from '../CustomNabar';
// import './Home.css'; // Import local styles


// const Home = ({ heroText }) => {
//   return (
//     <div className="container">
//       <header>
//         <CustomNavbar />
//       </header>
//       <main>
//         <section className="hero">
//           <div className="hero-content">
//             <h1>Welcome to AquaVoyage CloudPort</h1>
//             <p>{heroText}</p>
//           </div>
//         </section>

//         <section className="features">
//           <div className="feature">
//             <h2>Explore Beautiful Retreats</h2>
//             <p>Discover serene waterfront locations for your perfect getaway.</p>
//           </div>
//           <div className="feature">
//             <h2>Easy Booking Process</h2>
//             <p>Simple and secure booking process to make your retreat planning hassle-free.</p>
//           </div>
//           <div className="feature">
//             <h2>AWS-Integrated Technology</h2>
//             <p>CloudPort leverages AWS to provide a seamless and reliable experience.</p>
//           </div>
//         </section>
//       </main>
//       <footer>
//         <p>&copy; 2022 AquaVoyage CloudPort. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// Home.propTypes = {
//   heroText: PropTypes.string.isRequired,
// };

// export default Home;





// import React from 'react';
// import PropTypes from 'prop-types';
// import CustomNavbar from '../CustomNabar';
// import './Style.css';

// const Home = ({ heroText }) => {
//   return (
//     <div className="container">
//       <header>
//         <CustomNavbar />
//       </header>
//       <main>
//         <section className="hero">
//           <div className="hero-content">
//             <h1>Welcome to AquaVoyage CloudPort</h1>
//             <p>{heroText}</p>
//           </div>
//         </section>

//         <section className="features">
//           <div className="feature">
//             <h2>Explore Beautiful Retreats</h2>
//             <p>Discover serene waterfront locations for your perfect getaway.</p>
//           </div>
//           <div className="feature">
//             <h2>Easy Booking Process</h2>
//             <p>Simple and secure booking process to make your retreat planning hassle-free.</p>
//           </div>
//           <div className="feature">
//             <h2>AWS-Integrated Technology</h2>
//             <p>CloudPort leverages AWS to provide a seamless and reliable experience.</p>
//           </div>
//         </section>
//       </main>
//       <footer>
//         <p>&copy; 2022 AquaVoyage CloudPort. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// Home.propTypes = {
//   heroText: PropTypes.string.isRequired,
// };

// export default Home;




// import CustomNavbar from "../CustomNabar";



// const Home=()=>
// {
//     return (
//         <div className="container">
//         <header>
//         <CustomNavbar/>
//         </header>
//         <main>
//             <section className="hero">
//                 <p>home</p>
//             </section>

//             <section className="team_wrapper">
//                 {/* <p>yu</p> */}
//             </section>
//             <aside></aside>
//         </main>
//         <footer>

//         </footer>
//         </div>

//     );
// }
// export default Home


// import React from 'react';
// import PropTypes from 'prop-types';
// import CustomNavbar from '../CustomNabar';

// const Home = ({ heroText }) => {
//   return (
//     <div className="container">
//       <header>
//         <CustomNavbar />
//       </header>
//       <main>
//         <section className="hero">
//           <p>WELCOME TO AQUAQ</p>
//         </section>

//         <section className="team_wrapper">
//           {/* Add content for the team wrapper if needed */}
//           <p>BOOKING MADE EASY!!!!</p>        </section>
//         <aside>{/* Add content for the aside section if needed */}</aside>
//       </main>
//       <footer>{/* Add content for the footer if needed */}</footer>
//     </div>
//   );
// };

// Home.propTypes = {
//   heroText: PropTypes.string.isRequired,
// };

// export default Home;
