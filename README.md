# BookMyShow Movie Booking Project

Welcome to the Movie Booking Project! This project allows users to browse and book movie tickets for their favorite films.

## Table of Contents
- [Introduction](#introduction)
- [Components](#components)
- [Data](#data)
- [Error_Logging](#Error_Logging)
- [Features](#features)
- [Technologies Used](#Technologies_Used)

## Introduction

The Movie Booking Project is a web application that provides users with a platform to discover, explore, and book tickets for movies. It incorporates an intuitive user interface to streamline the booking process and enhance the overall movie-going experience.
A simple web application for booking movie tickets, built using React and Axios for handling API requests. The project consists of several components to manage movie selection, slot selection, seat type selection, booking submission, and displaying last booking details.

## Components

- Movies.js: Component for rendering the list of movies.
- Slots.js: Component for rendering the list of slots.
- Seats.js: Component for rendering the seat types and input fields.
- BookingForm.js: Component for the booking form.
- LastBookingDetails.js: Component for displaying the last booking details.
- App.js: The main App component combining all the components.

## Data

The project uses sample movie, slot, and seat type data from the data.js file.

## Error_Logging
The project utilizes error logging to handle issues during booking submission. When an error occurs during the booking process (e.g., network error, server response error), the application logs the error to the console using console.error. This helps in identifying and debugging issues related to the booking functionality.

The error logging is implemented in the following parts of the code:

In the handleBookingSubmit function of App.js, errors during the booking process are caught and logged to the console.

In the fetchLastBooking function of App.js, errors during the fetching of the last booking details are caught and logged to the console.

## Features

- Movie Listings: Browse through a curated list of available movies.
- Showtimes: View showtimes for each movie to plan your visit.
- Seat Selection: Choose your preferred seats from an interactive seating chart.
- Booking Confirmation: Receive a confirmation of your booking with all relevant details.

## Technologies_Used

- Frontend
  - React
  - Redux for state management
  - SCSS for styling
- Backend
  - Node.js
  - Express.js
  - MongoDB for database
