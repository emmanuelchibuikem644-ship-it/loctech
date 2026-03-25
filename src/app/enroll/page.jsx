"use client";

import { useState } from "react";

export default function Enroll() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    mode: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const courses = [
    "Frontend Development",
    "Backend Development",
    "Fullstack Development",
    "UI/UX Design",
    "Data Analysis",
    "Cybersecurity",
    "Cloud Computing",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.mode) newErrors.mode = "Select learning mode";
    if (!form.course) newErrors.course = "Select a course";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log(form);
    alert("Application submitted successfully!");
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-xl bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">

        <img src="/images-removebg-preview.png" className="h-10 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-center text-black mb-2">
          Enroll in a Course
        </h1>

        <p className="text-center text-gray-600 mb-6 text-sm">
          Claim your Easter discount before it expires 🚀
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-white text-black border-2 ${
                errors.name ? "border-red-500" : "border-gray-400"
              } outline-none focus:ring-2 focus:ring-[#da2721]`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* PHONE */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-white text-black border-2 ${
                errors.phone ? "border-red-500" : "border-gray-400"
              } outline-none focus:ring-2 focus:ring-[#da2721]`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-white text-black border-2 ${
                errors.email ? "border-red-500" : "border-gray-400"
              } outline-none focus:ring-2 focus:ring-[#da2721]`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* MODE */}
          <div>
            <select
              name="mode"
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-white text-black border ${
                errors.mode ? "border-red-500" : "border-gray-300"
              } outline-none focus:ring-2 focus:ring-[#da2721]`}
            >
              <option value="">Mode of Learning</option>
              <option value="online">Online</option>
              <option value="physical">Physical</option>
            </select>
            {errors.mode && <p className="text-red-500 text-sm mt-1">{errors.mode}</p>}
          </div>

          {/* COURSE */}
          <div>
            <select
              name="course"
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-white text-black border ${
                errors.course ? "border-red-500" : "border-gray-300"
              } outline-none focus:ring-2 focus:ring-[#da2721]`}
            >
              <option value="">Select Course</option>
              {courses.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
            {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#da2721] text-white rounded-lg font-semibold shadow-md hover:scale-105 transition"
          >
            Submit Application
          </button>

        </form>
      </div>

    </main>
  );
}