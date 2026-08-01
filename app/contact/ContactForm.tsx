"use client";

import { useState, useRef } from "react";
import FadeIn from "../FadeIn";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isComplete =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.message.trim() !== "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setForm({ name: "", email: "", message: "" });
      if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
      setShowSuccess(true);
      successTimeoutRef.current = setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FadeIn>
    <div className="w-full flex justify-center px-4 sm:px-8 py-24">
      {/* Success tooltip */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-lg bg-green-300 px-5 py-3 shadow-lg transition-all duration-300 select-none ${
          showSuccess
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <p className="text-sm font-medium text-black text-center">
          Your message was successfuly delivered!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5 w-6/7 sm:w-1/4">
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="select-none w-full sm:w-1/2">
            <label htmlFor="name" className="block text-sm text-gray-400 mb-1.5 select-none">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md bg-white/15 border border-white/20 px-4 py-2.5 text-white placeholder:text-gray-400 outline-none focus:border-white/40 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div className="select-none w-full sm:w-1/2">
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5 select-none">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md bg-white/15 border border-white/20 px-4 py-2.5 text-white placeholder:text-gray-400 outline-none focus:border-white/40 transition-colors"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className='select-none'>
          <label htmlFor="message" className="block text-sm text-gray-400 mb-1.5 select-none">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-md bg-white/15 border border-white/20 px-4 py-2.5 text-white placeholder:text-gray-400 outline-none focus:border-white/40 transition-colors resize-none"
            placeholder="Your message"
          />
        </div>

        <button
          type="submit"
          disabled={!isComplete}
          className="w-full rounded-md bg-white text-black font-medium py-2.5 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed enabled:hover:opacity-70 select-none"
        >
          Send message
        </button>
      </form>
    </div>
    </FadeIn>
  );
}