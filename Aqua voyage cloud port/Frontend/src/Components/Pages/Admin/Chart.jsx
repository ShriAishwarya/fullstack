import React from 'react';
import { LineChart, Line, Scatter, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', bookings: 100, revenue: 5000, boatBookings: 50 },
  { month: 'Feb', bookings: 150, revenue: 6000, boatBookings: 70 },
  { month: 'Mar', bookings: 200, revenue: 7000, boatBookings: 90 },
  { month: 'Apr', bookings: 250, revenue: 8000, boatBookings: 100 },
  { month: 'May', bookings: 300, revenue: 9000, boatBookings: 120 },
  { month: 'Jun', bookings: 350, revenue: 10000, boatBookings: 150 },
  { month: 'Jul', bookings: 400, revenue: 11000, boatBookings: 180 },
];

const Chart = () => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Line Chart */}
        <div style={{ width: '100%', marginBottom: '20px', backgroundColor: 'white', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <h2>Line Chart</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 10 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Bar Chart */}
        <div style={{ width: '100%', marginBottom: '20px', backgroundColor: 'white', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <h2>Bar Chart</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="boatBookings" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Pie Chart
        <div style={{ width: '100%', backgroundColor: 'white', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <h2>Pie Chart</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie data={data} dataKey="boatBookings" nameKey="month" cx="50%" cy="50%" outerRadius={100}>
                {
                  data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))
                }
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div> */}
      </div> 
    </div>
  );
}

export default Chart;


// import React, { useEffect } from 'react';
// import Chart from 'chart.js/auto';

// const ChartComponent = () => {
//   // Utils object
//   const Utils = {
//     CHART_COLORS: {
//       red: 'rgba(255, 0, 0, 1)'
//     },
//     transparentize: (color) => {
//       // Implement your logic to transparentize the color
//       return color;
//     }
//   };

//   useEffect(() => {
//     // Your data object
//     const data = {
//       labels: generateLabels(),
//       datasets: [
//         {
//           label: 'Dataset',
//           data: generateData(),
//           borderColor: Utils.CHART_COLORS.red,
//           backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),
//           fill: false
//         }
//       ]
//     };

//     // Chart.js configuration object
//     const config = {
//       type: 'bar',
//       data: data,
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top',
//           },
//           title: {
//             display: true,
//             text: 'Chart.js Bar Chart'
//           }
//         }
//       }
//     };

//     // Create a chart using Chart.js
//     const ctx = document.getElementById('myChart').getContext('2d');
//     const myChart = new Chart(ctx, config);

//     // Cleanup function to destroy the Chart instance when the component is unmounted
//     return () => {
//       myChart.destroy();
//     };

//     // Sample functions (replace them with your actual implementations)
//     function generateLabels() {
//       // Implement your logic to generate labels
//       return ['Label 1', 'Label 2', 'Label 3'];
//     }

//     function generateData() {
//       // Implement your logic to generate data
//       return [10, 20, 30];
//     }
//   }, []); // Empty dependency array to run the useEffect hook only once

//   return (
//     <div style={{ width: '80%', margin: 'auto' }}>
//       <canvas id="myChart"></canvas>
//     </div>
//   );
// };

// export default ChartComponent;


// import React, { useEffect } from 'react';
// import Chart from 'chart.js/auto';

// const ChartComponent = () => {
//   // Utils object
//   const Utils = {
//     CHART_COLORS: {
//       red: 'rgba(255, 0, 0, 1)'
//     },
//     transparentize: (color) => {
//       // Implement your logic to transparentize the color
//       return color;
//     }
//   };

//   useEffect(() => {
//     // Your data object
//     const data = {
//       labels: generateLabels(),
//       datasets: [
//         {
//           label: 'Dataset',
//           data: generateData(),
//           borderColor: Utils.CHART_COLORS.red,
//           backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),
//           fill: false
//         }
//       ]
//     };

//     // Create a chart using Chart.js
//     const ctx = document.getElementById('myChart').getContext('2d');
//     const myChart = new Chart(ctx, {
//       type: 'line', // You can change the type of chart as needed
//       data: data,
//       options: {
//         // Add any additional options here
//       }
//     });

//     // Cleanup function to destroy the Chart instance when the component is unmounted
//     return () => {
//       myChart.destroy();
//     };

//     // Sample functions (replace them with your actual implementations)
//     function generateLabels() {
//       // Implement your logic to generate labels
//       return ['Label 1', 'Label 2', 'Label 3'];
//     }

//     function generateData() {
//       // Implement your logic to generate data
//       return [10, 20, 30];
//     }
//   }, []); // Empty dependency array to run the useEffect hook only once

//   return (
//     <div style={{ width: '80%', margin: 'auto' }}>
//       <canvas id="myChart"></canvas>
//     </div>
//   );
// };

// export default ChartComponent;





// import CustomSidebar from "./CustomSidebar";

// const Ana=()=>
// {
//     return (
      
//         <div className="Container">
//             <header>
//             <CustomSidebar/>
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
// export default Ana