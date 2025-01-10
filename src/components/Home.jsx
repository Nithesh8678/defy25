import Navbar from "./Navbar";

const Home = ({ account, onDisconnect }) => {
  if (!account) return null;

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar account={account} onDisconnect={onDisconnect} />
      <div className="home pt-24">
        <h2 className="text-6xl font-bold text-white">Welcome to Dashboard</h2>
        <p className="text-gray-400 mt-4">Your wallet: {account}</p>

        {/* Add your dashboard content here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Example cards */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white">Balance</h3>
            <p className="text-gray-400">Loading...</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white">Transactions</h3>
            <p className="text-gray-400">Recent activity</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white">NFTs</h3>
            <p className="text-gray-400">Your collection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
