import { faCity } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import arrow from "../../assets/aroowog.png";
import Popup from "./Popup";

const CWForm = ({ onSpaceFilter }) => {
  const [formData, setFormData] = useState({
    type: "",
    city: "",
    area: "Ghansoli",
  });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("success");
  const [filteredSpaces, setFilteredSpaces] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);

  // Space data
  const spaceData = [
    {
      title: "Dedicated Desk",
      description: "Flexible seating options designed for creative freelancers and those looking for a dynamic workspace",
    },
    {
      title: "Private Cabins",
      description: "For those who need privacy, our spacious, fully furnished cabins offer a focused work environment.",
    },
    {
      title: "Meeting Room",
      description: "Perfect for smaller discussions and collaborations, our meeting rooms provide a private, productive space.",
    },
    {
      title: "Conference Room",
      description: "Our conference rooms are fully equipped with high-speed internet, projectors, and other essential tools to ensure your meetings run smoothly.",
    },
    {
      title: "Training Room",
      description: "A specialized room equipped for team training, workshops, or seminars, providing a focused environment for learning and development.",
    },
    {
      title: "Mini Cabin",
      description: "Our Mini Cabins provide a private, cozy workspace perfect for individuals or small teams of up to 2 people, ensuring focused productivity.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    
    if (name === "type") {
      const filtered = spaceData.filter(space => space.title.toLowerCase() === value.toLowerCase());
      setFilteredSpaces(filtered);
      onSpaceFilter(filtered);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Find the selected space
    const selected = spaceData.find(space => space.title.toLowerCase() === formData.type.toLowerCase());
    if (selected) {
      setSelectedSpace(selected);
      setIsPopupOpen(true);
    }

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
      setFormData({ type: "", city: "", area: "Ghansoli" });
    } else {
      setStatus("There was an error. Please try again.");
      setStatusType("error");
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedSpace(null);
  };

  return (
    <div id="quote_form">
      <div className="flex-col items-center justify-center px-2 sm:px-5 py-2 md:py-10">
        <div className="form-border" data-bgcolor="#ffffff">
          <div className="flex items-center justify-center sm:justify-end p-2 sm:p-5">
            {/* Frosted glass backdrop */}
            <div className="bg-black bg-opacity-50" />
            {/* Form panel */}
           <div className="relative bg-white bg-opacity-20 rounded-none shadow-lg w-full sm:w-[450px] md:w-[500px] p-4 sm:p-10 flex flex-col gap-5 sm:gap-10 sm:mr-12">
              <form onSubmit={handleSubmit}>
                
                {/* Row 1 */}
                <div className="px-2 sm:px-4 py-2 sm:py-3">
                <div className="flex divide-x divide-gray-300 rounded-md overflow-hidden">
                  <div className="bg-white px-2 sm:px-4 py-2 font-semibold text-gray-700 flex-shrink-0 w-[60px] sm:w-[80px] text-center">
                    Find
                  </div>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    style={{ 
                      backgroundImage: `url(${arrow})`,
                    }}
                    className="flex-1 px-2 sm:px-4 py-2 bg-white focus:outline-none border-l border-gray-300 font-medium text-sm sm:text-base text-gray-800 hover:bg-gray-50 transition-colors appearance-none bg-no-repeat bg-[length:16px_16px] bg-[right_0.5rem_center] pr-8 [&::-ms-expand]:opacity-70 [&::-webkit-select-arrow]:opacity-70"
                    required
                  >
                    <option value="" disabled>
                      Select Type
                    </option>
                    <option value="dedicated desk">Dedicated Desk</option>
                    <option value="private cabins">Private Cabins</option>
                    <option value="meeting room">Meeting Room</option>
                    <option value="conference room">Conference Room</option>
                    <option value="training room">Training Room</option>
                    <option value="mini cabin">Mini Cabin</option>
                  </select>
                </div>
                </div>

                {/* Row 2 */}
                <div className="px-2 sm:px-4 py-2 sm:py-3">
                <div className="flex divide-x divide-gray-300 rounded-md overflow-hidden">
                  <div className="bg-white px-2 sm:px-4 py-2 font-semibold text-gray-700 flex-shrink-0 w-[60px] sm:w-[80px] text-center">
                    In
                  </div>

                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    style={{ 
                      backgroundImage: `url(${arrow})`,
                    }}
                    className="flex-1 px-2 sm:px-4 py-2 bg-white focus:outline-none border-l border-gray-300 font-medium text-sm sm:text-base text-gray-800 hover:bg-gray-50 transition-colors appearance-none bg-no-repeat bg-[length:16px_16px] bg-[right_0.5rem_center] pr-8 [&::-ms-expand]:opacity-70 [&::-webkit-select-arrow]:opacity-70"
                    required
                  >
                    <option value="" disabled>
                      Select City
                    </option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Panvel">Panvel</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                </div>
                </div>

                {/* Row 3 */}
                <div className="px-2 sm:px-4 py-2 sm:py-3">
                <div className="flex divide-x relative rounded-md overflow-hidden">
                  <div className="bg-white px-2 sm:px-4 py-2 font-semibold text-gray-700 flex-shrink-0 w-[60px] sm:w-[80px] text-center">
                    Near
                  </div>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Area / Locality"
                    className="flex-1 px-2 sm:px-4 py-2 bg-white focus:outline-none pr-10 text-sm sm:text-base"
                    required
                  />
                  <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-500 opacity-70 w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-9 py-2.5 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md text-sm sm:text-base"
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
          </div>
        </div>
      </div>

      {/* Popup */}
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        selectedSpace={selectedSpace}
      />
    </div>
  );
};

export default CWForm;
