import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// BookingSection - Tailwind + Framer Motion
// - Animates into view on scroll
// - Adds time, passengers, improved vehicle select
// - Simple client-side validation + success state

export default function BookingSection() {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: today,
    time: "09:00",
    start: "",
    end: "",
    vehicle: "Camry",
    passengers: "1",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: false, margin: "-120px" });
  const rightInView = useInView(rightRef, { once: false, margin: "-120px" });

  const containerVars = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
    }),
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[0-9]{7,15}$/.test(form.phone.replace(/\s|\-/g, "")))
      e.phone = "Enter a valid phone (7-15 digits)";
    if (!form.start.trim()) e.start = "Start location required";
    if (!form.end.trim()) e.end = "End location required";
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors({});
    const v = validate();
    if (Object.keys(v).length) return setErrors(v);

    // Fake submit (no background work) — show success state
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // reset form (optional)
      setForm((s) => ({ ...s, name: "", phone: "", start: "", end: "" }));
      setTimeout(() => setSuccess(false), 3500);
    }, 900);
  }

  return (
    <div className="w-full bg-white mt-10 pt-16 px-6 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-12">

      {/* LEFT SIDE TEXT */}
      <motion.div
        ref={leftRef}
        initial="hidden"
        animate={leftInView ? "visible" : "hidden"}
        variants={containerVars}
        custom={0}
        className="md:w-1/2"
      >
        <h4 className="text-gray-700 font-bold tracking-widest uppercase">
          Best in City
        </h4>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2 leading-tight">
          TRUSTED CAB SERVICE <br /> IN MELBOURNE
        </h1>

        <p className="text-gray-600 mt-6 leading-relaxed">
          Experience comfortable, safe, and reliable cab service across Melbourne.
          Whether you need airport transfers, city rides, or outstation trips, our
          professional drivers ensure a smooth and hassle-free journey. We focus on
          punctuality, clean vehicles, and transparent pricing — making us the preferred
          choice for commuters, travellers, and families across the city.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
            More..
          </button>

          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight / 2, behavior: 'smooth' })}
            className="px-6 py-3 border rounded-full font-semibold hover:shadow-md transition"
          >
            Book now
          </button>
        </div>
      </motion.div>

      {/* RIGHT SIDE BOOKING FORM */}
      <motion.div
        ref={rightRef}
        initial="hidden"
        animate={rightInView ? "visible" : "hidden"}
        variants={containerVars}
        custom={1}
        className="md:w-[380px] w-full"
      >
        <div className="bg-black text-yellow-300 text-center py-3 rounded-t-xl font-bold">
          BOOK A CAB
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-b-xl p-6">

          <div className="flex gap-3 mb-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className={`w-1/2 border px-3 py-2 rounded-lg ${errors.name ? 'border-red-500' : ''}`}
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone"
              className={`w-1/2 border px-3 py-2 rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
            />
          </div>

          <div className="flex gap-3 mb-4">
            <input
              name="date"
              value={form.date}
              onChange={handleChange}
              type="date"
              min={today}
              className="w-1/2 border px-3 py-2 rounded-lg"
            />

            <input
              name="time"
              value={form.time}
              onChange={handleChange}
              type="time"
              className="w-1/2 border px-3 py-2 rounded-lg"
            />
          </div>

          <div className="flex gap-3 mb-4">
            <input
              name="start"
              value={form.start}
              onChange={handleChange}
              type="text"
              placeholder="Start location"
              className={`w-1/2 border px-3 py-2 rounded-lg ${errors.start ? 'border-red-500' : ''}`}
            />
            <input
              name="end"
              value={form.end}
              onChange={handleChange}
              type="text"
              placeholder="End location"
              className={`w-1/2 border px-3 py-2 rounded-lg ${errors.end ? 'border-red-500' : ''}`}
            />
          </div>

          <div className="flex gap-3 mb-4">
            <select
              name="vehicle"
              value={form.vehicle}
              onChange={handleChange}
              className="w-1/2 border px-3 py-2 rounded-lg"
            >
              <option>Camry</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Minivan</option>
            </select>

            <select
              name="passengers"
              value={form.passengers}
              onChange={handleChange}
              className="w-1/2 border px-3 py-2 rounded-lg"
            >
              <option value="1">1 passenger</option>
              <option value="2">2 passengers</option>
              <option value="3">3 passengers</option>
              <option value="4">4 passengers</option>
              <option value="5">5+ passengers</option>
            </select>
          </div>

          {Object.keys(errors).length > 0 && (
            <div className="mb-4 text-sm text-red-600">
              {Object.values(errors).map((err, i) => (
                <div key={i}>• {err}</div>
              ))}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-60"
          >
            {submitting ? 'Submitting...' : 'SUBMIT'}
          </button>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-green-50 rounded-lg text-green-800 font-medium text-center"
            >
              Booking received — we will call you soon! ✅
            </motion.div>
          )}

        </form>
      </motion.div>
    </div>
  );
}
