import React, { useEffect } from "react";
import Home from "./Home";
import QRCode from "react-qr-code";

const Qr = () => {

  let token = localStorage.getItem("token");
   useEffect(() => {
    // 🔒 Disable scrolling
    document.body.style.overflow = "hidden";

    // 🧹 Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  // document.body.style.overflow="hidden";
  return (
    // <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 text-center px-4">
    //   <h1 className="text-5xl font-extrabold text-orange-600 mb-4">
    //     Coming Soon
    //   </h1>
    //   <p className="text-lg text-gray-700 mb-8">
    //     We’re working hard to bring you something amazing. Stay tuned!
    //   </p>
    //   <div className="animate-pulse">
    //     <svg
    //       className="w-16 h-16 text-orange-400"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="1.5"
    //       viewBox="0 0 24 24"
    //     >
    //       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    //     </svg>
    //   </div>
    // </div>
    <>
      <div className="relative h-screen w-screen opacity-30 ">
        <Home/>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-2xl shadow-md h-150 w-120 border-8 border-violet-500 text-center flex flex-col gap-5 justify-start items-center">
        <h1 className="text-violet-500 text-2xl font-mono font-semibold">
          QR code for attandance
        </h1>
        <QRCode
          className=" bg-white"
          size={256}
          style={{ height: "auto", width: "100%" }}
          value={token}
          viewBox={`0 0 256 256`}
        />
        <div className="text-red-500 font-mono font-semibold">
          <p>* The code is only valid for the day.</p>
          <p>Code changes the next day</p>
        </div>
      </div>
      <div className="h-screen w-screen">

      </div>
    </>
  );
};

export default Qr;
