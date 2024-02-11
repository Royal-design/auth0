import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./app.style.scss";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import { Content } from "./Content";
import { Navbar } from "./Navbar";
import { Product } from "./pages/Product";

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <main className="column">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navbar
                isAuthenticated={isAuthenticated}
                loginWithRedirect={loginWithRedirect}
                logout={logout}
              />
            }
          >
            <Route
              index
              element={
                <Content
                  user={user}
                  loginWithRedirect={loginWithRedirect}
                  logout={logout}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route path="/product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
