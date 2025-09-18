import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = {
      name: formData.get("full-name"),
      phone: formData.get("phone-number"),
      email: formData.get("email-address"),
      company: formData.get("company-name"),
      isAgency: formData.get("agency") === "yes",
    };
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    navigate("/account");
  };

  return (
    <div className="bg-white w-96 min-h-[600px] rounded-xl shadow-lg p-8 relative mx-auto mt-10">
      

      <h1 className="text-4xl font-bold text-gray-800 mb-6">Create your <br></br> PopX account</h1>

      <form onSubmit={handleCreateAccount}>
        <div className="mb-4 text-left">
          <input
            type="text"
            name="full-name"
            className="w-full border-2 border-gray-300 rounded-lg p-3 pt-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-600"
            placeholder="Marry Doe"
            required
          />
          <label className="absolute left-[40px] top-[125px] bg-white px-2 text-purple-600 font-medium text-sm">Full Name*</label><label className="absolute left-[112px] top-[125px] bg-white px-1 text-red-600 font-medium text-sm">*</label>
        </div>

        <div className="mb-4 text-left">
          <label className="absolute left-[40px] top-[195px] bg-white px-2 text-purple-600 font-medium text-sm">Phone number*</label><label className="absolute left-[141px] top-[195px] bg-white px-1 text-red-600 font-medium text-sm">*</label>
          <input
            type="tel"
            name="phone-number"
            className="w-full border-2 border-gray-300 rounded-lg p-3 pt-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-600"
            placeholder="1234567890"
            required
          />
        </div>

        <div className="mb-4 text-left">
          <label className="absolute left-[40px] top-[265px] bg-white px-2 text-purple-600 font-medium text-sm">Email address*</label><label className="absolute left-[135px] top-[265px] bg-white px-1 text-red-600 font-medium text-sm">*</label>
          <input
            type="email"
            name="email-address"
            className="w-full border-2 border-gray-300 rounded-lg p-3 pt-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-600"
            placeholder="abc@gmail.com"
            required
          />
        </div>

        <div className="mb-4 text-left">
          <label className="absolute left-[40px] top-[330px] bg-white px-2 text-purple-600 font-medium text-sm">Password*</label> <label className="absolute left-[107px] top-[330px] bg-white px-1 text-red-600 font-medium text-sm">*</label>
          <input
            type="password"
            name="password"
            className="w-full border-2 border-gray-300 rounded-lg p-3 pt-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-600"
            placeholder="Enter password"
            required
          />
        </div>

        
        <div className="mb-4 text-left">
          <label className="absolute left-[40px] top-[395px] bg-white px-2 text-purple-600 font-medium text-sm">Company name</label>
          <input
            type="text"
            name="company-name"
            className="w-full border-2 border-gray-300 rounded-lg p-3 pt-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-600"
            placeholder="Optional"
          />
        </div>

        <div className="mb-6 text-left">
          <label className="block mb-2 text-purple-600 font-medium">Are you an Agency?*</label><label className="absolute left-[175px] top-[472px] mb-2 text-red-600 font-medium">*</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" value="yes" required /> Yes
            </label>
            <label className="flex items-center gap-2">
              <input 
                type="radio"
                name="agency" 
                value="no" 
                required
                className="h-5 w-4" /> No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-br from-purple-700 to-purple-500 text-white font-semibold hover:shadow-lg"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
