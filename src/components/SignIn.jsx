import Header from "./Header";
import { BACKGROUND_IMAGE } from "../utils/constant";
import { useState, useRef } from "react";
import { checkValidation } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const SignIn = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [invalid, setInvalid] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleIsSignIn = () => setIsSignIn(!isSignIn);

  const checkEmail = useRef(null);
  const checkPassword = useRef(null);
  const name = useRef(null);

  const check = () => {
    const message = checkValidation(checkEmail.current.value, checkPassword.current.value);
    console.log(message);
    setInvalid(message);
    if(message) return;

    if(!isSignIn) {
      createUserWithEmailAndPassword(auth, checkEmail.current.value, checkPassword.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/170519719?v=4"
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          navigate("/browse")
        }).catch((error) => {
          // An error occurred
          setInvalid(error.message)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setInvalid(errorCode + "-" + errorMessage);
      });
    } else {
      signInWithEmailAndPassword(auth, checkEmail.current.value, checkPassword.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate("/browse")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setInvalid(errorCode + "-" + errorMessage);
      });
    }
  }

  return (
    <div className="">
      <Header />
      <img className="absolute" src={BACKGROUND_IMAGE} alt="background_image" />
      <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black rounded-md text-white grid gap-4 w-[28%] p-14 items-center m-auto mt-[8%] left-0 right-0 bg-opacity-80">
        <h1 className="font-bold text-3xl pb-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input ref={name} className="bg-opacity-45 p-[14px] bg-black font-medium text-gray-400 border border-gray-500 rounded-[4px]" type="text" placeholder="Name" required />
        )}
        <input ref={checkEmail} className="bg-opacity-45 p-[14px] bg-black font-medium text-gray-400 border border-gray-500 rounded-[4px]" type="email" placeholder="Email" required />
        <input ref={checkPassword} className="p-[14px] bg-opacity-45 bg-black font-medium border border-gray-500 text-gray-400 rounded-[4px]" type="password" placeholder="Password" required />
        <p className="text-red-700">{invalid}</p>
        <button onClick={check} className="bg-[#E50914] rounded-[4px] p-2 font-semibold">{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p>{isSignIn ? "New to Netflix?" : "Already registered?"} <span onClick={toggleIsSignIn} className="cursor-pointer hover:underline transition-all">{isSignIn ? "Sign Up now" : "Sign In"}</span></p>
      </form>
    </div>
  )
}

export default SignIn;