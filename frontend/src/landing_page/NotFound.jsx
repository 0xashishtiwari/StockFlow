import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      
      {/* Icon */}
      <i className="fa-solid fa-triangle-exclamation text-warning mb-4" style={{ fontSize: "5rem" }}></i>
      
      {/* Title */}
      <h1 className="fw-bold">404 - Page Not Found</h1>
      
      {/* Description */}
      <p className="text-muted mb-4">
        Oops! The page you are looking for does not exist, has been moved, or is temporarily unavailable.
      </p>

      {/* Back Home Button */}
      <Link to="/" className="btn btn-primary px-4 py-2">
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound
