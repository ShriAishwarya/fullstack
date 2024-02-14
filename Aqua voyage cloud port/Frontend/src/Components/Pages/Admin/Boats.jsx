import React, { useState } from 'react';
import './Boats.css'; // Import CSS file
import Ch from './CustomSidebar';
import { Typography } from '@mui/material';

const BoatHouseBookingPage = () => {
  // Sample boat house data
  const [boatHouses, setBoatHouses] = useState([
    { id: 1, name: 'Boat House 1', location: 'Location 1', price: '$100/day', capacity: 4, amenities: 'Kitchen, Bathroom', enabled: true },
    { id: 2, name: 'Boat House 2', location: 'Location 2', price: '$150/day', capacity: 6, amenities: 'Kitchen, Bathroom, Patio', enabled: true },
    { id: 3, name: 'Boat House 3', location: 'Location 3', price: '$200/day', capacity: 8, amenities: 'Kitchen, Bathroom, Patio, Wi-Fi', enabled: true },
    { id: 4, name: 'Boat House 1', location: 'Location 1', price: '$100/day', capacity: 4, amenities: 'Kitchen, Bathroom', enabled: true },
    { id: 5, name: 'Boat House 2', location: 'Location 2', price: '$150/day', capacity: 6, amenities: 'Kitchen, Bathroom, Patio', enabled: true },
    { id: 6, name: 'Boat House 3', location: 'Location 3', price: '$200/day', capacity: 8, amenities: 'Kitchen, Bathroom, Patio, Wi-Fi', enabled: true },
    { id: 7, name: 'Boat House 1', location: 'Location 1', price: '$100/day', capacity: 4, amenities: 'Kitchen, Bathroom', enabled: true },
    { id: 8, name: 'Boat House 2', location: 'Location 2', price: '$150/day', capacity: 6, amenities: 'Kitchen, Bathroom, Patio', enabled: true },
    { id: 9, name: 'Boat House 3', location: 'Location 3', price: '$200/day', capacity: 8, amenities: 'Kitchen, Bathroom, Patio, Wi-Fi', enabled: true },
  ]);

  const toggleHouseEnabled = (id) => {
    setBoatHouses(prevBoatHouses => {
      return prevBoatHouses.map(boatHouse => {
        if (boatHouse.id === id) {
          return { ...boatHouse, enabled: !boatHouse.enabled };
        }
        return boatHouse;
      });
    });
  };

  return (
    <div>
      <Ch />
      <div className="centered-container">
        <div className="boat-house-table-container">
          <table className="boat-house-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Price</th>
                <th>Capacity</th>
                <th>Amenities</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {boatHouses.map(boatHouse => (
                <tr key={boatHouse.id}>
                  <td>{boatHouse.id}</td>
                  <td>{boatHouse.name}</td>
                  <td>{boatHouse.location}</td>
                  <td>{boatHouse.price}</td>
                  <td>{boatHouse.capacity}</td>
                  <td>{boatHouse.amenities}</td>
                  <td>
                    <button onClick={() => toggleHouseEnabled(boatHouse.id)}>
                      {boatHouse.enabled ? 'Disable' : 'Enable'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer className="sticky-footer">
        <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
          &copy; 2022 AquaVoyage CloudPort. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default BoatHouseBookingPage;



// import React, { useState } from 'react';
// import './Boats.css'; // Import CSS file
// import Ch from './CustomSidebar';
// import { Typography } from '@mui/material';


// const BoatHouseBookingPage = () => {
//   // Sample boat house data
//   const [boatHouses, setBoatHouses] = useState([
//     { id: 1, name: 'Boat House 1', location: 'Location 1', price: '$100/day', capacity: 4, amenities: 'Kitchen, Bathroom' },
//     { id: 2, name: 'Boat House 2', location: 'Location 2', price: '$150/day', capacity: 6, amenities: 'Kitchen, Bathroom, Patio' },
//     { id: 3, name: 'Boat House 3', location: 'Location 3', price: '$200/day', capacity: 8, amenities: 'Kitchen, Bathroom, Patio, Wi-Fi' },
//     { id: 4, name: 'Boat House 1', location: 'Location 1', price: '$100/day', capacity: 4, amenities: 'Kitchen, Bathroom' },
//     { id: 5, name: 'Boat House 2', location: 'Location 2', price: '$150/day', capacity: 6, amenities: 'Kitchen, Bathroom, Patio' },
//     { id: 6, name: 'Boat House 3', location: 'Location 3', price: '$200/day', capacity: 8, amenities: 'Kitchen, Bathroom, Patio, Wi-Fi' },
//     { id: 7, name: 'Boat House 1', location: 'Location 1', price: '$100/day', capacity: 4, amenities: 'Kitchen, Bathroom' },
//     { id: 8, name: 'Boat House 2', location: 'Location 2', price: '$150/day', capacity: 6, amenities: 'Kitchen, Bathroom, Patio' },
//     { id: 9, name: 'Boat House 3', location: 'Location 3', price: '$200/day', capacity: 8, amenities: 'Kitchen, Bathroom, Patio, Wi-Fi' },
//   ]);

//   return (
//     <div>
//         <Ch/>
//     {/* <h1>Boat House Booking</h1> */}
//     <div className="centered-container">
//       {/* <h1>Boat House Booking</h1> */}
//       <div className="boat-house-table-container">
//         <table className="boat-house-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Location</th>
//               <th>Price</th>
//               <th>Capacity</th>
//               <th>Amenities</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {boatHouses.map(boatHouse => (
//               <tr key={boatHouse.id}>
//                 <td>{boatHouse.id}</td>
//                 <td>{boatHouse.name}</td>
//                 <td>{boatHouse.location}</td>
//                 <td>{boatHouse.price}</td>
//                 <td>{boatHouse.capacity}</td>
//                 <td>{boatHouse.amenities}</td>
//                 <td>
//                   <button onClick={() => bookBoatHouse(boatHouse.id)}>Enable Now</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     <footer className="sticky-footer">
//         <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
//           &copy; 2022 AquaVoyage CloudPort. All rights reserved.
//         </Typography>
//       </footer>
//     </div>
//   );
// };

// const bookBoatHouse = (id) => {
//   // Add your booking logic here, like redirecting to booking page or showing a modal
//   alert(`Booking boat house with ID: ${id}`);
// };

// export default BoatHouseBookingPage;
