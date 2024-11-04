# Surplus

<p align="center">
  <img src="assets/surplus-logo.png" alt="Surplus Logo" width="200"/>
</p>

<p align="center">
  <strong>A Sustainable Marketplace & Food Donation Platform</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#installation">Installation</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

## About

Surplus is a dual-purpose platform that combines a sustainable marketplace for pre-owned items with a food donation service. Our mission is to reduce waste and support communities by connecting users who want to buy/sell used items and enabling restaurants to donate excess food to those in need.

## Features

### 🛍️ Marketplace
- Browse and list pre-owned items
- Advanced search and filtering
- Secure in-app messaging
- User ratings and reviews

### 🍱 Food Donation
- Real-time food availability updates
- Location-based donation listings
- Restaurant verification system
- Food safety compliance tracking

### 📱 Core Features
- User authentication and profiles
- Geolocation services
- Push notifications
- Responsive web and mobile design
- Offline capability

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- React Native development environment (for mobile)
- Firebase account
- Google Maps API key

### Installation

1. Clone the repository
2. Install dependencies
   - Install server dependencies: `npm install`
   - Install client dependencies: `cd client && npm install`
   - Install mobile dependencies: `cd mobile && npm install`
3. Set up environment variables
4. Configure your environment variables with your:
   - MongoDB URI
   - Firebase credentials
   - Google Maps API key
   - Other server-specific variables

5. Start the development server
 `cd server`
   - Start the server: `npm run dev`
   - Start the web client: `cd client && npm run dev`
   - Start the mobile app: `cd mobile && npx react-native run-android` or `npx react-native run-ios`



## Tech Stack

### Backend
- Node.js & Express
- MongoDB
- Firebase Authentication
- WebSocket for real-time features
- Redis for caching

### Web Frontend
- React.js
- Redux Toolkit
- React Query
- Styled Components
- Material-UI

### Mobile App
- React Native
- React Navigation
- Native Base
- Redux Toolkit
- React Query

### Infrastructure
- AWS/GCP for hosting
- CloudFront/Firebase for CDN
- GitHub Actions for CI/CD
- Docker for containerization

## Contributing

We welcome contributions to Surplus! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request


## Testing

Run the test suites:
