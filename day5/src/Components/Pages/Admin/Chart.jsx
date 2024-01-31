import React from 'react';
import BookingChart from './BookingChart';

const Dashboard = () => {
  // Replace this with actual booking data
  const bookingData = [
    { date: '2022-01-01', count: 5 },
    { date: '2022-01-02', count: 8 },
    { date: '2022-01-03', count: 12 },
    // Add more data points as needed
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {/* Ensure bookingData is passed to BookingChart */}
        <BookingChart bookingData={bookingData} />
      </div>
      {/* Add other dashboard components as needed */}
    </div>
  );
};

export default Dashboard;



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