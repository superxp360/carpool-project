"use client"

import { UserAuth } from "../Login/authContext";



export default function NavBar() {

    const {user, googleSignIn, logOut} =  UserAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } catch(error) {
        console.log(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error){
            console.log(error);
        }
    }

 
    return(
       <>
        <header className="text-gray-600 body-font">
                <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <img src="/carPoolLogo.png" />
                    <div className="ml-auto">
                       

                    {!user ? (<button onClick={handleSignIn} className="inline-flex text-white items-center bg-sky-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 align-end">Login
                        </button>) : (
                                
                                    <div class="flex-row gap-4 flex justify-center items-center">
                                        <div class="flex-shrink-0">
                                            <a href="#" class="relative block">
                                                <img className="w-[75px] rounded-full" alt="profil" src={user.photoURL} />
                                            </a>
                                        </div>
                                        <div class=" flex flex-col">
                                            <span class="text-lg font-medium text-black">
                                                {user.displayName}
                                            </span>
                                            <button onClick={handleSignOut}  class="text-s rounded bg-sky-400 text-white mt-2">
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