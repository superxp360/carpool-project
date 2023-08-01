import { useContext } from "react";
import { AuthContext } from "../Login/authContext";

export default function AvailablePoolsCard({ poolCards, uid}) {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-3 bg-blue-100 rounded text-blue-800">
            <div className="mx-auto"></div>
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

            <h1>
              <strong>BodyStyle:</strong> {poolCards.carBody}
            </h1>

            <div className="text-right">
              {user && user.uid === uid ? (
                <button
                  className="rounded border m-2 border-black bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Join Pool!
                </button>
              ) : (
                <button>Delete Pool</button>
              )}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}