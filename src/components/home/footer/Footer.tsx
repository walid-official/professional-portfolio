"use client"

import { useEffect } from "react";

export const Footer = () => {

useEffect(() => {
    if (window.location.hash === "#footer") {
    
      const timer = setTimeout(() => {
        const element = document.getElementById("footer");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);



  return (
    <footer id="footer" className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <p className="text-gray-700 text-sm md:text-base font-medium">
            Serving Bogura, Rajshahi with dedication and excellence
          </p>
          <p className="text-gray-500 text-xs md:text-sm">Copyright © 2025 - All right reserved</p>
        </div>
      </div>
    </footer>
  )
}