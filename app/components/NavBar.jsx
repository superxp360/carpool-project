
export default function NavBar() {

    return(
       <>
        <header className="text-gray-600 body-font">
                <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <img src="/carPoolLogo.png" />
                    <div className="ml-auto">
                        <button className="inline-flex text-white items-center bg-sky-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 align-end mr-3">Sign Up
                        </button>

                        <button className="inline-flex text-white items-center bg-sky-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 align-end">Login
                        </button>
                    </div>
                </div>
        </header>
       </>
    
    )
}