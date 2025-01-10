import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import WalletConnect from "./components/WalletConnect";
import Home from "./components/Home";

function App() {
  const [account, setAccount] = useState("");

  const handleDisconnect = () => {
    setAccount("");
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              account ? (
                <Navigate to="/home" />
              ) : (
                <div className="min-h-screen flex items-center justify-center login-bg">
                  <div className="absolute top-8 left-8">
                    <h1 className="text-4xl font-bold text-white mb-4 font-iceberg">
                      Find&Earn
                    </h1>
                  </div>
                  <div className=" p-8 rounded-lg backdrop-blur-md">
                    <WalletConnect account={account} setAccount={setAccount} />
                  </div>
                </div>
              )
            }
          />
          <Route
            path="/home"
            element={
              account ? (
                <Home account={account} onDisconnect={handleDisconnect} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
