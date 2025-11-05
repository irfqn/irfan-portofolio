import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Update nilai form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // Kirim form ke backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // reset form
      } else {
        setStatus(`❌ Failed: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Error while sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="mt-20 sm:mt-32 bg-black text-white rounded-2xl shadow-lg max-w-2xl w-full p-6 sm:p-10"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 tracking-tight">
        Contact Me
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-white"
          >
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 bg-black text-white border border-white rounded-xl placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-white"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 bg-black text-white border border-white rounded-xl placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-white"
          >
            Message
          </label>
          <Textarea
            id="message"
            rows="5"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 bg-black text-white border border-white rounded-xl placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition"
          ></Textarea>
        </div>

        {/* Button */}
        <Button
          type="submit"
          disabled={status === "Sending..."}
          className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 disabled:opacity-50"
        >
          {status === "Sending..." ? "Sending..." : "Send Message"}
        </Button>

        {/* Status Message */}
        {status && (
          <p
            className={`mt-4 text-sm ${
              status.startsWith("✅")
                ? "text-green-400"
                : status.startsWith("❌")
                ? "text-red-400"
                : "text-gray-300"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
