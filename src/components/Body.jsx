import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./SignIn";
import Browse from "./Browse";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <SignIn />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;