# DJS08 Project: React Router

🎥 INSERT LOOM PRESENTATION LINK: [(https://www.loom.com/share/78d4ace9b998416890bb0c5fb8e2d9a8?sid=1d575f0d-c04c-4884-8a49-4263f5411d1c)]

## Introduction

For this challenge I was given all the required CSS styling in the starter code, then followed along with a Scrimba lesson to create a website for a van rental business.

## Project Overview

This is a React-based web application for a van rental service. The app includes various pages such as home, about, van listings, and host functionalities for managing van rentals. It also features authentication for host-specific routes.

## Elements Included

**Home Page:** Displays the main landing page.
**About Page:** Provides information about the van rental service.
**Van Listings:** Shows a list of available vans for rent.
**Van Details:** Displays detailed information about a specific van.
**Login:** Allows users to log in to their accounts.
**Host Dashboard:** Hosts can manage their van listings, income, and reviews.
**Host Van Management:** Hosts can view and edit details, pricing, and photos of their vans.

### Dependencies

- react
- react-dom
- react-router-dom
- @fake-server/server

### Components

- Layout.jsx
  The main layout component that wraps around the non-host routes.

- HostLayout.jsx
  The layout component for host-specific routes.

- AuthRequired.jsx
  A higher-order component (HOC) that protects host routes and requires authentication.

### Pages

- Home.jsx
  The landing page of the application.

- About.jsx
  Contains information about the van rental service.

- Login.jsx
  User login page.

- NotFound.jsx
  Displays a 404 error for undefined routes.

### Vans

- Vans.jsx: Displays a list of vans.
- VanDetail.jsx: Shows details of a specific van.

### Host

- Dashboard.jsx: Host's dashboard showing an overview.
- Income.jsx: Displays the host's income.
- Reviews.jsx: Shows reviews for the host's vans.
- HostVans.jsx: Displays a list of the host's vans.
- HostVanDetail.jsx: Shows details of a specific van owned by the host.
- HostVanInfo.jsx: Displays information about the van.
- HostVanPricing.jsx: Allows the host to manage van pricing.
- HostVanPhotos.jsx: Allows the host to manage van photos.

## Reflections

### Areas of Mastery

**React Development:** creating and organising components such as `Layout.jsx`, `HostLayout.jsx`, and `AuthRequired.jsx` allowed me to handle state and props efficiently across multiple components and pages.

**Component-Based Architecture:** breaking down the application into reusable components. Effective use of components for both user-facing (e.g., `Home.jsx`, `About.jsx`, `Vans.jsx`) and host-specific functionalities (e.g., `HostDashboard.jsx`, `HostVanDetail.jsx`).

**Responsive Design and CSS:** Despite the fact that the CSS was provided, the ability to incorporate and make use of pre-existing CSS was shown, to ensure a responsive and visually appealing design.

### Challenges Faced

A challenge I faced was establishing nested routes and ensuring smooth navigation across the app's various sections, especially for host-specific functionalities. Another was the handling of 404 errors and undefined routes effectively with the NotFound.jsx component, and interacting with @fake-server/server for data handling and ensuring the application behaves correctly with mock data.

### Overall Learning Experience

This project introduced more complex ideas like routing, authentication, and state management in a useful, real-world setting while also solidifying core skills in React and web programming.
