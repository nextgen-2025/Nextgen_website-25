import React, { useEffect } from "react";
import "./aboutus.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

const MissionVison = () => {
  // useEffect(() => {
  //   const mission = gsap.fromTo(
  //     ".mission",
  //     { x: "-100%", opacity: 0 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: ".mission",
  //         start: "top 75%", 
  //         toggleActions: "play none none reverse", 
  //       },
  //     }
  //   );

  //   const vision = gsap.fromTo(
  //     ".vision",
  //     { x: "100%", opacity: 0 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: ".vision",
  //         start: "top 75%", 
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );

  //   return () => {
  //     mission.kill(); 
  //     vision.kill(); 
  //   };
  // }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    const shapebase = document.getElementById("shape01");

    tl.to(shapebase, { duration: 4, morphSVG: "#shape02", ease: "none" })
      .to(shapebase, { duration: 4, morphSVG: "#shape03", ease: "none" })
      .to(shapebase, { duration: 4, morphSVG: "#shape01", ease: "none" });

    const liquid = document.querySelector("#liquid");
    const liquidRects = liquid.getBoundingClientRect();
    const liquidX = liquidRects.left + liquidRects.width / 2;
    const liquidY = liquidRects.top + liquidRects.height / 2;

    const handleMouseMove = (event) => {
      liquid.style.transform = `rotate(${Math.atan2(
        event.clientY - liquidY,
        event.clientX - liquidX
      )}rad)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="relative">
      {" "}
      {/* <!-- our mission and vision --> */}
      <div className="lg:h-[80vh] md:my-[100px]">
        <div id="liquid" className="flex liquid1 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="537.92521"
            height="486.18104"
            fill="#28aa4b27"
            viewBox="0 0 537.92521 486.18104"
          >
            <path
              className="shape"
              id="shape01"
              d="M552.37662,231.59052c48.68823,125.062-132.79481,278-267,278s-219-138-243-243c-29.90425-130.83107,120.78912-248.43159,243-243C420.37662,29.59052,501.37662,100.59052,552.37662,231.59052Z"
              transform="translate(-30.53739 -23.40948)"
            />

            <path
              className="shape"
              id="shape02"
              d="M552.35131,310.489C539.08212,404.77015,378.78216,510.93831,236.8287,507.303,31.11714,502.03486,37.55211,321.122,50.35131,208.489c5-44,10.57757-112.37032,62-149,73-52,131.00984-32.69681,201.17323-16.90935C420.08484,66.55682,571.35131,175.489,552.35131,310.489Z"
              transform="translate(-30.53739 -23.40948)"
            />

            <path
              className="shape"
              id="shape03"
              d="M548.908,282.6548c-7.60261,76.60291-69.0762,106.84063-129.3644,152.82754-51.94615,39.62371-114.07765,68.164-179.77888,66.48145-88.39169-2.26365-133.47739-56.814-163.47739-99.814-45.15578-64.72328-26.86551-139.52924-4-200C98.546,132.70542,113.74821,77.43278,168.31351,51.57032c44.06935-20.88766,94.82331-26.32821,148.14706-14.32984,39.60519,8.91157,89.84207,28.85416,134.37751,56.435C526.12809,140.30265,558.28734,188.14983,548.908,282.6548Z"
              transform="translate(-30.53739 -23.40948)"
            />

            <path
              className="shape"
              id="shape04"
              d="M148.26689,467.80336c-62,1-132.56239-70.724-115-129,45.51655-151.03423,13.42052-181.6213,68-234,69.75-66.9375,161.82692-89.44565,218-55,52.943,32.46491,85.055,15.58548,126.59263,42.68151C482.949,116.67926,573.21726,203.863,568.26689,266.80336c-7,89-62.30539,76.40218-104,135-37,52-76.87788,75.55636-138.584,93.2875C263.65225,512.91524,215.68521,466.716,148.26689,467.80336Z"
              transform="translate(-30.53739 -23.40948)"
            />
          </svg>
        </div>

        <div className="our-m-v-con md:my-10 overflow-hidden">
          {/* mission */}
          <div className="md:text-start md:ml-10 lg:ml-[150px] pt-8 ">
            <h1 className="text-[#28aa4a] text-5xl my-5 font-lato">
              Our Mission
            </h1>
            <p className="lg:w-[60%] mx-2 md:mx-0 font-thin text-xl">
              To empower businesses with innovative and reliable technology
              solutions that drive efficiency, enhance productivity, and foster
              growth. We are committed to delivering exceptional service and
              support, ensuring our clients can navigate the digital landscape
              with confidence.
            </p>
          </div>
          {/* vision */}
          <div className="our-vision-txt ">
            <h1 className="text-[#28aa4a] text-5xl my-5 font-lato">
              Our Vision
            </h1>
            <p className="font-thin text-xl">
              To be a leading provider of cutting-edge IT solutions, recognized
              for our commitment to quality, innovation, and customer
              satisfaction. We aspire to transform industries through
              technology, making advanced solutions accessible to businesses of
              all sizes, while promoting a culture of continuous improvement and
              sustainability.
            </p>
          </div>
        </div>

        {/* <div id="liquid1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="537.92521"
            height="486.18104"
            fill="#28aa4b27"
            viewBox="0 0 537.92521 486.18104"
          >
            <path
              className="shape"
              id="shape01"
              d="M552.37662,231.59052c48.68823,125.062-132.79481,278-267,278s-219-138-243-243c-29.90425-130.83107,120.78912-248.43159,243-243C420.37662,29.59052,501.37662,100.59052,552.37662,231.59052Z"
              transform="translate(-30.53739 -23.40948)"
            />

            <path
              className="shape"
              id="shape02"
              d="M552.35131,310.489C539.08212,404.77015,378.78216,510.93831,236.8287,507.303,31.11714,502.03486,37.55211,321.122,50.35131,208.489c5-44,10.57757-112.37032,62-149,73-52,131.00984-32.69681,201.17323-16.90935C420.08484,66.55682,571.35131,175.489,552.35131,310.489Z"
              transform="translate(-30.53739 -23.40948)"
            />

            <path
              className="shape"
              id="shape03"
              d="M548.908,282.6548c-7.60261,76.60291-69.0762,106.84063-129.3644,152.82754-51.94615,39.62371-114.07765,68.164-179.77888,66.48145-88.39169-2.26365-133.47739-56.814-163.47739-99.814-45.15578-64.72328-26.86551-139.52924-4-200C98.546,132.70542,113.74821,77.43278,168.31351,51.57032c44.06935-20.88766,94.82331-26.32821,148.14706-14.32984,39.60519,8.91157,89.84207,28.85416,134.37751,56.435C526.12809,140.30265,558.28734,188.14983,548.908,282.6548Z"
              transform="translate(-30.53739 -23.40948)"
            />

            <path
              className="shape"
              id="shape04"
              d="M148.26689,467.80336c-62,1-132.56239-70.724-115-129,45.51655-151.03423,13.42052-181.6213,68-234,69.75-66.9375,161.82692-89.44565,218-55,52.943,32.46491,85.055,15.58548,126.59263,42.68151C482.949,116.67926,573.21726,203.863,568.26689,266.80336c-7,89-62.30539,76.40218-104,135-37,52-76.87788,75.55636-138.584,93.2875C263.65225,512.91524,215.68521,466.716,148.26689,467.80336Z"
              transform="translate(-30.53739 -23.40948)"
            />
          </svg>
        </div> */}
      </div>
      {/* <!-- our mission and vision --> */}
    </div>
  );
};

export default MissionVison;
