const Navbar = () =>{
    return(
        <nav className="text-white flex justify-between py-4 border-b-2 border-zinc-700">
            <h1>Irfan Al Rasyid</h1>
            <div className="flex space-x-14">
                <button>Experiences</button>
                <button>Project</button>
                <button>Contact</button>
            </div>
        </nav>
    )
}

export default Navbar