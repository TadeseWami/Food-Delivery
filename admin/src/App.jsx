import React from "react";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./component/Login/Login";

const App = () => {
  const url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
      />

      <Navbar />
      <hr />

      <div className="app-content">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Login url={url} />} />

          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <Add url={url} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/list"
            element={
              <ProtectedRoute>
                <List url={url} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders url={url} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
