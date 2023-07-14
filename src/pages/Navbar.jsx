import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUset] = useState("");
  console.log(user);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      try {
        if (!token) {
          navigate("/login");
        }
        const res = await axios.get(
          "http://localhost:8000/api/v1/auth/current-user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUset(res?.data?.user);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            <span className="text-green-700"> Welcome</span>{" "}
            {user?.name || user?.hospitalName || user?.orgnisationName}
          </div>
          <div className="text-white">
            {/* Add any additional navbar content */}
            {user?.role}
          </div>
        </div>
      </nav>
      {/* sidebar  */}
      <div className="flex h-screen bg-gray-200">
        <div className="w-64  bg-yellow-500">
          <nav className="mt-10">
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/admin"
                  activeClassName="text-blue-700"
                  className="text-white text-bold bg-black hover:text-blue-700 px-4 py-2 block"
                >
                  Admin
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hospital"
                  activeClassName="text-blue-700"
                  className="text-white text-bold bg-black hover:text-blue-700 px-4 py-2 block"
                >
                  Hospital
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/organization"
                  activeClassName="text-blue-700"
                  className="text-white text-bold bg-black hover:text-blue-700 px-4 py-2 block"
                >
                  Organization
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-grow p-4">{/* Main content */}</div>
      </div>
    </>
  );
};

export default Navbar;
