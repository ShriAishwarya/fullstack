import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BookingChart = ({ bookingData }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    const data = {
      labels: bookingData.map((booking) => booking.date),
      datasets: [
        {
          label: 'Number of Bookings',
          data: bookingData.map((booking) => booking.count),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    // Create a new chart instance
    const newChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
            },
            title: {
              display: true,
              text: 'Date',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Bookings',
            },
          },
        },
      },
    });

    // Save the new chart instance to the ref
    chartRef.current.chart = newChart;

    // Ensure the chart gets properly destroyed on component unmount
    return () => {
      newChart.destroy();
    };
  }, [bookingData]);

  return (
    <div>
      <h2>Booking Chart</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BookingChart;
