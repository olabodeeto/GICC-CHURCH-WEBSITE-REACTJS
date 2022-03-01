import React, { useLayoutEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Give() {
  const [fullName, setfullName] = useState("");
  const [phone, setphone] = useState("");
  const [amount, setamount] = useState("");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="mt-20 p-4 md:p-10 mb-40">
          <h2 className="mt-10 text-6xl text-gray-800 text-center font-extrabold">
            Giving
          </h2>
          <p className="text-center mt-10 w-10/12 md:w-5/12 m-auto">
            We believe giving is an act of worship, and when practiced in
            cooperation with the Holy Spirit, we will become more like Christ.
            Though giving does sustain many practical functions of the church,
            its primary purpose is to align our hearts with Christ.
          </p>
          <div className="mt-20 w-11/12 md:w-4/12 m-auto p-5 border border-indigo-100 rounded-md bg-white">
            <form>
              <div className="flex flex-col mb-8">
                <label className="mb-2 text-gray-800">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="py-3 p-2 w-full outline-0 bg-indigo-50"
                />
              </div>
              <div className="flex flex-col mb-6">
                <label className="mb-2">Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="py-3 p-2 w-full outline-0 bg-indigo-50"
                />
              </div>
              <div className="flex flex-col mb-6">
                <label className="mb-2">Amount</label>
                <input
                  type="text"
                  placeholder="Amount"
                  required
                  className="py-3 p-2 w-full outline-0 bg-indigo-50"
                />
              </div>
              <button className="py-3 p-2 w-full outline-0 mt-5 bg-teal-600 rounded-md text-gray-100">
                Give
              </button>
            </form>

            <button className="py-3 p-2 w-full outline-0 mt-5 bg-gray-800 rounded-md text-gray-400">
              Make pledge
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
