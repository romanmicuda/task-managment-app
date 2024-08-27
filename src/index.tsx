import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./component/App";
import { TodoProvider } from "./component/TodoProvider";
import ErrorPage from "./component/error-page";
import TodoList from "./component/TodoList";
import { TodoListFilter } from "./component/TodoListFilter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "list/:nameParam",
        element: <TodoList />,
      },
      {
        path: "filter/:filterListType",
        element: <TodoListFilter />,
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
