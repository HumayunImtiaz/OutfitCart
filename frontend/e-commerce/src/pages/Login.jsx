import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.webp";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleDefault=(e)=>{
    e.preventDefault();
    console.log("Login Data: ",{email,password})
  }

  return (
    <div className="flex border">
      <div className="w-full md:w-1/2 flex-col justify-center items-center p-8 md:p-12 border">

        <form onSubmit={handleDefault} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="text-2xl form-bold text-center mb-6">Hey there! 👋</h2>
          <p className="text-center mb-6">
            Enter your username and password to Login
          </p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition">
            Sign In
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account?(" ")
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2  bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img src={login} alt="Login to Account" />
        </div>
      </div>
    </div>
  );
}

export default Login;
