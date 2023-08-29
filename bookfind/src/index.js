import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Books from './Pages/Books';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookPage from './Pages/Books';
import MagazinesPage from './Pages/Magazines';
import AboutUsPage from './Pages/About_us';

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
    path: "Magazines",
    
    element: <MagazinesPage />,
  },

  {
    path: "About_us",
    element: <AboutUsPage />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);

