import img from "../assets/Screenshot 2024-10-28 114853.png";

export default function AccountPage() {
  const userData = JSON.parse(localStorage.getItem("currentUser"));

  if (!userData) {
    return <p className="text-center mt-20">No user found. Please login.</p>;
  }

  return (
    <div className="bg-white w-96 min-h-[600px] rounded-xl shadow-lg p-8 relative mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h1>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative inline-block">
          <img
            src={img}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-purple-700"
          />
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-purple-700 border-2 border-white rounded-full"></div>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold text-gray-800">{userData.name}</h3>
          <p className="text-gray-500 text-sm">{userData.email}</p>
        </div>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed">
        Lorem ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Tempor Invidunt Ut
        Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}
