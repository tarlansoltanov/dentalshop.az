import React from "react";

// React Router
import { Routes, Route } from "react-router-dom";

// Components
import AuthLayout from "@/components/AuthLayout";
import Layout from "@/components/Layout";

// Import Routes
import { publicRoutes, authRoutes } from "@/route";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<Layout>{route.component}</Layout>} />
        ))}

        {authRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<AuthLayout>{route.component}</AuthLayout>}
          />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default App;
