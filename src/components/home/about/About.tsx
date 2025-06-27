// "use client"
// import { motion } from "framer-motion"

// export const About = () => {
//      return (
//     <section className="py-20 bg-slate-50 relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1.1, 1, 1.1],
//             opacity: [0.4, 0.6, 0.4],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
//             About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Me</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
//         </motion.div>

//         {/* Main Content */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
//           {/* Left - Story */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <span className="text-white text-xl">🚀</span>
//                 </div>
//                 <p className="text-slate-700 leading-relaxed">
//                   I'm a dedicated web developer, constantly evolving and refining my skills. Every challenge I encounter
//                   is a stepping stone toward mastery, and every project is a chance to innovate. With passion and
//                   persistence, I'm crafting my place in the digital landscape.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <span className="text-white text-xl">🌍</span>
//                 </div>
//                 <p className="text-slate-700 leading-relaxed">
//                   From problem-solving to creative design, web development is my playground. I embrace every challenge
//                   as a chance to learn and improve, refining my skills one project at a time. Passion drives me, and
//                   effort defines my journey.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <span className="text-white text-xl">💡</span>
//                 </div>
//                 <p className="text-slate-700 leading-relaxed">
//                   Building the web isn't just my skill—it's my passion. Every day, I strive to grow, refine my craft,
//                   and create meaningful digital experiences. Through hard work and curiosity, I'm shaping a future where
//                   code meets creativity.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right - Visual Element */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-8 text-white relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

//               <div className="relative z-10">
//                 <h3 className="text-2xl font-bold mb-4">My Journey</h3>
//                 <p className="text-white/90 leading-relaxed mb-6">
//                   Transforming ideas into digital reality through clean code, innovative solutions, and user-centered
//                   design.
//                 </p>
//                 <div className="flex items-center space-x-4">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold">1+</div>
//                     <div className="text-sm text-white/80">Years Experience</div>
//                   </div>
//                   <div className="w-px h-12 bg-white/20"></div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold">50+</div>
//                     <div className="text-sm text-white/80">Projects Completed</div>
//                   </div>
//                   <div className="w-px h-12 bg-white/20"></div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold">3</div>
//                     <div className="text-sm text-white/80">Specializations</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Skills Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
//             My{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Expertise</span>
//           </h3>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Backend Developer */}
//             <motion.div
//               whileHover={{ y: -5 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group"
//             >
//               <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
//                 </svg>
//               </div>
//               <h4 className="text-xl font-bold text-slate-900 mb-2">Backend Developer</h4>
//               <p className="text-blue-600 font-semibold mb-4">Node.js</p>
//               <p className="text-slate-600 leading-relaxed">
//                 I am a skilled Backend Developer specializing in Node.js, focused on building scalable, secure, and
//                 high-performance server-side applications. I excel at optimizing APIs, databases, and backend logic for
//                 seamless functionality.
//               </p>
//             </motion.div>

//             {/* Frontend Developer */}
//             <motion.div
//               whileHover={{ y: -5 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group"
//             >
//               <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
//                 </svg>
//               </div>
//               <h4 className="text-xl font-bold text-slate-900 mb-2">Frontend Developer</h4>
//               <p className="text-blue-600 font-semibold mb-4">React.js</p>
//               <p className="text-slate-600 leading-relaxed">
//                 I am a dedicated Front-End Developer with over a year of experience specializing in React.js. I excel at
//                 building dynamic, responsive, and user-centric web applications, ensuring seamless performance, modern
//                 design, and optimal user experience.
//               </p>
//             </motion.div>

//             {/* Web Developer */}
//             <motion.div
//               whileHover={{ y: -5 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group"
//             >
//               <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
//                 </svg>
//               </div>
//               <h4 className="text-xl font-bold text-slate-900 mb-2">Web Developer</h4>
//               <p className="text-blue-600 font-semibold mb-4">Next.js</p>
//               <p className="text-slate-600 leading-relaxed">
//                 I am a dedicated Web Developer specializing in Next.js, passionate about building fast, scalable, and
//                 SEO-friendly web applications. I focus on creating seamless user experiences with efficient server-side
//                 rendering and modern front-end technologies.
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { useEffect } from "react";
// import { Linkedin } from 'lucide-react';

export const About = () => {

useEffect(() => {
    if (window.location.hash === "#about") {
    
      const timer = setTimeout(() => {
        const element = document.getElementById("about");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);


  const timelineItems = [
    {
      year: "2025",
      title: "Factoryze Experience",
      description: "6 months of professional experience working with Next.js and TypeScript on enterprise projects.",
      side: "right",
    },
    {
      year: "2024",
      title: "MERN Stack Mastery",
      description: "Specialized in full-stack development using MongoDB, Express.js, React, and Node.js.",
      side: "left",
    },
    {
      year: "2024",
      title: "Frontend Focus",
      description: "Dedicated focus on React.js development, building dynamic and responsive web applications.",
      side: "right",
    },
    {
      year: "2023",
      title: "Web Development Journey",
      description: "Started my journey in web development, learning HTML, CSS, JavaScript fundamentals.",
      side: "left",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
             <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>
        </div>
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <p className="text-gray-600 leading-relaxed text-lg">
            My name is Walid Hasan and I am a web developer and designer from Bangladesh. I&apos;m passionate about creating
            modern web applications using cutting-edge technologies. If you enjoy my work, want to say hello or like to
            collaborate with me, you can contact me via{" "}
            <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">
              Mail
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/walidhasan87"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Linkedin
            </a>
            .
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${item.side === "left" ? "flex-row-reverse" : ""}`}
              >
                {/* Year badge */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-xs font-semibold text-gray-600">{item.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`w-5/12 ${item.side === "left" ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom diamond */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6"
          >
            <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rotate-45 shadow-sm"></div>
          </motion.div>
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "TypeScript", "React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JavaScript"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
