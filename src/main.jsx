import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Meals from './components/Meals/Meals';
import MealDetails from './components/MealDetails/MealDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/meals',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Meals></Meals>
      },
      {
        path: '/meal/:mealId',
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/categories.php/${params.mealId}`),
        element: <MealDetails></MealDetails>,
      }
    ],
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
