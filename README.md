# Trello-Style Task Management Application

## Overview

This is a full-stack single-page application (SPA) where users can sign in, create boards, add lists and cards, and collaborate in real time. The application allows users to manage tasks visually and offers live updates as other users interact with the same board. It is inspired by the functionality of Trello.

## Features

- **User Authentication**: Users can register, log in, and log out securely.
- **Boards**: Users can create multiple boards for organizing tasks.
- **Lists and Cards**: Within each board, users can create lists (e.g., "To Do", "In Progress", "Done") and add cards to track tasks.
- **Sharing and Collaboration**: Users can share boards with others for collaboration. All users on a shared board can add, edit, and move cards.
- **Real-Time Updates**: Changes to boards, lists, and cards are updated instantly across all users' browsers in real time.
- **Connected Users**: Displays which users are currently viewing the board in real time.

## Technologies Used

### Frontend
- **React.js**: For building the single-page user interface.
- **CSS**: For styling the components.
- **Axios or Fetch API**: For making HTTP requests to the backend.
- **WebSockets**: For real-time communication between users.

### Backend
- **Node.js with Express**: To handle API requests and manage business logic.
- **MongoDB**: To store user data, boards, lists, and cards.
- **JWT (JSON Web Tokens)**: For secure user authentication and authorization.
- **WebSockets (Socket.IO)**: For handling real-time updates between users.

## Setup Instructions

### Prerequisites
- Node.js and npm installed.
- MongoDB installed and running locally or accessible via a remote database (e.g., MongoDB Atlas).
- A code editor like VS Code.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adiiverma40/Trello.git
   cd Trello

