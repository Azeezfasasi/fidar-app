import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(); // Export UserContext

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({
        firstName: '',
        lastName: '',
        fullName: '',
        email: '',
        profileImage: '',
        city: '',
        state: ''
    });

    useEffect(() => {
        // Load users and currentUser data from localStorage on initial load
        const storedUsers = localStorage.getItem('users');
        const storedCurrentUser = localStorage.getItem('currentUser');

        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
        if (storedCurrentUser) {
            setCurrentUser(JSON.parse(storedCurrentUser));
        }
    }, []);

    // Updated addUser function to handle the passed role correctly
    const addUser = (newUser) => {
        const updatedUsers = [...users, newUser];  // Use newUser as passed in without overwriting role
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };   

    const updateCurrentUser = (updatedUser) => {
        setCurrentUser(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    };

    const findUserByEmail = (email) => {
        return users.find((user) => user.email === email);
    };

    // Function to change user role
    const changeUserRole = (email, newRole) => {
        const updatedUsers = users.map(user =>
            user.email === email ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    // Function to delete a user
    const deleteUser = (email) => {
        const updatedUsers = users.filter(user => user.email !== email);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    // Function to disable a user (mark as disabled)
    const disableUser = (email) => {
        const updatedUsers = users.map(user => 
            user.email === email ? { ...user, disabled: true } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    // Function to enable a user (mark as active)
    const enableUser = (email) => {
        const updatedUsers = users.map(user => 
            user.email === email ? { ...user, disabled: false } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    // Function to change a user's password
    const changeUserPassword = (email, newPassword) => {
        const updatedUsers = users.map(user =>
            user.email === email ? { ...user, password: newPassword } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    // Logout function
    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');  // Remove current user from localStorage
    };


    return (
        <UserContext.Provider value={{ users, currentUser, addUser, updateCurrentUser, findUserByEmail, deleteUser, disableUser, enableUser, changeUserRole, changeUserPassword, logout }}>
            {children}
        </UserContext.Provider>
    );
};
