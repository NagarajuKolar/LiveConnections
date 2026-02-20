import React, { useState } from "react";
import "../CSS/ContactForms.css";
import { FiChevronDown } from "react-icons/fi";
import HrResource from "../Components/HrResource";

function ContactForms() {
  const [activeForm, setActiveForm] = useState("business");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    company: "",
    address: "",
    subject: "",
    gender: "Male",
    resume: null,
    terms: false,
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };


  const validateCommon = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit Indian mobile number";
      isValid = false;
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept terms & conditions";
      isValid = false;
    }

    return { newErrors, isValid };
  };

  // BUSINESS VALIDATION
  const validateBusiness = () => {
    let { newErrors, isValid } = validateCommon();

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
      isValid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    return { newErrors, isValid };
  };

  // JOB VALIDATION 
  const validateJob = () => {
    let { newErrors, isValid } = validateCommon();

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
      isValid = false;
    } else {
      const allowedTypes = ["application/pdf"];
      if (!allowedTypes.includes(formData.resume.type)) {
        newErrors.resume = "Only PDF files are allowed";
        isValid = false;
      }

      if (formData.resume.size > 2 * 1024 * 1024) {
        newErrors.resume = "File size must be less than 2MB";
        isValid = false;
      }
    }

    return { newErrors, isValid };
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    let result;

    if (activeForm === "business") {
      result = validateBusiness();
    } else {
      result = validateJob();
    }

    setErrors(result.newErrors);

    if (result.isValid) {
      console.log("Submitted Data:", formData);
      alert("Form submitted successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        company: "",
        address: "",
        subject: "",
        gender: "Male",
        resume: null,
        terms: false,
      });

      setErrors({});
    }
  };

  return (
    <>

      <div className="cont-form-wrapper">
        <h1 className="cont-form-title">Happy to Connect!</h1>
        <p className="cont-form-subtitle">
          Share your details and our experts will contact you based on your needs.
        </p>

        <div className="cont-form-toggle">
          <div
            className={`cont-form-btn ${activeForm === "business" ? "active" : ""}`}
            onClick={() => setActiveForm("business")} >
            Business Enquiry
          </div>

          <div
            className={`cont-form-btn ${activeForm === "job" ? "active" : ""}`}
            onClick={() => setActiveForm("job")}
          >
            Job Enquiry
          </div>
        </div>

        <form onSubmit={handleSubmit} className="cont-form-container">

          <div className="cont-form-row">
            <div className="cont-form-group">
              <span className="cont-form-label">First Name</span>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="cont-form-input"
              />
              {errors.firstName && <small className="error">{errors.firstName}</small>}
            </div>

            <div className="cont-form-group">
              <span className="cont-form-label">Last Name</span>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="cont-form-input"
              />
              {errors.lastName && <small className="error">{errors.lastName}</small>}
            </div>
          </div>

          <div className="cont-form-row">
            <div className="cont-form-group">
              <span className="cont-form-label">Email Address</span>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="cont-form-input"
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>

            <div className="cont-form-group">
              <span className="cont-form-label">Mobile Number</span>
              <input
                name="mobile"
                maxLength="10"
                value={formData.mobile}
                onChange={handleChange}
                className="cont-form-input"
              />
              {errors.mobile && <small className="error">{errors.mobile}</small>}
            </div>
          </div>

          {/* BUSINESS FIELDS */}
          {activeForm === "business" && (
            <div className="cont-form-row">
              <div className="cont-form-group">
                <span className="cont-form-label">Company Name</span>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="cont-form-input"
                />
                {errors.company && <small className="error">{errors.company}</small>}
              </div>

              <div className="cont-form-group">
                <span className="cont-form-label">Address</span>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="cont-form-input"
                />
                {errors.address && <small className="error">{errors.address}</small>}
              </div>
            </div>
          )}

          {/* JOB FIELDS */}
          {activeForm === "job" && (
            <>
              <div className="cont-form-group">
                <span className="cont-form-label">Subject</span>
                <textarea
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="cont-form-textarea"
                />
                {errors.subject && <small className="error">{errors.subject}</small>}
              </div>

              <div className="cont-form-group">
                <span className="cont-form-label">Upload Resume</span>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className="cont-form-input"
                />
                {errors.resume && <small className="error">{errors.resume}</small>}
              </div>
            </>
          )}


          <div className="cont-form-terms">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            <span>
              T&Cs — I have read and accept the Website terms of use and privacy policy.
            </span>
          </div>
          {errors.terms && <small className="error">{errors.terms}</small>}

          <button className="cont-form-submit">Submit</button>
        </form>
      </div>

      <HrResource/>
    </>
  );
}

export default ContactForms;
