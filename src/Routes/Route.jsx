import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import DashBoardHome from "../Pages/Dashboard/DashBoardHome";
import AddTask from "../Pages/Dashboard/AddTask";
import TaskUpdate from "../Pages/Dashboard/TaskUpdate";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children : [
          {
              path: 'DashboardHome',
              element: <PrivateRoute><DashBoardHome></DashBoardHome></PrivateRoute>
          },
          {
              path: 'addTask',
              element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
          },
          {
              path: 'taskUpdate/:id',
              element: <PrivateRoute><TaskUpdate></TaskUpdate></PrivateRoute>,
              loader: ({params})=> fetch(`https://task-management-server-three-xi.vercel.app/tasks/${params.id}`) 
          }
      ]
  }
  ]);

export default router;