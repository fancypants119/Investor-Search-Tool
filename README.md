# Investor Search Application

This project is a React-Node.js application designed to help users search for, view, and manage a list of potential investors. It includes a user-friendly interface to filter investor data, view detailed profiles, and even add new investors to the database.

---

## Features

### 1. Home
- Displays the search results in the form of investor cards (`InvestorCard`).
- Includes a `Searchbar` with multiple filters to refine the search results.

### 2. Searchbar
- Allows users to filter investors based on criteria such as location, industry, funding stage, and more.

### 3. InvestorCard
- Represents a single search result.
- Provides key information at a glance.
- Clickable to open a detailed `InvestorProfile`.

### 4. InvestorProfile
- A dedicated page displaying all the information about an investor.
- Opens in a separate tab, enabling users to compare multiple profiles side by side.

### 5. AddInvestor
- A form to allow users to add new investors to the database.
- Demonstrates database update feasibility.

---

## Technologies Used

- **Frontend:** React (Vite)
- **Backend:** Node.js
- **Database:** MongoDB

---


## Deployment Instructions

### 1. Clone the Repository
Clone the repository or download the zip folder from your preferred source.

### 2. Install Dependencies
Navigate to the **frontend** and **backend** folders in separate terminals and run:
npm i

### 3. Start the Backend
Navigate to the **backend** folder and run:
node index.js

Confirm that the backend is running by observing the logs:
- MongoDB Connected
- Starting server
- Server is running on port 3000

### 4. Start the Frontend
Navigate to the **frontend** folder and run:
npm run dev

Confirm that the frontend is running by checking the Vite logs and accessing the local link:
- http://localhost:5173/

---

## Usage

### Search Investors
- Use the `Searchbar` to filter results on the **Home** page.
- Click on any `InvestorCard` to view detailed information in a separate tab.

### Add a New Investor
- Use the `AddInvestor` form to add new entries to the database.

---

## Future Enhancements

- Authentication and authorization for the `AddInvestor` form.
- Improved search filters with advanced criteria.
- Pagination for search results.
- Real-time updates for investor data.

---

