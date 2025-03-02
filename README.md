# NovelNexus

## Introduction
**NovelNexus** is a web application developed using Next.js, designed to provide authors with a comprehensive platform for writing, editing, and managing their novels. The application features a user-friendly interface that enhances the writing experience, allowing authors to focus on their creativity without distractions.

## Features
- **Rich Text Editor**: A powerful editor that facilitates the writing and formatting of novels with ease.
- **Zen Mode**: A distraction-free writing environment that enables authors to immerse themselves fully in their work.
- **User Accounts**: Authors can create accounts to save their novels and track their writing progress effectively.
- **Responsive Design**: The application is optimized for both desktop and mobile devices, ensuring accessibility for all users.
- **Search Functionality**: Quickly locate novels by title or author.
- **Bookmarking**: Save your favorite novels for easy access at any time.
- **Dark Mode Toggle**: Switch between light and dark themes to enhance the writing experience.

## Tech Stack
- **Next.js**: A React framework for building server-side rendered applications.
- **React**: Utilized for constructing user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: Provides type safety and enhances the development experience.
- **Editor.js**: A block-styled editor for creating and managing novel content.

## Installation
To install the application, follow these steps:
1. Clone the repository:
   ```bash
   git clone <YOUR_GIT_URL>
   cd novelnexus
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Usage
To run the NovelNexus application, execute the following steps:
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open the application in your web browser at `http://localhost:3000`.

## Components Overview
- **Header Component**: Contains navigation links and user controls, including a toggle for dark/light themes.
- **Main Navigation**: Provides links to various sections of the application, such as Home, Projects, Editor, and Notes.
- **User Navigation**: Displays the user's avatar and offers a dropdown menu for user-related actions.
- **Mode Toggle**: Enables users to switch between light and dark themes.
- **EditorContainer**: The primary component for writing and editing novels.
- **Card Component**: A reusable component for presenting novel information in an aesthetically pleasing format.
- **Form Component**: Utilizes React Hook Form for managing user input and validation.

## Utilities
- **Class Name Utility**: The `cn` function conditionally merges class names, ensuring that styles are applied correctly.

## Hooks
- **useToast Hook**: Implements a customizable toast notification system inspired by the react-hot-toast library, providing user feedback on actions.

## Contributing
Contributions to the project are welcome! If you would like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes and create a pull request.

## License
This project is licensed under the MIT License. For more details, please refer to the [LICENSE](LICENSE) file.
