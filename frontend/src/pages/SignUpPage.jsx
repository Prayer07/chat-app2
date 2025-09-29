import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";

import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#0b0f14] via-[#111827] to-[#0b0f14] text-gray-200">
      <div className="border border-gray-700 w-full max-w-3xl mx-auto bg-[#0f141b] rounded-xl shadow-lg overflow-hidden">
        {/* SINGLE-COLUMN SIGNUP CONTENT */}
        <div className="w-full p-6 sm:p-8 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center justify-start gap-2">
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-400 tracking-wider">
              {/* Streamify */}
            </span>
          </div>

          {/* ERROR MESSAGE IF ANY */}
          {error && (
            <div className="alert alert-error mb-4 bg-red-500/10 border border-red-500 text-red-400 rounded-lg p-2">
              <span>{error.response?.data?.message || "Something went wrong"}</span>
            </div>
          )}

          <div className="w-full max-w-2xl mx-auto">
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">Create an Account</h2>
                  <p className="text-sm text-gray-400">
                    Join Streamify and start your language learning adventure!
                  </p>
                </div>

                <div className="space-y-3">
                  {/* FULLNAME */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-gray-300">Full Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="input input-bordered w-full bg-[#1a202c] border-gray-700 text-white rounded-lg"
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-gray-300">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="input input-bordered w-full bg-[#1a202c] border-gray-700 text-white rounded-lg"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      required
                    />
                  </div>

                  {/* PASSWORD (with perfectly centered toggle) */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-gray-300">Password</span>
                    </label>

                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="input input-bordered w-full bg-[#1a202c] border-gray-700 text-white rounded-lg pr-12"
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        required
                      />

                      {/* ICON INSIDE INPUT */}
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200 focus:outline-none"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      Password must be at least 6 characters long
                    </p>
                  </div>


                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm border-gray-600 bg-[#1a202c]"
                        required
                      />
                      <span className="text-xs leading-tight text-gray-400">
                        I agree to the{" "}
                        <span className="text-violet-400 hover:underline">terms of service</span> and{" "}
                        <span className="text-violet-400 hover:underline">privacy policy</span>
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  className="btn btn-primary w-full bg-gradient-to-r from-violet-500 to-blue-500 border-none text-white rounded-lg shadow-md hover:brightness-110"
                  type="submit"
                >
                  {isPending ? (
                    <>
                      <span className="loading loading-spinner loading-xs"></span>
                      Loading...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <div className="text-center mt-4">
                  <p className="text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-violet-400 hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
