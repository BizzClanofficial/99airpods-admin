import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center p-10 font-poppins">
      <div className="max-w-[700px] w-full ">
        {/* Login form */}
        <div className="bg-white rounded-lg shadow-lg p-10 w-full">
          <h1 className="text-3xl font-bold mb-5">Login</h1>
          <div>
            <div className="mb-5">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
              {/* Password field */}
              <label
                className="block text-gray-700 text-sm font-bold my-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            {/* Login button */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={login}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
