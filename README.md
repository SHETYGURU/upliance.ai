
# Chatbot Setup UI/UX

This project provides the UI/UX for setting up a new chatbot for businesses, ensuring smooth registration, organization setup, chatbot training, and integration. The following steps outline the process and provide a user-friendly experience for both business owners and developers.

## Live Demo
###  You can view the live demo of this project [here(Live Demo)](https://beyondchatssite.netlify.app/).


## Features

1. **User Registration**
   - User can register using email or Google.

2. **Setup Organization**
   - User enters company information, including company name, website URL, and description.
   - Auto-fetch meta-description from the provided website URL.
   - Display detected webpages that have been scraped, with a status of scraped or pending.
   - Ability to click on each webpage to view the data chunks scraped from that webpage.
   - Option to wait for chatbot training or continue to the next section.

3. **Chatbot Integration & Testing**
   - Buttons for testing the chatbot, integrating the chatbot into the website, and viewing success or failure statuses.
   - Easy-to-follow instructions for integrating the chatbot with the website, including an option to email the instructions to the client’s developer.
   - UI with success feedback when the chatbot integration is successful.

## Steps to Setup

### 1. User Registration
   - **UI Design:**
     - A form where the user enters their name, email, and password.
     - A button to allow users to "Continue with Google" for quicker registration.
     - Upon email submission, the user must submit an email verification code.

### 2. Setup Organization
   - **UI Design:**
     - A form where the user enters:
       - Company name.
       - Company website URL.
       - Company description.
     - Bonus point: The website meta-description is automatically fetched using the provided URL.
     - After submission, display the status of webpages that have been scraped, showing:
       - Scraped pages.
       - Pending pages.
     - Allow the user to click on each webpage to view the data chunks that have been scraped from that page.

### 3. Chatbot Integration & Testing
   - **UI Design:**
     - Three main buttons on the screen:
       1. **Test Chatbot:** Opens the client’s website with a dummy chatbot integration displayed at the bottom right.
       2. **Integrate on Your Website:** 
          - Displays easy-to-follow instructions for integrating the chatbot into the website.
          - Option to email the integration instructions to the client’s developer.
       3. **Test Integration:** Opens a new screen showing a success message (e.g., Confetti UI) when integration is successful.

   - **Success UI:**
     - After successful integration:
       - Show buttons for:
         - "Explore Admin Panel."
         - "Start talking to your chatbot."
         - Social media sharing buttons.
     - **Failure UI:** If integration fails, provide a message indicating that the integration was not detected yet.

## Tech Stack

- **Frontend:**
  - React.js
  - Tailwind CSS (for styling)
  - Firebase (for email verification and user registration)
  - Axios (for API calls to fetch data)

-

## Acknowledgements

- Tailwind CSS for UI styling.
- Firebase for user authentication and real-time database.
- React.js for building the frontend.
