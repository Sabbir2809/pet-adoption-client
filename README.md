# Pet Adoption client

#### [Frontend Live Link](https://adoptify.netlify.app/)

## Overview

A web platform to help users find pets available for adoption, providing search, detailed pet information, and user management functionalities.

## Features

1. **Home Page**

   - Header: Logo, Navigation Bar
   - Search: Pet type, breed, age, location
   - Filters: Size, gender, special needs
   - Pet Cards: Name, photo, brief description, age, breed, location, link to details
   - Extra Sections: Success stories, adoption tips
   - Footer: Contact info, copyright, terms, privacy policy

1. **Login & Registration**

   - Login: Username/email, password
   - Registration: Username, email, password (confirmation)

1. **Pet Details Page (Private)**

   - Multiple photos, detailed description, age, breed, gender, health status, location
   - Adoption request button for logged-in users

1. **Pet Adoption Request Page**

   - Form: Contact info, additional info, terms agreement
   - Submit button

1. **My Profile**

   - User info: Edit profile, change password
   - My Adopted Pets: List with name, photo, adoption date, link to details

1. **Admin Dashboard**

   - User Management: View/manage accounts, roles
   - Pet Management: Add/edit/remove pets

1. **About Us Page**

## Technology Stack

- **Programming Language:** TypeScript
- **Web Framework:** Next.js
- **State Management:** Redux
- **Component Library:** Material UI
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Zod

## Project Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Sabbir2809/pet-adoption-client
   cd pet-adoption-client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup environment variables in `.env`.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.
