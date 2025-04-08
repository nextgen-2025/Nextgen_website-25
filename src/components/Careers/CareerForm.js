import React, { useEffect, useState } from "react";

const CareerForm = ({ selectedJob }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    resume: null,
    jobTitle: selectedJob || "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    resume: "", // New error state for resume
  });

  useEffect(() => {
    // console.log(selectedJob);
    setFormData((prevState) => ({ ...prevState, jobTitle: selectedJob || "" }));
  }, [selectedJob]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if file is a PDF
      if (file.type !== "application/pdf") {
        setErrors({ ...errors, resume: "Only PDF files are allowed." });
        setFormData({ ...formData, resume: null });
      }
      // Check if file size is less than 200KB
      else if (file.size > 200 * 1024) {
        // 200KB in bytes
        setErrors({
          ...errors,
          resume: "File size should be less than 200KB.",
        });
        setFormData({ ...formData, resume: null });
      } else {
        setErrors({ ...errors, resume: "" }); // Clear error if file is valid
        setFormData({ ...formData, resume: file });
      }
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
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

    if (!formData.skills) {
      tempErrors.skills = "Skills are required";
      isValid = false;
    }

    if (!formData.resume) {
      tempErrors.resume = "Resume is required";
      isValid = false;
    }

    if (!formData.jobTitle) {
      tempErrors.jobTitle = "Please apply for a role";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("experience", formData.experience);
      formDataToSend.append("skills", formData.skills);
      formDataToSend.append("jobTitle", formData.jobTitle);
      formDataToSend.append("resume", formData.resume);

      try {
        const response = await fetch(
          `https://nextgen-backend-2025-production.up.railway.app/submit-form`,
          {
            method: "POST",
            body: formDataToSend,
          }
        );
        if (response.ok) {
          setSubmitSuccess(true);
          alert("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            experience: "",
            skills: "",
            resume: null,
            jobTitle: "",
          });
          setErrors({});
        } else {
          setSubmitSuccess(false);
          alert("Failed to submit the form");
        }
      } catch (error) {
        setSubmitSuccess(false);
        console.error("Error submitting the form:", error);
        alert("Error submitting the form");
      } finally {
        setIsSubmitting(false); // Reset submitting state
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r  flex justify-center items-center w-full lg:w-[50%]">
      <div
        className="bg-white p-8 rounded-xl shadow-xl w-full lg:max-w-md"
        id="form-career"
      >
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
          Career Application
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {selectedJob && (
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-lg font-semibold text-green-700 text-start"
              >
                Job Title
              </label>
              <select
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                disabled
                className="w-full px-4 py-2 mt-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="block text-lg font-semibold text-green-700 text-start"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="block text-lg font-semibold text-green-700 text-start"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 text-start">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-lg font-semibold text-green-700 text-start"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your phone number"
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
              className="block text-lg font-semibold text-green-700 text-start"
            >
              Experience (years)
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your years of experience"
            />
            {errors.experience && (
              <p className="text-red-500 text-sm mt-1 text-start">
                {errors.experience}
              </p>
            )}
          </div>

          {/* Skills Input */}
          <div>
            <label
              htmlFor="skills"
              className="block text-lg font-semibold text-green-700 text-start"
            >
              Key Skills
            </label>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2 mt-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="List your key skills"
            />
            {errors.skills && (
              <p className="text-red-500 text-sm mt-1 text-start">
                {errors.skills}
              </p>
            )}
          </div>

          {/* Resume Upload */}
          <div>
            <label
              htmlFor="resume"
              className="block text-lg font-semibold text-green-700 text-start"
            >
              Upload Resume (PDF only)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
            className="w-full py-2 mt-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
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
