import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../page/dashboard/dashboard";
import loadable from "@loadable/component";

const App = loadable(() => import("../container/App"));


const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
            <App />
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
