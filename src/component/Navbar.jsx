import { useState, useEffect } from "react";
import { FaBars, FaUser, FaCartShopping, FaCaretDown } from "react-icons/fa6";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [logout, setLogout] = useState(false);
  const [user, setUser] = useState(null);
  const [logoutOpen, setLogoutOpen] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) setUser(data);
  }, []);

  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.removeItem("user"); // remove user
    setUser(null); // update UI
    setLogoutOpen(false); // close dropdown

    window.location.reload(); 
  };

  return (
    <nav className="w-full bg-white shadow-md">

      <div className="flex items-center px-8 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold ml-4 
        [text-shadow:1px_1px_1px_black]">
          <img src={logo} alt="" className="w-8 mr-2 mb-2" />
          BUR<span className="text-yellow-400">GER</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl max-[425px]:bg-red-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars/>
        </button>

        {/* Menu */}
        <div className={`${menuOpen ? "flex" : "hidden"} flex-row md:flex md:items-center md:justify-between justify-between md:gap-[5rem]`}>

          <ul className="flex flex-col md:flex-row md:ml-[1.5rem] font-bold">

            <li className="md:ml-8">
              <Link to="/" className="text-yellow-400 
              [text-shadow:1px_1px_1px_black]">
                Home
              </Link>
            </li>

            <li className="md:ml-8">
              <a href="#burger" className="hover:text-yellow-400 
              transition duration-500 hover:[text-shadow:1px_1px_1px_black]">
                Burger  
              </a>
            </li>

            {/* Dropdown */}
            <li className="relative md:ml-8">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-1 hover:text-yellow-400 transition duration-500"
              >
                Other <FaCaretDown />
              </button>

              {dropdown && (
                <ul className="absolute bg-yellow-400 mt-2 w-40 rounded shadow-md">
                  <li><a href="#pizza" className="block px-4 py-2 hover:bg-yellow-300">Pizza</a></li>
                  <li><a href="#fries" className="block px-4 py-2 hover:bg-yellow-300">Fries</a></li>
                  <li><a href="#fried-chicken" className="block px-4 py-2 hover:bg-yellow-300">Fried Chicken</a></li>
                </ul>
              )}
            </li>

            <li className="md:ml-8">
              <a href="#about" className="hover:text-yellow-400 transition duration-500">
                About
              </a>
            </li>

            <li className="md:ml-8">
              <a href="#contact" className="hover:text-yellow-400 transition duration-500">
                Contact
              </a>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex gap-4 text-xl xl:ml-[40rem] lg:ml-[12rem] mt-3 md:mt-0 mr-6">

              <div className="flex justify-end cursor-pointer mr-3 relative">
                {user ? (
                  <div className="relative">
                    
                    {/* Avatar */}
                    <div
                      onClick={() => setLogoutOpen(!logoutOpen)}
                      className="w-10 h-10 flex items-center justify-center rounded-full -mt-1
                      bg-yellow-400 text-black font-bold hover:bg-black hover:text-white transition" 
                    >
                      {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>

                    {/* Dropdown */}
                    {logoutOpen && (
                      <button 
                      className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded cursor-pointer hover:bg-yellow-400 px-4 py-2 font-bold"
                      onClick={handleLogout}>
                        Logout
                      </button>
                    )}
                  </div>
                ) : (
                  <Link to="/login">
                    <FaUser className="text-xl mt-2" />
                  </Link>
                )}
              </div>
            <Link to="/cart">
              <FaCartShopping className="cursor-pointer mt-2" />
              
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;