import logo from '../assets/react.svg'
const Navbar = () => {
    const links = [
        {
            name:'Home',
            href:'/'
        },
        {
            name:'Home',
            href:'/'
        },
        {
            name:'Home',
            href:'/'
        },
        {
            name:'Home',
            href:'/'
        },
        {
            name:'Home',
            href:'/'
        },
    ]
    return ( 
        <>
        <nav className="bg-white w-full flex flex-row fixed top-0 left-0 p-10 justify-between">
            {/* Logo */}
            <img src={logo} alt="Logo" />

            {/* Links for desktop */}

            <div className="flex-row hidden md:flex">
                {
                    links.map(link=>(
                        <a href={link.href} className="mx-4 text-xl">{link.name}</a>
                    ))
                }
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;