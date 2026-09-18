import React, { useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    const submittedData = formData;
    try {
      const res = await fetch("https://formspree.io/f/xjkowyoy", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(submittedData) });
      const data = await res.json();
      if (res.ok) { toast.success("Message sent successfully!"); setFormData({ name: "", email: "", message: "" }); }
      else toast.error(data.error || "Something went wrong.");
    } catch { toast.error("Failed to send message. Please try again later."); }
  };
  return (
    <section id="contact" className="border-t border-white/[0.06] bg-[#080808] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div><div className="section-kicker">03 / CONTACT</div><h2 className="section-title mt-5">Have an idea? <span className="gradient-text">Let&apos;s build it.</span></h2><p className="mt-5 max-w-xl text-base leading-7 text-zinc-500">Open to software engineering opportunities, meaningful collaborations, and interesting products. Send a message and let&apos;s start a conversation.</p>
            <div className="mt-8 space-y-4 text-sm text-zinc-400"><div className="flex items-center gap-3"><Mail size={17} className="text-cyan-300" /> abhikumar898307@gmail.com</div><div className="flex items-center gap-3"><MapPin size={17} className="text-cyan-300" /> West Delhi, India</div></div>
          </div>
          <form onSubmit={handleSubmit} className="premium-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2"><input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="field" /><input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Email address" className="field" /></div>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows="7" placeholder="Tell me a little about what you&apos;re working on..." className="field mt-4 resize-none" />
            <button type="submit" className="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-black transition hover:bg-cyan-200">Send message <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
