import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      const user = { name: "Marry Doe", email: loginData.email };
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/account");
    }
  };

  return (
    <div className="bg-white w-96 min-h-[600px] rounded-xl shadow-lg p-8 relative mx-auto mt-10">
      
       
      <h1 className="text-2xl font-bold text-gray-800 mb-3">Signin to your <br></br> PopX account</h1>
      <p className="text-gray-500 mb-8">
        Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.
      </p>
       
      <form onSubmit={handleLogin}>
        <div className="mb-6 relative">
          <input
            type="email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            className="w-full border-2 border-gray-300 rounded-lg p-3 pt-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-600"
            placeholder="Enter email address"
            required
          />
          <label className="absolute left-3 -top-3 bg-white px-2 text-purple-600 font-medium text-sm">
            Email Address
          </label>
        </div>
         
        <div className="mb-6 relative">
          <input
            type="password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            className="w-full border-2 border-gray-300 rounded-lg p-3 pt-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-600"
            placeholder="Enter password"
            required
          />
          <label className="absolute left-3 -top-3 bg-white px-2 text-purple-600 font-medium text-sm">
            Password
          </label>
        </div>
         
        <button
          type="submit"
          disabled={!loginData.email || !loginData.password}
          className={`w-full py-3 rounded-lg font-semibold text-white ${
            loginData.email && loginData.password
              ? "bg-gradient-to-br from-purple-700 to-purple-500 hover:shadow-lg"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Login
        </button>
      </form>
    </div>
  );
}
