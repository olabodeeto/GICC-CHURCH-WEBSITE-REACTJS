import React from "react";
import Header from "../components/Header";
import { HeroButton } from "../components/Button";
import { Link } from "react-router-dom";
import bgvideo from "../assets/bg.mp4";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="">
        <section className="min-h-screen pt-10">
          <div className="relative top-96 text-center xl:mt-30 hero">
            <video autoPlay muted loop id="myVideo">
              <source src={bgvideo} type="video/mp4" />
            </video>
            <h2 className=" text-center text-4xl md:text-5xl md:w-6/12 m-auto font-extrabold text-white">
              Welcome to
            </h2>
            <h2 className="text-center text-6xl md:text-8xl md:w-6/12 m-auto font-extrabold text-white">
              GICC
            </h2>
            <p className="text-white">Global Influence Continental Church</p>

            <div className="w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 m-auto">
              <HeroButton title="Worship with us" />
            </div>
          </div>
        </section>
        <section className="mt-20">
          <div className="h-40 bg-gray-800 flex gap-4 flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-4/12 px-10 bg-slate-500 h-full flex justify-center flex-col py-4">
              <h3 className="text-gray-100 text-2xl">Saturday</h3>
              <p className="text-gray-800">Time</p>
            </div>
            <div className="w-full md:w-4/12 px-10 bg-slate-500 h-full flex justify-center flex-col py-4">
              <h3 className="text-gray-100 text-2xl">Sunday</h3>
              <p className="text-gray-800">Time</p>
            </div>
            <div className="w-full md:w-4/12 px-10 bg-slate-500 h-full flex justify-center flex-col py-4">
              <h3 className="text-gray-100 text-2xl">Location</h3>
              <p className="text-gray-800">Time</p>
            </div>
          </div>
        </section>

        <section id="about" className=" h-90 bg-white py-40 md:px-10">
          <div className="flex flex-col xl:flex-row lg:flex-col md:border-2 border-black md:w-8/12 m-auto">
            <div className=" px-8 md:p-10 md:py-20 w-10/12 md:w-4/12 mr-4">
              <h1 className="text-gray-800 text-6xl md:text-7xl font-extrabold px-4 w-4/12">
                Our
              </h1>
              <h1 className="text-gray-800 text-6xl md:text-7xl font-extrabold px-4 w-4/12">
                Church
              </h1>
            </div>
            <div className="xl:w-10/12">
              <div className="p-10 xl:mt-16 ml-4">
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
                <p>
                  The Global Influence Continental church (GICC) is a warm
                  congregation of committed Christians with a mission to build a
                  people of influence and worthy representative of godly values
                  in global space.{" "}
                  <span className="text-red-400">
                    <Link to="/about">
                      <i>more</i>
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-gray-50 py-20 ">
          <div className="w-11/12 md:8/12 m-auto ">
            <div className="flex flex-col md:flex-row gap-8 md:gap-2 flex-wrap">
              <div className="h-80 w-11/12 m-auto md:w-6/12  backdropimg">
                <div className="backdrop-blur-md bg-gray-800/40 p-10 h-full">
                  <h2 className="text-white text-3xl">Need Prayer?</h2>
                  <p className="mt-5 text-white">
                    Our team is waiting for your prayer requests - we know God
                    will answer them. Please submit your prayer request today!
                  </p>
                  <div className="mt-10">
                    <a
                      href="/"
                      className="bg-white py-3 px-5 hover:bg-gray-700 hover:ml-5 hover:text-white transform duration-500"
                    >
                      Send prayer request
                    </a>
                  </div>
                </div>
              </div>
              <div className=" md:h-80 w-11/12 m-auto md:w-5/12  backdropimg2">
                <div className="backdrop-blur-md bg-gray-800/40 p-10 h-full">
                  <h2 className="text-white text-3xl">New to Church?</h2>
                  <p className="mt-5 text-white">
                    Experience a greater walk with God through these pages. This
                    30-day devotional provides a different model for making your
                    daily devotions and will help you to move closer to God.
                  </p>
                  <div className="mt-10">
                    <a href="/" className="bg-white py-3 px-5">
                      Start Devotional
                    </a>
                  </div>
                </div>
              </div>

              <div className=" md:h-80 w-11/12 m-auto md:w-5/12  backdropimg2 md:mt-10">
                <div className="backdrop-blur-md bg-gray-800/40 p-10 h-full">
                  <h2 className="text-white text-3xl">Give</h2>
                  <p className="mt-5 text-white">
                    By sowing your seed, you're engaging all God's resources to
                    work on your behalf, and helping for us to carry out our
                    mission of bringing JESUS to every nation through the power
                    of Holy Spirit.
                  </p>

                  <div className="mt-10 flex gap-4">
                    <Link to="/give" className="bg-white py-3 px-8">
                      Give
                    </Link>
                    <a href="/" className="bg-white py-3 px-5">
                      Make a pledge
                    </a>
                  </div>
                </div>
              </div>

              <div className=" md:h-80 w-11/12 m-auto md:w-6/12  backdropimg md:mt-10">
                <div className="backdrop-blur-md bg-gray-800/40 p-10 h-full">
                  <h2 className="text-white text-3xl">Share Your Story</h2>
                  <p className="mt-5 text-white">
                    God’s power at work in the world today is diverse and
                    unique. We would love for you to share your story,
                    testimony, praises, or how God is currently moving in your
                    life.
                  </p>

                  <div className="mt-10 flex gap-4">
                    <a
                      href="/"
                      className="bg-gray-600 text-white py-3 px-5 rounded-sm"
                    >
                      Share with Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="message" className="bg-gray-100 py-20 relative">
          <div className="bg-gray-400 toprecentmessage -z-20">
            <h2 className="relative top-32 md:top-32 text-center text-6xl font-extrabold text-white">
              LATEST SERMON
            </h2>
          </div>
          <div className="w-10/12 mb-10 md:w-8/12 m-auto recentmessage bg-white md:p-10">
            <iframe
              id="thisframe"
              className="w-full h-full"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
          <div className="-mt-40 md:w-8/12 m-auto flex gap-5 justify-center">
            <Link to="/sermons" className="py-3 px-5 bg-gray-900 text-white">
              OTHER SERMONS
            </Link>
          </div>
        </section>
        <section className="m-auto pt-40 bg-white signupbg">
          <div className="bg-gray-100 bg-gradient-to-tr  py-20 px-6 md:px-8 signupbg">
            <div className=" py-40 w-11/12 px-5 m-auto border border-gray-400 flex flex-col justify-center items-center">
              <h2 className="text-gray-200 text-4xl md:text-5xl mb-5 text-center">
                Stay Connected
              </h2>
              <p className="px-4 text-center text-gray-200 tracking-wide">
                Would you like details on upcoming events and what’s happening
                here?
              </p>
              <a className="mt-14 py-3 px-8 bg-gray-800 text-white" href="/">
                SIGN UP HERE
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white pt-20 md:pt-10 pb-20 md:py-40">
          <div className="bg-white py-20">
            <h2 className="text-center text-5xl md:text-6xl font-extrabold">
              UPCOMING <span className="text-gray-500">EVENTS</span>
            </h2>
            <div className="flex flex-col lg:flex-row gap-4 mt-20 w-11/12 md:w-10/12 m-auto md:mt-32">
              <div className="w-full md:w-4/12 border border-blue-50 p-4 flex gap-4">
                <div className="flex flex-col">
                  <div className="w-14 text-center p-2 bg-gray-800 text-white">
                    Feb
                  </div>
                  <div className="w-14 text-center p-2 bg-gray-600 text-white">
                    23
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>Zoom Prayer Meeting</p>
                  <p>Wed 7:00 am – 8:00 am</p>
                </div>
              </div>
              <div className="w-full md:w-4/12 border border-blue-50 p-4 flex gap-4">
                <div className="flex flex-col">
                  <div className="w-14 text-center p-2 bg-gray-800 text-white">
                    Feb
                  </div>
                  <div className="w-14 text-center p-2 bg-gray-600 text-white">
                    23
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>Zoom Prayer Meeting</p>
                  <p>Wed 7:00 am – 8:00 am</p>
                </div>
              </div>
              <div className="w-full md:w-4/12 border border-blue-50 p-4 flex gap-4">
                <div className="flex flex-col">
                  <div className="w-14 text-center p-2 bg-gray-800 text-white">
                    Feb
                  </div>
                  <div className="w-14 text-center p-2 bg-gray-600 text-white">
                    23
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>Zoom Prayer Meeting</p>
                  <p>Wed 7:00 am – 8:00 am</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
