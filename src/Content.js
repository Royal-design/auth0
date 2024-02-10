import React from "react";

export const Content = ({
  isAuthenticated,
  user,
  loginWithRedirect,
  logout
}) => {
  return (
    <main className="content">
      {isAuthenticated ? (
        <h1>Welcome {user.name}!</h1>
      ) : (
        <h1>Please Login to continue</h1>
      )}
      <div className="btn">
        {isAuthenticated ? (
          <button
            className="logout"
            onClick={() =>
              logout({
                logoutParams: { returnTo: window.location.origin }
              })
            }
          >
            Logout
          </button>
        ) : (
          <button className="login" onClick={() => loginWithRedirect()}>
            Login
          </button>
        )}
      </div>
    </main>
  );
};
