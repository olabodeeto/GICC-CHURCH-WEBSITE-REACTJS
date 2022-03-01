import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full p-1 md:px-10 pt-20 bg-gray-900">
      <div className="flex gap-4 flex-col md:flex-row w-full m-auto px-2 md:w-11/12">
        <div className="w-full md:w-4/12 p-4">
          <div>
            <h3 className="text-3xl font-extrabold text-white">GICC</h3>
            <p className="text-gray-400">Global Influence Continental church</p>
          </div>
          <p className="mt-5 w-60 text-gray-400">
            303 N Sample Rd Sample Lorem, CO 80104
          </p>
          <p className="mt-5 w-60 text-gray-400">Tel: 000 000 0000</p>
        </div>
        <div className="w-full md:w-4/12 p-4 ">
          <div>
            <h3 className="text-xl font-bold text-white">QUICK LINKS</h3>
          </div>
          <div className="mt-2">
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/sermons">Message</Link>
              </li>
              {/* <li>
                <a href="#">Next steps</a>
              </li> */}
              <li>
                <Link to="/Give">Give</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-4/12 p-4 ">
          <div>
            <h3 className="text-xl font-bold text-white">SCHEDULE</h3>
            <div className="mt-2 flex flex-col gap-4">
              <div>
                <div className="text-gray-400 font-bold">Saturday</div>
                <div className="text-gray-500">Time</div>
              </div>

              <div>
                <div className="text-gray-400 font-bold">Sunday</div>
                <div className="text-gray-500">Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-900 text-white flex justify-center items-center mt-10">
        © {new Date().getFullYear()} Global Influence Continental church. All
        rights reserved.
      </div>
    </footer>
  );
}
