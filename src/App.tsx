import React from "react";

// React Router
import { Routes, Route } from "react-router-dom";

// Components
import AuthLayout from "@/components/AuthLayout";
import Layout from "@/components/Layout";

// Middlewares
import { Authmiddleware, ScrollToTop } from "./route/middlewares";

// Routes
import { publicRoutes, authRoutes } from "@/route";

// Style
import "@/assets/css/global.min.css";
import "@/assets/css/theme.min.css";
import "@/assets/css/style.css";

const App = () => {
  return (
    <React.Fragment>
      <ScrollToTop>
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Authmiddleware>
                  <Layout>{route.component}</Layout>
                </Authmiddleware>
              }
            />
          ))}

          {authRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<AuthLayout>{route.component}</AuthLayout>}
            />
          ))}
        </Routes>
      </ScrollToTop>
    </React.Fragment>
  );
};

export default App;
