# Building Applications with React 17 and Redux (FULL UPDATED)

Based on https://app.pluralsight.com/library/courses/react-redux-react-router-es6

 BUT... updated with

 * React-Rouer v6
 * Redux Hooks
 * Vite

1. Install Concurrently globally to run backend and frontend at same time

```
yarn add global concurrently
  or
npm i -g concurrently
```

2. Run `prestart:api` to recreate the DB

3. Run `npm run dev` to run concurrently server and Vite app.

## Routes

* GET ALL COURSES

GET `http://localhost:3001/courses/`

* GET ALL AUTHORS

GET `http://localhost:3001/authors/`