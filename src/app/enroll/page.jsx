"use client";

import { useState } from "react";
import { useSearchParams } from 'next/navigation';
export default function Enroll() {
  const searchParams = useSearchParams();
  let discountPrice = searchParams.get('d') || "0";
  discountPrice = discountPrice > 40 ? 30 : discountPrice;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    mode: "",
    course: "",
  });

  const courses = [

    "UI/UX Design",
    "Data Analysis",
    "Cybersecurity",
    "Cloud Computing Amazon Web Service",
    "Cloud Computing Microsoft Azure",
    "Full-Stack Web Development with Python and Django",
    "Data Analysis With Excel",
    "Data Analysis With Python and SQL",
    "Machine Learning With Python",
    "Data Analysis with Power BI",
    "Graphics Design",
    "Digital Marketing"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    alert("Application submitted successfully!");

  
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A0B61] to-[#0a0d24] text-white px-6 py-10 flex justify-center items-center">

      <div className="w-full max-w-xl bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10">

        <h1 className="text-3xl font-bold text-center mb-6">
          <img src="/images.png" className="h-6 mx-auto mb-4" />
          Enroll in a Course <br />and Claim Your Easter Discount!
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}

            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none"
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}

            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}

            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none"
          />

          {/* MODE */}
          <select
            name="mode"
            onChange={handleChange}

            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none text-black"
          >
            <option value="">Mode of Learning</option>
            <option value="online">Online</option>
            <option value="physical">Physical</option>
          </select>

          {/* COURSE */}
          <select
            name="course"
            onChange={handleChange}

            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none text-black"
          >
            <option value="">Select Course</option>
            {courses.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
          <div className="bg-gray-100 p-2 text-black">Applied Discount: {discountPrice}%</div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-[#da2721] rounded-lg hover:scale-105 transition font-semibold"
          >
            Submit Application
          </button>

        </form>
      </div>

    </main>
  );
}