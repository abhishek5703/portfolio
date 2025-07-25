import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submittedData = formData; // preserve values for sending
    setFormData({ name: "", email: "", message: "" }); // clear immediately

    try {
      const res = await fetch("https://formspree.io/f/xjkowyoy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submittedData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("🚀 Message sent successfully!");
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again later.");
    }
  };


  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-cyan-400 drop-shadow-lg tracking-wide mb-4">
          Let's Connect
        </h2>
        <p className="text-center mb-12 text-gray-400 text-lg font-light">
          Open to freelance, full-time roles, and collaborations. Drop me a message! ✨
        </p>

        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 shadow-[0_0_20px_#0ff4] transition duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-transparent border border-cyan-500/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/80 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent border border-cyan-500/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/80 transition-all"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-8 bg-transparent border border-cyan-500/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/80 transition-all"
          ></textarea>

          <button
            type="submit"
            className="w-full mt-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
