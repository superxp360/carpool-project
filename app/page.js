
import AvailablePoolsList from "./components/AvaliablePoolsList"
import NavBar from "./components/navBar"


export default function Home() {
  return (
   <main className="bg-gradient-to-b h-screen w-screen from-cyan-100 via-blue-800 to-blue-950">
    <NavBar />
    <AvailablePoolsList />
   </main>
  )
}
