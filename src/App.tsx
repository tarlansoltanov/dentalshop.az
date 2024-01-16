import React from "react";

// React Router
import { Routes, Route } from "react-router-dom";

// Import Routes
import { publicRoutes } from "@/route";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default App;
