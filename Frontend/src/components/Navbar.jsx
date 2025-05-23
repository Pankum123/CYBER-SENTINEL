import React from "react";
import { useAuth } from "../context/AuthProvider";
import Login from "./Login";
import Logout from "./Logout";
import { Link } from "react-router-dom";

function NavBar() {
  const [authUser, setAuthUser] = useAuth();
  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="course">Analysis</a>
      </li>
      <li>
        <a href="contact">Contact</a>
      </li>
      {/* <li>
        <a href="about">About</a>
      </li> */}
    </>
  );

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-gray-700  dark:bg-slate-800 text-white  fixed top-0 left-0 right-0 z-50">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">Tracker</a>
          </div>

          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>

            {authUser ? (
              <Logout />
            ) : (
              <div>

                <div className=" text-white px-1 py-1 rounded-md">
                  <Link
                    to="/login"
                    className="btn hover:bg-blue-600 duration-300 cursor-pointer"
                  >
                    Login
                  </Link>
            
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
