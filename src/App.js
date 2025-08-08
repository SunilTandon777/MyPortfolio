// src/App.js
import React from "react";
import { motion } from "framer-motion";

/**
 * Modern Portfolio — Single-file runnable component
 * Save as src/App.js, start dev server with `npm start`
 */

/* ------------------ Resume data (Sunil Tandon) ------------------ */
const resume = {
  name: "Sunil Tandon",
  title: "Android Developer",
  location: "Bangalore, Karnataka",
  email: "sunil777tandon@gmail.com",
  phone: "+91 7982258830",
  linkedIn: "https://www.linkedin.com/in/sunil-tandon-916aba181/",
  about:
    "Experienced Android Developer with 6 years 8 months of expertise in Kotlin and Java. Proficient in designing and developing robust mobile applications using Android SDK, Jetpack, and modern architectures (MVVM, MVP, MVC). Skilled in optimizing performance, ensuring scalability, and delivering seamless user experiences.",
  skills: [
    "Android SDK","Kotlin","Java","Jetpack & AndroidX","Coroutines","RxJava",
    "MVVM","MVP","MVC","REST APIs","Sockets","Firebase",
    "Room / SQLite","WorkManager","Glide","Picasso","Fresco","MotionLayout",
    "Jetpack Compose","Koin","Spring Boot MVC","Agile"
  ],
  experience: [
    {
      company: "AU Small Finance Bank",
      role: "Division Manager - Android",
      period: "Oct 2023 - Present",
      bullets: [
        "Leading development of internal banking apps including M-Sahay and M-Connect.",
        "Implemented role-based features and integrated Koin, Room DB, and Databinding."
      ],
    },
    {
      company: "Quy Technologies Pvt. Ltd.",
      role: "Senior / Lead Android Developer",
      period: "Mar 2021 - Aug 2023",
      bullets: [
        "Led development of apps: Abu Dhabi 360, My Swim Pro, Fighter Diet Recipes, Niterra India.",
        "Integrated Garmin, Strava, Google Health, and Apple Health APIs.",
      ],
    },
    {
      company: "Mobiocean Technologies Pvt. Ltd.",
      role: "Associate Android Developer",
      period: "Dec 2019 – Feb 2021",
      bullets: ["Worked on POS devices and delivered multiple apps from scratch to deployment."],
    },
    {
      company: "Triumphant Robotics with Embedded Eminent Pvt. Ltd.",
      role: "Android Developer",
      period: "Aug 2018 – Nov 2019",
      bullets: ["Developed Android applications for robotics and embedded systems projects."],
    },
  ],
  projects: [
    { name: "M-Sahay", desc: "Internal banking app for EMI collection (role-based flows).", tech: ["Kotlin","Coroutine","Koin","Room DB"], link: "#" },
    { name: "M-Connect", desc: "Loan-renewal app for bank officers; monthly customer renewals.", tech: ["Kotlin","Coroutine","Koin","Databinding"], link: "#" },
    { name: "Abu Dhabi 360", desc: "Fitness & nutrition tracking with multi-device integrations.", tech: ["Kotlin","Coroutine","Health APIs"], link: "https://play.google.com/store/search?q=abu+d+habi+360&c=apps" },
    { name: "My Swim Pro", desc: "Swim workout & training plans.", tech: ["MVP"], link: "https://play.google.com/store/search?q=my+swim+pro&c=apps" },
    { name: "Fighter Diet Recipes", desc: "Diet/recipe app with subscriptions & Zendesk integration.", tech: ["MVVM","Coroutine","Motion Layout"], link: "https://play.google.com/store/apps/details?id=com.fighterdiet" },
    { name: "Niterra India", desc: "Automobile parts & e-commerce app.", tech: ["MVVM","Kotlin","Coroutine"], link: "https://play.google.com/store/search?q=niterra+india&c=apps" },
  ],
  education: [
    { school: "Indira Gandhi National Open University", degree: "BCA", year: "" },
    { school: "CBSE Board, Delhi", degree: "12th", year: "" },
  ],
};

/* ------------------ Small reusable components ------------------ */
const IconLink = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/6 hover:bg-white/10 transition text-sm"
    aria-label={label}
  >
    {children}
  </a>
);

/* ------------------ Motion presets ------------------ */
const fadeInUp = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.07 } } };

/* ------------------ App / Portfolio ------------------ */
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-rose-900 text-slate-100 antialiased">
      {/* Animated background blobs */}
      <svg className="fixed inset-0 -z-10 w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.22" />
          </linearGradient>
        </defs>

        <motion.ellipse
          cx="12%"
          cy="10%"
          rx="28%"
          ry="18%"
          fill="url(#g1)"
          style={{ mixBlendMode: "screen" }}
          animate={{ cy: ["8%", "14%", "10%"], rx: ["28%", "30%", "26%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.ellipse
          cx="86%"
          cy="78%"
          rx="24%"
          ry="15%"
          fill="#ef4444"
          style={{ opacity: 0.06, mixBlendMode: "screen" }}
          animate={{ cx: ["88%", "82%", "86%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* HERO */}
        <header className="grid gap-6 md:grid-cols-3 md:items-center">
          <motion.div {...fadeInUp} className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{resume.name}</h1>
            <p className="mt-2 text-lg text-slate-200">{resume.title} • {resume.location}</p>
            <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">{resume.about}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${resume.email}`} className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 hover:bg-white/14 transition">
                Contact
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-2 hover:bg-white/12 transition">Projects</a>
              <IconLink href={resume.linkedIn} label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6C1.1 6 0 4.88 0 3.5C0 2.12 1.1 1 2.48 1C3.86 1 4.98 2.12 4.98 3.5ZM0.36 8.99H4.6V24H0.36V8.99Z" fill="currentColor"/><path d="M7.98 8.99H12.04V11.02H12.11C12.78 9.8 14.34 8.53 16.8 8.53C21.18 8.53 22 11.5 22 15.58V24H17.72V16.7C17.72 14.92 17.7 12.66 15.2 12.66C12.68 12.66 12.26 14.64 12.26 16.58V24H7.98V8.99Z" fill="currentColor"/></svg>
                LinkedIn
              </IconLink>
            </div>
          </motion.div>

          {/* Contact / skills card */}
          <motion.aside {...fadeInUp} className="bg-white/6 rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold">Contact</h4>
                <div className="mt-2 text-sm text-slate-200">{resume.email}</div>
                <div className="text-sm text-slate-200">{resume.phone}</div>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="text-xs font-medium text-slate-200">Skills</h5>
              <div className="mt-3 flex flex-wrap gap-2">
                {resume.skills.slice(0, 12).map((s) => (
                  <span key={s} className="text-xs bg-white/8 px-3 py-1 rounded-full">{s}</span>
                ))}
                <span className="text-xs text-slate-300">+{resume.skills.length - 12} more</span>
              </div>
            </div>
          </motion.aside>
        </header>

        {/* MAIN GRID */}
        <main className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Experience (left/large) */}
          <motion.section {...stagger} className="lg:col-span-2 bg-white/4 rounded-2xl p-6">
            <motion.h3 {...fadeInUp} className="text-xl font-semibold">Experience</motion.h3>
            <motion.div className="mt-4 space-y-6">
              {resume.experience.map((e, idx) => (
                <motion.article key={e.company} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} className="p-4 rounded-xl bg-white/5">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="font-semibold">{e.role}</div>
                      <div className="text-sm text-slate-300">{e.company}</div>
                    </div>
                    <div className="text-sm text-slate-400">{e.period}</div>
                  </div>

                  {e.bullets && (
                    <ul className="mt-3 list-disc list-inside text-slate-300 text-sm">
                      {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </motion.section>

          {/* Projects + Education (right) */}
          <motion.aside {...fadeInUp} className="bg-white/4 rounded-2xl p-6">
            <h3 className="text-lg font-semibold">Projects</h3>
            <div id="projects" className="mt-3 grid gap-3">
              {resume.projects.map((p) => (
                <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" className="group p-3 rounded-lg bg-white/6 hover:bg-white/10 transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-sm text-slate-300 mt-1">{p.desc}</div>
                      <div className="text-xs text-slate-400 mt-2">{p.tech.join(" • ")}</div>
                    </div>
                    <div className="ml-4 text-slate-400 group-hover:text-white/90">↗</div>
                  </div>
                </a>
              ))}
            </div>

            <h4 className="mt-6 text-sm font-semibold">Education</h4>
            <div className="mt-2 text-sm text-slate-300">
              {resume.education.map((ed) => (
                <div key={ed.school} className="mt-1">
                  <div className="font-medium">{ed.school}</div>
                  <div className="text-xs text-slate-400">{ed.degree} {ed.year && `• ${ed.year}`}</div>
                </div>
              ))}
            </div>
          </motion.aside>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-slate-300">
          <motion.div {...fadeInUp}>
            <div>Like what you see? Reach out —</div>
            <div className="mt-2 font-medium">{resume.email} • {resume.phone}</div>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}
