// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/charts">Charts</Link>
      <Link to="/tables">Tables</Link>
    </div>
  );
};

export default Sidebar;
