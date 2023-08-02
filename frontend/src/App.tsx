import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import Dishes from './Pages/Dishes/Dishes'
import Ingredients from './Pages/Ingredients/Ingredients'

function App() {

  const Layout = () => {
    return (
      <div className="App">
        <Outlet/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dishes/>
        },
        {
          path: "/ingredients/:id",
          element: <Ingredients/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
