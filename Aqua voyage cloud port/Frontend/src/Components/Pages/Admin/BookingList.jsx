import React, { useState } from 'react';
import './Boats.css'; // Import CSS file
import Ch from './CustomSidebar';
import { Typography } from '@mui/material';
import './BookingList.css';

// Function to get user by ID
const getUserById = (userId, users) => {
  const user = users.find(user => user.id === userId);
  return user ? user.name : '';
};

// Function to get boat house by ID
const getBoatHouseById = (boatHouseId, boatHouses) => {
  const boatHouse = boatHouses.find(boatHouse => boatHouse.id === boatHouseId);
  return boatHouse ? boatHouse.name : '';
};

const BoatHouseBookingPage = () => {
  // Sample booking data
 // Sample booking data
const [bookings, setBookings] = useState([
  { id: '1', userId: '1', boatHouseId: '1', noOfPersons: 4, fromDate: '2024-02-14', toDate: '2024-02-20', totalPrice: 700, payment: 'Paid' },
  { id: '2', userId: '2', boatHouseId: '2', noOfPersons: 6, fromDate: '2024-03-01', toDate: '2024-03-07', totalPrice: 900, payment: 'Paid' },
  { id: '3', userId: '1', boatHouseId: '1', noOfPersons: 2, fromDate: '2024-03-10', toDate: '2024-03-15', totalPrice: 400, payment: 'Pending' },
  // Add 10 more bookings
  { id: '4', userId: '3', boatHouseId: '2', noOfPersons: 3, fromDate: '2024-03-20', toDate: '2024-03-25', totalPrice: 600, payment: 'Pending' },
  { id: '5', userId: '4', boatHouseId: '1', noOfPersons: 5, fromDate: '2024-04-01', toDate: '2024-04-07', totalPrice: 800, payment: 'Paid' },
  { id: '6', userId: '5', boatHouseId: '2', noOfPersons: 2, fromDate: '2024-04-10', toDate: '2024-04-15', totalPrice: 300, payment: 'Pending' },
  { id: '7', userId: '6', boatHouseId: '1', noOfPersons: 4, fromDate: '2024-04-20', toDate: '2024-04-25', totalPrice: 700, payment: 'Paid' },
  { id: '8', userId: '7', boatHouseId: '2', noOfPersons: 3, fromDate: '2024-05-01', toDate: '2024-05-07', totalPrice: 600, payment: 'Paid' },
  { id: '9', userId: '8', boatHouseId: '1', noOfPersons: 2, fromDate: '2024-05-10', toDate: '2024-05-15', totalPrice: 400, payment: 'Pending' },
  { id: '10', userId: '9', boatHouseId: '2', noOfPersons: 5, fromDate: '2024-05-20', toDate: '2024-05-25', totalPrice: 800, payment: 'Pending' },
]);

// Sample user data
const [users, setUsers] = useState([
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Alice Johnson' },
  // Add 7 more users
  { id: '4', name: 'Bob Brown' },
  { id: '5', name: 'Eva Lee' },
  { id: '6', name: 'Michael Johnson' },
  { id: '7', name: 'Sarah Miller' },
  { id: '8', name: 'David Wilson' },
  { id: '9', name: 'Emily Davis' },
  { id: '10', name: 'Ryan Garcia' },
]);

// Sample boat house data
const [boatHouses, setBoatHouses] = useState([
  { id: '1', name: 'Boat House 1' },
  { id: '2', name: 'Boat House 2' },
  // Add 8 more boat houses
  { id: '3', name: 'Boat House 3' },
  { id: '4', name: 'Boat House 4' },
  { id: '5', name: 'Boat House 5' },
  { id: '6', name: 'Boat House 6' },
  { id: '7', name: 'Boat House 7' },
  { id: '8', name: 'Boat House 8' },
  { id: '9', name: 'Boat House 9' },
  { id: '10', name: 'Boat House 10' },
]);


  return (
    <div>
      <Ch />
      <div className="centered-container">
        <div className="booking-list-container">
          <h1>Boat House Booking List</h1>
          <table className="booking-list-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Boat House</th>
                <th>No. of Persons</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Total Price</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{getUserById(booking.userId, users)}</td>
                  <td>{getBoatHouseById(booking.boatHouseId, boatHouses)}</td>
                  <td>{booking.noOfPersons}</td>
                  <td>{booking.fromDate}</td>
                  <td>{booking.toDate}</td>
                  <td>{booking.totalPrice}</td>
                  <td>{booking.payment}</td>
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
