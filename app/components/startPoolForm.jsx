"use client"
import carData from "@/app/data/carDB.json"
import { useState } from "react";



export default function AddAvaliablePoolCard() {
  
  const [models, setModels] = useState([])

//Car selected bar
  const year = carData.map(car => car.Year);
  const onlyYear = new Set(year);
  const newYear = [...onlyYear].sort().reverse();


  const make = carData.map(car => car.Make);
  const onlyMake = new Set(make);
  const newMake = [...onlyMake].sort()

  
  const getCarModelsForMake = (make) => {
    const _carModels = carData.filter(car => car.Make === make).map(car => car.Model);
    const set = new Set(_carModels)
    const carModels = [...set].sort()
    setModels(carModels);
  }

  const bodyStyle = carData.map(car => car.Category);
  const onlyBody = new Set(bodyStyle);


  // Define the addPoolCard function, which is called when the form is submitted
  const addPoolCard = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // If the first name field is empty, do not submit the form
    if (!e.target.firstName.value ||
      !e.target.lastName.value ||
      !e.target.email.value ||
      !e.target.carYear.value ||
      !e.target.carMake.value ||
      !e.target.carModel.value ||
      !e.target.numSeats.value ||
      !e.target.toAddress.value ||
      !e.target.fromAddress.value ||
      !e.target.carBody.value) {
      alert("Please fill out all the form fields")

      return;
    }

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
      carBody: e.target.carBody.value,
    }


    // Send a POST request to the server with the form data
    fetch("https://carpool-project-kf.web.app/poolForms", {
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
        e.target.carBody.value="";

      })
      .catch(alert("All Set"));

  }

  return (
    <>
      <div className="w-4/5 h-1/2 mt-2 rounded p-10 bg-cover mx-auto bg-no-repeat bg-[url('/everyday_LA.gif')] ">

        <div className="flex justify-end">
          <div className="flex flex-col mt-[130px] w-3/4 bg-white m-2 max-w-md px-4 py-8 rounded-lg shadow sm:px-6 sm:w-1/2 md:px-8 md:w-1/2 lg:px-10 lg:w-1/2 border-2">
            <h1 className="text-center text-3xl text-sky-400">Create A Pool</h1>
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
                  <h1 className="text-center text-sky-400 m-2 text-2xl">Car</h1>
                  <div className="flex flex-row gap-2 mb-2">
                    <select type="number" className=" rounded-lg border-transparent flex-1 text-sm appearance-none border border-gray-300 w-1/2 py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-smfocus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                              focus:bg-white" id="carYear" placeholder="Year">
                      <option>Year</option>
                      {newYear.map((year) => (
                        <option key={year} value={year} >{year}</option>
                      ))}
                    </select>

                    <select type="text" className=" rounded-lg border-transparent flex-1 appearance-none border text-sm border-gray-300 w-1/2 py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                              focus:bg-white" name="carMake" placeholder="Make"
                      onChange={(e)=> getCarModelsForMake(e.target.value)}>
                      <option>Make</option>
                      {newMake.map((make) => (
                        <option key={make} value={make}>
                          {make}
                        </option>
                      ))}
                    </select>

                    <select type="text" className=" rounded-lg border-transparent text-sm flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm  focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent focus:bg-white" name="carModel" placeholder="Model">
                      <option>Model</option>
                      {/* map through model state */}
                      {
                        models?.map((model, idx) => (
                          <option key={`model-${idx}`}>{model}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>

                <div>
                  <select type="number" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                          focus:bg-white" name="numSeats">
                    <option>Number of Seats</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                  </select>

                </div>

                <div>

                  <input type="text" id="create-account-last-name" className=" mt-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                          focus:bg-white" name="fromAddress" placeholder="From" />

                </div>
                <div>

                  <input type="text" id="create-account-last-name" className=" mt-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                          focus:bg-white" name="toAddress" placeholder="To" />
                </div>

                <div>
                <select type="text" className=" mt-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                          focus:bg-white" name="carBody" >
                      <option>Body Style</option>
                      <option>Sedan</option>
                      <option>SUV</option>
                      <option>Pick-up</option>
                      <option>Coupe</option>
                </select>
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
      </div>
    </>
  )
}
