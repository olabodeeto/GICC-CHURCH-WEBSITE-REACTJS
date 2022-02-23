import React, { useState } from "react";
import SocialIcons from "./SocialIcons";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [navbarOpen, setnavbarOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <header className="fixed z-50 top-0 w-full flex justify-between items-center px-4 md:px12 h-24 bg-gray-800 md:px-20">
        <a href="#">
          <h1 className="text-green-200">My log</h1>
        </a>
        <nav>
          <button
            className="md:hidden"
            onClick={() => setnavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-9 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            onClick={() => setnavbarOpen(!navbarOpen)}
            className={`fixed left-0 right-0 min-h-screen bg-gray-800 text-white font-light pt-10 text-4xl md:text-lg space-y-8 p-4 transition duration-200 transform ${
              navbarOpen ? "translate-x-0" : "translate-x-full"
            } md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6 md:p-0 md:translate-x-0`}
          >
            <li>
              {location.pathname !== "/" ? (
                <>
                  <a href="/">Home</a>
                </>
              ) : (
                <>
                  <a href="#">Home</a>
                </>
              )}
            </li>
            <li>
              <a href="#about">About us </a>
            </li>
            <li>
              <a href="#locations">Locations</a>
            </li>
            <li>
              <a href="#message">Messages</a>
            </li>
            <li>
              <a href="#">Next Steps</a>
            </li>
            <li>
              <a href="#give">Give</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <SocialIcons />
    </>
  );
}