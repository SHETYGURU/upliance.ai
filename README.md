
# React Dashboard Application

This React application serves as a dashboard that includes various components such as a **Counter**, **User Data Form**, and a **Rich Text Editor**. It also incorporates user authentication via Google Sign-In, and provides data persistence across sessions.

## Tech Stack

- **Frontend**:
  - React.js (for building the user interface)
  - React-Router (for page navigation)
  - React-Spring (for animations)
  - React-Icons (for icons)
  - Redux Toolkit (RTK) for state management
  - Tailwind CSS (for styling)
  - Google Firebase Authentication (for user sign-in)

- **Additional Libraries/Tools**:
  - Local Storage (for data persistence in the User Data Form)

## Functional Requirements

### 1. **Counter Component**
   - **Buttons**:
     - Increment
     - Decrement
     - Reset
   - **State Management**: The count should persist across re-renders and update the background color level.
   - **Background Animation**: The background color level should increase in a linear manner, preferably with a bezier curve.
   - **Reset**: Clicking the reset button should reset the background color level to 0.

### 2. **User Data Form**
   - **Fields**:
     - Name
     - Address
     - Email
     - Phone
   - **Auto-generation**: Automatically generate a User ID upon form submission.
   - **Persistence**: Save form data to either local storage or Redux Toolkit (RTK).
   - **Unsaved Changes Alert**: If there are unsaved changes, an alert should appear when trying to close the browser.

### 3. **Rich Text Editor**
   - **Display User Data**: Visualize user data in a rich text editor.
   - **Formatting Options**:
     - Bold
     - Italic
     - Underline
     - Lists (ordered and unordered)
   - **Data Persistence**: Ensure the text editor's content is saved and persists.

### 4. **Additional Features (Optional)**:
   - **User Authentication**:
     - Implement Google Sign-In for user authentication.

## Features

- **Counter Component**: A simple counter with buttons for increment, decrement, and reset. The background color of the component changes as the count increases, following a linear bezier curve animation.
  
- **User Data Form**: A form to collect user details like name, address, email, and phone. It generates a unique User ID upon submission and saves the data to local storage or RTK. If there are unsaved changes, a pop-up alert will notify users before they try to close the browser.

- **Rich Text Editor**: A rich text editor that allows users to format their data with options such as bold, italic, underline, and lists. The data is persisted, so users can continue editing where they left off.

- **Authentication**: Google Sign-In authentication has been integrated, allowing users to sign up and log in securely.

