import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";
import Index from "../routes";
import Enroll from "../routes/enroll";
import ThankYou from "../routes/thank-you";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "enroll",
        element: <Enroll />,
      },
      {
        path: "thank-you",
        element: <ThankYou />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
