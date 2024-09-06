import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const selector = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      console.error(error)
    });
    
  }

  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-screen flex items-center justify-between">
      <img className="w-56 p-4 mx-28" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

      {selector && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={selector?.photoURL} alt="photoURL" />
          <button onClick={handleSignOut} className="bg-red-600 text-white p-2 rounded-md mr-10 cursor-pointer">Sign Out</button>
      </div>
      )}
    </div>
  )
}

export default Header;