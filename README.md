# Calendar App

## Description

This project is a **calendar application** built using modern web development tools and best practices. It allows users to manage tasks, view holidays, and interact with the calendar through various functionalities such as filtering, task creation, editing, and drag-and-drop task reassignment.

---

## Technologies Used

### Core Libraries and Frameworks

- **React.js**: For building the user interface.
- **Vite**: For fast development and building.

### TypeScript

- Ensures type safety and robust code.

### Date Management

- **Moment.js**: For handling and manipulating dates and times.

### Styling

- **Styled-Components**: For styling the components with scoped and dynamic CSS.

### Code Quality and Formatting

- **Prettier**: For code formatting.
- **ESLint**: For maintaining consistent and clean code.
- **Husky**: For automating pre-commit checks to ensure clean code before committing.

---

## Features

### General

- Functional calendar with the ability to:
  - Change months.
  - Move back to the current month/day.
  - Filter tasks by searching text.

### Month Mode

- Displays holidays and tasks for each day.
- **Task Management**:
  - **Create**: Double-click on a day's cell number to add a new task.
  - **Edit**: Double-click on a task to edit it.
  - **Reassign Tasks**: Drag and drop tasks between calendar cells to reassign them to different days.

### Day Mode

- Displays all tasks for a selected day.
- **Task Management**:
  - Reorder tasks within the same day using drag-and-drop functionality.

---

## Installation

1. **Clone the repository:**

   To get started, clone the repository to your local machine.

   ```bash
   git clone https://github.com/KatiaOcheretiana/calendar.git
   cd calendar
   ```

2. **Install dependencies:**
   I use npm, but you can use yarn instead

   ```bash
   npm install
   ```

3. **Create environment variables:**
   In the root directory, create a .env.local file. This file will store your sensitive data such as API URLs and keys.

   ```bash
   VITE_APP_KEY=https://api.example.com
   ```

## Running the Application

1. **Running the Application**
   Start the development server:

```bash
 npm run dev
```

2. **Access the app:**
   Open your browser and navigate to:

```bash
http://localhost:5173
```
