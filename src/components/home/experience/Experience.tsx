"use client"

import { motion } from "framer-motion"

export const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      {/* Background organic shapes */}
      <div className="absolute inset-0">
        {/* Large pink blob top-left */}
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full opacity-60"
          style={{
            clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Blue blob top-right */}
        <motion.div
          className="absolute -top-10 -right-10 w-60 h-60 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-70"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Purple blob bottom-left */}
        <motion.div
          className="absolute -bottom-20 -left-10 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-50"
          style={{
            clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
          }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Small decorative blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-pink-400 rounded-full opacity-40"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-50"
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-slate-600 tracking-wider uppercase mb-4"
            >
              Professional Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8"
            >
              My Experience Speaks
            </motion.h2>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Stat 1 - Company Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="relative inline-block mb-4">
                <div
                  className="w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg rounded-full shadow-lg"
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  6M+
                </div>
              </motion.div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">At Factoryze</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Professional experience working with modern technologies and enterprise solutions
              </p>
            </motion.div>

            {/* Stat 2 - Next.js Projects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="relative inline-block mb-4">
                <div
                  className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg rounded-full shadow-lg"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  }}
                >
                  Next.js
                </div>
              </motion.div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Modern Framework</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Building scalable web applications with Next.js, focusing on performance and SEO optimization
              </p>
            </motion.div>

            {/* Stat 3 - TypeScript */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="relative inline-block mb-4">
                <div
                  className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white font-bold text-sm rounded-full shadow-lg"
                  style={{
                    clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                  }}
                >
                  TS
                </div>
              </motion.div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">TypeScript Expert</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Writing type-safe, maintainable code with TypeScript for robust application development
              </p>
            </motion.div>

            {/* Stat 4 - Professional Growth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="relative inline-block mb-4">
                <div
                  className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold text-lg rounded-full shadow-lg"
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  100%
                </div>
              </motion.div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Growth Mindset</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Continuously learning and adapting to new technologies in the ever-evolving tech landscape
              </p>
            </motion.div>
          </div>

          {/* Experience Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Professional Experience at Factoryze</h3>
              <p className="text-slate-700 leading-relaxed text-lg mb-4">
                During my 6 months at <a href="https://factoryze.tech/" target="_blank" className="font-semibold text-blue-600">Factoryze</a>, I've had the
                opportunity to work with cutting-edge technologies and contribute to enterprise-level projects. My
                experience includes developing scalable web applications using{" "}
                <span className="font-semibold text-purple-600">Next.js</span> and{" "}
                <span className="font-semibold text-blue-600">TypeScript</span>, ensuring type safety and optimal
                performance.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                This professional experience has strengthened my skills in modern web development, taught me industry
                best practices, and enhanced my ability to work in collaborative environments. Every project has been a
                learning opportunity, helping me grow as a developer and contribute meaningfully to the team's success.
              </p>
            </div>
          </motion.div>

          {/* Technologies Used */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <h4 className="text-xl font-bold text-slate-900 text-center mb-6">Technologies & Tools</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Next.js", color: "from-black to-gray-700" },
                { name: "TypeScript", color: "from-blue-500 to-blue-600" },
                { name: "React", color: "from-cyan-400 to-blue-500" },
                { name: "Node.js", color: "from-green-500 to-green-600" },
                { name: "Tailwind CSS", color: "from-teal-400 to-blue-500" },
                { name: "Git", color: "from-orange-500 to-red-500" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
