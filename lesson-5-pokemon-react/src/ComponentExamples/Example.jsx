import React from "react";

// Component to display individual user data
const UserItem = ({ user }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <span style={{ fontWeight: "bold" }}>{user.name}</span>
      <span>{user.email}</span>
    </div>
  );
};

// Component to display the list of users
const UserList = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
  ];

  const getUsers = () => {
    return users;
  };

  const userList = getUsers();

  return (
    <div
      style={{
        width: "50%",
        margin: "20px auto",
        border: "1px solid #000",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", margin: "10px 0" }}>User List</h2>
      {userList.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
