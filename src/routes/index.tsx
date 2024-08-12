import {  Route, Routes } from "react-router-dom";
import Dashboard from "../page/dashboard/dashboard";
// import loadable from "@loadable/component";
import App from "../container/App"
import EmailSend from "../page/Email/email";


const AppRoutes = () => {
  return (
    <Routes>
      <Route  path="/"
        element={
            <App />
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/email" element={<EmailSend/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
