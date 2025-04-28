import { faCity } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import arrow from "../../assets/aroowog.png";

const CWForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    city: "",
    area: "",
  });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setStatusType("success");
    // → swap in your own endpoint here
    const res = await fetch("https://formspree.io/f/xnnqnvdg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setFormData({ type: "", city: "", area: "" });
    } else {
      setStatus("There was an error. Please try again.");
      setStatusType("error");
    }
  };
  return (
    <div id="quote_form">
      <div className=" flex-col items-center justify-center px-5 py-2 md:py-10 ">
        <form
          id="quick_form"
          className="form-border"
          onSubmit={handleSubmit}
          data-bgcolor="#ffffff"
        >
            <div className="flex items-center justify-end p-5 ">
              {/* Frosted glass backdrop */}
              <div className="bg-black bg-opacity-50" />
              {/* Form panel */}
              <form
                onSubmit={handleSubmit}
                className="relative bg-white bg-opacity-20 rounded-none shadow-lg w-[500px] p-10 flex flex-col gap-6 mr-12"
               >
                {/* Row 1 */}
                <div className="flex divide-x divide-gray-300 rounded-md overflow-hidden">
                  <div className="bg-white px-4 py-2 font-semibold text-gray-700 flex-shrink-0 w-[80px] text-center">
                    Find
                  </div>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    style={{ 
                      backgroundImage: `url(${arrow})`,
                    }}
                    className="flex-1 px-4 py-2 bg-white focus:outline-none border-l border-gray-300 font-medium text-gray-800 hover:bg-gray-50 transition-colors appearance-none bg-no-repeat bg-[length:16px_16px] bg-[right_0.5rem_center] pr-8 [&::-ms-expand]:opacity-70 [&::-webkit-select-arrow]:opacity-70"
                    required
                  >
                    <option value="" disabled>
                      Select Type
                    </option>
                    <option value="dedicated desk">Dedicated Desk</option>
                    <option value="private cabins">Private Cabins</option>
                    <option value="meeting rooms">Meeting Rooms</option>
                    <option value="conference room">Conference Room</option>
                    <option value="training room">Training Room</option>
                    <option value="mini cabin">Mini Cabin</option>
                  </select>
                </div>

                {/* Row 2 */}
                <div className="flex divide-x divide-gray-300 rounded-md overflow-hidden">
                  <div className="bg-white px-4 py-2 font-semibold text-gray-700 flex-shrink-0 w-[80px] text-center">
                    In
                  </div>

                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    style={{ 
                      backgroundImage: `url(${arrow})`,
                    }}
                    className="flex-1 px-4 py-2 bg-white focus:outline-none border-l border-gray-300 font-medium text-gray-800 hover:bg-gray-50 transition-colors appearance-none bg-no-repeat bg-[length:16px_16px] bg-[right_0.5rem_center] pr-8 [&::-ms-expand]:opacity-70 [&::-webkit-select-arrow]:opacity-70"
                    required
                  >
                    <option value="" disabled>
                      Select City
                    </option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Panvel">Panvel</option>
                    <option value="Mumbai">Mumbai</option>
                    {/* …etc */}
                  </select>
                </div>

                {/* Row 3 */}
                <div className="flex  relative rounded-md overflow-hidden">
                  <div className="bg-white px-4 py-2 font-semibold text-gray-700 flex-shrink-0 w-[80px] text-center">
                    Near
                  </div>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Area / Locality"
                    className="flex-1 px-4 py-2 bg-white focus:outline-none pr-10"
                    required
                  />
                  <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-500 opacity-70 w-4 h-4" />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-md"
                >
                  Search
                </button>

                {/* Status message */}
                {status && (
                  <p
                    className={`mt-2 text-center ${
                      statusType === "success" ? "text-green-200" : "text-red-200"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
        </form>
      </div>
    </div>
  );
};

export default CWForm;
