"use client"
// Import the "UserAuth" context from the "authContext" module.
import { UserAuth } from "../Login/authContext";



// Define a React component that displays a navigation bar with login and logout functionality.
export default function NavBar() {
    // Use the "UserAuth" context to get the user object and the "googleSignIn" and "logOut" functions.
    const {user, googleSignIn, logOut} =  UserAuth();

    // Define a function to handle signing in with Google.
    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } catch(error) {
            console.log(error);
        }
    };

    // Define a function to handle signing out.
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error){
            console.log(error);
        }
    }
 
    // Render the navigation bar.
    return(
       <>
        <header className="bg-white">
                <div className="ml-[70px] container flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <img className="mr-[50px] h-[55px]" src="/carPoolLogo.png" />
                    <div className="ml-auto">
                    {/* If there's no user, display a "Get Start!" button that triggers the "handleSignIn" function. */}
                    {!user ? (<button onClick={handleSignIn} className=" inline-flex text-white items-center bg-sky-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 align-end">Get Start!
                        </button>) : (
                                /* If there is a user, display their name and profile picture, and a "Sign Out" button that triggers the "handleSignOut" function. */
                                    <div className="flex-row gap-4 flex justify-center items-center">
                                        <div class="flex-shrink-0">
                                            <a class="relative block">
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