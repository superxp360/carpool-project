import Image from "next/image";

export default function AvailablePoolsCard({poolCards}) {

    return (
        <>
      <div className="m-4">
        <h1 className="text-center text-3xl font-medium mb-8">Available Pools</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8">

          <div className="p-3 border-2 border-black rounded">
            <div className="mx-auto">
            </div>
            <h1>
              <strong>Driver's Name:</strong> {poolCards.firstName} {poolCards.lastName}
            </h1>
            <h1>
              <strong>Email:</strong> {poolCards.email}
            </h1>
            <h1>
              <strong>Car:</strong> {poolCards.carYear} {poolCards.carMake} {poolCards.carModel}
            </h1>
            <h1>
              <strong>Available Seats:</strong> {poolCards.numSeats}
            </h1>
            <div className="text-right">
              <button
                className="rounded border m-2 border-black bg-green-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Join Pool!
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </>
      );
}