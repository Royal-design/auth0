import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./app.style.scss";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import { Content } from "./Content";

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <main className="column">
      <BrowserRouter>
        <nav className="navbar">
          {isAuthenticated ? (
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Products</Link>
              </li>
              <li>
                <Link>Review</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                {isAuthenticated ? (
                  <Link
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin }
                      })
                    }
                  >
                    Logout
                  </Link>
                ) : (
                  <Link onClick={() => loginWithRedirect()}>Login</Link>
                )}
              </li>
            </ul>
          )}
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Content
                loginWithRedirect={loginWithRedirect}
                logout={logout}
                user={user}
                isAuthenticated={isAuthenticated}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
