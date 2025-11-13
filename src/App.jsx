import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import SOS from "./pages/SOS.jsx";
import Contacts from "./pages/Contacts.jsx";
import Tips from "./pages/Tips.jsx";
import Policies from "./pages/Policies.jsx";

export default function App() {
  // state for demo mode
  const [demoMode, setDemoMode] = useState(true);

  // state for which page to display
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Pass setPage to Header */}
      <Header demoMode={demoMode} setDemoMode={setDemoMode} setPage={setPage} />

      <main className="flex-1 p-4">
        {page === "home" && <Home />}
        {page === "sos" && <SOS demoMode={demoMode} />}
        {page === "contacts" && <Contacts demoMode={demoMode} />}
        {page === "tips" && <Tips />}
        {page === "policies" && <Policies />}
      </main>

      <Footer />
    </div>
  );
}
