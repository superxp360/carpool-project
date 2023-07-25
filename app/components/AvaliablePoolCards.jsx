import Image from "next/image";

export default function AvailablePoolsCard({poolCards}) {

    return (
        <>
      <div className="bg-cyan-200 bg-opacity-50">
        <div className="grid grid-cols-1">
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

            <h1>
              <strong>From:</strong> {poolCards.toAddress}
            </h1>

            <h1>
              <strong>To:</strong> {poolCards.fromAddress}
            </h1>

            <div className="text-right">
              <button
                className="rounded border m-2 border-black bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
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