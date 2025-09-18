import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-96 min-h-[600px] rounded-xl shadow-lg p-8 text-center relative mx-auto mt-10">
      <div className="relative h-64 mb-10">
        {[1, 2, 3, 4, 5].map((n, i) => {
          const step = 45;
          const curve = 20;
          const x = 60 + i * step;
          const y = 40 + i * step * 0.8 + Math.sin(i * 0.9) * curve;

          return (
            <div
              key={n}
              className="w-10 h-10 rounded-full bg-yellow-500 text-white font-bold flex items-center justify-center shadow-md absolute"
              style={{ left: `${x}px`, top: `${y}px` }}>
              {n}
            </div>
          );
        })}
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-3 text-left">Welcome to PopX</h1>
      <p className="text-gray-500 mb-6 text-left max-w-xl mx-auto text-justify">
        Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.
      </p>

      <button
        className="w-full py-3 mb-4 rounded-lg bg-gradient-to-br from-purple-700 to-purple-500 text-white font-semibold hover:shadow-lg"
        onClick={() => navigate("/signup")}
      >
        Create Account
      </button>
      <button
        className="w-full py-3 rounded-lg bg-purple-100 text-purple-700 font-semibold hover:bg-purple-200"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}
