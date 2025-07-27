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

# Git Rules

## Branching Strategy
- Use `develop` as the main development branch.
- Create feature branches from `develop` for new features (e.g., `feature/your-feature-name`).
- Create bugfix branches from `develop` for bug fixes (e.g., `bugfix/your-bug-name`).
- Create release branches from `develop` for releases (e.g., `release/v1.0.0`).
- Create hotfix branches from `main` for critical production bugs (e.g., `hotfix/your-hotfix-name`).
- **Do not commit directly to `develop`, `main`, or `release` branches.** All changes should go through feature, bugfix, or hotfix branches and then be merged.

## Commit Messages
- Start the commit message with a type: `feat:` (new feature), `fix:` (bug fix), `docs:` (documentation changes), `style:` (code style, formatting), `refactor:` (code refactoring), `perf:` (performance improvements), `test:` (adding tests), `chore:` (maintenance tasks, build process, etc.), `temp:` (temporary code edits for testing).
- Use a clear and concise subject line (first line) that is 50 characters or less.
- Use the imperative mood in the subject line (e.g., "Add feature" instead of "Added feature").
- Optionally, provide a more detailed body after a blank line, wrapped at 72 characters.
- Reference relevant issues or tasks in the commit message body.

## Short Commits
- Make small, atomic commits that focus on a single logical change.
- Avoid committing unrelated changes together.
- This makes it easier to review changes, revert mistakes, and understand the project's history.
