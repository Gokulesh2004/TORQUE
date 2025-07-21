import React from "react";

const CommunitySection = () => {
  const socialLinks = [
    {
      platform: "YouTube",
      followers: "530K+",
      url: "",
      icon: (
        <svg
          className="fill-[#FF0000] group-hover:fill-white transition-all duration-300 ease-in-out transform group-hover:scale-110 md:w-[36px] md:h-[36px] w-[24px] h-[24px]"
          viewBox="0 0 26 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.4 14.403L17.147 10.3651L10.4 6.3272V14.403ZM25.428 3.86409C25.597 4.49669 25.714 5.34465 25.792 6.42142C25.883 7.49819 25.922 8.4269 25.922 9.23448L26 10.3651C26 13.3127 25.792 15.4797 25.428 16.8661C25.103 18.0774 24.349 18.8581 23.179 19.1946C22.568 19.3696 21.45 19.4907 19.734 19.5715C18.044 19.6657 16.497 19.706 15.067 19.706L13 19.7868C7.553 19.7868 4.16 19.5715 2.821 19.1946C1.651 18.8581 0.897 18.0774 0.572 16.8661C0.403 16.2335 0.286 15.3855 0.208 14.3087C0.117 13.232 0.0779999 12.3033 0.0779999 11.4957L0 10.3651C0 7.41743 0.208 5.25043 0.572 3.86409C0.897 2.65273 1.651 1.87207 2.821 1.53558C3.432 1.36061 4.55 1.23947 6.266 1.15871C7.956 1.0645 9.503 1.02412 10.933 1.02412L13 0.943359C18.447 0.943359 21.84 1.15871 23.179 1.53558C24.349 1.87207 25.103 2.65273 25.428 3.86409Z" />
        </svg>
      ),
    },
    {
      platform: "Twitter",
      followers: "120K+",
      url: "",
      icon: (
        <svg
          className="fill-current text-[#1DA1F2] group-hover:fill-white transition-all duration-300 ease-in-out transform group-hover:scale-110 md:w-[36px] md:h-[36px] w-[24px] h-[24px]"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078Z"></path>
        </svg>
      ),
    },
    {
      platform: "Instagram",
      followers: "120K+",
      url: "",
      icon: (
        <svg
        className="group-hover:fill-white transition-all duration-300 ease-in-out transform group-hover:scale-110 md:w-[36px] md:h-[36px] w-[27px] h-[24px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="36"
        height="36"
        viewBox="0 0 48 48"
      >
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
          cx="19.38"
          cy="42.035"
          r="44.899"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fd5"></stop>
          <stop offset=".328" stopColor="#ff543f"></stop>
          <stop offset=".348" stopColor="#fc5245"></stop>
          <stop offset=".504" stopColor="#e64771"></stop>
          <stop offset=".643" stopColor="#d53e91"></stop>
          <stop offset=".761" stopColor="#cc39a4"></stop>
          <stop offset=".841" stopColor="#c837ab"></stop>
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
          cx="11.786"
          cy="5.54"
          r="29.813"
          gradientTransform="matrix(1 0 0 .6663 0 1.849)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4168c9"></stop>
          <stop offset="1" stopColor="#4168c9" stopOpacity="0"></stop>
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <path
          fill="#fff"
          d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
        ></path>
        <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
        <path
          fill="#fff"
          d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5	H18z"
        ></path>
      </svg>
      ),
    },
    {
      platform: "Facebook",
      followers: "120K+",
      url: "",
      icon: (
        <svg
        className="group-hover:fill-white transition-all duration-300 ease-in-out transform group-hover:scale-110 md:w-[36px] md:h-[36px] w-[24px] h-[24px]"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path
          fill="#039be5"
          d="M24,0C10.74,0,0,10.74,0,24c0,11.85,8.66,21.61,19.93,23.57V30.93h-5.99v-6.95h5.99v-5.2 c0-5.92,3.62-9.15,8.9-9.15c2.53,0,4.71,0.19,5.34,0.27v6.18l-3.66,0c-2.87,0-3.43,1.37-3.43,3.37v4.53h6.84l-0.89,6.95h-5.95 v16.66C39.47,45.71,48,35.86,48,24C48,10.74,37.26,0,24,0z"
        ></path>
      </svg>
      ),
    },
  ];

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-8">
          JOIN OUR GROWING COMMUNITY
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2"
            >
              <div className="bg-gray-800 rounded-full p-4">
                {link.icon}
              </div>
              <span className="font-bold text-xl">{link.platform}</span>
              <span className="text-sm text-gray-400">{link.followers}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
