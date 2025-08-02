import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from '@tanstack/react-router';
import { logoutUser } from '../api/user.api.js';
import { logout } from "../store/slices/authSlice.js";

const Navbar = () => {

  const authState = useSelector((state) => state.auth);

  const { isAuthenticated, user } = authState;

  const navigate = useNavigate();
  const dispatch=useDispatch();
  const logoutAndRedirect = async () => {
    await logoutUser();
    dispatch(logout());
    navigate({ to: "/" });
  }

  return (
    <nav className="bg-white border border-b-black">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - App Name */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              URL Shortener
            </Link>
          </div>

          {/* Right side - Auth buttons */}
          <div className="flex items-center">
            {(isAuthenticated) ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {(user && user.name) || 'User'}</span>
                <button
                  onClick={logoutAndRedirect}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;