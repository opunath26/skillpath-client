import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout.jsx';
import Home from './pages/Home/Home.jsx';
import AllCourses from './pages/Courses/AllCourses.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Register from './pages/Auth/Register.jsx';
import { Toaster } from "react-hot-toast";
import Login from './pages/Auth/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:  RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/allCourses',
        Component: AllCourses
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>,
)
