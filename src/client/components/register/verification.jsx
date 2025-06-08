import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Verification = () => {
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token'); // Get the token from the URL

  useEffect(() => {

    console.log("Inside verification page")

    const verifyToken = async () => {
      if (token) {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/verify-email/${token}/`);

          if (!response.ok) {
            throw new Error('Verification failed');
          }

          // If verification is successful
          setVerified(true);
        } catch (error) {
          console.error('Verification error:', error);
          setError(true);
        }
      }
    };
    verifyToken();
  }, [token]);

  return (
    <div className="verification-page">
      {verified ? (
        <>
          <h2>Your Account Has Been Verified!</h2>
          <div className="verification-icon">
            <span role="img" aria-label="verified">✅</span>
          </div>
          <p>Your account is now active. You can now access all features.</p>
          <Link to="/login" className="btn btn-primary">Login Now</Link>
        </>
      ) : error ? (
        <p>Verification failed. Please try again or contact support.</p>
      ) : (
        <p>Verifying your account, please wait...</p>
      )}
    </div>
  );
};

export default Verification;
