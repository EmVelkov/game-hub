# GAME-HUB - Video Game Discovery App

Welcome to the GAME_HUB App! This project is a compact version inspired by the popular video game discovery platform - rawg.io.
Built with React, TypeScript, and Chakra UI, the project is set up with Vite for efficient development.

## Getting Started

To get started with GameHub, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.
4. Add the API key to **src/services/api-client.ts**
5. Run `npm run dev` to start the web server.
6. Open your browser and navigate to `http://localhost:5173/`.

## Features

- **Game Search:** Search for games by title, platform, genre, or by just typing some prefix of the name of the game.
- **Game Details:** View detailed information about a specific game, including its rating, platforms, and genre.
- **Platform Filter:** Filter games based on the platform (e.g., PC, PlayStation, Xbox).
- **Genre Filter:** Filter games based on the genre (e.g., action, adventure, strategy).
- **Infinite Scroll:** Seamlessly explore more games with the introduction of infinite scrolling in the Game Grid.
- **Enhanced Data Management:** Utilize the power of React-Query for efficient data fetching, ensuring a smoother and more responsive user experience.
- **State Management with Zustand:** Transition to Zustand for more robust and scalable state management, enhancing the overall performance of the application.
- **Dynamic Routing:** Navigate seamlessly through the application with React Router, providing a more intuitive and user-friendly journey.
- **Reusable API Client:** Introducing a reusable API client for fetching data from the backend, ensuring consistency and maintainability.
- **Game Details Page:** Dive deeper into your favorite games with a dedicated Game Details page, featuring rich information, trailers, screenshots, and more.
- **Layout Routes for Improved Navigation:** Experience a revamped layout with React Router, ensuring a more cohesive and intuitive navigation structure.
- **Code Refactoring:** Under-the-hood improvements and optimizations for cleaner, more maintainable code.

## Technologies Used

- React: TypeScript library for building user interfaces
- Axios: Promise-based HTTP client for making API requests
- Vite: Next Generation Frontend Tooling
- Chakra UI: Library for building user interfaces
- TypeScript: (ts & tsx)

## Authors

- [EmVelkov](https://github.com/EmVelkov)

## Acknowledgments

- Thanks to [Mosh Hamedani](https://github.com/mosh-hamedani) for the Ultimate React courses, which served as the foundation for this project.

### Contributing

If you would like to contribute to the project, feel free to submit a pull request or open an issue. I welcome contributions and feedback!
