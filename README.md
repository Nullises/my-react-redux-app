# Building Applications with React 17 and Redux (FULL UPDATED)

Based on https://app.pluralsight.com/library/courses/react-redux-react-router-es6

 BUT... updated with

 * React-Router v6
 * React Hooks (useEffect, useState, etc...)
 * Redux Hooks (useDispatch, useSelector)
 * Vite
 * React Testing Library (including tests connected to redux components)

1. Install Concurrently globally to run backend and frontend at same time

```
yarn add global concurrently
  or
npm i -g concurrently
```

2. Run `prestart:api` to recreate the DB

3. Run `npm run dev` to run concurrently server and Vite app.

### Tests

1. Install Jest globally `yarn global add jest` or `npm install jest --global`
2. Run `npm run test`