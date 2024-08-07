import {  Route, Routes } from "react-router-dom";
import Dashboard from "../page/dashboard/dashboard";
// import loadable from "@loadable/component";
import App from "../container/App"


const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
            <App />
        }
      >
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
