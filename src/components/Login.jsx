
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Eye, EyeOff } from "lucide-react";
const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin, handleSignUp } = useAuth();
  const { error, loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginForm) {
      console.log("Logging in with:", { emailId, password });
       handleLogin({ emailId, password });
    } else {
     handleSignUp({ firstName, lastName, emailId, password });
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 mb-[10%] w-96 ">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>

          <form onSubmit={handleSubmit}>
            {!isLoginForm && (
              <>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text" htmlFor="firstName">First Name</span>
                  </div>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </label>

                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text" htmlFor="lastName">Last Name</span>
                  </div>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </label>
              </>
            )}

            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text" htmlFor="emailId">Email ID:</span>
              </div>
              <input
                type="email"
                id="emailId"
                value={emailId}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmailId(e.target.value)}
                required
              />
            </label>

            <label className="form-control w-full max-w-xs my-2 relative">
  <div className="label">
    <span className="label-text" htmlFor="password">Password</span>
  </div>
  <input
    type={showPassword ? "text" : "password"}
    id="password"
    value={password}
    className="input input-bordered w-full max-w-xs pr-10"
    onChange={(e) => setPassword(e.target.value)}
    required
  />
  <span
    className="absolute right-3 top-12 cursor-pointer"
    onClick={() => setShowPassword((prev) => !prev)}
  >
    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </span>
</label>


            {error && (
              <p className="text-red-500 text-sm text-center mt-1">{error}</p>
            )}

            <div className="card-actions justify-center mt-8  ">
              <button
                className={`btn btn-primary w-full ${loading ? "btn-disabled" : ""}`}
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  isLoginForm ? "Login" : "Sign Up"
                )}
              </button>
            </div>
          </form>

          <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
