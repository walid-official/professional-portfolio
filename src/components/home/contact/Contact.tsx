"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser"
import { useToast } from "@/hooks/use-toast"

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [project, setProject] = useState("")

  useEffect(() => {
      if (window.location.hash === "#contact") {
      
        const timer = setTimeout(() => {
          const element = document.getElementById("contact");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    }, []);
  

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return
    emailjs.sendForm("service_zkobzwh", "template_kvl3fu6", form.current, "n9eOVgGeK1V5CpTT0").then(
      (result) => {
        console.log("SUCCESS!", result.text)
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. We'll get back to you soon.",
        })
        form.current?.reset()
        setName("")
        setProject("")
      },
      (error) => {
        console.error("FAILED...", error.text)
        toast({
          title: "Failed to send message",
          description: "Please try again later or contact us directly.",
          variant: "destructive",
        })
      },
    )
  }

  return (
    <div id="contact" className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-gray-300"></div>
        <div className="absolute top-40 right-40 w-64 h-64 rounded-full border border-gray-300"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full border border-gray-300"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Form */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-light text-gray-900 mb-8">
                Say
                <br />
                <span className="font-bold">Hello</span>
              </h1>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Hello there, my name is{" "}
                  <Input
                    name="from_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="your name here"
                    className="inline-block w-48 border-0 border-b-2 border-gray-300 rounded-none bg-transparent px-2 py-1 focus:border-gray-900 focus:ring-0"
                    required
                  />
                </p>

                <p className="text-gray-600 text-lg leading-relaxed">
                  and I&apos;m looking for a team to help me with{" "}
                  <Textarea
                    name="message"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    placeholder="short project description..."
                    className="inline-block w-full mt-2 border-0 border-b-2 border-gray-300 rounded-none bg-transparent px-2 py-1 focus:border-gray-900 focus:ring-0 resize-none"
                    rows={2}
                    required
                  />
                </p>

                <Input name="from_email" type="email" placeholder="your email address" className="hidden" required />
              </div>

              <div className="pt-8">
                <p className="text-gray-600 text-lg mb-6">
                  You can reach me at{" "}
                  <Input
                    name="from_email"
                    type="email"
                    placeholder="your email address"
                    className="inline-block w-64 border-0 border-b-2 border-gray-300 rounded-none bg-transparent px-2 py-1 focus:border-gray-900 focus:ring-0"
                    required
                  />
                </p>
              </div>

              <Button
                type="submit"
                className="bg-transparent cursor-pointer text-gray-900 border-0 text-2xl font-light hover:bg-transparent hover:text-gray-600 p-0 h-auto"
              >
                Send
              </Button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="relative">
            {/* Geometric pattern background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 transform rotate-12 rounded-lg"></div>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(0,0,0,0.1) 10px,
                  rgba(0,0,0,0.1) 20px
                )`,
              }}
            ></div>

            {/* Contact cards */}
            <div className="relative z-10 space-y-4 p-8">
              <div className="bg-gray-800 text-white p-4 rounded shadow-lg">
                <p className="font-mono text-sm">(933) 588 6471</p>
              </div>

              <div className="bg-gray-800 text-white p-4 rounded shadow-lg">
                <p className="font-mono text-sm">walid.official8@gmail.com</p>
              </div>

              <div className="bg-gray-800 text-white p-4 rounded shadow-lg">
                <p className="font-mono text-sm">Malotinagar, Bogura, Bangladash</p>
              </div>

              {/* Floating logo */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-gray-900 font-bold text-lg">a</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
