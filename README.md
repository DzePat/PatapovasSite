# Patapovas Website

Welcome to my personal portfolio website! This site showcases the projects I’m working on as I grow my skills as a junior software developer.

## Important
This website is not a fully standalone frontend — it connects to a running backend to fetch project data and other dynamic content. You can run the site locally without the backend, and it won’t crash on startup, but some features like project listings will be unavailable.

## Features
- Responsive design with a clean, modern UI
- Continuous updates with new projects and improvements

## Tech Stack

- **Frontend:** React, styled-components  
- **Build Tool:** Vite
- **Hosting:** AWS Amplify
- **Authentication** Auth0

### Prerequisites
- Node.js 
- npm

## Installation

### Clone and install

```
git clone https://github.com/DzePat/PatapovasSite.git
npm install
```

Register and login to https://auth0.com/

### AUTH0 Website
- Create application and API
- Setup the localhost routes for the application
- From application settings copy domain and client id.
- From API settings copy identifier

Create a `.env` file in the project root and add:

```
VITE_AUTH0_DOMAIN={domain} example: application.us.auth0.com
VITE_CLIENT_ID={client id} example: "KSAO545435asASaskldna552453aslknfaslnrf355"
VITE_AUTH0_AUDIENCE= for this you just add your localhost route example: like http://localhost:3001/
VITE_AUTH0_BACKEND_AUDIENCE= you should add your API identifier that you copied from auth0.
```

Once all the environment variables are set, run the app with:

```
npm start
```
