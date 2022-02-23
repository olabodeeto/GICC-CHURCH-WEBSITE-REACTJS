import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons() {
  return (
    <div className=" hidden md:block fixed right-60 z-20">
      <div className="w-60 h-16 flex flex-row justify-center items-center bg-black text-white absolute top-60 transform translate-y-32 -rotate-90 rounded-full">
        <ul className="flex flex-row gap-4 p-4 text-2xl">
          <li>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
