import Navbar from "./Navbar";
import { Bell } from "lucide-react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

const Home = ({ account, onDisconnect }) => {
  if (!account) return null;

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url("/homebg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="flex items-center justify-between py-4">
            <div className="text-white text-xl font-semibold font-iceberg">
              Find&Earn
            </div>

            <div className="flex items-center gap-4">
              <div className="relative max-w-[200px]">
                <Input
                  type="text"
                  placeholder="Search Here"
                  className="bg-[#2563EB]/20 border-0 text-white placeholder:text-white/70"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-white">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <div className="h-8 w-8 rounded-full bg-white/10" />
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="relative mt-20 flex min-h-[600px] items-start">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl font-iceberg">
                Lost or Found? We've got you covered.
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Connect with finders and recover your lost items quickly and
                securely
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row wallet-connect">
                <Link to="/report-lost">
                  <button className="bg-purple-600 hover:bg-purple-700 mt-10 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200">
                    Report lost
                  </button>
                </Link>
                <button className="bg-purple-600 hover:bg-purple-700 mt-10 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200">
                  Submit found
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
