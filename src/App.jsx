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
        description: "An AI-powered system that transforms raw experience into structured, high-quality resumes.\n\n• Prompt Engineering Pipeline\n• Structured Output Design\n• Iterative Feedback Loop",
        impact: "Reduced resume editing time by ~80% and improved consistency across different job applications",
      },
      {
        title: "AI Job Matching System",
        description: "An automated system that filters and prioritizes job opportunities using multi-source data pipelines.\n\n• API Integration (job platforms)\n• n8n Automation Workflow\n• Rule-based Filtering Engine",
        impact: "Reduced job search time from 1+ hour to under 5 minutes through full automation",
      },
      {
        title: "RAG Knowledge System",
        description: "A retrieval-augmented system for structured knowledge querying with improved accuracy and context relevance.\n\n• RAG Architecture Design\n• Vector-based Retrieval\n• LLM Response Optimization",
        impact: "Significantly improved answer accuracy and usability for complex information queries",
      },
      {
        title: "AI Factory Monitoring System",
        description: "A simulated smart factory system for real-time monitoring, anomaly detection, and AI-driven insights.\n\n• Data Collection Pipeline\n• Anomaly Detection Logic\n• Predictive Analysis Layer",
        impact: "Demonstrated practical use of AI in predictive maintenance and operational efficiency",
      },
      {
        title: "Cross-Cultural Business Strategy",
        description: "A strategic analysis system applying cultural frameworks to design actionable business strategies.\n\n• Hofstede Framework Analysis\n• Market Behavior Modeling\n• Strategy Translation",
        impact: "Ranked #1 among 8 teams with clear, actionable insights for real-world business scenarios",
      },
      {
        title: "Technical Product Positioning",
        description: "A system-level approach to translating complex technology into clear market positioning and communication.\n\n• Technical-to-Business Translation\n• Value Proposition Design\n• Stakeholder Communication",
        impact: "Successfully handled real-time Q&A on pricing, safety, and feasibility in a full English presentation",
      }
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
        title: "互動式 AI 履歷系統",
        description: "將原始經驗轉化為高品質履歷的 AI 系統。\n\n• 提示詞工程流程\n• 結構化輸出設計\n• 迭代回饋機制",
        impact: "將履歷編輯時間降低約 80%，並提升不同情境下的內容一致性",
      },
      {
        title: "AI 職缺自動化系統",
        description: "整合多來源資料，自動篩選與排序職缺的系統。\n\n• API 串接（職缺平台）\n• n8n 自動化流程\n• 規則篩選引擎",
        impact: "將求職時間從 1 小時以上縮短至 5 分鐘內",
      },
      {
        title: "RAG 知識系統",
        description: "結合檢索與生成的知識查詢系統，提升準確性與上下文理解。\n\n• RAG 架構設計\n• 向量檢索機制\n• LLM 回應優化",
        impact: "大幅提升複雜問題的回答準確度與使用體驗",
      },
      {
        title: "AI 智慧工廠監控系統",
        description: "模擬智慧工廠即時監控與異常分析的 AI 系統。\n\n• 資料蒐集流程\n• 異常偵測邏輯\n• 預測分析層",
        impact: "展示 AI 在預測維護與營運優化中的實際應用",
      },
      {
        title: "跨文化商業策略分析",
        description: "運用文化模型設計可落地商業策略的分析系統。\n\n• Hofstede 模型分析\n• 市場行為建模\n• 策略轉譯",
        impact: "於 8 組中獲得第 1 名，並提出具實務價值的策略建議",
      },
      {
        title: "技術產品市場定位",
        description: "將複雜技術轉化為清晰市場定位的系統化方法。\n\n• 技術轉商業語言\n• 價值主張設計\n• 利害關係人溝通",
        impact: "成功於全英文簡報中即時應對價格、安全與可行性問題",
      }
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
  // --- NVIDIA-style interactive projects carousel state ---
  const [activeProject, setActiveProject] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(true);
  // Typing animation sequencing state
  const [typingStage, setTypingStage] = useState("input");
  useEffect(() => {
    let start = Date.now();
    const duration = 9000;

    const tick = () => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (elapsed >= duration) {
        setFade(false);
        setTimeout(() => {
          setActiveProject((prev) => {
            const next = (prev + 1) % content[lang].projects.length;
            setTypingStage("input");
            return next;
          });
          setFade(true);
        }, 200);

        start = Date.now();
        setProgress(0);
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    return () => {};
  }, [lang, activeProject]);

  // Effect to switch typingStage from input to output for Resume GPT
  useEffect(() => {
    if (activeProject !== 0) return;

    const inputText = "Who is Benjamin Tsao?";
    const duration = inputText.length * 80; // ms per char for typing

    const timer = setTimeout(() => {
      setTypingStage("output");
    }, duration + 500);

    return () => clearTimeout(timer);
  }, [activeProject]);
  // -------------------------------------------------------
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
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 md:py-4 flex md:grid md:grid-cols-3 items-center">
          {/* Left empty cell for balancing */}
          <div className="hidden md:block"></div>
          {/* Nav (mobile scroll / desktop centered) */}
          <div className="flex-1 overflow-x-auto md:overflow-visible whitespace-nowrap no-scrollbar flex justify-start md:justify-center">
            <div className={`flex items-center ${lang === "en" ? "gap-2 md:gap-4 tracking-[0.08em]" : "gap-3 md:gap-6 tracking-[0.12em] uppercase"} text-xs md:text-sm text-[#76B900] font-semibold`}>
              {["about", "projects", "skills", "education", "certification", "contact"].map((item, index, arr) => (
                <React.Fragment key={item}>
                  <a
                    href={`#${item}`}
                    className="relative text-[#76B900] hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#76B900] after:transition-all hover:after:w-full"
                  >
                    {content[lang].nav[item === "projects" ? "work" : item]}
                  </a>
                  {index !== arr.length - 1 && (
                    <span className="text-gray-700/70 px-1.5 select-none">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end text-xs md:text-sm tracking-[0.18em] uppercase font-semibold">
            <button
              onClick={() => setLang("en")}
              className={`px-2 flex items-center transition ${lang === "en" ? "text-[#76B900]" : "text-gray-500 hover:text-white"}`}
            >
              EN
            </button>
            <span className="text-gray-700/70 mx-1 select-none">|</span>
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
          className="absolute inset-0 opacity-[0.6] animate-mesh-move"
          style={{
            backgroundImage:
              "linear-gradient(#666 1px, transparent 1px), linear-gradient(90deg, #666 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
          {/* subtle X pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.65]"
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
                stroke="#666"
                strokeWidth="1"
              />
              <circle cx="50" cy="50" r="1.5" fill="#777" />
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
              <span className="block text-gray-500 text-xl sm:text-2xl md:text-4xl mt-2 whitespace-nowrap">
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
      <section id="projects" className="px-4 md:px-6 py-32 md:py-40 max-w-6xl mx-auto bg-[#050505]">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
            {content[lang].nav.work}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* LEFT: Main Feature */}
          <div className={`flex flex-col justify-center min-h-[280px] md:min-h-[320px] space-y-6 transition-all duration-300 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 transition-all duration-500 min-h-[100px] md:min-h-[140px] whitespace-nowrap">
              {content[lang].projects[activeProject].title}
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6 transition-all duration-500 min-h-[80px] md:min-h-[100px]">
              {content[lang].projects[activeProject].description}
            </p>

            <button className="inline-flex items-center justify-center bg-[#76B900] text-black font-medium text-sm px-4 py-2 w-fit hover:brightness-110 transition">
              {lang === "zh" ? "深入瞭解" : "Learn More"}
            </button>
          </div>

          {/* RIGHT: Visual System Display */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-md h-[260px] relative flex items-center justify-center">

          {/* Resume GPT animation */}
          {activeProject === 0 && (
            <div className="w-full h-full bg-[#0a0a0a] border border-white/10 p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span className="w-2 h-2 bg-[#76B900] rounded-full animate-pulse"></span>
                OpenAI
              </div>
              <div className="text-xs text-gray-500 mb-2">INPUT</div>
              <div
                className={`inline-block text-sm text-gray-300 mb-4 font-mono overflow-hidden whitespace-nowrap border-r-2 border-[#76B900] pr-2 ${typingStage === "input" ? "animate-typing" : ""}`}
                style={{
                  animationDuration: `${"Who is Benjamin Tsao?".length * 0.08}s`,
                  maxWidth: "fit-content"
                }}
              >
                Who is Benjamin Tsao?
              </div>

              <div className="text-xs text-gray-500 mb-2">OUTPUT</div>
              <div
                className={`inline-block text-sm text-white font-mono overflow-hidden whitespace-nowrap border-r-2 border-[#76B900] pr-2 ${typingStage === "output" ? "animate-typing" : "opacity-0"}`}
                style={{
                  animationDuration: `3s`,
                  maxWidth: "fit-content"
                }}
              >
                Benjamin Tsao is a professional specializing in AI systems...
              </div>
            </div>
          )}

              {/* Job System animation */}
              {activeProject === 1 && (
                <div className="w-full h-full flex flex-col items-center justify-center text-sm gap-3">
                  <div className="flex gap-2 text-gray-400">
                    <span>[ LinkedIn ]</span>
                    <span>[ Indeed ]</span>
                    <span>[ API ]</span>
                  </div>

                  <div className="w-[2px] h-6 bg-gray-600"></div>

                  <div className="text-[#76B900] relative">
                    <span className="animate-pulse">Filter</span>
                    <span className="absolute inset-0 blur-md opacity-50 bg-[#76B900]"></span>
                  </div>

                  <div className="w-[2px] h-6 bg-gray-600"></div>

                  <div className="text-white">Top Jobs</div>
                </div>
              )}

              {/* RAG animation */}
              {activeProject === 2 && (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-sm">
                  <div className="text-gray-400">User Query</div>

                  <div className="w-[2px] h-6 bg-gray-600"></div>

                  <div className="relative text-[#76B900]">
                    <span className="animate-pulse">Vector DB</span>
                    <span className="absolute inset-0 blur-lg opacity-40 bg-[#76B900]"></span>
                  </div>

                  <div className="text-xs text-gray-500">(Streamlit UI)</div>

                  <div className="w-[2px] h-6 bg-gray-600"></div>

                  <div className="text-white">LLM Response</div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Bottom interactive NVIDIA-style tabs with progress bar */}
        <div className="mt-16 flex gap-6 overflow-hidden">
          {content[lang].projects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setActiveProject(index);
                  setProgress(0);
                  setTypingStage("input");
                }, 200);
              }}
              className="flex-1 basis-0 min-w-0 cursor-pointer"
            >
              {/* progress bar */}
              <div className="h-[2px] w-full bg-gray-700 mb-3 relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#76B900] transition-[width] duration-50"
                  style={{ width: activeProject === index ? `${progress}%` : "0%" }}
                ></div>
              </div>

              <div className={`text-sm leading-snug transition whitespace-nowrap overflow-hidden text-ellipsis text-center ${activeProject === index ? "text-white" : "text-gray-400"}`}>
                {project.title}
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
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    .animate-typing {
      display: inline-block;
      animation: typing 2.5s steps(30, end) 1 normal both;
    }
    `}
    </style>
    </div>
  );
}
