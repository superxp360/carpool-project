import AvailablePoolsList from "./components/AvaliablePoolsList"
import NavBar from "./components/navBar"

export default function Home() {
  return (
   <main className="bg-white overflow-hidden">
    <NavBar />
    <AvailablePoolsList />
   </main>
  )
}
