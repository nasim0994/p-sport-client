import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaSignInAlt } from "react-icons/fa";
import img from "../../public/Assets/football.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const category = (
        <>
            <li className="mb-2">Football</li>
            <li className="mb-2">Cricket</li>
            <li className="mb-2">Handball</li>
        </>
    );
    const menuList = (
        <>
            <li className="hover:border-b-2 border-white">
                <Link href="/">Home</Link>
            </li>
            <li className="hover:border-b-2  border-white dropdown dropdown-hover dropdown-bottom relative">
                <label tabIndex={0}>Category</label>

                <ul
                    tabIndex={0}
                    className="dropdown-content menu px-4 absolute p-5 bg-gray-100 text-gray-800 top-4 rounded"
                >
                    {category}
                </ul>
            </li>
            <li className="hover:border-b-2 transition border-white">
                <Link href="/">Schedule</Link>
            </li>
            <li className="hover:border-b-2 transition border-white">
                <Link href="/about">About Us</Link>
            </li>
        </>
    );
    return (
        <section className="fixed lg:sticky top-0 z-50 w-full bg-secondary border-b border-white">
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            className="h-12 w-12 md:h-16 md:w-16"
                            src={img}
                        ></Image>
                        <p className="lg:text-3xl text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text uppercase">
                            P-Sport
                        </p>
                    </Link>
                    <ul className="items-center hidden space-x-8 lg:flex font-mono text-white text-lg">
                        {menuList}
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <FaBars className="text-white w-5 h-5" />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 right-0 w-1/3 ">
                                <div className="p-5 bg-secondary border-0 rounded-md">
                                    <div className="flex items-center justify-between mb-4">
                                        <div></div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2"
                                                onClick={() =>
                                                    setIsMenuOpen(false)
                                                }
                                            >
                                                <FaSignInAlt className="text-white w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul
                                            className="space-y-4 flex flex-col items-end font-mono text-white"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {menuList}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
