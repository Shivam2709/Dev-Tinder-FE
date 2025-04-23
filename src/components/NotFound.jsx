// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Go back Home
      </Link>
    </div>
  );
};

export default NotFound;
