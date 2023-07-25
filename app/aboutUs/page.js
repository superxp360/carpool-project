import NavBar from "../components/navBar";

export default function aboutUs () {
    
    return(
        <>
        <div className="bg-gradient-to-b h-screen w-screen from-cyan-100 via-blue-800 to-blue-950">
        <NavBar />
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-sky-200">About Us
              </h1>
              <p className="mb-8 leading-relaxed text-sky-100">Welcome to Ride Share! Our mission is to provide a safe, convenient, and eco-friendly way for people to travel together and reduce their carbon footprint. Our app allows users to connect with one another and share rides to their desired destinations.

              At Ride Share, we believe that carpooling is the future of transportation, and we're dedicated to making this mode of transportation accessible to all. By connecting people who are going in the same direction, we're helping to reduce traffic congestion, lower carbon emissions, and save money on gas.</p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            </div>
          </div>
      </section>
      </div>
        </>
    )
}