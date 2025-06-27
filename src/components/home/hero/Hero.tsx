"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Download, ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"

export const Hero = () => {
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/walidhasan87", "_blank")
  }

  const handleTwitter = () => {
    window.open("https://x.com/WalidHasan17083", "_blank")
  }

  const handleGithub = () => {
    window.open("https://github.com/walid-official", "_blank")
  }

  const handleDownloadCV = () => {
    window.open("https://drive.google.com/uc?export=download&id=14araRQsQeCU46VgCFiRsTSZbRyZwBl61", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        <div className="fixed px-20  w-full top-0">
        <nav className="relative z-10 flex justify-between items-center p-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-white font-semibold text-lg">Walid Hasan</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            <a href="#home" className="text-white/80 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="text-white/80 hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </a>
          </motion.div>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto pt-10 px-3">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navigation */}
    

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-between min-h-[calc(100vh-100px)] px-6 lg:px-12">
        {/* Left content */}
        <div className="flex-1 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-cyan-400 text-sm font-medium mb-4 tracking-wider uppercase"
          >
            Welcome to my portfolio!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Hello, my name&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Walid.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/70 text-lg lg:text-xl mb-8 leading-relaxed max-w-xl"
          >
            I&apos;m a Frontend MERN Stack Developer from Bangladesh. Currently working as a
            <span className="text-cyan-400 font-medium"> Full Stack Developer</span> specializing in modern web
            applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              onClick={handleDownloadCV}
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button
              variant="outline"
              className="border-white/20 cursor-pointer text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 bg-transparent"
            >
              See my work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center space-x-1"
          >
            <ChevronDown className="w-4 h-4 text-white/60" />
            <span className="text-white/60 text-sm">Scroll down</span>
          </motion.div>
        </div>

        {/* Right content - Profile image */}
        <div className="hidden lg:flex flex-1 justify-end items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Geometric background elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl" />

            {/* Profile image container */}
            <div className="relative w-80 h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-400/10 backdrop-blur-sm border border-white/10">
              <div className="absolute inset-2 rounded-2xl overflow-hidden">
                <Image
                  src="/images/walid.png"
                  alt="Walid Hasan - Frontend Developer"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating geometric shapes */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social media icons - positioned on the right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col space-y-4"
      >
        <motion.button
          onClick={handleLinkedin}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white/60  backdrop-blur-lg border border-dark rounded-full flex items-center justify-center cursor-pointer text-black hover:text-white hover:bg-blue-600 transition-all duration-300"
        >
          <Linkedin className="w-5 h-5" />
        </motion.button>
        <motion.button
          onClick={handleTwitter}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white/60  backdrop-blur-lg border border-dark rounded-full flex items-center justify-center cursor-pointer text-black hover:text-white hover:bg-blue-400 transition-all duration-300"
        >
          <Twitter className="w-5 h-5" />
        </motion.button>
        <motion.button
          onClick={handleGithub}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white/60  backdrop-blur-lg border border-dark rounded-full flex items-center justify-center cursor-pointer text-black hover:text-white hover:bg-blue-400 transition-all duration-300"
        >
          <Github className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Mobile social icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4"
      >
        <motion.button
          onClick={handleLinkedin}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center cursor-pointer text-black hover:text-white hover:bg-blue-600 transition-all duration-300"
        >
          <Linkedin className="w-5 h-5" />
        </motion.button>
        <motion.button
          onClick={handleTwitter}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center cursor-pointer text-black hover:text-white hover:bg-blue-400 transition-all duration-300"
        >
          <Twitter className="w-5 h-5" />
        </motion.button>
        <motion.button
          onClick={handleGithub}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center cursor-pointer text-black hover:text-white hover:bg-gray-700 transition-all duration-300"
        >
          <Github className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </div>
    </div>
  )
}
