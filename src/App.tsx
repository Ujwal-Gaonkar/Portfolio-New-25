import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2,Code,FileStackIcon, Database, Globe, Cpu, ChevronRight as ChessKnight, Brain, Download, Instagram, GraduationCap, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "time_on_site_30s", {
          event_category: "Engagement",
          event_label: "User stayed for 30 seconds",
          value: 30,
        });
      }
    }, 30000); // 30,000 ms = 30 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`min-h-screen dark bg-gray-900`}>
      {/* Navigation Bar with Resume Download */}
      <nav className={`fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-xl font-bold text-white`}
            >
              Ujwal Gaonkar
            </motion.h1>
            <div className="flex items-center gap-4">
              <motion.a
            href="https://drive.google.com/file/d/1I0bHftwVVOrQDW1k9wM5eE6u3pD6rzml/view?usp=sharing"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            onClick={() => {
              // Safely call gtag if it exists
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "resume_click", {
                  event_category: "engagement",
                  event_label: "Hero Resume Button",
                  value: 1,
                });
              }
            }}
          >
            <Download size={18} />
            Download Resume
          </motion.a>
          </div>
        </div>
      </div>
    </nav>

     {/* Hero Section with Parallax Effect */}
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 py-24 text-center relative z-10"
        >
          {/* ⭐ Avatar with rotating golden ring (Mobile-Friendly) */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40">
              {/* Rotating golden light ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundImage:
                    "conic-gradient(from 0deg, rgba(250,204,21,0.05), rgba(250,204,21,0.9), rgba(250,204,21,0.05))",
                  boxShadow:
                    "0 0 18px rgba(250,204,21,0.5), 0 0 32px rgba(250,204,21,0.35)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              {/* Soft golden glow (subtle on mobile) */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-yellow-400/15 blur-2xl" />

              {/* Dark circle to form ring shape */}
              <div className="absolute inset-2 sm:inset-3 rounded-full bg-gray-900" />

              {/* Actual profile image */}
              <div className="absolute inset-3 sm:inset-4 rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
                <img
                  src="/ujwal-profile.jpg"  // ⚠️ Make sure this is saved inside /public/
                  alt="Ujwal Gaonkar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
            style={{
              letterSpacing: "1px",
              wordSpacing: "2px",
              lineHeight: "1.3",
              textRendering: "optimizeLegibility",
            }}
          >
            Ujwal Gaonkar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10"
          >
            Software Developer
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: <Github size={24} />, href: "https://github.com/Ujwal-Gaonkar", label: "GitHub" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/ujwal-gaonkar-6746aa1a7/", label: "LinkedIn" },
              { icon: <Mail size={24} />, href: "mailto:gaonkarujwal07@gmail.com", label: "Email" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label={item.label}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Background Elements (kept same) */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/5 rounded-full"
              style={{
                width: Math.random() * 80 + 40,
                height: Math.random() * 80 + 40,
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </header>

      {/* About Section with Scroll Animations */}
      {/* About Section */}
      <Section className="bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            Passionate Software Developer with expertise in JavaScript, React.js and backend technologies like Node.js and
            Express.js. Strong foundation in Data Structures & Algorithms with a proven ability to build scalable web
            applications. Actively solving coding challenges and contributing to open-source projects.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <AnimatedSkill icon={<Code2 size={32} />} title="Frontend" text="React.js, JavaScript, Tailwind CSS, Next.js" delay={0} />
            <AnimatedSkill icon={<Database size={32} />} title="Backend" text="Node.js, Express.js, Spring Boot" delay={0.2} />
            <AnimatedSkill icon={<Globe size={32} />} title="Database" text="MongoDB, Redis" delay={0.4} />
            <AnimatedSkill icon={<Cpu size={32} />} title="Tools" text="Git, Linux, VS Code, Eclipse, Postman" delay={0.6} />
          </div>
        </div>
      </Section>

     {/* Experience Section */}
        <Section className="bg-gray-900">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
            Experience
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <AnimatedExperienceCard
              title="Freelance Software Developer"
              period="Aug 2024 – Present"
              location="Remote"
              description={[
                "Architected and developed a full-stack Learning Management System (LMS) using the MERN stack with secure JWT-based authentication and real-time progress tracking for 100+ users.",
                "Built the Eksipnos Education Consultancy website with dynamic content management, improving user engagement by 30% through better UX and real-time updates.",
                "Developed a production-ready MERN e-commerce platform with Stripe integration for secure online payments and real-time inventory management.",
                "Optimized backend performance by introducing Redis caching, reducing API response times by up to 40% and improving overall system responsiveness.",
                "Collaborated closely with non-technical stakeholders to gather requirements, propose technical solutions, and deliver features on time."
              ]}
              delay={0}
            />

            <AnimatedExperienceCard
              title="Software Development Engineer Intern"
              period="May 2024 – Jul 2024"
              location="Celestial V Solutions · Bengaluru"
              description={[
                "Developed and optimized scalable web application features using the MERN stack, focusing on performance, code quality, and maintainability.",
                "Integrated RESTful APIs and worked on both frontend and backend modules to ensure consistent and reliable data flow across the platform.",
                "Improved UI/UX consistency by refining reusable components and standardizing styling across multiple pages.",
                "Collaborated with senior engineers in code reviews, debugging sessions, and sprint planning to align with business requirements.",
                "Worked in an Agile environment, delivering features in short iterations and actively participating in daily stand-ups."
              ]}
              delay={0.2}
            />
          </div>
        </Section>

      {/* Education Section */}
      <Section className="bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Education</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <AnimatedEducationCard
            degree="Master of Computer Applications (MCA)"
            school="Dayananda Sagar College of Engineering"
            period="2022 - 2024"
            score="CGPA: 9.3"
            location="Bengaluru"
            logo="/college/dsce.png"   // <-- NEW LINE
            delay={0}
          />
          <AnimatedEducationCard
            degree="Bachelor of Computer Applications (BCA)"
            school="Karnataka University, Dharwad (KUD)"
            period="2019 - 2022"
            score="Percentage: 89.56%"
            location="Karwar"
            logo="/college/kud.png"     // <-- NEW LINE
            delay={0.2}
          />
        </div>
      </Section>

      {/* Projects Section */}
      <Section className="bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedProjectCard
            title="JUSTBuy E-commerce"
            description="A full-stack e-commerce web application with a user-friendly interface, secure payment gateways, and real-time product search functionality."
            image="https://res.cloudinary.com/dan0iboqp/image/upload/v1739962271/justbuy_ouakh3.png"
            delay={0}
            githubLink="https://github.com/Ujwal-Gaonkar/MERN_ECOMMERCE_PROJECT"
            liveDemoLink="https://justbuyco.netlify.app/"
          />
          <AnimatedProjectCard
            title="Skill-Sync (LMS)"
            description="A robust LMS website with secure authentication, enabling users to enroll in courses, purchase content, and access a personalized dashboard."
            image="https://res.cloudinary.com/dan0iboqp/image/upload/v1739965204/lms_glhfxl.png"
            delay={0.4}
            githubLink="https://github.com/Ujwal-Gaonkar/"
            liveDemoLink="https://skill-sync-lms.vercel.app/"
          />
          <AnimatedProjectCard
            title="Eksipnos Education Website"
            description="Led end-to-end development of a full-stack web application for Eksipnos Education. Built a user-centric platform with dynamic content and custom UI components."
            image="https://res.cloudinary.com/dan0iboqp/image/upload/v1739965204/eksipnos_fu4mmv.png"
            delay={0.8}
            githubLink="https://github.com/Ujwal-Gaonkar/EKSIPNOS_EDU"
            liveDemoLink="https://eksipnos.vercel.app/"
          />
          <AnimatedProjectCard
            title="LRU Cache Implementation"
            description="Implemented an LRU cache using a doubly linked list and a hashmap in C++. The cache has O(1) time complexity for both get and put operations."
            image="https://res.cloudinary.com/dan0iboqp/image/upload/v1739972596/Screenshot_2025-02-19_at_7.12.22_PM_bstpqd.png"
            delay={0.2}
            githubLink="https://github.com/Ujwal-Gaonkar/LRU-Cache"
            liveDemoLink="https://lru-cache-one.vercel.app/"
          />
          
          <AnimatedProjectCard
            title="SplitEx - Expense Manager"
            description="Optimized cash flow algorithm using graph theory, Reduced the number of transactions by 35%, improving the efficiency of group expense management."
            image="https://res.cloudinary.com/dan0iboqp/image/upload/v1739976462/Screenshot_2025-02-19_at_8.13.03_PM_maonno.png"
            delay={0.6}
            githubLink="https://github.com/Ujwal-Gaonkar/SplitEx/tree/main"
            liveDemoLink="https://split-ex.vercel.app/"
          />
          
        </div>
      </Section>

      {/* Certifications Section */}
      <Section className="bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Certifications</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <AnimatedCertificationCard
            title="Cutshort DSA"
            issuer="Cutshort"
            icon={<Brain size={32} />}
            link="https://cutshort.io/certificate/108851"        // 🔗 ADD LINK
            delay={0}
          />
          <AnimatedCertificationCard
            title="GitHub Professional"
            issuer="GitHub"
            icon={<Github size={32} />}
            link="https://www.linkedin.com/learning/certificates/dace87dc1a513a1c9db72681e58acb292e8ca580781e6a5a3618d1d4fee9430b"          // 🔗 ADD LINK
            delay={0.2}
          />
          <AnimatedCertificationCard
            title="Chess.com Rating- 1674"
            issuer="Chess.com"
            //description="Rating"
            icon={<ChessKnight size={32} />}
            link="https://www.chess.com/member/ujwalgaonkar/stats/rapid"  // 🔗 ADD LINK
            delay={0.4}
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <div className="flex flex-col space-y-4">
           {[
            {
              icon: <Mail size={20} />,
              text: "gaonkarujwal07@gmail.com",
              href: "mailto:gaonkarujwal07@gmail.com",
              bgColor: "bg-gray-800 hover:bg-gray-700",
              label: "Email"
            },
            {
              icon: <PhoneCall size={20} />,
              text: "+91-8660568591",
              href: "tel:+918660568591",
              bgColor: "bg-blue-600 hover:bg-blue-700",
              label: "Phone"
            }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-center space-x-3 px-6 py-3 ${item.bgColor} text-white rounded-lg transition-colors`}
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "contact_click", {
                    event_category: "recruiter",
                    event_label: item.label,
                    value: 1,
                  });
                }
              }}
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.a>
          ))}
          </div>
        </div>
      </Section>

      {/* Footer with Social Links */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex space-x-6">
              {[
                { icon: <Github size={24} />, href: "https://github.com/Ujwal-Gaonkar", label: "GitHub" },
                { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/ujwal-gaonkar-6746aa1a7/", label: "LinkedIn" },
                { icon: <Instagram size={24} />, href: "https://www.instagram.com/ujwalgaonkar07/", label: "Instagram" },
                { icon: <Code size={24} />, href: "https://leetcode.com/u/ujwalgaonkar03/", label: "LeetCode" },
                { icon: <FileStackIcon size={24} />, href: "https://stackoverflow.com/users/19602290/ujwal-gaonkar", label: "Stack Overflow" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
            <div className="text-center">
              <p className="mb-2">&copy; 2024 Ujwal Gaonkar. All rights reserved.</p>
              <p className="text-gray-500">Built with React, Tailwind CSS, and Framer Motion</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ children, className = "bg-white" }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={`py-20 ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}

function AnimatedSkill({ icon, title, text, delay }: { icon: React.ReactNode; title: string; text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="inline-block p-3 bg-gray-800 rounded-lg mb-4 text-blue-400"
      >
        {icon}
      </motion.div>
      <h3 className="font-semibold mb-2 text-gray-200">{title}</h3>
      <p className="text-sm text-gray-400">{text}</p>
    </motion.div>
  );
}

function AnimatedProjectCard({
  title,
  description,
  image,
  delay,
  githubLink,
  liveDemoLink,
}: {
  title: string;
  description: string;
  image: string;
  delay: number;
  githubLink?: string;
  liveDemoLink?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex space-x-4">
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "project_click", {
                    event_category: "projects",
                    event_label: `${title} GitHub`,
                  });
                }
              }}
            >
              GitHub <ExternalLink size={16} className="ml-1" />
            </motion.a>
          )}
         {liveDemoLink && (
          <motion.a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-400 hover:text-green-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "project_click", {
                  event_category: "projects",
                  event_label: `${title} Live Demo`,
                });
              }
            }}
          >
            Live Demo <ExternalLink size={16} className="ml-1" />
          </motion.a>
        )}
        </div>
      </div>
    </motion.div>
  );
}


function AnimatedExperienceCard({ title, period, location, description, delay }: { title: string; period: string; location: string; description: string[]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-gray-800 p-8 rounded-lg shadow-md border border-gray-700"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
          <p className="text-gray-400">{location}</p>
        </div>
        <span className="text-gray-400">{period}</span>
      </div>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.1 * index, duration: 0.5 }}
            className="flex items-start text-gray-300"
          >
            <span className="text-blue-400 mr-2">•</span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function AnimatedEducationCard({
  degree,
  school,
  period,
  score,
  location,
  delay,
  logo,   // NEW prop added
}: {
  degree: string;
  school: string;
  period: string;
  score: string;
  location: string;
  delay: number;
  logo?: string; // NEW (optional)
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
    >
      <div className="flex items-center mb-4">
        
        {/* If logo exists → show logo, else show GraduationCap */}
        {logo ? (
          <img
            src={logo}
            alt="College Logo"
            className="w-12 h-12 object-contain rounded-md mr-4 hover:scale-110 transition duration-300"
          />
        ) : (
          <div className="p-2 bg-gray-700 rounded-lg mr-4">
            <GraduationCap size={24} className="text-blue-400" />
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold text-gray-100">{degree}</h3>
          <p className="text-gray-400">{school}</p>
        </div>
      </div>

      <div className="ml-14">
        <p className="text-gray-400">{period}</p>
        <p className="text-gray-400">{location}</p>
        <p className="text-blue-400 font-medium mt-2">{score}</p>
      </div>
    </motion.div>
  );
}

function AnimatedCertificationCard({
  title,
  issuer,
  description,
  icon,
  delay,
  link, // NEW 👈
}: {
  title: string;
  issuer: string;
  description?: string;
  icon: React.ReactNode;
  delay: number;
  link?: string;  // NEW 👈 optional
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="bg-gray-800 p-6 rounded-lg shadow-md text-center border border-gray-700"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="inline-block p-3 bg-gray-700 rounded-full mb-4"
      >
        <div className="text-blue-400">{icon}</div>
      </motion.div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-400">{issuer}</p>
      {description && <p className="text-blue-400 mt-2">{description}</p>}

      {/* 🔗 Link Button (only if link provided) */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-500 transition"
        >
          View Certificate →
        </a>
      )}
    </motion.div>
  );
}

export default App;