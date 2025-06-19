import React, { useEffect, useState } from "react";

const CareerForm = ({ selectedJob }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    resume: null,
    jobTitle: selectedJob || "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    resume: "",
  });

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, jobTitle: selectedJob || "" }));
  }, [selectedJob]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if file is a PDF
      if (file.type !== "application/pdf") {
        setErrors({ ...errors, resume: "Only PDF files are allowed." });
        setFormData({ ...formData, resume: null });
        return;
      }
      // Check if file size is less than 2MB
      if (file.size > 2 * 1024 * 1024) {
        setErrors({
          ...errors,
          resume: "File size should be less than 2MB.",
        });
        setFormData({ ...formData, resume: null });
        return;
      }
      setErrors({ ...errors, resume: "" });
      setFormData({ ...formData, resume: file });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.phone || formData.phone.length < 10) {
      tempErrors.phone = "Phone number must be at least 10 characters";
      isValid = false;
    }

    if (!formData.experience) {
      tempErrors.experience = "Experience is required";
      isValid = false;
    }

    if (!formData.location.trim()) {
      tempErrors.location = "Location is required";
      isValid = false;
    }

    if (!formData.resume) {
      tempErrors.resume = "Resume is required";
      isValid = false;
    }

    // Only validate jobTitle if no selectedJob is provided
    if (!selectedJob && !formData.jobTitle) {
      tempErrors.jobTitle = "Please apply for a role";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(null);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name.trim());
    formDataToSend.append("email", formData.email.trim());
    formDataToSend.append("phone", formData.phone.trim());
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("location", formData.location.trim());
    formDataToSend.append("jobTitle", formData.jobTitle);
    
    if (formData.resume) {
      formDataToSend.append("resume", formData.resume);
    }

    try {
      const response = await fetch(
        `https://nextgen-backend-2025-production-f2de.up.railway.app/api/jobs`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        const result = await response.json();
        setSubmitSuccess(true);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          experience: "",
          location: "",
          resume: null,
          jobTitle: selectedJob || "",
        });
        setErrors({});
        
        console.log("Form submitted successfully:", result);
      } else {
        const errorData = await response.text();
        console.error("Server error:", errorData);
        setSubmitSuccess(false);
        alert(`Failed to submit the form. Server responded with: ${response.status}`);
        console.log(`Failed to submit the form. Server responded with: ${response}`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmitSuccess(false);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r  flex justify-center items-center w-full lg:w-[50%] my-4">
      <div
        className="bg-white p-8 rounded-xl shadow-xl w-full"
        id="form-career"
      >
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-6">
          Career Application
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {selectedJob && (
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-lg font-semibold text-teal-500 text-start"
              >
                Job Title
              </label>
              <select
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                disabled
                className="w-full px-4 py-2 mt-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {" "}
                <option value={formData.jobTitle}>
                  {formData.jobTitle}
                </option>{" "}
              </select>
            </div>
          )}
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-teal-500 text-start"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 text-start">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-teal-500 text-start"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 text-start">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Input */}
          <div className="flex flex-col md:flex-row md:gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-semibold text-teal-500 text-start"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 text-start">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Experience Input */}
            <div>
              <label
                htmlFor="experience"
                className="block text-lg font-semibold text-teal-500 text-start"
              >
                Experience (years)
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Example: 3 years"
              />
              {errors.experience && (
                <p className="text-red-500 text-sm mt-1 text-start">
                  {errors.experience}
                </p>
              )}
            </div>
          </div>

          {/* Location Input */}
          <div>
            <label
              htmlFor="location"
              className="block text-lg font-semibold text-teal-500 text-start"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your Location"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1 text-start">
                {errors.location}
              </p>
            )}
          </div>

          {/* Resume Upload */}
          <div>
            <label
              htmlFor="resume"
              className="block text-lg font-semibold text-teal-500 text-start"
            >
              Upload Resume (PDF only)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.resume && (
              <p className="text-red-500 text-sm mt-1 text-start">
                {errors.resume}
              </p>
            )}
          </div>

          {errors.jobTitle && (
            <p className="text-red-500 text-sm mt-1 text-start">
              {errors.jobTitle}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-teal-500 text-white font-bold rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            disabled={isSubmitting} // Disable button while submitting
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>

          {/* Success or Error Message */}
          {submitSuccess !== null && (
            <p
              className={`text-sm mt-4 text-center ${
                submitSuccess ? "text-green-600" : "text-red-600"
              }`}
            >
              {submitSuccess
                ? "Form submitted successfully!"
                : "There was an issue submitting your form."}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
