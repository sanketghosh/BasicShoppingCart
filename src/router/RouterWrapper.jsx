import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const RouterWrapper = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};
