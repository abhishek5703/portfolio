import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-cyan-400">
          Contact Me
        </h2>
        <p className="text-center mb-12 text-gray-300">
          Feel free to reach out for collaborations, opportunities, or just to say hi! 👋
        </p>

        <form
          action="https://formspree.io/f/your_form_id" // replace with your Formspree ID
          method="POST"
          className="bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full mt-6 p-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
          <button
            type="submit"
            className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
