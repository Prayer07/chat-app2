import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 bg-[#0f172a]">
      <div className="border border-gray-700 w-full max-w-md bg-[#1e293b] rounded-2xl shadow-xl p-8">
        {/* LOGO */}
        <div className="mb-6">
          <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            {/* Streamify */}
          </span>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="alert alert-error mb-4">
            <span>{error.response?.data?.message || "Login failed"}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Welcome Back</h2>
            <p className="text-sm text-gray-400">
              Sign in to your account to continue your language journey
            </p>
          </div>

          {/* Email */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-gray-300">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full bg-[#0f172a] border-gray-700 text-white rounded-lg"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Password with toggle */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-gray-300">Password</span>
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="input input-bordered w-full bg-[#0f172a] border-gray-700 text-white rounded-lg pr-12"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200 focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-purple-500 to-blue-500 border-none text-white font-semibold rounded-lg shadow-md hover:opacity-90"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <span className="loading loading-spinner loading-xs"></span>
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>

          {/* Footer Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="text-purple-400 hover:text-purple-300 hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
