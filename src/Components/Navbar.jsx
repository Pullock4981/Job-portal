import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        {path: "/", title: "Start a search"},
        {path: "/my-job", title: "My Jobs"},
        {path: "/salary", title: "Salary Esrimate"},
        {path: "/post-job", title: "Post A Job"}
    ]
    return (
        <header className="xl:px-24 px-4">
            <nav className="flex justify-between items-center py-6">
                <a href="/" className="md:text-2xl text-xl font-bold">JobPortal</a>

                {/* nav items for lg device */}

                <ul className="hidden md:flex gap-10">
                    {
                        navItems.map(({ path, title }) => (
                            <li key={path} className="text-lg text-primary">
                                <NavLink
                                    to={path}
                                    className={({ isActive}) =>
                                        isActive ? "active" : ""
                                    }
                                    >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                {/* sign up and login btn */}

                <div className="text-lg text-primary font-medium space-x-5 hidden md:block">
                    <Link to="/signin" className="px-5 py-2 border rounded">Sign in</Link>
                    <Link to="/signup" className="px-5 py-2 border rounded bg-blue text-white">Sign up</Link>
                </div>

                {/* mobile device menu bar */}

                <div className="block md:hidden">
                    <button onClick={handleMenuToggle}>
                        {
                            isMenuOpen ? <FaXmark className="w-5 h-5"></FaXmark> : <FaBarsStaggered className="w-5 h-5"></FaBarsStaggered>
                        }
                    </button>
                </div>
            </nav>

            {/* nav for mobile */}

            <div className={`px-4 bg-gray-800 py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
                <ul>
                    {
                        navItems.map(({ path, title }) => (
                            <li key={path} className="text-lg text-white first:text-white py-1">
                                <NavLink
                                    to={path}
                                    className={({ isActive}) =>
                                        isActive ? "active" : ""
                                    }
                                    >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }

                    <li className="text-white py-1"><Link to="/signin">Sign in</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;