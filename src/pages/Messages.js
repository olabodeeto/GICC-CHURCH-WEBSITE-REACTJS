import React, { useLayoutEffect } from "react";
import Header from "../components/Header";

export default function Messages() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="mt-20 p-4 md:p-10">
          <div className="w-11/12 md:w-10/12 m-auto">
            <h2 className="mt-10 text-6xl text-center font-extrabold">
              Sermons
            </h2>
            <div className="grid md:grid-cols-3 gap-4 border border-gray-200 mt-20 md:p-5 w-full">
              <div className="w-full h-64 border border-blue-400 p-4">
                image
              </div>
              <div className="w-full h-64 border border-blue-400 p-4">
                image
              </div>
              <div className="w-full h-64 border border-blue-400 p-4">
                image
              </div>
              <div className="w-full h-64 border border-blue-400 p-4">
                image
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
