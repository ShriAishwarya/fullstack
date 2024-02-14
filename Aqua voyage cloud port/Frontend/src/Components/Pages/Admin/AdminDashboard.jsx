import React from 'react';
// import Chart from './Chart'; // Assuming Chart component is in a separate file named Chart.jsx
import './AdminDashboard.css';
import { Link } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const AdminDashboard = () => {
  // Sample data for line chart
  const lineData = [
    { month: 'Jan', A: 100, B: 200, C: 150 },
    { month: 'Feb', A: 150, B: 220, C: 180 },
    { month: 'Mar', A: 200, B: 240, C: 190 },
    { month: 'Apr', A: 250, B: 260, C: 200 },
    { month: 'May', A: 300, B: 280, C: 220 },
    { month: 'Jun', A: 350, B: 300, C: 240 },
    { month: 'Jul', A: 400, B: 320, C: 260 },
  ];

  // Sample data for bar graph
  const barData = [
    { name: 'A', value: 20, color: '#8884d8' },
    { name: 'B', value: 30, color: '#82ca9d' },
    { name: 'C', value: 40, color: '#ffc658' },
    { name: 'D', value: 50, color: '#ff7f0e' },
    { name: 'E', value: 60, color: '#d62728' },
  ];

  return (
    <div>
      <>
        {/* Sidebar */}
        <section id="sidebar">
          {/* Sidebar content */}
          <div className="white-label"></div>
          <div id="sidebar-nav">
            <ul>
              {/* <li className="active">
                <a href="#">
                  <i className="fa fa-dashboard" /> AQUAQ
                </a>
              </li> */}
              {/* <li>
                <a href="#">
                  <i className="fa fa-desktop" /> My Website
                </a>
              </li> */}
              <ul>
  {/* <li className="active">
    <a href="#">
      <i className="fa fa-dashboard" /> Dashboard
    </a>
  </li> */}
  <li>
    <a href="#">
      <i className="fa fa-desktop" /><Link to={'/home'}>My Website</Link>
    </a>
  </li>
  <li>
    <a href="#">
      <i className="fa fa-usd" /><Link to={'/boats'}> Boats List</Link>
    </a>
  </li>
  <li>
    <a href="#">
      <i className="fa fa-pencil-square-o" /> <Link to={'/bookinglist'}> Booking List</Link>
    </a>
  </li>
  <li>
    <a href="#">
      <i className="fa fa-line-chart" /> <Link to={'/boats'}>User Details</Link>
    </a>
  </li>
  <li>
    <a href="#">
      <i className="fa fa-sitemap" /> View Boats
    </a>
  </li>
  <li>
    <a href="#">
      <i className="fa fa-comments-o" /> Social Marketing
    </a>
  </li>
  <li>
    <a href="#">
      <i className="fa fa-map-marker" /> Reporting
    </a>
  </li>
  <li>
    <a href="#">
      <i className="fa fa-users" /> Employees
    </a>
  </li>
  <li>
    <a href="#">
      <i className="fa fa-calendar-o" /> Reservations
    </a>
  </li>
  <li>
    <a href="#">
      <i className="fa fa-calendar" /> Calendar
    </a>
  </li>
</ul>

            </ul>
          </div>
        </section>
        
        {/* Content */}
        <section id="content">
          {/* Header */}
          <div id="header">
            {/* Header content */}
            <div className="header-nav">
              <div className="menu-button">{/*<i class="fa fa-navicon"></i>*/}</div>
              <div className="nav">
                <ul>
                  {/* <li className="nav-settings">
                    <div className="font-icon">
                      <i className="fa fa-tasks" />
                    </div>
                  </li>
                  <li className="nav-mail">
                    <div className="font-icon">
                      <i className="fa fa-envelope-o" />
                    </div>
                  </li> 
                  <li className="nav-calendar">
                    <div className="font-icon">
                      <i className="fa fa-calendar" />
                    </div>
                  </li>
                  <li className="nav-chat">
                    <div className="font-icon">
                      <i className="fa fa-comments-o" />
                    </div>
                  </li>*/}
                  <li className="nav-profile">
                    <div className="nav-profile-image">
                      <img
                        src="https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-418179856.jpg"
                        alt="profile-img"
                      />
                      <div className="nav-profile-name">
                        {/* ADMIN */}
                        <Link to="/admin/profile">Admin</Link>

                        <i className="fa fa-caret-down" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="content">
            <div className="content-header">
              <h1>Dashboard</h1>
              <p>AquaVoyage CloudPort: Simplifying Waterfront Retreat Bookings</p>
            </div>
            
            {/* Line Graph */}
            <div className="widget-box sample-widget">
              <div className="widget-header">
                <h2>BOOKING VS REVENUE</h2>
              </div>
              <div className="widget-content">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="A" stroke="#8884d8" strokeWidth={3} />
                    <Line type="monotone" dataKey="B" stroke="#82ca9d" strokeWidth={3} />
                    <Line type="monotone" dataKey="C" stroke="#ffc658" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Bar Graph */}
            <div className="widget-box sample-widget">
              <div className="widget-header">
                <h2>BOOKING DATA</h2>
              </div>
              <div className="widget-content">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value">
                      {
                        barData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))
                      }
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default AdminDashboard;




// import React from 'react';
// import './AdminDashboard.css';

// const AdminDashboard = () => {

//   return (
//     <div>

// <>
//   <section id="sidebar">
//     <div className="white-label"></div>
//     <div id="sidebar-nav">
//       <ul>
//         <li className="active">
//           <a href="#">
//             <i className="fa fa-dashboard" /> Dashboard
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-desktop" /> My Website
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-usd" /> Ecommerce
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-pencil-square-o" /> My Blog
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-sitemap" /> SEO Tools
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-line-chart" /> Reporting
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-comments-o" />
//             Social Marketing
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-map-marker" /> Get Traffic
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-users" /> Employees
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-calendar-o" /> Reservations
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-calendar" /> Calendar
//           </a>
//         </li>
//       </ul>
//     </div>
//   </section>
//   <section id="content">
//     <div id="header">
//       <div className="header-nav">
//         <div className="menu-button">{/*<i class="fa fa-navicon"></i>*/}</div>
//         <div className="nav">
//           <ul>
//             <li className="nav-settings">
//               <div className="font-icon">
//                 <i className="fa fa-tasks" />
//               </div>
//             </li>
//             <li className="nav-mail">
//               <div className="font-icon">
//                 <i className="fa fa-envelope-o" />
//               </div>
//             </li>
//             <li className="nav-calendar">
//               <div className="font-icon">
//                 <i className="fa fa-calendar" />
//               </div>
//             </li>
//             <li className="nav-chat">
//               <div className="font-icon">
//                 <i className="fa fa-comments-o" />
//               </div>
//             </li>
//             <li className="nav-profile">
//               <div className="nav-profile-image">
//                 <img
//                   src="https://skynet.marketecture.com/user_avatars/258800/Hayley-Helsten.jpg"
//                   alt="profile-img"
//                 />
//                 <div className="nav-profile-name">
//                   Jane Smith
//                   <i className="fa fa-caret-down" />
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div className="content">
//       <div className="content-header">
//         <h1>Dashboard</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </div>
//       {/* <div className="widget-box sample-widget">
//         <div className="widget-header">
//           <h2>Widget Header</h2>
//           <i className="fa fa-cog" />
//         </div>
//         <div className="widget-content">
//           <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png" />
//         </div>
//       </div>
//       <div className="widget-box sample-widget">
//         <div className="widget-header">
//           <h2>Widget Header</h2>
//           <i className="fa fa-cog" />
//         </div>
//         <div className="widget-content">
//           <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png" />
//         </div>
//       </div>
//       <div className="widget-box sample-widget">
//         <div className="widget-header">
//           <h2>Widget Header</h2>
//           <i className="fa fa-cog" />
//         </div>
//         <div className="widget-content">
//           <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png" />
//         </div>
//       </div>
//       <div className="widget-box sample-widget">
//         <div className="widget-header">
//           <h2>Widget Header</h2>
//           <i className="fa fa-cog" />
//         </div>
//         <div className="widget-content">
//           <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png" />
//         </div>
//       </div> */}
//     </div>
//   </section>
// </>


//     </div>
//   );
// };

// export default AdminDashboard;
