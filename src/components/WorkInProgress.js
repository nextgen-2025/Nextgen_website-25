import React from "react";
import "./customcss/workinprogress.css";
import { Link } from "react-router-dom";

const WorkInProgress = () => {
  return (
    <div className="overflow-hidden h-[100vh] flex flex-col justify-center">
      <main class="main">
        <section class="contact flex flex-col justify-center items-center">
          <div class="construction mr-32 md:mr-24"></div>
          <h1 class="title font-poiret text-5xl my-10 md:my-0 md:text-9xl">Awesome Thing</h1>
          <h2 class="sub-title font-poiret text-4xl">
            Site Under Construction
          </h2>
          <Link
            to="/"
            className="font-poiret text-xl font-bold my-2 flex items-center gap-4 border px-4 p-1.5 hover:bg-gray-200"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className=""
            >
              <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
            </svg>{" "}
            Back to Home
          </Link>
        </section>
      </main>
    </div>
  );
};

export default WorkInProgress;
