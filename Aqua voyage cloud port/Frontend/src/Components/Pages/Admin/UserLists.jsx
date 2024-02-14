import React, { useState } from 'react';
import './UserList.css';
import Ch from './CustomSidebar';
import { Typography } from '@mui/material';

const UserListTable = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', image: 'avatar1.jpg', phoneNumber: 1234567890, address: '123 Street, City' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', image: 'avatar2.jpg', phoneNumber: 9876543210, address: '456 Avenue, Town' },
    { id: '3', name: 'Alice Johnson', email: 'alice@example.com', role: 'User', image: 'avatar3.jpg', phoneNumber: 5555555555, address: '789 Road, Village' },
    { id: '4', name: 'Bob Brown', email: 'bob@example.com', role: 'User', image: 'avatar4.jpg', phoneNumber: 1231231234, address: '101 Lane, Suburb' },
    { id: '5', name: 'Eva Lee', email: 'eva@example.com', role: 'User', image: 'avatar5.jpg', phoneNumber: 9876543210, address: '246 Boulevard, City' },
    { id: '6', name: 'Michael Johnson', email: 'michael@example.com', role: 'User', image: 'avatar6.jpg', phoneNumber: 5551234567, address: '777 Park, Town' },
    { id: '7', name: 'Sarah Miller', email: 'sarah@example.com', role: 'User', image: 'avatar7.jpg', phoneNumber: 9998887777, address: '888 Circle, Suburb' },
    { id: '8', name: 'David Wilson', email: 'david@example.com', role: 'User', image: 'avatar8.jpg', phoneNumber: 1112223333, address: '444 Avenue, City' },
    { id: '9', name: 'Emily Davis', email: 'emily@example.com', role: 'User', image: 'avatar9.jpg', phoneNumber: 8889990000, address: '555 Road, Village' },
    { id: '10', name: 'Ryan Garcia', email: 'ryan@example.com', role: 'User', image: 'avatar10.jpg', phoneNumber: 1239874560, address: '666 Lane, Town' },
  ]);

  const handleEdit = (id) => {
    // Implement edit logic here
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete logic here
    alert(`Delete user with ID: ${id}`);
  };

  return (
    <div>
      <Ch />
      <div className="user-list-container">
        <h1>User List</h1>
        <table className="user-list-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Image</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td><img src={user.image} alt={user.name} /></td>
                <td>{user.phoneNumber}</td>
                <td>{user.address}</td>
                <td>
                <button className="edit-button" onClick={() => handleEdit(user.id)}>Edit</button>
  <button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="sticky-footer">
        <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
          &copy; 2022 AquaVoyage CloudPort. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default UserListTable;

