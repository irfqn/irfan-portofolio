import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckCircle, XCircle } from "lucide-react";

const inputClass =
  "border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-400 focus-visible:ring-zinc-700 focus-visible:ring-1";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // sending | success | error
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://irfan-portofolio-contact-api.onrender.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setOpen(true);
    }
  };

  return (
    <>
      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="w-full flex justify-center py-24 mt-24 bg-black"
      >
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-center text-white">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div className="grid gap-2">
              <Label htmlFor="message" className="text-white">
                Message
              </Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className={`${inputClass} min-h-[120px]`}
              />
            </div>

            {/* Button */}
            <Button
              type="submit"
              variant="secondary"
              disabled={status === "sending"}
              className="
                px-8
                transition-colors
                hover:bg-transparent
                hover:text-white
                hover:border
                hover:border-input
              "
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>

      {/* ALERT DIALOG */}
      {/* ALERT DIALOG */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent
          className={
            status === "success"
              ? "border-green-500/40 bg-green-950/40"
              : "border-red-500/40 bg-red-950/40"
          }
        >
          <AlertDialogHeader className="space-y-2">
            <div className="flex items-start gap-3">
              {status === "success" ? (
                <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
              ) : (
                <XCircle className="h-5 w-5 text-red-400 mt-1" />
              )}

              <div>
                <AlertDialogTitle
                  className={
                    status === "success" ? "text-green-300" : "text-red-300"
                  }
                >
                  {status === "success" ? "Success!" : "Error"}
                </AlertDialogTitle>

                <AlertDialogDescription
                  className={
                    status === "success" ? "text-green-400" : "text-red-400"
                  }
                >
                  {status === "success"
                    ? "Your message has been sent successfully. I will get back to you soon."
                    : "Something went wrong. Please try again later."}
                </AlertDialogDescription>
              </div>
            </div>
          </AlertDialogHeader>

          <div className="flex justify-end mt-4">
            <AlertDialogAction
              onClick={() => setOpen(false)}
              className={
                status === "success"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-red-600 text-white hover:bg-red-700"
              }
            >
              OK
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Contact;
