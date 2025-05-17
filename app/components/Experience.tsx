"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const experiences = [
    {
      period: "Feb 2022 – Aug 2023",
      role: "Software Engineer",
      company: "Lifology Designing Lives",
      color: "indigo",
      location: "Technopark, Trivandrum, India",
      projects: [
        {
          title: "Spearheaded API Migration & Scalability",
          description:
            "Spearheaded the migration of legacy REST APIs to GraphQL, significantly reducing client-side data over-fetching while improving API response times, enhancing scalability for over 100,000+ monthly active users.",
        },
        {
          title: "Automated File Management System",
          description:
            "Engineered an automated file management system using Google Drive APIs, designing cron jobs to monitor and categorize hundreds of daily email attachments into role-specific folders, dramatically reducing manual organization time.",
        },
        {
          title: "Frontend Optimization & Dynamic Loading",
          description:
            "Optimized frontend performance by integrating React Query into a Next.js application, eliminating redundant API calls and implementing dynamic loading states to achieve near-perfect Lighthouse accessibility scores.",
        },
        {
          title: "Deployment & DevOps",
          description:
            "Orchestrated end-to-end deployment pipelines on AWS EC2, including CI/CD workflows with Docker containers, maintaining exceptional uptime for development and staging environments.",
        },
        {
          title: "Real-Time Monitoring & Incident Resolution",
          description:
            "Pioneered a real-time error monitoring system using Sentry and Prometheus, significantly improving production incident resolution time through proactive alerting and root-cause dashboards.",
        },
        {
          title: "Cross-Functional Collaboration",
          description:
            "Lead cross-functional collaboration with UX and QA teams to deliver a customer-facing analytics dashboard ahead of schedule, resulting in measurable improvements to engagement and reporting.",
        },
      ],
    },
    {
      period: "Jun. 2021 – Jan 2022",
      role: "Full Stack Developer",
      company: "Brototype",
      color: "blue",
      location: "Info Park, Kochi, India",
      projects: [
        {
          title: "Monitoring Dashboard & Data Management",
          description:
            "Designed and implemented a scalable compliance monitoring dashboard using React.js and Express.js, efficiently managing a dataset exceeding 500,000+ student records while maintaining optimal performance.",
        },
        {
          title: "Testing & Integration",
          description:
            "Established comprehensive test coverage and unit tests and maintained integration tests with Mocha & Chai for backend integration, reaching a substantial reduction in production-level defects.",
        },
        {
          title: "Performance Optimization",
          description:
            "Optimized system performance by introducing LFU Cache for link storage, dramatically decreasing database load while improving overall response efficiency.",
        },
        {
          title: "User Experience Enhancement",
          description:
            "Enhanced user experience by implementing skeleton loading states with React Query, creating seamless transitions that emulate native applications.",
        },
        {
          title: "Role-Based Access & Security",
          description:
            "Architected a role-based access management system for the dashboard, ensuring data integrity and security across multiple user tiers.",
        },
        {
          title: "Performance Benchmarking",
          description:
            "Conducted performance benchmarking for REST endpoints, reducing average response times below industry standards for similar solutions.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Experience" />

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute top-16 bottom-0 left-8 w-0.5 bg-gradient-to-b from-indigo-500 to-blue-500">
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-white"
                    animate={{
                      y: [0, 100, 200, 300, 400],
                      opacity: [1, 0.8, 0.6, 0.4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </div>
              )}

              <div className="flex items-start">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center z-10 relative border border-indigo-500/30">
                    <Briefcase className={`w-8 h-8 text-${exp.color}-400`} />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-indigo-500/20 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-display">
                      <Zap className={`w-5 h-5 text-${exp.color}-400`} />
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-indigo-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <MapPin className="w-4 h-4 text-slate-400 mr-1" />
                    <span className="text-slate-300">
                      {exp.company}
                      {exp.location ? `, ${exp.location}` : ""}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {exp.projects.map((project, i) => (
                      <motion.div
                        key={i}
                        className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 group hover:border-indigo-500/30 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                        <p className="text-slate-300">{project.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
