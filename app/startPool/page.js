import NavBar from "../components/navBar"

export default function startPool() {

    return (
        <>
            <NavBar />

            <div className="flex flex-col max-w-md px-4 py-8 mt-10 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10 mx-auto border-2 border-slate-500">
                <h1 className="text-center text-3xl">Create A Pool</h1>
                <div className="p-6 mt-8">
                    <form action="#">
                        <div className="flex gap-4 mb-2">
                            <div className=" relative ">
                                <input type="text" id="create-account-first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" name="First name" placeholder="First name" />
                            </div>
                            <div className=" relative ">
                                <input type="text" id="create-account-last-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" name="Last name" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="m-2">
                            <div className=" relative">
                                <input type="email" id="create-account-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Email" />
                            </div>
                        </div>
                        <div id="car" className="m-5">
                            <h1 className="text-center m-2">Car</h1>
                            <div className="relative flex gap-4 mb-2">
                                <input type="number" id="create-account-last-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" name="year" placeholder="Year" />

                                <input type="text" id="create-account-last-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" name="make" placeholder="Make" />

                                <input type="text" id="create-account-last-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" name="model" placeholder="Model" />
                            </div>
                        </div>

                        <div>
                            <input type="text" id="create-account-last-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" name="numberOfSeats" placeholder="Number of Seats" />

                        </div>

                        <div>

                            <input type="text" id="create-account-last-name" className=" mt-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" name="numberOfSeats" placeholder="From Address" />

                        </div>

                         <div>

                            <input type="text" id="create-account-last-name" className=" mt-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" name="numberOfSeats" placeholder="To Address" />

                        </div>


                        <div className="flex w-full my-4">
                            <button type="submit" className="py-2 px-4 mt-2 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Start a Pool!
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}