import React, { useLayoutEffect } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className="">
        <section id="about" className="mt-20 h-90 bg-gray-50 py-40 md:px-10">
          <div
            className={`flex flex-col md:flex-row ${
              location.pathname === "/about"
                ? "md:w-10/12 m-auto"
                : "md:border-2 border-black md:w-8/12 m-auto"
            } `}
          >
            <div className=" px-8 md:p-10 md:py-20 w-10/12 md:w-4/12 mr-4">
              <h1 className="text-gray-800 text-6xl md:text-8xl font-extrabold px-4 w-4/12">
                About GICC
              </h1>
            </div>
            <div className="md:w-10/12">
              <div className="p-10 md:mt-16 ml-4">
                <b>Psalm 19:1-4</b>
                <p>
                  <i>
                    The heavens declare the glory of God; And the firmament
                    shows His handiwork.
                  </i>
                </p>
                <p>
                  <i>
                    Day unto day utters speech, And night unto night reveals
                    knowledge.
                  </i>
                </p>
                <p>
                  <i>
                    There is no speech nor language Where their voice is not
                    heard
                  </i>
                </p>
                <p>
                  <i>
                    Their line has gone out through all the earth, And their
                    words to the end of the world. In them He has set a
                    tabernacle for the sun
                  </i>
                </p>

                <p></p>
              </div>
            </div>
          </div>
          <div className="w-11/12 md:w-8/12 m-auto">
            <p>
              The Global Influence Continental church (GICC) is a warm
              congregation of committed Christians with a mission to build a
              people of influence and worthy representative of godly values in
              global space.
            </p>
            <p>
              We believe in a Church where everyone can experience God in a real
              and life applicable way, empowering them to be a positive
              influence in the community they’re a part of as well as in the
              nations of the world!
            </p>
            <p>
              Our Church gathers people of all ages with different backgrounds,
              experiences and life stories. We come together with a common
              purpose; to Love God and express His influence in our spheres of
              life.
            </p>

            <h2 className="mt-14 text-4xl mb-5"> Our Beliefs</h2>
            <p>
              We believe in the Godhead- the Father, the Son and the Holy
              Spirit.
            </p>
            <p>
              We believe that God the Father, loved us so much that He sent
              Jesus Christ His son, to take on flesh so that He could die and
              save us (the world) from sin.
            </p>
            <p>
              We believe that Jesus died and resurrected and is seated now at
              the right hand of the Father.
            </p>
            <p>
              We believe that we have another comforter, The Holy Spirit who is
              God and with whose fellowship we enjoy here on earth.
            </p>
            <p>
              We believe that we are joint heirs with Jesus to God’s inheritance
              by His word and that we will rule and reign with Him forever more.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
