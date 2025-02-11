# 🚀 React Task  

This project focuses on **performance optimization** rather than UI design. It includes two optimized React components:  

1. **Counter Component**:  
   - A counter that increments when a button is clicked.  
   - Includes an input field that does not trigger unnecessary re-renders.  
   - Optimized using `React.memo` and `useCallback`.  

2. **Items List Component**:  
   - Fetches a list of items from an API (`jsonplaceholder.typicode.com/todos`).  
   - Displays a loading state while fetching data.  
   - Shows an error message if the API call fails.  

## 📂 Project Structure  
react-task/ │-- src/ │ │-- components/ │ │ │-- Counter.js │ │ │-- ItemsList.js │ │-- App.js │ │-- index.js │-- package.json │-- README.md

# 🛠️ Technologies Used
- React.js
- React Hooks (useState, useEffect, useCallback)
- Fetch API

# 🎯 Features
✅ Optimized component rendering with React.memo and useCallback
✅ Proper error handling for API requests
✅ Functional updates in state management


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.