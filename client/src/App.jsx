import Candidates from "./pages/Candidates";
import Congrats from "./pages/Congrats";
import ElectionDetails from "./pages/ElectionDetails";
import Elections from "./pages/Elections";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Results from "./pages/Results";
import RootLayout from "./pages/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      { path: "register", element: <Register /> },
      { path: "results", element: <Results /> },
      { path: "elections", element: <Elections /> },
      { path: "elections/:id", element: <ElectionDetails /> },
      { path: "elections/:id/candidates", element: <Candidates /> },
      { path: "congrats", element: <Congrats /> },
      { path: "logout", element: <Logout /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
