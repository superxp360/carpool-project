
"use client"

// Import the "useRouter" hook from Next.js
// This hook allows us to access the router object and navigate between pages
import { useRouter } from "next/navigation";

// Import the NavBar component
import NavBar from "../components/navBar"

// Define the AddAvaliablePoolCard component
export default function AddAvaliablePoolCard () {

  // Use the useRouter hook to get the router object
  const router = useRouter();

  // Define the addPoolCard function, which is called when the form is submitted
  const addPoolCard = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // If the first name field is empty, do not submit the form
    if (!e.target.firstName.value) return;

    // Create a new object with the form data
    const newPoolCard = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      carYear: e.target.carYear.value,
      carMake: e.target.carMake.value,
      carModel: e.target.carModel.value,
      numSeats: e.target.numSeats.value,
      toAddress: e.target.toAddress.value,
      fromAddress: e.target.fromAddress.value,
    }

    // Send a POST request to the server with the form data
    fetch("http://127.0.0.1:5002/poolForms", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newPoolCard),
    })
    .then(res => res.json())
    .then(() => {
      // Clear the form fields after a successful submission
      e.target.firstName.value = "";
      e.target.lastName.value = "";
      e.target.email.value = "";
      e.target.carYear.value = "";
      e.target.carMake.value = "";
      e.target.numSeats.value = "";
      e.target.carModel.value = "";
      e.target.toAddress.value = "";
      e.target.fromAddress.value = "";

    })
    .catch(alert);

    // Navigate back to the home page after the form is submitted
    router.push("/");
  }

  return (
    <>
    <div className="bg-gradient-to-b h-screen w-screen from-cyan-100 via-blue-800 to-blue-950">
    <NavBar />
      <div className="flex flex-col bg-blue-300/75 max-w-md px-4  py-8 mt-10 rounded-lg shadow sm:px-6 md:px-8 lg:px-10 mx-auto border-2 border-sky-500">
      
              <h1 className="text-center text-3xl text-sky-100">Create A Pool</h1>
              <div className="p-6 mt-8">
                  <form onSubmit={addPoolCard}>
                      <div className="flex gap-4 mb-2">
                          <div className=" relative ">
                              <input type="text" name="firstName" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                              focus:bg-white" placeholder="First name" />
                          </div>
                          <div className=" relative ">
                              <input type="text" name="lastName" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                              focus:bg-white"  placeholder="Last name" />
                          </div>
                      </div>
                      <div className="m-2">
                          <div className=" relative">
                              <input type="email" name="email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                              focus:bg-white" placeholder="Email" />
                          </div>
                      </div>
                      <div id="car" className="m-5">
                          <h1 className="text-center m-2">Car</h1>
                          <div className="relative flex gap-4 mb-2">
                              <input type="number" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                              focus:bg-white" name="carYear" placeholder="Year" />

                              <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                              focus:bg-white" name="carMake" placeholder="Make" />

                              <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent focus:bg-white" name="carModel" placeholder="Model" />
                          </div>
                      </div>

                      <div>
                          <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                          focus:bg-white" name="numSeats" placeholder="Number of Seats" />

                      </div>

                      <div>

                          <input type="text" id="create-account-last-name" className=" mt-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                          focus:bg-white" name="fromAddress" placeholder="From" />

                      </div>
                      <div>

                          <input type="text" id="create-account-last-name" className=" mt-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                          focus:bg-white" name="toAddress" placeholder="To" />

                      </div>

                      <div className="flex w-full my-4">
                          <button type="submit" name="submitButton" className="py-2 px-4 mt-2 bg-sky-400 hover:bg-sky-500 focus:ring-sky-500 focus:ring-offset-sky-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                              Start a Pool!
                          </button>
                      </div>
                  </form>
              </div>
            </div>
      </div>
</>
  )
}