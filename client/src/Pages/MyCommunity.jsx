import React, { useState } from "react";
import StarryBackground from "../Features/StarryBackground";
import pic from "../assets/pic.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';


  



function MyCommunity() {

  const navigate = useNavigate();
 

  const [toggleLogin, setToggleLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleLoginState = () => {
    setToggleLogin(!toggleLogin);
  };

  // register user
  
  const [registerForm, setRegisterForm] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const handleRegisterInputChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const response = await fetch("http://localhost:8080/community/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerForm),
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        toast.success("Registered successfully!");
        // optionally clear form
        setRegisterForm({ Username: "", Email: "", Password: "" });
        setToggleLogin(false); // go to login form
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false)
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  // login User

  const [loginForm, setLoginForm] = useState({
    Username: "",
    Password: "",
  });

  const handleLoginInputChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/community/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginForm),
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        toast.success("Login successful!");
        console.log("data coming: ",data.token)
        localStorage.setItem('token',JSON.stringify(data.token));

        // optionally clear form
        setLoginForm({ Username: "", Password: "" });
        navigate('/communityhomepage')
      } else {
        toast.error(data.message);
        setLoading(false);
        setLoginForm({ Username: "", Password: "" });
      }
    } catch (error) {
      console.error(" Login error:", error);
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
      setLoginForm({ Username: "", Password: "" });
    }
  };

  return (
    <>
      <div className="bg-[#121212] min-h-screen text-[#D4D4D4] font-mono text-center p-5 w-full overflow-x-hidden relative">
        <StarryBackground />

        <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto lg:mt-30 sm:mt-10 mt-20 bg-[#1E1E1E] rounded shadow-lg overflow-hidden">
          {/* Left side - Title */}
          
          <div className="w-full md:w-1/2 flex items-center flex-col justify-center p-8">
            <p className="text-3xl  font-bold">Coding Alone Diaries</p>
            <p className="font-bold text-lg mt-2">
              {toggleLogin === true ? "Join Community!" : ""}
            </p>
          </div>


          {/* Right side - Form */}
          {toggleLogin === false ? (
            <form
              onSubmit={handleLoginSubmit}
              className="w-full md:w-1/2 bg-[#1E1E1E] p-8 flex flex-col justify-center"
            >
              <p className="text-xl font-bold pb-2">Login</p>
              <input
                type="text"
                name="Username"
                value={loginForm.Username}
                onChange={handleLoginInputChange}
                placeholder="Username"
                className="border border-gray-600 bg-transparent text-white rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />

              <input
                type="password"
                placeholder="Password"
                name="Password"
                value={loginForm.Password}
                onChange={handleLoginInputChange}
                className="border border-gray-600 bg-transparent text-white rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button disabled={loading} className="disabled:opacity-75 bg-amber-400 cursor-pointer hover:bg-amber-500 text-black font-bold py-2 px-4 rounded transition">
                {loading ? "Logging in...":"Login"}
              </button>
              <p
                className="mt-2 text-blue-300 hover:underline cursor-pointer"
                onClick={toggleLoginState}
              >
                don't have account?
              </p>
            </form>
          ) : (
            <form
              onSubmit={handleRegisterSubmit}
              className="w-full md:w-1/2 bg-[#1E1E1E] p-8 flex flex-col justify-center"
            >
              <p className="text-xl font-bold pb-2">Register</p>

              <input
                type="text"
                placeholder="Username"
                name="Username"
                value={registerForm.Username}
                onChange={handleRegisterInputChange}
                className="border border-gray-600 bg-transparent text-white rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={registerForm.Email}
                onChange={handleRegisterInputChange}
                className="border border-gray-600 bg-transparent text-white rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="password"
                name="Password"
                placeholder="Password"
                value={registerForm.Password}
                onChange={handleRegisterInputChange}
                className="border border-gray-600 bg-transparent text-white rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-amber-400 disabled:opacity-75 cursor-pointer hover:bg-amber-500 text-black font-bold py-2 px-4 rounded transition"
              >
                {loading ? "Registering...":"Register"}
              </button>
              <p
                className="mt-2 text-blue-300 hover:underline cursor-pointer"
                onClick={toggleLoginState}
              >
                have account login!
              </p>
            </form>
          )}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </>
  );
}

export default MyCommunity;
