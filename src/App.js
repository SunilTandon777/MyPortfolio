// src/App.js
import React from "react";
import { motion } from "framer-motion";

/**
 * Modern Portfolio — Minimalist Glass Design
 * Clean, minimalist design with consistent color palette
 */

/* ------------------ Resume data (Updated for 7+ years experience) ------------------ */
const resume = {
  name: "Sunil Tandon",
  title: "Senior Android Developer",
  location: "Bangalore, Karnataka",
  email: "sunil777tandon@gmail.com",
  phone: "+91 7982258830",
  linkedIn: "https://www.linkedin.com/in/sunil-tandon-916aba181/",
  github: "https://github.com/suniltandon",
  about:
    "Senior Android Developer with 7+ years of expertise in Kotlin, Java, and modern Android development. Specialized in building scalable, high-performance mobile applications from scratch across diverse domains including Banking, IoT, Healthcare, E-commerce, and POS systems. Proven track record of leading development teams and delivering enterprise-grade solutions with hardware integration capabilities.",
  skills: [
    "Android SDK", "Kotlin", "Java", "Jetpack Compose", "Jetpack & AndroidX", 
    "Coroutines", "RxJava", "MVVM", "MVP", "MVC", "Clean Architecture",
    "REST APIs", "GraphQL", "WebSockets", "Firebase", "AWS", "Google Cloud",
    "Room Database", "SQLite", "WorkManager", "DataStore", "Hilt", "Koin",
    "Glide", "Coil", "Picasso", "MotionLayout", "Material Design 3",
    "CI/CD", "Git", "Agile", "Scrum", "JUnit", "Espresso", "Robolectric",
    "IoT Development", "MQTT", "Bluetooth LE", "USB Communication", "Hardware Integration",
    "POS Systems", "Payment Gateways", "Receipt Printing", "Inventory Management",
    "Healthcare APIs", "HIPAA Compliance", "Data Encryption", "Real-time Monitoring",
    "AR/VR Development", "Computer Vision", "Machine Learning", "Edge Computing"
  ],
  experience: [
          {
        company: "AU Small Finance Bank",
        role: "Division Manager - Android Development",
        period: "Oct 2023 - Present",
        duration: (() => {
          const startDate = new Date('2023-10-01');
          const currentDate = new Date();
          const diffTime = Math.abs(currentDate - startDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          const years = Math.floor(diffDays / 365);
          const months = Math.floor((diffDays % 365) / 30);
          return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
        })(),
        bullets: [
          "Leading a team of 8+ Android developers in building enterprise banking applications",
          "Built M-Sahay from scratch - EMI collection app with role-based flows serving 50K+ users",
          "Built M-Connect from scratch - Loan renewal app with real-time data synchronization",
          "Introduced modern Android practices: Clean Architecture, Jetpack Compose, and CI/CD pipelines",
          "Reduced app crash rate by 85% and improved performance by 60% through optimization"
        ],
      },
      {
        company: "Quy Technologies Pvt. Ltd.",
        role: "Senior Android Developer & Tech Lead",
        period: "Mar 2021 - Aug 2023",
        duration: "2 years 6 months",
        bullets: [
          "Led development of 4 major apps: Abu Dhabi 360, My Swim Pro, Fighter Diet Recipes, Niterra India",
          "Integrated complex third-party APIs: Garmin, Strava, Google Health, Apple Health, and payment gateways",
          "Implemented advanced features: real-time tracking, offline sync, push notifications, and analytics",
          "Mentored 3 junior developers and established coding standards and best practices",
          "Achieved 4.0+ star ratings across all published apps with 20K+ combined downloads"
        ],
      },
      {
        company: "Mobiocean Technologies Pvt. Ltd.",
        role: "Associate Android Developer",
        period: "Dec 2019 – Feb 2021",
        duration: "1 year 3 months",
        bullets: [
          "Built 6+ Android applications from scratch to deployment",
          "Developed POS payment systems with card readers and receipt printers",
          "Implemented IoT solutions for smart home automation and monitoring",
          "Created healthcare monitoring apps with HIPAA compliance and encryption",
          "Collaborated with cross-functional teams for seamless app delivery"
        ],
      },
      {
        company: "Triumphant Robotics with Embedded Eminent Pvt. Ltd.",
        role: "Android Developer",
        period: "Aug 2018 – Nov 2019",
        duration: "1 year 4 months",
        bullets: [
          "Built Android applications for robotics and embedded systems from scratch",
          "Developed IoT solutions for industrial automation and monitoring",
          "Implemented custom hardware drivers and communication protocols",
          "Gained expertise in low-level Android development and hardware integration",
          "Created real-time data processing systems for sensor networks"
        ],
      },
  ],
  projects: [
    { 
      name: "M-Sahay Banking App", 
      desc: "Built from scratch - Enterprise banking app for EMI collection with role-based workflows, serving 50K+ users with 99.9% uptime. Complete end-to-end development including architecture, UI/UX, and deployment.", 
      tech: ["Kotlin", "Jetpack Compose", "Clean Architecture", "Room DB", "Koin", "Firebase"], 
      link: "#",
      impact: "Built from scratch • 50K+ users • 85% crash reduction"
    },
    { 
      name: "M-Connect Loan App", 
      desc: "Built from scratch - Loan renewal application for bank officers with real-time synchronization and offline capabilities. Complete development including backend integration and security features.", 
      tech: ["Kotlin", "MVVM", "Coroutines", "DataStore", "WorkManager", "REST APIs"], 
      link: "#",
      impact: "Built from scratch • Real-time sync • 60% performance improvement"
    },
    { 
      name: "Abu Dhabi 360", 
      desc: "Comprehensive fitness & nutrition tracking app with multi-device integrations and AI-powered insights.", 
      tech: ["Kotlin", "Jetpack Compose", "Health APIs", "Firebase", "ML Kit"], 
      link: "https://play.google.com/store/search?q=abu+d+habi+360&c=apps",
      impact: "4.2★ rating, 10K+ downloads"
    },
    { 
      name: "My Swim Pro", 
      desc: "Advanced swim workout & training plans with personalized coaching and progress tracking.", 
      tech: ["Kotlin", "MVP", "MotionLayout", "Wear OS", "Google Fit"], 
      link: "https://play.google.com/store/search?q=my+swim+pro&c=apps",
      impact: "4.1★ rating, 5K+ downloads"
    },
    { 
      name: "Fighter Diet Recipes", 
      desc: "Premium diet/recipe app with subscription management and Zendesk integration for customer support.", 
      tech: ["Kotlin", "MVVM", "Coroutines", "MotionLayout", "Stripe"], 
      link: "https://play.google.com/store/apps/details?id=com.fighterdiet",
      impact: "4.3★ rating, 1K+ downloads"
    },
    { 
      name: "Niterra India", 
      desc: "E-commerce app for automobile parts with advanced search, AR visualization, and secure payments.", 
      tech: ["Kotlin", "MVVM", "AR Core", "Payment Gateway", "Analytics"], 
      link: "https://play.google.com/store/search?q=niterra+india&c=apps",
      impact: "4.0★ rating, 500+ downloads"
    },
    
  ],
  education: [
    { school: "Indira Gandhi National Open University", degree: "Bachelor of Computer Applications (BCA)", year: "2015-2018" },
    { school: "CBSE Board, Delhi", degree: "Higher Secondary (12th)", year: "2014-2015" },
  ],
  achievements: [
    "Built 15+ production Android apps from scratch",
    "Mentored 8+ junior developers",
    "Achieved 4.0+ average app store ratings",
    "Reduced app crash rates by 85%",
    "Improved app performance by 60%",
    "Delivered projects worth $1M+ in value",
    "Expertise across Banking, IoT, Healthcare, E-commerce domains",
    "Successfully integrated 50+ hardware devices and sensors"
  ],
  certifications: [
    { name: "Google Certified Android Developer", issuer: "Google", year: "2023" },
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2022" },
    { name: "AI/ML Master Certificate", issuer: "IIT Roorkee", year: "Pursuing" }
  ],

  toolsAndTechnologies: {
    "Development Tools": ["Android Studio", "IntelliJ IDEA", "Eclipse", "VS Code", "Postman", "Charles Proxy", "Fiddler", "Wireshark"],
    "Backend Development": ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Maven", "Gradle", "Tomcat", "Jetty"],
    "Database & ORM": ["MySQL", "PostgreSQL", "MongoDB", "Hibernate", "JPA", "MyBatis", "Redis", "Elasticsearch"],
    "API Development": ["REST APIs", "GraphQL", "Swagger/OpenAPI", "Postman Collections", "Insomnia", "cURL"],
    "Version Control": ["Git", "GitHub", "GitLab", "Bitbucket", "SVN", "Git Flow", "Git Hooks"],
    "Project Management": ["Jira", "Confluence", "Trello", "Asana", "Slack", "Microsoft Teams", "Notion"],
    "Monitoring & Analytics": ["Firebase Analytics", "Crashlytics", "Google Analytics", "New Relic", "Sentry", "Prometheus", "Grafana"],
    "Cloud Services": ["Firebase", "AWS", "Google Cloud", "Azure", "Heroku", "DigitalOcean", "Vercel"],
    "Testing Tools": ["JUnit", "Mockito", "TestNG", "Cucumber", "Selenium", "Appium", "Espresso", "Robolectric"],
    "CI/CD & DevOps": ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "Docker", "Kubernetes", "Terraform"],
    "Security Tools": ["OAuth 2.0", "JWT", "SSL/TLS", "SonarQube", "OWASP ZAP", "Burp Suite"],
    "Performance Tools": ["JMeter", "LoadRunner", "Android Profiler", "Memory Profiler", "Network Profiler"]
  },
  developmentMethodology: {
    "Agile Practices": ["Scrum", "Sprint Planning", "Daily Standups", "Retrospectives", "User Stories"],
    "Code Quality": ["Code Reviews", "Pair Programming", "Clean Code", "Refactoring", "Documentation"],
    "Testing Strategy": ["TDD", "BDD", "Unit Testing", "Integration Testing", "UI Testing"],
    "Performance": ["Memory Profiling", "CPU Profiling", "Network Optimization", "Battery Optimization", "App Size Optimization"]
  }
};

/* ------------------ Minimalist Glass Components ------------------ */
const IconLink = ({ href, children, label, className = "" }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 text-sm shadow-lg ${className}`}
    aria-label={label}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    style={{ isolation: "isolate" }}
  >
    {children}
  </motion.a>
);

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    className={`backdrop-blur-xl bg-slate-800/30 border border-slate-600/30 rounded-3xl p-6 shadow-2xl hover:bg-slate-700/40 hover:border-slate-500/50 transition-all duration-500 ${className}`}
    whileHover={{ scale: 1.02, y: -2 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    style={{ isolation: "isolate" }}
  >
    {children}
  </motion.div>
);

const GlassSkill = ({ children, className = "" }) => (
  <motion.span 
    className={`text-xs backdrop-blur-sm bg-slate-700/50 px-3 py-1 rounded-full border border-slate-600/50 shadow-lg ${className}`}
    whileHover={{ scale: 1.02, y: -1 }}
    transition={{ duration: 0.15, ease: "easeOut" }}
    style={{ isolation: "isolate" }}
  >
    {children}
  </motion.span>
);

const GlassButton = ({ children, href, className = "" }) => (
  <motion.a 
    href={href}
    className={`inline-flex items-center gap-2 rounded-xl backdrop-blur-sm bg-slate-700/50 hover:bg-slate-600/50 px-6 py-3 border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 font-medium shadow-2xl ${className}`}
    whileHover={{ scale: 1.02, y: -1 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    style={{ isolation: "isolate" }}
  >
    {children}
  </motion.a>
);

/* ------------------ Enhanced Motion Presets ------------------ */
const fadeInUp = { 
  initial: { opacity: 0, y: 20 }, 
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const stagger = { 
  animate: { 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    } 
  } 
};

/* ------------------ Minimalist App / Portfolio ------------------ */
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-slate-100 antialiased overflow-x-hidden scroll-smooth relative">
      {/* Minimalist Animated Background */}
      <div className="fixed inset-0 -z-10">
        <svg className="w-full h-full" aria-hidden>
          <defs>
                         <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
               <stop offset="50%" stopColor="#ec4899" stopOpacity="0.1" />
               <stop offset="100%" stopColor="#6b21a8" stopOpacity="0.15" />
             </linearGradient>
             <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stopColor="#ec4899" stopOpacity="0.12" />
               <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.08" />
               <stop offset="100%" stopColor="#6b21a8" stopOpacity="0.12" />
             </linearGradient>
             <radialGradient id="radial1" cx="50%" cy="50%" r="50%">
               <stop offset="0%" stopColor="#ec4899" stopOpacity="0.08" />
               <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.03" />
             </radialGradient>
          </defs>

                     <motion.ellipse
             cx="15%"
             cy="15%"
             rx="25%"
             ry="20%"
             fill="url(#gradient1)"
             style={{ mixBlendMode: "screen", willChange: "transform" }}
             animate={{ 
               cx: ["15%", "20%", "15%"], 
               cy: ["15%", "10%", "15%"],
               rx: ["25%", "30%", "25%"],
               ry: ["20%", "25%", "20%"]
             }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           />
           
           <motion.ellipse
             cx="85%"
             cy="85%"
             rx="20%"
             ry="15%"
             fill="url(#gradient2)"
             style={{ mixBlendMode: "screen", willChange: "transform" }}
             animate={{ 
               cx: ["85%", "90%", "85%"],
               cy: ["85%", "80%", "85%"]
             }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           />

           <motion.ellipse
             cx="50%"
             cy="50%"
             rx="15%"
             ry="10%"
             fill="url(#radial1)"
             style={{ mixBlendMode: "screen", willChange: "transform" }}
             animate={{ 
               cx: ["50%", "55%", "50%"],
               cy: ["50%", "45%", "50%"]
             }}
             transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
           />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        {/* HERO SECTION with Minimalist Design */}
        <motion.header 
          className="grid gap-8 md:grid-cols-3 md:items-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div {...fadeInUp} className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent drop-shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {resume.name}
              </motion.h1>
               
              <motion.p 
                className="text-xl md:text-2xl text-slate-200 font-medium backdrop-blur-sm bg-slate-800/30 px-4 py-2 rounded-xl border border-slate-600/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {resume.title}
              </motion.p>
               
              <motion.p 
                className="text-lg text-slate-300 backdrop-blur-sm bg-slate-800/30 px-4 py-2 rounded-xl border border-slate-600/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                📍 {resume.location}
              </motion.p>
            </div>

            <motion.p 
              className="text-lg text-slate-300 leading-relaxed max-w-3xl backdrop-blur-sm bg-slate-800/30 p-6 rounded-2xl border border-slate-600/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {resume.about}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <GlassButton href={`mailto:${resume.email}`}>
                📧 Contact Me
              </GlassButton>
               
              <GlassButton href="#projects">
                🚀 View Projects
              </GlassButton>
               
                             <IconLink href={resume.linkedIn} label="LinkedIn" className="px-6 py-3">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
                   <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6C1.1 6 0 4.88 0 3.5C0 2.12 1.1 1 2.48 1C3.86 1 4.98 2.12 4.98 3.5ZM0.36 8.99H4.6V24H0.36V8.99Z" fill="currentColor"/>
                   <path d="M7.98 8.99H12.04V11.02H12.11C12.78 9.8 14.34 8.53 16.8 8.53C21.18 8.53 22 11.5 22 15.58V24H17.72V16.7C17.72 14.92 17.7 12.66 15.2 12.66C12.68 12.66 12.26 14.64 12.26 16.58V24H7.98V8.99Z" fill="currentColor"/>
                 </svg>
                 LinkedIn
               </IconLink>
               
               <IconLink href={resume.github} label="GitHub" className="px-6 py-3">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
                   <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor"/>
                 </svg>
                 GitHub
               </IconLink>
            </motion.div>
          </motion.div>

          {/* Contact & Skills Card with Minimalist Design */}
          <motion.aside {...fadeInUp} className="space-y-6">
            <GlassCard>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-200">📞 Contact Info</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl backdrop-blur-sm bg-slate-700/30 border border-slate-600/30">
                    <span className="text-slate-300">📧</span>
                    <span className="text-slate-200">{resume.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl backdrop-blur-sm bg-slate-700/30 border border-slate-600/30">
                    <span className="text-slate-300">📱</span>
                    <span className="text-slate-200">{resume.phone}</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-slate-200">🎯 Key Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.slice(0, 15).map((skill) => (
                    <GlassSkill key={skill}>
                      {skill}
                    </GlassSkill>
                  ))}
                  <span className="text-xs text-slate-400 backdrop-blur-sm bg-slate-700/30 px-3 py-1 rounded-full border border-slate-600/30">+{resume.skills.length - 15} more</span>
                </div>
              </div>
            </GlassCard>
          </motion.aside>
        </motion.header>

        {/* ACHIEVEMENTS SECTION with Minimalist Design */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <GlassCard>
            <h3 className="text-2xl font-bold text-slate-200 mb-6">🏆 Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resume.achievements.map((achievement, idx) => (
                                 <motion.div
                   key={idx}
                   className="p-4 rounded-xl backdrop-blur-sm bg-slate-700/30 border border-slate-600/30 hover:bg-slate-600/40 hover:border-slate-500/50 transition-all duration-300"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   whileHover={{ scale: 1.02, y: -2 }}
                   style={{ isolation: "isolate" }}
                 >
                  <p className="text-sm text-slate-200">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.section>



        {/* TOOLS & TECHNOLOGIES SECTION with Minimalist Design */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <GlassCard>
            <h3 className="text-2xl font-bold text-slate-200 mb-6">🔧 Tools & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(resume.toolsAndTechnologies).map(([category, tools], idx) => (
                <motion.div
                  key={category}
                  className="space-y-3 p-4 rounded-xl backdrop-blur-sm bg-slate-700/30 border border-slate-600/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <h4 className="text-lg font-semibold text-slate-200">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <GlassSkill key={tool}>
                        {tool}
                      </GlassSkill>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* MAIN CONTENT GRID with Minimalist Design */}
        <main className="grid gap-8 lg:grid-cols-3">
          {/* Experience Section with Minimalist Design */}
          <motion.section 
            {...stagger} 
            className="lg:col-span-2 space-y-6"
          >
            <motion.h3 {...fadeInUp} className="text-2xl font-bold text-slate-200 backdrop-blur-sm bg-slate-800/30 px-4 py-2 rounded-xl border border-slate-600/30">💼 Professional Experience</motion.h3>
            <div className="space-y-6">
              {resume.experience.map((exp, idx) => (
                <motion.article 
                  key={exp.company} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: idx * 0.1 }}
                >
                  <GlassCard>
                    <div className="space-y-4">
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-2">
                          <div className="text-lg font-semibold text-white">{exp.role}</div>
                          <div className="text-slate-300 font-medium">{exp.company}</div>
                          <div className="text-sm text-slate-400 backdrop-blur-sm bg-slate-700/30 px-3 py-1 rounded-lg border border-slate-600/30">{exp.period} • {exp.duration}</div>
                        </div>
                      </div>

                      {exp.bullets && (
                        <ul className="space-y-2 text-sm text-slate-300">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2 p-2 rounded-lg backdrop-blur-sm bg-slate-700/30 border border-slate-600/30">
                              <span className="text-slate-400 mt-1">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </GlassCard>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Projects Section with Minimalist Design */}
          <motion.aside {...fadeInUp} className="space-y-6">
            <GlassCard>
              <h3 className="text-xl font-bold text-slate-200 mb-6">🚀 Featured Projects</h3>
              <div id="projects" className="space-y-4">
                {resume.projects.map((project, idx) => (
                                     <motion.a 
                     key={project.name} 
                     href={project.link} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="group block p-4 rounded-xl backdrop-blur-sm bg-slate-700/30 hover:bg-slate-600/40 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 shadow-lg"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: idx * 0.1 }}
                     whileHover={{ scale: 1.02, y: -2 }}
                     style={{ isolation: "isolate" }}
                   >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="font-semibold text-white group-hover:text-slate-200 transition-colors">
                          {project.name}
                        </div>
                        <div className="text-slate-400 group-hover:text-white transition-colors">↗</div>
                      </div>
                      <div className="text-sm text-slate-300">{project.desc}</div>
                      <div className="text-xs text-slate-400 font-medium backdrop-blur-sm bg-slate-700/30 px-2 py-1 rounded-lg border border-slate-600/30">{project.impact}</div>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <GlassSkill key={tech}>
                            {tech}
                          </GlassSkill>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </motion.aside>
        </main>

        {/* EDUCATION & CERTIFICATIONS SECTION with Minimalist Design */}
        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <GlassCard>
              <h3 className="text-2xl font-bold text-slate-200 mb-6">🎓 Education</h3>
              <div className="space-y-6">
                {resume.education.map((ed, idx) => (
                  <motion.div 
                    key={ed.school} 
                    className="space-y-2 p-4 rounded-xl backdrop-blur-sm bg-slate-700/30 border border-slate-600/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="font-semibold text-white text-lg">{ed.school}</div>
                    <div className="text-slate-300 font-medium">{ed.degree}</div>
                    <div className="text-sm text-slate-400">{ed.year}</div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-2xl font-bold text-slate-200 mb-6">🏅 Certifications</h3>
              <div className="space-y-6">
                {resume.certifications.map((cert, idx) => (
                  <motion.div 
                    key={cert.name} 
                    className="space-y-2 p-4 rounded-xl backdrop-blur-sm bg-slate-700/30 border border-slate-600/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="font-semibold text-white text-lg">{cert.name}</div>
                    <div className="text-slate-300 font-medium">{cert.issuer}</div>
                    <div className="text-sm text-slate-400">{cert.year}</div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>
        </motion.section>

        {/* Minimalist Footer */}
        <motion.footer 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <GlassCard>
            <div className="space-y-4">
              <div className="text-lg font-medium text-slate-200">Ready to collaborate?</div>
              <div className="text-slate-300">Let's build something amazing together</div>
              <div className="flex justify-center gap-6 text-sm">
                <span className="text-slate-400 backdrop-blur-sm bg-slate-700/30 px-3 py-1 rounded-lg border border-slate-600/30 hover:bg-slate-600/40 transition-all duration-300">{resume.email}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-400 backdrop-blur-sm bg-slate-700/30 px-3 py-1 rounded-lg border border-slate-600/30 hover:bg-slate-600/40 transition-all duration-300">{resume.phone}</span>
              </div>
            </div>
          </GlassCard>
        </motion.footer>
      </div>
    </div>
  );
}
