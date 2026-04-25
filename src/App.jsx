import React from "react";
import { useState } from "react";

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
    hero: "Turning AI into real business impact.",
    about1:
      "With a background in computer science and international business training, I focus on using AI and automation to solve real-world problems.",
    about2:
      "I enjoy bridging technical execution with strategic thinking, turning ideas into working systems.",
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
        title: "AI Resume Assistant",
        description: "Designed and built an AI-powered resume system using GPT. Improved response consistency through prompt engineering.",
        impact: "Improved clarity and user interaction experience",
      },
      {
        title: "AI Job Matching Automation",
        description: "Built an automated job filtering pipeline using n8n and APIs.",
        impact: "Reduced job search time from 1+ hour to minutes",
      },
      {
        title: "Cross-Cultural Business Research",
        description: "Led a team analyzing Saudi Arabian business culture using Hofstede framework.",
        impact: "Ranked #1 out of 8 teams",
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
    hero: "將 AI 轉化為實際商業價值",
    about1:
      "具備資訊工程與國際商務背景，我專注於利用 AI 與自動化解決真實世界問題。",
    about2:
      "擅長結合技術執行與策略思維，將想法落地為可運作的系統。",
    try: "立即體驗 AI 系統 →",
    education: {
      title: "學歷",
      ncuName: "國立中央大學",
      itiName: "外貿協會培訓中心（ITI）",
      ncuProgram: "資訊電機學院學士班",
      ncuDegree: "資訊工程與網路工程學士",
      itiProgram: "國際企業經營班（一年期）",
      ncuDesc: "專注於軟體工程、網路系統與 AI 應用。",
      itiDesc: "接受國際商務、貿易實務與跨文化溝通訓練。",
    },
    projects: [
      {
        title: "AI 履歷助理",
        description: "使用 GPT 設計並開發 AI 履歷系統，透過提示詞優化提升回應品質。",
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

const projects = [
  {
    title: "AI Resume Assistant",
    description:
      "Designed and built an AI-powered resume system using GPT. Improved response consistency through iterative prompt engineering and testing.",
    impact: "Improved information clarity and user interaction experience",
  },
  {
    title: "AI Job Matching Automation",
    description:
      "Built an automated job filtering pipeline using n8n and APIs (OpenAI, 104, LINE).",
    impact: "Reduced job search time from 1+ hour to a few minutes",
  },
  {
    title: "Cross-Cultural Business Research",
    description:
      "Led a team analyzing Saudi Arabian business culture using Hofstede framework.",
    impact: "Ranked #1 out of 8 teams",
  },
];

export default function Portfolio() {
  const [lang, setLang] = useState("en");
  return (
    <div className="bg-[#f4f3ef] text-gray-900 min-h-screen selection:bg-black selection:text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur bg-[#f7f6f3]/70 border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center gap-4">
          <span className="font-medium text-gray-800 shrink-0">BT</span>

          {/* Scrollable nav */}
          <div className="flex-1 overflow-x-auto whitespace-nowrap no-scrollbar">
            <div className="inline-flex items-center gap-4 md:gap-6 text-sm text-gray-600">
              <a href="#about" className="relative hover:text-gray-900 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full">{content[lang].nav.about}</a>
              <a href="#projects" className="relative hover:text-gray-900 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full">{content[lang].nav.work}</a>
              <a href="#skills" className="relative hover:text-gray-900 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full">{content[lang].nav.skills}</a>
              <a href="#education" className="relative hover:text-gray-900 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full">{content[lang].nav.education}</a>
              <a href="#certification" className="relative hover:text-gray-900 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full">{content[lang].nav.certification}</a>
              <a href="#contact" className="relative hover:text-gray-900 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full">{content[lang].nav.contact}</a>
              <div className="ml-2 inline-flex items-center text-xs">
                <button
                  onClick={() => setLang("en")}
                  className={`px-2 ${lang === "en" ? "text-gray-900 font-medium" : "text-gray-400"}`}
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => setLang("zh")}
                  className={`px-2 ${lang === "zh" ? "text-gray-900 font-medium" : "text-gray-400"}`}
                >
                  中
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-4 md:px-6 pt-40 pb-16 max-w-5xl mx-auto">
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-6 tracking-[0.3em] uppercase">
            Portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Benjamin{" "}
            <span className="relative inline-block group">
              <span className="relative z-10">Tsao</span>
              <span className="absolute left-0 bottom-2 w-full h-3 bg-gradient-to-r from-[#d6d3ff] to-[#c7d2fe] rounded-sm -z-0 opacity-80 transition-all duration-300 group-hover:h-4"></span>
            </span>
          </h1>

          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            <span className="text-gray-600">{content[lang].hero}</span>
          </p>

          <div className="mt-4 flex justify-center">
            <span className="text-xs px-3 py-1 rounded-full bg-[#e8e7e3] text-gray-600">
              AI × Business × Automation
            </span>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <a href="#projects" className="px-6 py-2 rounded-full bg-gradient-to-r from-[#7c8395] to-[#5f6675] text-white text-sm hover:bg-[#5f6675] hover:-translate-y-0.5 transition">
              View Work
            </a>
            <a href="#contact" className="px-6 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 hover:-translate-y-0.5 transition">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-4 md:px-6 pt-16 pb-24 bg-[#eeede8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">{content[lang].nav.about}</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {content[lang].about1}
          </p>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            {content[lang].about2}
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="px-4 md:px-6 py-20 md:py-28 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">
          {content[lang].education.title}
        </h2>

        <div key={lang} className="space-y-10 max-w-3xl mx-auto">
          <div className="p-6 rounded-xl bg-white border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {content[lang].education.ncuName}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {content[lang].education.ncuProgram}<br/>
                  {content[lang].education.ncuDegree}
                </p>
              </div>
              <span className="text-sm text-gray-400">2019 — 2024</span>
            </div>
            <p className="text-gray-600 text-sm mt-3">
              {content[lang].education.ncuDesc}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {content[lang].education.itiName}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {content[lang].education.itiProgram}
                </p>
              </div>
              <span className="text-sm text-gray-400">2025 — 2026</span>
            </div>
            <p className="text-gray-600 text-sm mt-3">
              {content[lang].education.itiDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section id="certification" className="px-4 md:px-6 py-20 md:py-28 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">
          {content[lang].nav.certification}
        </h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {content[lang].certification.map((item) => (
            <div key={item} className="group p-5 rounded-xl bg-white/60 backdrop-blur border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-md font-medium text-gray-900">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-4 md:px-6 py-20 md:py-28 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-20 text-center">
          {content[lang].nav.work}
        </h2>

        <div className="space-y-24">
          {content[lang].projects.map((project, index) => (
            <div key={index} className="group text-left max-w-3xl mx-auto border-l-2 border-gray-200 pl-4 md:pl-6 hover:border-[#7c8395] hover:bg-white/40 rounded-lg transition duration-300 md:hover:scale-[1.02] hover:shadow-xl">

              <h3 className="text-2xl font-semibold mb-3 group-hover:translate-x-1 group-hover:text-[#6b7280] transition bg-gradient-to-r from-gray-900 to-[#7c8395] bg-clip-text text-transparent">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-3">
                {project.description}
              </p>

              <p className="text-sm text-[#9ca3af] italic">
                → {project.impact}
              </p>

              {(project.title === "AI Resume Assistant" || project.title === "AI 履歷助理") && (
                <a
                  href="https://chatgpt.com/g/g-69c026be51708191bda8b44b38665238-benjamin-tsao-s-ai-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-[#7c8395] hover:underline"
                >
                  {content[lang].try}
                </a>
              )}

            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-4 md:px-6 py-20 md:py-28 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">
          {content[lang].nav.skills}
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {content[lang].skills.map((skill) => (
            <span
              key={skill}
              className="px-6 py-2 bg-gray-100 rounded-full text-sm hover:bg-[#7c8395] hover:text-white hover:-translate-y-0.5 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 md:px-6 py-40 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">{content[lang].contact.title}</h2>
        <p className="text-gray-600 mb-8">
          {content[lang].contact.desc}
        </p>

        <a
          href="mailto:benjamintsao2000@gmail.com"
          className="inline-block px-10 py-4 bg-[#7c8395] text-white rounded-full hover:scale-110 hover:shadow-xl hover:bg-[#5f6675] hover:-translate-y-0.5 transition"
        >
          {content[lang].contact.button}
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Benjamin Tsao
      </footer>
    </div>
  );
}