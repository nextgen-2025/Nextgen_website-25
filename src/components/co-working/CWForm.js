import React, { useState } from "react";

const CWForm = () => {
  const [formData, setFormData] = useState({
    select_plan: "",
    work_email: "",
    mobile_phone: "",
    full_name: "",
    move_in_date: "",
    number_of_people: "",
    company: "",
    additional_info: "",
  });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setStatusType("success");

    const response = await fetch("https://formspree.io/f/xnnqnvdg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({
        select_plan: "",
        work_email: "",
        mobile_phone: "",
        full_name: "",
        move_in_date: "",
        number_of_people: "",
        company: "",
        additional_info: "",
      });
      setStatusType("success");
    } else {
      setStatus("There was an error. Please try again.");
      setStatusType("error");
    }
  };
  return (
    <div id="quote_form">
      <div className="form flex md:block justify-center">
        <form
          id="quick_form"
          className="form-border"
          onSubmit={handleSubmit}
          data-bgcolor="#ffffff"
        >
          <div className="form-div bg-white p-5 relative z-10 mt-5 md:mt-16">
            <div className="form-top">
              <h3 className="text-2xl font-semibold">Let's Get In Touch</h3>
              <select
                className="block w-full px-3 py-2 text-base font-normal leading-6 text-gray-900 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 my-2 "
                name="select_plan"
                value={formData.select_plan}
                onChange={handleChange}
                id="select_plan"
              >
                <option value="">Pick an option</option>
                <option value="dedicated desk">Dedicated Desk</option>
                <option value="private cabins">Private Cabins</option>
                <option value="meeting rooms">Meeting Rooms</option>
                <option value="conference room">Conference Room</option>
                <option value="training room">Training Room</option>
                <option value="mini cabin">Mini Cabin</option>
              </select>
            </div>

            <div className="form-inputs">
              <div className="input-group">
                <input
                  type="email"
                  name="work_email"
                  value={formData.work_email}
                  onChange={handleChange}
                  id="work_email"
                  className="block w-full px-3 py-2 text-base font-normal leading-6 text-gray-900 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200"
                  placeholder="Work Email"
                  required
                />
                <input
                  type="tel"
                  name="mobile_phone"
                  value={formData.mobile_phone}
                  onChange={handleChange}
                  id="mobile_phone"
                  className="block w-full px-3 py-2 text-base font-normal leading-6 text-gray-900 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 my-2 "
                  placeholder="Mobile Phone"
                  required
                />
              </div>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                id="full_name"
                className="block w-full px-3 py-2 text-base font-normal leading-6 text-gray-900 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 my-2 "
                placeholder="Full Name"
                required
              />
              <div className="input-group flex gap-4">
                <input
                  type="text"
                  name="move_in_date"
                  value={formData.move_in_date}
                  onChange={handleChange}
                  id="move_in_date"
                  className="block w-full px-3 py-2 text-base font-normal leading-6 text-gray-900 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 my-2 "
                  placeholder="Move in date"
                />
                <input
                  type="text"
                  name="number_of_people"
                  value={formData.number_of_people}
                  onChange={handleChange}
                  id="number_of_people"
                  className="block w-full px-3 py-2 text-base font-normal leading-6 text-gray-900 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 my-2 "
                  placeholder="Number of people"
                />
              </div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                id="company"
                className="w-full px-3 py-2 text-base font-normal leading-6 text-gray-900 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 my-2 "
                placeholder="Company"
              />
              <input
                type="text"
                name="additional_info"
                value={formData.additional_info}
                onChange={handleChange}
                id="additional_info"
                className="w-full px-3 py-2 text-base font-normal leading-6 text-gray-900 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 my-2 "
                placeholder="Location"
              />
            </div>
            {/* <div
                    className="g-recaptcha"
                    data-sitekey="6LeLhFMqAAAAAFUZK4CVOxUlDQruKSjfxY9xgtPx"
                  ></div> */}

            <div className="form-btn bg-[#12223b] text-white mx-auto w-[60%] py-3 px-5 cursor-pointer text-center mt-5">
              <button type="submit">Enquire now</button>
            </div>
            {status && (
              <div
                id="msgSubmit"
                className={`h3 ${
                  statusType === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CWForm;
