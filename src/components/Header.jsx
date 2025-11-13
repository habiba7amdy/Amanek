import React, { useState } from "react";

export default function Header({ demoMode, setDemoMode, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false); // for mobile menu toggle

  return (
    <header className="bg-gradient-to-r from-pink-400 to-pink-600 text-white p-4 shadow-md">
      
      {/* Top Row: Logo, Navigation, Demo Toggle */}
      <div className="flex justify-between items-center">
        {/* Logo + App Name */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Amanek Logo" className="h-12 w-12" />
          <h1 className="font-bold text-2xl">أمانك / Amanek</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <button onClick={() => setPage("home")} className="hover:underline">Home / الرئيسية</button>
          <button onClick={() => setPage("sos")} className="hover:underline">SOS / الطوارئ</button>
          <button onClick={() => setPage("contacts")} className="hover:underline">Contacts / جهات الاتصال</button>
          <button onClick={() => setPage("tips")} className="hover:underline">Tips / نصائح</button>
          <button onClick={() => setPage("policies")} className="hover:underline">Policies / السياسات</button>
        </nav>

        {/* Right Section: Demo Mode + Mobile Menu Button */}
        <div className="flex items-center space-x-2">
          {/* Demo Mode Toggle */}
          <label className="flex items-center cursor-pointer">
            <span className="text-sm mr-1">Demo Mode</span>
            <input
              type="checkbox"
              checked={demoMode}
              onChange={() => setDemoMode(!demoMode)}
              className="w-5 h-5 accent-pink-600"
            />
          </label>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-2 px-2 py-1 border rounded border-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕ Close" : "☰ Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mt-4 md:hidden ${menuOpen ? "block" : "hidden"} space-y-2`}>
        <button onClick={() => setPage("home")} className="block hover:underline w-full text-left">Home / الرئيسية</button>
        <button onClick={() => setPage("sos")} className="block hover:underline w-full text-left">SOS / الطوارئ</button>
        <button onClick={() => setPage("contacts")} className="block hover:underline w-full text-left">Contacts / جهات الاتصال</button>
        <button onClick={() => setPage("tips")} className="block hover:underline w-full text-left">Tips / نصائح</button>
        <button onClick={() => setPage("policies")} className="block hover:underline w-full text-left">Policies / السياسات</button>
      </nav>
    </header>
  );
}
