import React from "react";

const MembersJoinedStyled = () => {
  return (
    <div className="w-full bg-gradient-to-r bg-gray-900  flex flex-col py-8 sm:py-14 relative items-center justify-center mt-0  ">
      
      {/* Decorative Element - Left */}
      <div className="absolute -rotate-90 -right-[14.5px] -bottom-0 hidden sm:block h-28 w-28">
        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="97" viewBox="0 0 87 97" fill="none">
          <circle className="stroke-gray-500 animate-pulse" cx="-0.5" cy="87.5" r="82.25" strokeWidth="3"></circle>
        </svg>
      </div>

      {/* Decorative Element - Right */}
      <div className="absolute rotate-90 -left-[14.5px] -top-0 hidden sm:block h-28 w-28">
        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="97" viewBox="0 0 87 97" fill="none">
          <circle className="stroke-gray-700 animate-pulse" cx="-0.5" cy="87.5" r="82.25" strokeWidth="2"></circle>
        </svg>
      </div>

      {/* Number of Members */}
      <p className="text-blue-500 font-bold text-[32px] md:text-[56px] text-center mt-4  ">
        3,00,000+
      </p>

      {/* Text Below Number */}
      <p className="text-gray-300 font-semibold text-[14px] sm:text-[20px] text-center uppercase mt-4 tracking-wider transform transition-transform duration-500 hover:scale-105">
        Drivers have ALREADY joined the COMMUNITY across the globe
      </p>

      {/* Call to Action Button */}
      <a
  href="/event"
  className="bg-gradient-to-r from-sky-500 to-blue-400 hover:from-blue-500 hover:to-blue-500 text-white font-semibold px-10 py-4 sm:px-14 sm:py-5 mt-8 rounded-lg uppercase tracking-wider shadow-2xl transform hover:scale-110 transition-transform duration-300 hover:shadow-blue-400/50 animate-bounce"
>
  Join the Race Now
</a>

    </div>
  );
};

export default MembersJoinedStyled;
