import CustomNavbar from '../CustomNabar';
import './Booking.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Typography } from '@mui/material';

const Booking = () => {
  const [retreatType, setRetreatType] = useState('beach');
  const navigate = useNavigate(); // Initialize navigate

  const handleRetreatChange = (event) => {
    setRetreatType(event.target.value);
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary booking logic here
    // ...

    // Use navigate to navigate to the PaymentPage
    navigate('/payment');
  };

  return (
    <div className={`container ${retreatType}-background`}>
      <header>
        <CustomNavbar />
      </header>
      <div className='empty'></div>
      <main>
        <section className="booking-form">
          <h1>Book Your Waterfront Retreat</h1>
          <form onSubmit={handleBookingSubmit}>
            <label htmlFor="retreat-type">Type of Retreat:</label>
            <select
              id="retreat-type"
              name="retreat-type"
              value={retreatType}
              onChange={handleRetreatChange}
              required
            >
              <option value="beach">Beach Retreat</option>
              <option value="mountain">Boat Retreat</option>
              <option value="lake">Lake Retreat</option>
            </select>

            <label htmlFor="check-in">Check-in Date:</label>
            <input type="date" id="check-in" name="check-in" required />

            <label htmlFor="check-out">Check-out Date:</label>
            <input type="date" id="check-out" name="check-out" required />

            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" required />

            <label htmlFor="rooms">Number of Rooms:</label>
            <input type="number" id="rooms" name="rooms" min="1" required />

            <button className="button-63" type="submit">
              Book Now
            </button>
          </form>
        </section>
      </main>
      <footer className="black-footer">
        <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
          &copy; 2022 AquaVoyage CloudPort. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default Booking;




// import CustomNavbar from '../CustomNabar';
// import './Booking.css';

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { Typography } from '@mui/material';

// const Booking = () => {
//   const [retreatType, setRetreatType] = useState('beach');
//   const navigate = useNavigate();

//   const handleRetreatChange = (event) => {
//     setRetreatType(event.target.value);
//   };

//   const handleBookingSubmit = (event) => {
//     event.preventDefault();
//     // Perform any necessary booking logic here
//     // ...

//     // Navigate to the PaymentPage
//     navigate('/payment');
//   };

//   return (
//     <div className={`container ${retreatType}-background`}>
//       <header>
//         <CustomNavbar />
//       </header>
//       <div className='empty'></div>
//       <main>
//         <section className="booking-form">
//           <h1>Book Your Waterfront Retreat</h1>
//           <form onSubmit={handleBookingSubmit}>
//             <label htmlFor="retreat-type">Type of Retreat:</label>
//             <select
//               id="retreat-type"
//               name="retreat-type"
//               value={retreatType}
//               onChange={handleRetreatChange}
//               required
//             >
//               <option value="beach">Beach Retreat</option>
//               <option value="mountain">Boat Retreat</option>
//               <option value="lake">Lake Retreat</option>
//             </select>

//             <label htmlFor="check-in">Check-in Date:</label>
//             <input type="date" id="check-in" name="check-in" required />

//             <label htmlFor="check-out">Check-out Date:</label>
//             <input type="date" id="check-out" name="check-out" required />

//             <label htmlFor="guests">Number of Guests:</label>
//             <input type="number" id="guests" name="guests" min="1" required />

//             <label htmlFor="rooms">Number of Rooms:</label>
//             <input type="number" id="rooms" name="rooms" min="1" required />

//             <button className="button-63" type="submit">
//               Book Now
//             </button>
//           </form>
//         </section>
//       </main>
//       <footer className="black-footer">
//         <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
//           &copy; 2022 AquaVoyage CloudPort. All rights reserved.
//         </Typography>
//       </footer>
//     </div>
//   );
// };

// export default Booking;








// import React, { useState } from 'react';
// import CustomNavbar from '../CustomNabar';
// import './Booking.css';
// import { Typography } from '@mui/material';
// const Booking = () => {
//   const [retreatType, setRetreatType] = useState('beach'); // Default retreat type

//   const handleRetreatChange = (event) => {
//     setRetreatType(event.target.value);
//   };

//   return (
//     <div className={`container ${retreatType}-background`}>
//       <header>
//         <CustomNavbar />
//       </header>
//       <div className='empty'>
        
//       </div>
//       <main>
//         <section className="booking-form">
//           <h1>Book Your Waterfront Retreat</h1>
//           <form>
//             <label htmlFor="retreat-type">Type of Retreat:</label>
//             <select
//               id="retreat-type"
//               name="retreat-type"
//               value={retreatType}
//               onChange={handleRetreatChange}
//               required
//             >
//               <option value="beach">Beach Retreat</option>
//               <option value="mountain">Boat Retreat</option>
//               <option value="lake">Lake Retreat</option>
//               {/* Add more options as needed */}
//             </select>

//             <label htmlFor="check-in">Check-in Date:</label>
//             <input type="date" id="check-in" name="check-in" required />

//             <label htmlFor="check-out">Check-out Date:</label>
//             <input type="date" id="check-out" name="check-out" required />

//             <label htmlFor="guests">Number of Guests:</label>
//             <input type="number" id="guests" name="guests" min="1" required />

//             <label htmlFor="rooms">Number of Rooms:</label>
//             <input type="number" id="rooms" name="rooms" min="1" required />

//             <button className="button-63"type="submit">Book Now</button>
//           </form>
//         </section>
//       </main>
//       <footer className="black-footer">
//         {/* <Container> */}
//           <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
//             &copy; 2022 AquaVoyage CloudPort. All rights reserved.
//           </Typography>
//         {/* </Container> */}
//       </footer>
//     </div>
//   );
// };

// export default Booking;


// import React from 'react';
// import CustomNavbar from '../CustomNabar';
// import './Booking.css';

// const Booking = () => {
//   return (
//     <div className="container">
//       <header>
//         <CustomNavbar />
//       </header>
//       <main>
//         <section className="booking-form">
//           <h1>Book Your Waterfront Retreat</h1>
//           <form>
//             <label htmlFor="retreat-type">Type of Retreat:</label>
//             <select id="retreat-type" name="retreat-type" required>
//               <option value="beach">Beach Retreat</option>
//               <option value="mountain">Water Retreat</option>
//               <option value="lake">Lake Retreat</option>
//               {/* Add more options as needed */}
//             </select>

//             <label htmlFor="check-in">Check-in Date:</label>
//             <input type="date" id="check-in" name="check-in" required />

//             <label htmlFor="check-out">Check-out Date:</label>
//             <input type="date" id="check-out" name="check-out" required />

//             <label htmlFor="guests">Number of Guests:</label>
//             <input type="number" id="guests" name="guests" min="1" required />

//             <label htmlFor="rooms">Number of Rooms:</label>
//             <input type="number" id="rooms" name="rooms" min="1" required />

//             <button type="submit">Book Now</button>
//           </form>
//         </section>
//       </main>
//       <footer>
//         <p>&copy; 2022 AquaVoyage CloudPort. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Booking;


// import CustomNavbar from "../CustomNabar";


// const About=()=>
// {
//     return (
      
//         <div className="Container">
//             <header>
//             <CustomNavbar/>
//             </header>
//             <main>
//                 <section>
//                     <div>
//                         About
                    
//                     </div>
//                 </section>
//             </main>

//         </div>


//     );
// }
// export default About


// import React from 'react';
// import CustomNavbar from '../CustomNabar';

// const Booking = () => {
//   return (
//     <div className="container">
//       <header>
//         <CustomNavbar />
//       </header>
//       <main>
//         <section className="booking-form">
//           <h1>Book Your Waterfront Retreat</h1>
//           <form>
//             <label htmlFor="check-in">Check-in Date:</label>
//             <input type="date" id="check-in" name="check-in" required />

//             <label htmlFor="check-out">Check-out Date:</label>
//             <input type="date" id="check-out" name="check-out" required />

//             <label htmlFor="guests">Number of Guests:</label>
//             <input type="number" id="guests" name="guests" min="1" required />

//             <button type="submit">Book Now</button>
//           </form>
//         </section>
//       </main>
//       <footer>
//         <p>&copy; 2022 AquaVoyage CloudPort. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Booking;


// import React from 'react';
// import CustomNavbar from '../CustomNabar';
// import './Booking.css'; // Import local styles

// const Booking = () => {
//   return (
//     <div className="container">
//       <header>
//         <CustomNavbar />
//       </header>
//       <main>
//         <section className="booking-form">
//           <h1>Book Your Waterfront Retreat</h1>
//           <form>
//             <label htmlFor="check-in">Check-in Date:</label>
//             <input type="date" id="check-in" name="check-in" required />

//             <label htmlFor="check-out">Check-out Date:</label>
//             <input type="date" id="check-out" name="check-out" required />

//             <label htmlFor="guests">Number of Guests:</label>
//             <input type="number" id="guests" name="guests" min="1" required />

//             <button type="submit">Book Now</button>
//           </form>
//         </section>
//       </main>
//       <footer>
//         <p>&copy; 2022 AquaVoyage CloudPort. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Booking;
