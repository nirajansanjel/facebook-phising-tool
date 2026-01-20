"use client"
import { useForm } from "react-hook-form";

const HomePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function submitForm(data) {
    console.log(data);
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <title>Facebook – log in or sign up</title>
        <div className="container mx-auto flex items-center justify-center">
          <div className="">
            {/* <img className="w-auto h-48" src="./fblogo.svg" alt /> */}
          </div>
          <div className="w-1/2 flex justify-center items-center mt-20 flex-col bg-white p-8 rounded-xl  text-xl shadow-lg">
            <div>
              <span>Log in to Facebook</span>
            </div>
            <input
              className="w-full px-4 py-2 my-2 rounded-md border border-1 outline-black border-gray-400"
              type="text"
              placeholder="Email address or phone number"
              {...register("email", {
                required: "User email is required.",
                pattern: {
                  value: "/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/",
                  message: "Invalid email address",
                },
              })}
            />
            <p className="text-red-500 text-sm">{errors.email?.message} </p>
            <input
              className="w-full px-4 py-2 my-2 rounded-md border border-1 outline-black border-gray-400"
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required." })}
            />
            <button className="w-full px-4 py-2 my-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700">
              Log In
            </button>
            <span className="text-blue-600 hover:underline text-center my-2 cursor-pointer text-sm">
              Forgotten account?
            </span>
            <hr className="my-2" />
            <button className="px-4 py-2 my-2 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 w-fit mx-auto text-lg">
              Create New Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
