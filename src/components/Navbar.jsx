import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ account, onDisconnect }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const disconnectWallet = () => {
    setShowDropdown(false);
    onDisconnect();
    navigate("/");
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl z-50`}
    >
      <div
        className={`rounded-full ${
          isScrolled ? "bg-black/80" : "bg-black/50"
        } backdrop-blur-md shadow-lg transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-white font-bold">Find&Earn</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
                  Home
                </button>
                <button className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
                  Report Lost
                </button>
                <button className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
                  Submit Found
                </button>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <span className="text-white text-sm">
                {account.slice(0, 6)}...{account.slice(-4)}
              </span>
              <div className="relative">
                <button
                  className="p-1 rounded-full hover:bg-gray-700/50 transition-colors duration-200"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <UserCircleIcon className="h-6 w-6 text-white" />
                </button>
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <button
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700 w-full text-left"
                        onClick={() => {
                          setShowDropdown(false);
                          navigate("/profile");
                        }}
                      >
                        Your Profile
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700 w-full text-left"
                        onClick={() => {
                          setShowDropdown(false);
                          navigate("/settings");
                        }}
                      >
                        Settings
                      </button>
                      <div className="border-t border-gray-700 my-1"></div>
                      <button
                        className="block px-4 py-2 text-sm text-red-400 hover:bg-gray-700 w-full text-left"
                        onClick={disconnectWallet}
                      >
                        Disconnect
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
