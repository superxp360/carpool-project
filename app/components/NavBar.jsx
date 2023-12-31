"use client"
// Import the "UserAuth" context from the "authContext" module.
import { UserAuth } from "../Login/authContext";



// Define a React component that displays a navigation bar
export default function NavBar() {
    const {user, googleSignIn, logOut} =  UserAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } 
        catch(error) {
            console.log(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await logOut()
        } 
        catch (error){
            console.log(error);
        }
    }
 

    return(
       <>
        <header className="bg-white">
                <div className=" flex flex-row p-5 md:flex-row items-center">
                    <img className="mr-[50px] h-[55px]" src="/carPoolLogo.png" />
                    <div className="ml-auto">
                    {!user ? (<button onClick={handleSignIn} className=" inline-flex text-white items-center bg-sky-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 align-end">Login
                        </button>) : (
                                    <div className="flex-row gap-4 flex justify-center items-center">
                                        <div className="flex-shrink-0">
                                            <a className="relative block">
                                                <img className="w-[55px] rounded-full border-blue-500 border-2" alt="profil" src={user.photoURL} />
                                            </a>
                                        </div>
                                        <div className=" flex flex-col">
                                            <span className="text-lg font-medium text-black">
                                                Hello, {user.displayName}
                                            </span>
                                            <button onClick={handleSignOut}  className="text-s justify-center w-[90px] rounded bg-sky-400 text-white mt-2">
                                               Sign Out 
                                            </button>
                                        </div>
                                    </div>
                        )}
                    </div>
                </div>
        </header>
       </>
    
    )
}