
import AvailablePoolsList from "./components/AvaliablePoolsList"
import NavBar from "./components/navBar"
import AddAvaliablePoolCard from "./components/startPoolForm"


export default function Home() {
  return (
   <main className="bg-white">
    <NavBar />
    <AddAvaliablePoolCard />
    <AvailablePoolsList />
   </main>
  )
}
