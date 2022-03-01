import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import NextSteps from "../pages/NextSteps";
import Messages from "../pages/Messages";
import Give from "../pages/Give";
import Ministries from "../pages/Ministries";

export default function PublicNav() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/nextsteps" element={<NextSteps />} />
      <Route path="/sermons" element={<Messages />} />
      <Route path="/give" element={<Give />} />
      <Route path="/ministries" element={<Ministries />} />
    </Routes>
  );
}
