import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-6 text-center mt-8 shadow-inner">
      <p className="font-semibold text-lg">© 2025 Amanaki — All Rights Reserved</p>

      <div className="flex justify-center space-x-6 mt-3 text-sm">
        <a href="#" className="hover:underline">Contact</a>
        <span>|</span>
        <a href="#" className="hover:underline">About</a>
        <span>|</span>
        <a href="#" className="hover:underline">Social Links</a>
      </div>

      <p className="mt-3 text-xs text-pink-100">
        Designed with Love by Habiba Hamdy
      </p>
    </footer>
  );
}
