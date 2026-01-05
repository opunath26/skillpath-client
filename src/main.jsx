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
import UpdateCourse from './pages/Courses/UpdateCourse.jsx';
import Dashboard from './pages/Courses/Dashboard.jsx';
import PrivateRoute from './pages/Auth/PrivateRoute.jsx';
import Error from './components/Erorr.jsx';
import About from './pages/Home/About.jsx';
import Profile from './Dashboard/Profile.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/allCourses',
        element: (
          <AllCourses />
        ),
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: 'profile',
            element: <Profile />
          }
        ]
      },
      {
        path: '/addCourse',
        element: (
          <PrivateRoute>
            <AddCourse />
          </PrivateRoute>
        ),
      },
      {
        path: '/myCourse',
        element: (
          <PrivateRoute>
            <MyCourses />
          </PrivateRoute>
        ),
      },
      {
        path: '/enrollModal/:id',
        element: (
          <PrivateRoute>
            <EnrollModal />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch(`https://skill-path-server-five.vercel.app/courses/${params.id}`);
          if (!res.ok) {
            throw new Response("Course not found", { status: res.status });
          }
          const data = await res.json();
          return data.result;
        }
      },
      {
        path: '/courseDetails/:id',
        element: (
          <CourseDetails />
        ),
        loader: async ({ params }) => {
          const res = await fetch(`https://skill-path-server-five.vercel.app/courses/${params.id}`);
          if (!res.ok) {
            throw new Response("Course not found", { status: res.status });
          }
          return res.json();
        },
      },
      {
        path: '/updateCourse/:id',
        element: (
          <UpdateCourse />
        ),
        loader: ({ params }) => {
          return fetch(`https://skill-path-server-five.vercel.app/courses/${params.id}`);
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
      {
        path: '*',
        Component: Error
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
