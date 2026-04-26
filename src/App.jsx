import React, { useEffect } from "react";
import { useState } from "react";
import resumeImg from "./assets/projects/ai-resume.jpg";
import profileImg from "./assets/profile/profile.png";
/*import jobImg from "./assets/projects/job.png";
import researchImg from "./assets/projects/research.png";*/

const content = {
  en: {
    nav: {
      about: "About",
      work: "Selected Projects",
      skills: "Skills",
      education: "Education",
      certification: "Certification",
      contact: "Contact",
    },
    hero: "I build AI systems that solve real business problems.",
    about1:
      "With a background in computer science and international business, I build AI and automation solutions that solve real-world problems.",
    about2:
      "I combine technical execution with business thinking to create systems that are not only built — but actually used.",
    try: "Try the live AI system →",
    education: {
      title: "Education",
      ncuName: "National Central University",
      itiName: "International Trade Institute, TAITRA",
      ncuProgram:
        "Interdisciplinary Program of Electrical Engineering and Computer Science",
      ncuDegree: "B.S. in Computer Science and Network Engineering",
      itiProgram: "One-year International Business Administration Program",
      ncuDesc:
        "Focused on software engineering, networking systems, and AI-related applications.",
      itiDesc:
        "Intensive training in global business communication, trade practices, and cross-cultural negotiation.",
    },
    projects: [
      {
        title: "AI Resume GPT",
        description: "Built an AI-powered resume system using GPT with structured prompt engineering.",
        impact: "Improved resume quality and reduced editing time",
      },
      {
        title: "AI Job Matching Automation",
        description: "Developed an automated job filtering pipeline using n8n and multiple APIs.",
        impact: "Reduced job search time from 1+ hour to under 5 minutes through automation",
      },
      {
        title: "Cross-Cultural Business Research",
        description: "Led a team analyzing Saudi Arabian business culture using the Hofstede framework to generate strategic insights.",
        impact: "Delivered top-ranked analysis with actionable business insights",
      },
    ],
    skills: [
      "AI / Prompt Engineering",
      "Automation (n8n)",
      "Project Management",
      "Business Analysis",
      "Cross-functional Collaboration",
    ],
    contact: {
      title: "Let’s Work Together",
      desc: "Open to opportunities in AI, product, and international business.",
      button: "Contact Me",
    },
    certification: [
      "AI Application Planner Certification (Ministry of Economic Affairs, Taiwan)",
      "Google Agile Project Management",
      "NVIDIA DLI – Building LLM Applications with Prompt Engineering",
      "NVIDIA DLI – Building RAG Applications with LLM",
    ],
  },
  zh: {
    nav: {
      about: "關於我",
      work: "作品",
      skills: "技能",
      education: "學歷",
      certification: "證照",
      contact: "聯絡",
    },
    hero: "將想法轉化為實際商業價值",
    about1:
      "具備資訊工程與國際商務背景，我專注於利用 AI 與自動化解決真實世界問題。",
    about2:
      "擅長結合技術執行與策略思維，將想法落地為可運作的系統。",
    try: "立即體驗 AI 系統 →",
    education: {
      title: "學歷",
      ncuName: "國立中央大學",
      itiName: "ITI 外貿協會培訓中心國際企業經營班",
      ncuProgram: "資訊電機學院學士班",
      ncuDegree: "資訊工程與網路工程學士",
      itiProgram: "一年期商務英語組",
      ncuDesc: "專注於軟體工程、網路系統與 AI 應用。",
      itiDesc: "全英文國際商務、貿易實務與跨文化溝通訓練。",
    },
    projects: [
      {
        title: "互動式 AI 履歷",
        description: "使用 GPT 設計並開發 AI 履歷機器人，透過結構化資訊和提示詞優化提升回應品質。",
        impact: "提升履歷內容清晰度與使用體驗",
      },
      {
        title: "AI 職缺自動篩選系統",
        description: "結合 n8n 與多個 API 打造自動化職缺篩選流程。",
        impact: "將求職時間從一小時縮短至數分鐘",
      },
      {
        title: "跨文化商業研究",
        description: "帶領團隊分析沙烏地阿拉伯商業文化（Hofstede 模型）。",
        impact: "於 8 組中獲得第 1 名",
      },
    ],
    skills: [
      "AI / 提示詞工程",
      "自動化（n8n）",
      "專案管理",
      "商業分析",
      "跨部門協作",
    ],
    contact: {
      title: "一起合作",
      desc: "開放 AI、產品與國際商業相關機會",
      button: "聯絡我",
    },
    certification: [
      "經濟部 AI 應用規劃師",
      "Google 敏捷專案管理",
      "NVIDIA DLI – 使用提示詞打造 LLM 應用服務",
      "NVIDIA DLI – 使用 LLM 打造 RAG 應用服務",
    ],
  },
};


export default function Portfolio() {
  const [lang, setLang] = useState("en");
  return (
    <div className="relative bg-[#050505] text-gray-100 min-h-screen selection:bg-white selection:text-black overflow-hidden z-10 font-sans">

      {/* Subtle animated background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite] top-[-100px] left-[-100px]"
        ></div>
        <div
          className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite] bottom-[-100px] right-[-100px]"
        ></div>
      </div>


      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur bg-[#050505]/70 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex md:grid md:grid-cols-3 items-center">
          {/* Left empty cell for balancing */}
          <div className="hidden md:block"></div>
          {/* Nav (mobile scroll / desktop centered) */}
          <div className="flex-1 overflow-x-auto md:overflow-visible whitespace-nowrap no-scrollbar flex justify-start md:justify-center">
            <div className={`flex items-center ${lang === "en" ? "gap-3 md:gap-6 tracking-[0.12em]" : "gap-4 md:gap-8 tracking-[0.18em] uppercase"} text-xs md:text-sm text-[#76B900] font-semibold`}>
              <a href="#about" className="relative text-[#76B900] hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#76B900] after:transition-all hover:after:w-full">{content[lang].nav.about}</a>
              <a href="#projects" className="relative text-[#76B900] hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#76B900] after:transition-all hover:after:w-full">{content[lang].nav.work}</a>
              <a href="#skills" className="relative text-[#76B900] hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#76B900] after:transition-all hover:after:w-full">{content[lang].nav.skills}</a>
              <a href="#education" className="relative text-[#76B900] hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#76B900] after:transition-all hover:after:w-full">{content[lang].nav.education}</a>
              <a href="#certification" className="relative text-[#76B900] hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#76B900] after:transition-all hover:after:w-full">{content[lang].nav.certification}</a>
              <a href="#contact" className="relative text-[#76B900] hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#76B900] after:transition-all hover:after:w-full">{content[lang].nav.contact}</a>
            </div>
          </div>
          <div className="flex items-center justify-end text-xs md:text-sm tracking-[0.18em] uppercase font-semibold">
            <button
              onClick={() => setLang("en")}
              className={`px-2 flex items-center transition ${lang === "en" ? "text-[#76B900]" : "text-gray-500 hover:text-white"}`}
            >
              EN
            </button>
            <span className="text-gray-600 mx-1">|</span>
            <button
              onClick={() => setLang("zh")}
              className={`px-2 flex items-center transition ${lang === "zh" ? "text-[#76B900]" : "text-gray-500 hover:text-white"}`}
            >
              中
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden px-4 md:px-6">

        {/* advanced grid background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* base grid lines */}
        <div
          className="absolute inset-0 opacity-[0.35] animate-mesh-move"
          style={{
            backgroundImage:
              "linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
          {/* subtle X pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.4]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0 L100 100 M100 0 L0 100"
                stroke="#444"
                strokeWidth="1"
              />
              <circle cx="50" cy="50" r="1.5" fill="#555" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
          {/* subtle center vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_80%)]"></div>
          {/* soft brand glow (removed for more natural look) */}
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center">

          {/* Left */}
          <div className="flex flex-col justify-center items-start space-y-3 md:space-y-4 text-white h-full">
            <div className="text-white text-base md:text-lg font-light tracking-[0.02em] leading-none">
              Benjamin Tsao
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight max-w-full">
              {/* line 1 */}
              <span className="block whitespace-nowrap">
                Building <span className="text-[#76B900]">AI Systems</span>
              </span>

              {/* line 2 */}
              <span className="block text-gray-500 text-lg sm:text-xl md:text-3xl mt-2 whitespace-nowrap">
                for
              </span>

              {/* line 3 */}
              <span className="block whitespace-nowrap mt-1">
                Real Business Impact
              </span>
            </h1>

            <p className="text-white max-w-md leading-relaxed border-l-2 border-[#76B900] pl-4">
              {content[lang].hero}
            </p>

            <div className="flex gap-3 pt-3">
              <a
                href="#projects"
                className="group relative px-6 py-2 bg-[#76B900] text-black text-sm font-semibold overflow-hidden transition-all hover:brightness-110 hover:pr-10"
              >
                <span className="relative z-10">View Work</span>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="group relative px-6 py-2 border border-gray-600 text-sm text-gray-300 overflow-hidden transition-all hover:pr-10 hover:bg-gray-800"
              >
                <span className="relative z-10">Contact</span>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center md:justify-end items-center md:pr-2 h-full">
            {/* Upgraded NVIDIA-style polygon frame profile image */}
            <div className="relative group w-full max-w-[300px] md:max-w-[380px] aspect-[4/5] md:aspect-square cursor-pointer">

              {/* hover glow (tied to shape) */}
              <div
                className="absolute inset-0 bg-[#76B900] opacity-20 blur-xl transition-all duration-700 group-hover:opacity-60 group-hover:scale-110 group-hover:blur-2xl"
                style={{
                  clipPath:
                    "polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%)",
                }}
              ></div>

              {/* main frame */}
              <div
                className="relative w-full h-full bg-[#76B900] p-[4px] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgba(118,185,0,0.4)]"
                style={{
                  clipPath:
                    "polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%)",
                }}
              >

                {/* inner container */}
                <div
                  className="relative w-full h-full bg-[#111] overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%)",
                  }}
                >
                  <img
                    src={profileImg}
                    alt="Benjamin Tsao"
                    className="w-full h-full object-cover object-[60%_25%] transition-all duration-700 scale-105 group-hover:scale-110"
                  />

                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* signature */}
                  <div className="absolute bottom-6 right-6 pointer-events-none transition-transform duration-500 group-hover:-translate-x-1">
                    <span
                      className="text-[#76B900] text-sm opacity-80"
                      style={{ fontFamily: "cursive" }}
                    >
                      Benjamin Tsao
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="px-4 md:px-6 pt-20 pb-28 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-6">{content[lang].nav.about}</h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {content[lang].about1}
          </p>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            {content[lang].about2}
          </p>
        </div>
      </section>
      {/* Section separation is now handled by background color alternation */}

      {/* Projects */}
      <section id="projects" className="px-4 md:px-6 py-32 md:py-40 max-w-5xl mx-auto bg-[#050505]">
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-20 text-center">
          {content[lang].nav.work}
        </h2>

        <div key={lang} className="space-y-16">
          {content[lang].projects.map((project, index) => (
            <div key={index} className="group max-w-3xl mx-auto rounded-xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:shadow-lg transition duration-300 md:flex">

              {/* Image */}
              <div className="w-full md:w-[45%] aspect-[16/9] bg-gray-200 overflow-hidden md:rounded-l-xl md:rounded-t-none flex-shrink-0">
                <img
                  src={index === 0 ? resumeImg : `https://placehold.co/800x400?text=Project+${index + 1}`}
                  alt="project preview"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition duration-500 will-change-transform"
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 text-left md:w-[55%] flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-white to-[#7c8395] bg-clip-text text-transparent">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-3">
                  {project.description}
                </p>

                <p className="text-sm text-[#9ca3af] italic">
                  → {project.impact}
                </p>

                {(project.title === "AI Resume GPT" || project.title === "互動式 AI 履歷") && (
                  <a
                    href="https://chatgpt.com/g/g-69c026be51708191bda8b44b38665238-benjamin-tsao-s-ai-agent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-[#7c8395] hover:underline"
                  >
                    {content[lang].try}
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>
      {/* Section separation is now handled by background color alternation */}

      {/* Skills */}
      <section id="skills" className="w-full bg-[#0a0a0a]">
        <div className="px-4 md:px-6 py-32 md:py-40 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-12 text-center">
            {content[lang].nav.skills}
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {content[lang].skills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-2 bg-white/10 rounded-full text-sm hover:bg-[#7c8395] hover:text-white hover:-translate-y-[1px] transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* Section separation is now handled by background color alternation */}

      {/* Education */}
      <section id="education" className="px-4 md:px-6 py-32 md:py-40 max-w-4xl mx-auto bg-[#050505]">
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-12 text-center">
          {content[lang].education.title}
        </h2>

        <div key={lang} className="space-y-10 max-w-3xl mx-auto">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <span className="text-sm text-gray-400 order-1 sm:order-2 sm:text-right">2019 — 2024</span>
              <div className="order-2 sm:order-1">
                <h3 className="text-lg font-medium text-white">
                  {content[lang].education.ncuName}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {content[lang].education.ncuProgram}<br/>
                  {content[lang].education.ncuDegree}
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              {content[lang].education.ncuDesc}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <span className="text-sm text-gray-400 order-1 sm:order-2 sm:text-right">2025 — 2026</span>
              <div className="order-2 sm:order-1">
                <h3 className="text-lg font-medium text-white">
                  {content[lang].education.itiName}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {content[lang].education.itiProgram}
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              {content[lang].education.itiDesc}
            </p>
          </div>
        </div>
      </section>
      {/* Section separation is now handled by background color alternation */}

      {/* Certification */}
      <section id="certification" className="w-full bg-[#0a0a0a]">
        <div className="px-4 md:px-6 py-32 md:py-40 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-12 text-center">
            {content[lang].nav.certification}
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {content[lang].certification.map((item) => (
              <div key={item} className="group p-5 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:shadow-lg transition-shadow duration-200 md:hover:scale-[1.005]">
                <h3 className="text-md font-medium text-white">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section separation is now handled by background color alternation */}

      {/* Contact */}
      <section id="contact" className="px-4 md:px-6 py-40 text-center bg-[#050505]">
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">{content[lang].contact.title}</h2>
        <p className="text-gray-400 mb-8">
          {content[lang].contact.desc}
        </p>

        <a
          href="mailto:benjamintsao2000@gmail.com"
          className="inline-block px-10 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300"
        >
          {content[lang].contact.button}
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Benjamin Tsao
      </footer>
    <style>
    {`
    @keyframes mesh-move {
      0% { background-position: 0 0; }
      100% { background-position: 60px 60px; }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.08; transform: scale(1); }
      50% { opacity: 0.18; transform: scale(1.25); }
    }
    .animate-mesh-move {
      animation: mesh-move 8s linear infinite;
    }
    .animate-pulse-slow {
      animation: pulse-slow 6s ease-in-out infinite;
    }
    `}
    </style>
    </div>
  );
}
