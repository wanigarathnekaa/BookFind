import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Books from './Pages/Books';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookPage from './Pages/Books';
import AboutUsPage from './Pages/About_us';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "Books",
    element: <BookPage />,
  },

  {
    path: "About_us",
    element: <AboutUsPage />,
  },

  {
    path: "SignInPage",
    element: <SignInPage />,
  },

  {
    path: "SignUpPage",
    element: <SignUpPage />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);

