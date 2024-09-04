import Header from "./Header";
import { BACKGROUND_IMAGE } from "../utils/constant";
import { useState } from "react";

const SignIn = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleIsSignIn = () => setIsSignIn(!isSignIn);

  return (
    <div className="">
      <Header />
      <img className="absolute" src={BACKGROUND_IMAGE} alt="background_image" />
      <form action="" className="absolute bg-black rounded-md text-white grid gap-4 w-[28%] p-14 items-center m-auto mt-[8%] left-0 right-0 bg-opacity-80">
        <h1 className="font-bold text-3xl pb-4">{!isSignIn ? "Sign Up" : "Sign In"}</h1>
        {!isSignIn && (
          <input className="bg-opacity-45 p-[14px] bg-black font-medium text-gray-400 border border-gray-500 rounded-[4px]" type="text" placeholder="Name" required />
        )}
        <input className="bg-opacity-45 p-[14px] bg-black font-medium text-gray-400 border border-gray-500 rounded-[4px]" type="email" placeholder="Email" required />
        <input className="p-[14px] bg-opacity-45 bg-black font-medium border border-gray-400 text-gray-500 rounded-[4px]" type="password" placeholder="Password" required />
        <button className="bg-[#E50914] rounded-[4px] p-2 font-semibold">{!isSignIn ? "Sign Up" : "Sign In"}</button>
        <p>{!isSignIn ? "Already registered?" : "New to Netflix?"} <span onClick={toggleIsSignIn} className="cursor-pointer hover:underline transition-all">{!isSignIn ? "Sign In" : "Sign Up now"}</span></p>
      </form>
    </div>
  )
}

export default SignIn;