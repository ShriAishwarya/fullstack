// Dashboard.jsx

// import React from 'react';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  // Sample data for chart
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [1500, 2000, 1800, 2500, 2100, 3000],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Total Users</h3>
          <p>250</p>
        </div>
        <div className="summary-card">
          <h3>Revenue</h3>
          <p>$15,000</p>
        </div>
        <div className="summary-card">
          <h3>Orders</h3>
          <p>120</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-container">
          <h3>Monthly Revenue Chart</h3>
          <Line data={chartData} />
        </div>
      </div>

      {/* Add more components and widgets as needed */}
    </div>
  );
};

export default Dashboard;
