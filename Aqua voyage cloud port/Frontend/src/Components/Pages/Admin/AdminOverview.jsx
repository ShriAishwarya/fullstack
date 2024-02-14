import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ch from './CustomSidebar';
const DashboardOverviewContainer = styled.div`
  flex: 1; /* Take remaining space */
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  margin-top: 0;
`;

const MetricContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Metric = styled.div`
  flex: 1;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
  }

  p {
    font-size: 16px;
  }
`;

const UpcomingBookingsContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const BookingItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
`;

const DashboardOverview = ({ totalBookings, revenueGenerated, occupancyRate, upcomingBookings }) => {
  return (
    <div>
    <DashboardOverviewContainer>
      <SectionTitle>Dashboard Overview</SectionTitle>
      <MetricContainer>
        <Metric>
          <h3>Total Bookings</h3>
          <p>{totalBookings}</p>
        </Metric>
        <Metric>
          <h3>Revenue Generated</h3>
          <p>${revenueGenerated}</p>
        </Metric>
        <Metric>
          <h3>Occupancy Rate</h3>
          <p>{occupancyRate}%</p>
        </Metric>
      </MetricContainer>
      <UpcomingBookingsContainer>
        <SectionTitle>Upcoming Bookings</SectionTitle>
        <ul>
          {upcomingBookings && upcomingBookings.length > 0 ? (
            upcomingBookings.map((booking, index) => (
              <BookingItem key={index}>{booking.date} - {booking.guestName}</BookingItem>
            ))
          ) : (
            <BookingItem>No upcoming bookings</BookingItem>
          )}
        </ul>
      </UpcomingBookingsContainer>
    </DashboardOverviewContainer>
    </div>
  );
};

DashboardOverview.propTypes = {
  totalBookings: PropTypes.number.isRequired,
  revenueGenerated: PropTypes.number.isRequired,
  occupancyRate: PropTypes.number.isRequired,
  upcomingBookings: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      guestName: PropTypes.string.isRequired
    })
  ).isRequired
};

export default DashboardOverview;


// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const DashboardOverviewContainer = styled.div`
//   background-color: #f9f9f9;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const MetricContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px;
// `;

// const Metric = styled.div`
//   flex: 1;
//   padding: 15px;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   h3 {
//     margin-bottom: 10px;
//     font-size: 18px;
//   }

//   p {
//     font-size: 16px;
//   }
// `;

// const UpcomingBookingsContainer = styled.div`
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
//   padding: 20px;

//   ul {
//     list-style: none;
//     padding: 0;
//   }

//   li {
//     margin-bottom: 10px;
//     font-size: 16px;
//   }
// `;

// const DashboardOverview = ({ totalBookings, revenueGenerated, occupancyRate, upcomingBookings }) => {
//   return (
//     <DashboardOverviewContainer>
//       <h2>Dashboard Overview</h2>
//       <MetricContainer>
//         <Metric>
//           <h3>Total Bookings</h3>
//           <p>{totalBookings}</p>
//         </Metric>
//         <Metric>
//           <h3>Revenue Generated</h3>
//           <p>${revenueGenerated}</p>
//         </Metric>
//         <Metric>
//           <h3>Occupancy Rate</h3>
//           <p>{occupancyRate}%</p>
//         </Metric>
//       </MetricContainer>
//       <UpcomingBookingsContainer>
//         <h3>Upcoming Bookings</h3>
//         <ul>
//           {upcomingBookings && upcomingBookings.length > 0 ? (
//             upcomingBookings.map((booking, index) => (
//               <li key={index}>{booking.date} - {booking.guestName}</li>
//             ))
//           ) : (
//             <li>No upcoming bookings</li>
//           )}
//         </ul>
//       </UpcomingBookingsContainer>
//     </DashboardOverviewContainer>
//   );
// };

// DashboardOverview.propTypes = {
//   totalBookings: PropTypes.number.isRequired,
//   revenueGenerated: PropTypes.number.isRequired,
//   occupancyRate: PropTypes.number.isRequired,
//   upcomingBookings: PropTypes.arrayOf(
//     PropTypes.shape({
//       date: PropTypes.string.isRequired,
//       guestName: PropTypes.string.isRequired
//     })
//   ).isRequired
// };

// export default DashboardOverview;

