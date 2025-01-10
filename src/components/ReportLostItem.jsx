import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContract } from "../contexts/ContractContext";

const ReportLostItem = () => {
  const { reportLostItem } = useContract();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    imageUrl: "",
    bounty: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await reportLostItem(
        formData.name,
        formData.category,
        formData.location,
        formData.imageUrl,
        new Date().toISOString(),
        formData.bounty
      );

      if (success) {
        alert("Item reported successfully!");
        // Reset form or redirect
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error reporting item");
    }
  };

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
      <div className="container mx-auto px-4 pt-20">
        <Navbar />

        {/* Form Section */}
        <div className="mt-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/home">
              <Button variant="ghost" size="icon" className="text-white">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-5xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Report a Lost item
            </h1>
          </div>

          <form className="max-w-2xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white text-lg font-medium">
                  What was lost?
                </label>
                <Input
                  placeholder="Item name"
                  className="bg-white/10 border-0 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-lg font-medium">
                  Image of the lost item
                </label>
                <Input
                  type="file"
                  placeholder="Upload image"
                  className="bg-white/10 border-0 text-white placeholder:text-white/50 file:bg-transparent file:border-0 file:text-white/70"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-lg font-medium">
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
                <label className="text-white text-lg font-medium">
                  Location
                </label>
                <Input
                  placeholder="Last seen location"
                  className="bg-white/10 border-0 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-lg font-medium">Bounty</label>
                <Input
                  placeholder="Amount"
                  type="number"
                  className="bg-white/10 border-0 text-white placeholder:text-white/50"
                />
              </div>
            </div>
            <div className="wallet-connect">
              <button
                className="bg-purple-600 w-40 hover:bg-purple-700 mt-10 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
                size="lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportLostItem;
