export default function Footer() {

    return(
        <>     

<footer className="bg-sky-400 w-full py-5 mt-10">
    <div className="max-w-screen-xl px-4 mx-auto">
        <div className="pt-5 flex max-w-xs mx-auto items-center justify-evenly">
      
            <a target="_blank" href="https://www.linkedin.com/in/kevin-fernandez-/">
                <img className="w-10 h-10" src="/linkedin-logo.webp"/>
            </a>
        
            <a target="_blank" href="https://github.com/superxp360">
                <img className="w-10 h-10" src="/github-logo.png" />
            </a>
            

        </div>
        <div className="text-center text-gray-100    d pt-10 sm:pt-12 font-light flex items-center justify-center">
            Kevin Fernandez @{new Date(). getFullYear()}
        </div>
    </div>
</footer>

        </>
    )
}