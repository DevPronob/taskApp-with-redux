import App from "@/App";
import Task from "@/pages/Task";
import Users from "@/pages/users";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element: <Users />,
      },
      {
        path: "/task",
        element: <Task />,
      },
    ],
  },
]);
