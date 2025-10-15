"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, Github, Linkedin, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setIsSubmitting(true);
    setError("");
    setIsError(false);
    setIsSubmitted(false);

    // Form validation
    if (!name.trim()) {
      setError("Please enter your name.");
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    if (!message.trim()) {
      setError("Please enter your message.");
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    if (message.length > 500) {
      setError("Message must be 500 characters or less.");
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      reply_to: email,
      user_email: email,
      user_name: name,
      to_name: "Keshav Raj",
      message: message,
    };

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("Email service is not configured properly. Please try again later.");
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setIsSubmitted(true);
        setIsError(false);
        setError("");
        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        setError("Failed to send message. Please try again or contact me directly via email.");
        setIsError(true);
        
        setTimeout(() => {
          setIsError(false);
          setError("");
        }, 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/30 text-primary">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Contact Information - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="h-full bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-border/50 rounded-xl p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Contact Information</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ready to start a project or just have a question? I'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.a 
                    href="mailto:contacttokeshavraj@gmail.com"
                    aria-label="Send email to contacttokeshavraj@gmail.com"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-primary/20"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-400 group-hover:from-blue-400/30 group-hover:to-cyan-400/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                      <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Email</p>
                      <p className="font-medium group-hover:text-blue-400 transition-colors duration-300 group-hover:underline decoration-blue-400 decoration-2 underline-offset-2">contacttokeshavraj@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="tel:+919162406872"
                    aria-label="Call +91 91624 06872"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-primary/20"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-400 group-hover:from-green-400/30 group-hover:to-emerald-400/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25">
                      <Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Phone</p>
                      <p className="font-medium group-hover:text-green-400 transition-colors duration-300">+91 91624 06872</p>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="https://maps.google.com/?q=ITPL,Whitefield,Bengaluru,Karnataka,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View location on Google Maps: ITPL, Whitefield, Bengaluru, India"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-primary/20"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 group-hover:from-purple-400/30 group-hover:to-pink-400/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                      <MapPin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Location</p>
                      <p className="font-medium group-hover:text-purple-400 transition-colors duration-300">ITPL, Whitefield, Bengaluru, India</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="h-full relative p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-border/50 rounded-xl flex flex-col shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex-1 space-y-6">
                  <div className="relative group">
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      aria-label="Your Name"
                      aria-describedby="name-error"
                      className="w-full h-12 pt-6 pb-2 px-4 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-lg backdrop-blur-sm text-sm"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        name ? 'top-2 text-xs text-primary' : 'top-4 text-sm text-muted-foreground group-focus-within:top-2 group-focus-within:text-xs group-focus-within:text-primary'
                      }`}
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative group">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      aria-label="Your Email"
                      aria-describedby="email-error"
                      className="w-full h-12 pt-6 pb-2 px-4 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-lg backdrop-blur-sm text-sm"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        email ? 'top-2 text-xs text-primary' : 'top-4 text-sm text-muted-foreground group-focus-within:top-2 group-focus-within:text-xs group-focus-within:text-primary'
                      }`}
                    >
                      Your Email
                    </label>
                  </div>

                  <div className="relative group">
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      aria-label="Your Message"
                      aria-describedby="message-error message-counter"
                      maxLength={500}
                      className="w-full h-32 pt-6 pb-8 px-4 text-sm bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-lg backdrop-blur-sm resize-none focus:outline-none"
                      placeholder=" "
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        message ? 'top-2 text-xs text-primary' : 'top-4 text-sm text-muted-foreground group-focus-within:top-2 group-focus-within:text-xs group-focus-within:text-primary'
                      }`}
                    >
                      Your Message
                    </label>
                    <div 
                      id="message-counter"
                      className="absolute bottom-3 right-3 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded"
                      aria-live="polite"
                    >
                      {message.length}/500
                    </div>
                  </div>
                </div>

                {/* Submit Button - Pushed to bottom */}
                <div className="mt-auto pt-6">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className={`w-full h-12 gap-2 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group ${
                        isSubmitted 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500' 
                          : isError
                          ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-500'
                          : 'bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary hover:shadow-primary/25'
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          >
                            ✓
                          </motion.div>
                          Message Sent!
                        </>
                      ) : isError ? (
                        <>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          >
                            ✕
                          </motion.div>
                          Failed - Try Again
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          Send Message
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </div>


              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center text-red-400 font-medium p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                >
                  {error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
