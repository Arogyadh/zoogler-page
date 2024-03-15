"use client";
import { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Dark from "../icons/Dark";
import Light from "../icons/Light";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [announcement, setAnnouncement] = useState("Welcome to Zoogler");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  useEffect(() => {
    // Fetch search suggestions based on searchQuery
    const fetchSuggestions = async () => {
      // Replace with your own API or logic for fetching search suggestions
      const suggestions = [
        "Healthy breakfast recipes",
        "Beginner yoga poses",
        "DIY home decor ideas",
        "Best budget smartphones 2024",
        "World Cup 2026 schedule",
        "Climate change effects on wildlife",
        "Famous historical landmarks in Nepal",
      ];
      setSearchSuggestions(suggestions);
    };

    if (searchQuery.trim().length > 0) {
      fetchSuggestions();
    } else {
      setSearchSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearch = () => {
    // Handle search logic here
    console.log("Search for:", searchQuery);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-white" : "bg-black/95 text-white"
      }`}
    >
      {announcement && (
        <div className="text-center font-bold bg-gradient-to-r from-[#63f37b] to-[#3F72AF] text-white p-2">
          {announcement}
        </div>
      )}
      <header className="bg-white text-black py-4">
        <div className="container mx-auto px-10 flex justify-between items-center">
          <Navbar />
          <div>
            <button
              className="bg-gray-700 text-white px-3 py-2 rounded-xl"
              onClick={toggleTheme}
            >
              {theme === "light" ? <Dark /> : <Light />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex pt-[10%] justify-center mb-8">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <div className="font-bold text-[50px] md:text-[70px] mb-2 text-center bg-gradient-to-r from-[#63f37b] to-[#3F72AF] bg-clip-text text-transparent">
            ZOOGLER
          </div>
          <div className="relative">
            <input
              type="text"
              className={`w-full px-4 py-2 rounded-md ${
                theme === "light" ? "bg-gray-100" : "bg-gray-700 text-white"
              }`}
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchSuggestions.length > 0 && (
              <div
                className={`absolute w-full bg-white shadow-lg rounded-md mt-2 ${
                  theme === "dark" ? "text-gray-900" : ""
                }`}
              >
                {searchSuggestions.slice(0, 5).map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setSearchQuery(suggestion);
                      handleSearch();
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
