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
import AddCourse from './pages/Courses/AddCourse.jsx';
import MyCourses from './pages/Courses/MyCourses.jsx';
import CourseDetails from './pages/Courses/CourseDetails.jsx';
import EnrollModal from './pages/Courses/EnrollModal.jsx';


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
        path: '/enrollModal',
        element: <EnrollModal></EnrollModal>
      },
      {
        path: '/myCourses',
        element: <MyCourses></MyCourses>
      },
      {
        path: '/addCourse',
        element: <AddCourse></AddCourse>
      },
      {
        path: '/myCourse',
        element: <MyCourses></MyCourses>
      },
      {
        path: '/courseDetails/:id',
        element: <CourseDetails></CourseDetails>,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:3000/courses/${params.id}`);
          if (!res.ok) {
            throw new Response("Course not found", { status: res.status });
          }
          return res.json();
        },

      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      },
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
