import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Todo from "./component/Todo";
import { TodoProvider } from "./component/TodoProvider";
import ErrorPage from "./component/error-page";
import TodoList from "./component/TodoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todo />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "list/:nameParam",
        element: <TodoList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </React.StrictMode>
);
