import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root'
import ErrorPage from './components/errorpage/ErrorPage.jsx'
import Listedbooks from './components/listedbooks/Listedbooks.jsx'
import Pagestoread from './components/pagestoread/Pagestoread.jsx'
import Home from './components/home/Home.jsx'

const router = createBrowserRouter ([
  {
    path:'',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'listedbooks',
        element:<Listedbooks/>,
      },
      {
        path:'pagestoread',
        element:<Pagestoread/>
      },
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
