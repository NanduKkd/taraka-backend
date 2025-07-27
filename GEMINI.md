# Project Structure

This document provides an overview of the project's folder structure.

*   **`.gitignore`**: Specifies intentionally untracked files to be ignored by Git.
*   **`index.js`**: The main entry point of the application.
*   **`LICENSE`**: The project's license file.
*   **`package-lock.json`**: Records the exact version of each installed package, ensuring deterministic installs.
*   **`package.json`**: Contains metadata about the project, including its dependencies and scripts.
*   **`README.md`**: Provides general information about the project.
*   **`.git/`**: Contains all the necessary Git files and metadata for the repository.
*   **`config/`**: Holds configuration files, such as `constants.js`.
*   **`controllers/`**: Contains controller functions that handle business logic for different routes.
*   **`middlewares/`**: Contains middleware functions for handling requests, like `auth.js` and `project.js`.
*   **`node_modules/`**: Stores all the project's dependencies.
*   **`routes/`**: Defines the application's routes, with files like `api.js` and `user.js`.
*   **`validators/`**: Contains validation schemas for incoming requests.

**Note:** Every update on this project should be updated in this `GEMINI.md` file. Every incomplete code should be marked with `// TODO`.