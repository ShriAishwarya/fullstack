import React from 'react';
import { Link } from 'react-router-dom';
import CustomNavbar from '../CustomNabar';
import {
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  Box,
} from '@mui/material';

const BookingHistory = () => {
  // Sample booking data
  const bookingHistory = [
    { id: 1, hotel: 'Hotel ABC', checkIn: '2022-05-10', checkOut: '2022-05-15' },
    { id: 2, hotel: 'Hotel XYZ', checkIn: '2022-06-01', checkOut: '2022-06-05' },
    { id: 3, hotel: 'Hotel XYZ', checkIn: '2022-06-01', checkOut: '2022-06-05' },
    { id: 4, hotel: 'Hotel XYZ', checkIn: '2022-06-01', checkOut: '2022-06-05' },
    { id: 5, hotel: 'Hotel XYZ', checkIn: '2022-06-01', checkOut: '2022-06-05' },
    { id: 6, hotel: 'Hotel XYZ', checkIn: '2022-06-01', checkOut: '2022-06-05' },
    { id: 7, hotel: 'Hotel XYZ', checkIn: '2022-06-01', checkOut: '2022-06-05' },
    { id: 8, hotel: 'Hotel XYZ', checkIn: '2022-06-01', checkOut: '2022-06-05' },
    // Add more booking entries as needed
  ];

  return (
    <div>
        <header>
        <CustomNavbar />
        </header>
    <Container maxWidth="md">
      <Box mt={3}>
        <Typography variant="h4" gutterBottom>
          Booking History
        </Typography>
        <Paper elevation={3}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Hotel</TableCell>
                  <TableCell>Check-In Date</TableCell>
                  <TableCell>Check-Out Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookingHistory.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.id}</TableCell>
                    <TableCell>{booking.hotel}</TableCell>
                    <TableCell>{booking.checkIn}</TableCell>
                    <TableCell>{booking.checkOut}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        {/* <Box mt={2}>
          <Link to="/home">Go to Home</Link>
        </Box> */}
      </Box>
    </Container>
    <footer className="black-footer">
        {/* <Container> */}
          <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
            &copy; 2022 AquaVoyage CloudPort. All rights reserved.
          </Typography>
        {/* </Container> */}
      </footer>
    </div>
  );
};

export default BookingHistory;
