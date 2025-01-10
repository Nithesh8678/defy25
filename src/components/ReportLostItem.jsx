import { ArrowLeft, Bell } from "lucide-react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

const ReportLostItem = () => {
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
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="flex items-center justify-between py-4">
          <div className="text-white text-xl font-semibold font-iceberg">
            Find&Earn
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search Here"
                className="w-[200px] bg-[#2563EB]/20 border-0 text-white placeholder:text-white/70"
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

        {/* Form Section */}
        <div className="mt-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/home">
              <Button variant="ghost" size="icon" className="text-white">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Report a Lost item
            </h1>
          </div>

          <form className="max-w-2xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">
                  What was lost?
                </label>
                <Input
                  placeholder="Item name"
                  className="bg-white/10 border-0 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">
                  Image of the lost item
                </label>
                <Input
                  type="file"
                  placeholder="Upload image"
                  className="bg-white/10 border-0 text-white placeholder:text-white/50 file:bg-transparent file:border-0 file:text-white/70"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">
                  Category
                </label>
                <select className="w-full bg-white/10 border-0 text-white rounded-md p-2">
                  <option value="" className="bg-gray-800">
                    Select
                  </option>
                  <option value="electronics" className="bg-gray-800">
                    Electronics
                  </option>
                  <option value="jewelry" className="bg-gray-800">
                    Jewelry
                  </option>
                  <option value="documents" className="bg-gray-800">
                    Documents
                  </option>
                  <option value="other" className="bg-gray-800">
                    Other
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">
                  Location
                </label>
                <Input
                  placeholder="Last seen location"
                  className="bg-white/10 border-0 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Bounty</label>
                <Input
                  placeholder="Amount"
                  type="number"
                  className="bg-white/10 border-0 text-white placeholder:text-white/50"
                />
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800"
              size="lg"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportLostItem;
