import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar = ({ loginWithRedirect, logout, isAuthenticated }) => {
  return (
    <nav className="navbar">
      {isAuthenticated ? (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link>Review</Link>
          </li>
          <li>
            <Link
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin }
                })
              }
            >
              Logout
            </Link>
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
      <Outlet />
    </nav>
  );
};
