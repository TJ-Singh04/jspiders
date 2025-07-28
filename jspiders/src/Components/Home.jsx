import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Qr from "./Qr";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Home() {
  let token = localStorage.getItem("token");
  let [Qrtoggle, setQrtoggle] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "auto"
    if (Qrtoggle) {
      document.body.style.overflow = "hidden";
    }

  }, [Qrtoggle]);
  const items = [
    <div className="item h-[50vh]" data-value="1">
      <img
        src="/assets/java1.png"
        alt=""
        className="h-full w-full object-contain"
      />
    </div>,
    <div className="item h-[50vh]" data-value="2">
      <img
        src="/assets/Java2.png"
        alt=""
        className="h-full w-full object-contain"
      />
    </div>,
    <div className="item h-[50vh]" data-value="2">
      <img
        src="/assets/advJava.png"
        alt=""
        className="h-full w-full object-contain"
      />
    </div>,
    <div className="item h-[50vh]" data-value="2">
      <img
        src="/assets/html.png"
        alt=""
        className="h-full w-full object-contain"
      />
    </div>,
    <div className="item h-[50vh]" data-value="2">
      <img
        src="/assets/css.png"
        alt=""
        className="h-full w-full object-contain"
      />
    </div>,
    <div className="item h-[50vh]" data-value="2">
      <img
        src="/assets/js.png"
        alt=""
        className="h-full w-full object-contain"
      />
    </div>,
    <div className="item h-[50vh]" data-value="3">
      <img
        src="/assets/sql1.png"
        alt=""
        className="h-full w-full object-center object-contain"
      />
    </div>,
  ];
  return (
    <div className="relative min-h-screen bg-white text-gray-800 p-8 space-y-16">
      <header className="h-[50vh] w-full">
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationDuration={1000}
          animationType="slide"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
        />
      </header>
      {token ? <Dashboard /> : <></>}
      <div className="flex w-full items-center justify-center">
        {/* <figure className="flex items-center justify-center relative w-[50%]">
          <img src="/assets/image.jpeg" alt="" className="w-full opacity-70" />
        </figure> */}
        {/* Hero Section */}
        <section className="w-full text-center space-y-4 rounded font-semibold py-6  top-[20vh]">
          <h1 className="text-4xl font-bold text-orange-400">
            Welcome to JSpiders
          </h1>
          <p className="text-lg max-w-xl mx-auto">
            Your gateway to becoming a software professional. Learn, practice,
            and get placed in top IT companies with JSpiders.
          </p>
          <Link to={"/signup"}>
            <button className="bg-orange-400 text-white px-6 py-2 rounded shadow hover:bg-orange-500 transition">
              Get Started
            </button>
          </Link>
        </section>
      </div>

      {/* Courses Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Java Full Stack",
              description:
                "Comprehensive course covering Core Java, JDBC, Servlets, Spring, and frontend technologies.",
            },
            {
              title: "Web Development",
              description:
                "HTML, CSS, JavaScript, React.js, and responsive design to build dynamic websites.",
            },
            {
              title: "Testing & Automation",
              description:
                "Manual testing, Selenium, and frameworks like TestNG and JUnit.",
            },
          ].map((course, idx) => (
            <div
              key={idx}
              className="p-6 border rounded shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-bold mb-2 text-orange-400">
                {course.title}
              </h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
