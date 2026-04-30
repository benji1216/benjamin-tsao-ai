import React, { useEffect, useRef } from "react";
import { useState } from "react";
import resumeImg from "./assets/projects/ai-resume.jpg";
import profileImg from "./assets/profile/profile.png";
import openaiLogo from "./assets/icons/openai.png";
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
        title: "Personal Resume GPT",
        description: "A custom GPT that lets HRs and visitors explore my resume, bio, and project notes through conversation.\n\n• Custom GPT Configuration\n• System Instruction Design\n• Profile Knowledge Curation",
        impact: "Made career materials easier to explore through an interactive profile assistant",
      },
      {
        title: "AI Job Matching System",
        description: "An n8n workflow that finds jobs, filters fit, and sends prioritized opportunities through LINE.\n\n• API Integration (job platforms)\n• n8n Automation Workflow\n• Rule-based Filtering Engine",
        impact: "Reduced manual job searching from over an hour to under five minutes",
      },
      {
        title: "ITCE AI Mentor",
        description: "A Streamlit RAG assistant that turns official ITCE question banks into concept learning and guided practice.\n\n• Topic-aware Retrieval\n• Follow-up Query Handling\n• Streamlit Learning Interface",
        impact: "Converted static exam PDFs into searchable, interactive learning workflows",
      },
      {
        title: "AI Factory Monitoring System",
        description: "An n8n monitoring loop that reads recent machine records and writes AI diagnoses back to Sheets.\n\n• n8n Automation Workflow\n• Google Sheets Data Hub\n• AI Diagnosis Writeback",
        impact: "Built a full loop from telemetry simulation to AI diagnosis and sheet writeback",
      },
      {
        title: "Cross-Cultural Business Strategy",
        singleLineTitle: true,
        description: "A strategy project using cultural frameworks to explain market behavior and guide business decisions.\n\n• Hofstede Framework Analysis\n• Market Behavior Modeling\n• Strategy Translation",
        impact: "Ranked first among eight teams with practical strategy recommendations",
      },
      {
        title: "Technical Product Positioning",
        description: "A product-positioning project that turns technical details into business value and stakeholder messaging.\n\n• Technical-to-Business Translation\n• Value Proposition Design\n• Stakeholder Communication",
        impact: "Handled live English Q&A on pricing, safety, and feasibility with confidence",
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
        title: "互動式 AI 履歷助理",
        description: "以我的個人資料建立的客製化 GPT，讓訪客用問答了解我的背景。\n\n• Custom GPT 設定\n• System Instruction 設計\n• 個人資料知識整理",
        impact: "把靜態個人資料轉成可互動探索的介紹助理",
      },
      {
        title: "AI 職缺自動化系統",
        description: "以 n8n 串接職缺資料，自動篩選適合機會並推播到 LINE。\n\n• API 串接（職缺平台）\n• n8n 自動化流程\n• 規則篩選引擎",
        impact: "將手動找職缺時間從一小時以上降到五分鐘內",
      },
      {
        title: "國貿大會考智慧助教",
        description: "以 Streamlit 與 RAG 將官方題庫轉成觀念學習與解題練習助教。\n\n• 主題導向檢索\n• 追問脈絡理解\n• Streamlit 互動式學習介面",
        impact: "把靜態 PDF 題庫轉成可檢索、可互動的學習流程",
      },
      {
        title: "AI 智慧工廠監控系統",
        description: "以 n8n 讀取近筆機台資料，讓 OpenAI 判斷狀態並回寫 Google Sheet。\n\n• n8n 自動化流程\n• Google Sheet 資料中樞\n• AI 判斷結果回寫",
        impact: "建立從模擬資料到 AI 診斷與表格回寫的完整流程",
      },
      {
        title: "跨文化商業策略分析",
        description: "運用文化模型解釋市場行為，並轉化為可執行商業策略。\n\n• Hofstede 模型分析\n• 市場行為建模\n• 策略轉譯",
        impact: "於八組中獲得第一名，提出具實務價值的策略",
      },
      {
        title: "技術產品市場定位",
        description: "將複雜技術轉成清楚的產品價值、定位與利害關係人溝通。\n\n• 技術轉商業語言\n• 價值主張設計\n• 利害關係人溝通",
        impact: "在全英文簡報中完成價格、安全與可行性問答",
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
  const [fade, setFade] = useState(true);
  // Typing animation sequencing state
  const [typingStage, setTypingStage] = useState("input");
  // Progress animation cycle key
  const [cycle, setCycle] = useState(0);

  // Ref to track manual interaction with the carousel
  const manualTriggerRef = useRef(false);

  // --- TIMELINE CONSTANTS ---
  const TIMELINE = {
    TOTAL: 9000,
    INPUT: "Who is Benjamin Tsao?".length * 80,
    GAP: 500,
  };

  useEffect(() => {
    let timers = [];

    // Reset timeline state
    setTypingStage("input");
    // (REMOVED setCycle((c) => c + 1); // No longer increment here)

    // INPUT → OUTPUT transition
    if (activeProject === 0) {
      const t1 = setTimeout(() => {
        setTypingStage("output");
      }, TIMELINE.INPUT + TIMELINE.GAP);
      timers.push(t1);
    }

    // Project switch
    const t2 = setTimeout(() => {
      if (manualTriggerRef.current) return;

      setFade(false);
      const t3 = setTimeout(() => {
        if (manualTriggerRef.current) return;

        setActiveProject((prev) => {
          const next = (prev + 1) % content[lang].projects.length;
          setCycle((c) => c + 1);
          return next;
        });
        setFade(true);
      }, 200);

      timers.push(t3);
    }, TIMELINE.TOTAL);
    timers.push(t2);

    return () => timers.forEach(clearTimeout);
  }, [activeProject, lang, cycle]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const activeProjectData = content[lang].projects[activeProject];
  const [projectSummary, projectBulletBlock = ""] = activeProjectData.description.split("\n\n");
  const projectBullets = projectBulletBlock
    .split("\n")
    .map((item) => item.replace(/^•\s*/, "").trim())
    .filter(Boolean);
  const featureLabel = lang === "zh" ? "精選專案" : "Featured Project";
  const impactLabel = lang === "zh" ? "成果" : "Impact";
  const forceSingleLineTitle = activeProjectData.singleLineTitle && lang === "en";
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
      <section id="about" data-reveal className="relative overflow-hidden bg-[#0a0a0a] px-4 py-28 md:px-6 md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(118,185,0,0.14),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.045),transparent_38%)]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-[10%] w-px bg-gradient-to-b from-transparent via-[#76B900]/30 to-transparent"></div>
        <div className="pointer-events-none absolute left-[8%] top-20 h-px w-[38vw] bg-gradient-to-r from-transparent via-[#76B900]/35 to-transparent animate-about-signal"></div>

        <div className="relative mx-auto grid max-w-[1040px] grid-cols-1 gap-10 md:grid-cols-[0.92fr_1.08fr] md:gap-14 md:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#76B900]/25 bg-[#76B900]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#76B900]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#76B900] shadow-[0_0_14px_rgba(118,185,0,0.75)]"></span>
              <span>{content[lang].nav.about}</span>
            </div>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-white md:text-[42px]">
              {lang === "zh"
                ? "正在把 AI、自動化和商業理解放進實作裡。"
                : "Learning by building with AI, automation, and business context."}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 md:text-[17px]">
              {lang === "zh"
                ? "我有資訊工程與國際商務背景，目前透過個人專案練習把資料、流程和使用情境串起來。"
                : "I come from computer science and international business, and use personal projects to practice connecting data, workflows, and user needs."}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-[#76B900]/10 blur-3xl"></div>
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#101010]/82 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute left-0 top-10 h-px w-full bg-gradient-to-r from-transparent via-[#76B900]/45 to-transparent animate-about-signal"></div>
                <div className="absolute bottom-14 right-0 h-px w-3/4 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-about-signal-delayed"></div>
              </div>

              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#76B900]">Profile Brief</p>
                  <p className="mt-1 text-sm text-gray-500">{lang === "zh" ? "目前的學習與實作方向" : "Current learning and building direction"}</p>
                </div>
                <span className="rounded-full border border-[#76B900]/25 px-3 py-1 text-xs font-semibold text-[#76B900]">
                  Open
                </span>
              </div>

              <div className="space-y-3">
                {(lang === "zh"
                  ? [
                      ["背景", "資訊工程 × 國際商務"],
                      ["目前方向", "AI 應用、自動化流程、產品理解"],
                      ["工作方式", "先釐清問題，再做可展示的原型"],
                    ]
                  : [
                      ["Background", "Computer science × international business"],
                      ["Focus", "AI applications, automation, product context"],
                      ["Approach", "Clarify the problem, then build a demo"],
                    ]).map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[110px_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 transition hover:border-[#76B900]/35 hover:bg-white/[0.055]">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">{label}</span>
                    <span className="text-sm font-medium leading-relaxed text-gray-200">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {(lang === "zh" ? ["AI 專案", "n8n 自動化", "商業溝通"] : ["AI Projects", "n8n Automation", "Business Communication"]).map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-gray-400">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section separation is now handled by background color alternation */}

      {/* Projects */}
      <section id="projects" data-reveal className="relative overflow-hidden bg-[#050505] px-4 py-32 md:px-6 md:py-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_32%,rgba(118,185,0,0.14),transparent_30%),radial-gradient(circle_at_72%_44%,rgba(255,255,255,0.055),transparent_28%)]"></div>
        <div className="pointer-events-none absolute left-1/2 top-28 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/10 opacity-45 animate-project-orbit"></div>
        <div className="pointer-events-none absolute left-1/2 top-40 h-[360px] w-[760px] -translate-x-1/2 rounded-full border border-[#76B900]/10 opacity-55"></div>
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#76B900]/25 to-transparent"></div>
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] animate-project-data">
          <div className="absolute left-[12%] top-20 h-24 w-px bg-gradient-to-b from-transparent via-[#76B900] to-transparent"></div>
          <div className="absolute right-[18%] top-36 h-32 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <div className="absolute left-[46%] bottom-20 h-28 w-px bg-gradient-to-b from-transparent via-[#76B900] to-transparent"></div>
        </div>

        <div className="relative mx-auto max-w-[1180px]">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
            {content[lang].nav.work}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,470px)_minmax(0,540px)] justify-center gap-8 md:gap-8 items-center">

          {/* LEFT: Main Feature */}
          <div className={`flex flex-col justify-center md:items-end transition-all duration-300 md:h-[450px] ${fade ? "opacity-100 translate-y-0 blur-0 scale-100" : "opacity-0 translate-y-3 blur-sm scale-[0.98]"}`}>
            <div className="flex h-[360px] w-full max-w-[470px] flex-col justify-center gap-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#76B900]">
                  <span className="h-px w-8 bg-[#76B900]"></span>
                  <span>{featureLabel}</span>
                </div>

                <h2
                  className={`${forceSingleLineTitle ? "whitespace-nowrap text-2xl md:text-[28px]" : "project-title-lock text-2xl md:text-[32px]"} font-semibold text-white leading-[1.08] tracking-tight transition-all duration-500 [text-wrap:balance]`}
                >
                  {activeProjectData.title}
                </h2>

                <p className="project-summary-lock max-w-[430px] text-sm leading-[1.65] text-gray-400 transition-all duration-500 md:text-[15px]">
                  {projectSummary}
                </p>
              </div>

              {projectBullets.length > 0 && (
                <div className="flex max-w-[440px] flex-wrap gap-2">
                  {projectBullets.slice(0, 3).map((bullet) => (
                    <span
                      key={bullet}
                      className="max-w-full whitespace-nowrap rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[12px] leading-tight text-gray-300"
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
              )}

              <div className="max-w-[430px] border-t border-white/10 pt-4">
                <div className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76B900]"></span>
                  <div className="min-w-0 space-y-1">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#76B900]">
                      {impactLabel}
                    </div>
                    <p className="project-impact-lock text-sm leading-[1.6] text-gray-300">
                      {activeProjectData.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual System Display */}
          <div className="hidden h-[460px] md:flex items-center justify-start">
            <div
              key={`${activeProject}-${cycle}`}
              className="w-full max-w-[540px] h-[330px] relative flex items-center justify-center animate-project-enter"
            >

          {/* Resume GPT animation */}
          {activeProject === 0 && (
            <div className="relative flex w-full h-full flex-col rounded-xl border border-white/10 bg-[#0a0a0a] p-5 overflow-hidden shadow-[0_0_40px_rgba(118,185,0,0.08)]">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <img
                    src={openaiLogo}
                    alt="OpenAI"
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div className="text-base font-medium text-gray-100">Profile Assistant</div>
                <div className="mt-1 max-w-sm text-xs leading-relaxed text-gray-500">
                  {lang === "zh"
                    ? "回答關於 Benjamin 的背景、AI 經驗與專案。"
                    : "Answers questions about Benjamin's background, AI work, and projects."}
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5">
                <div className="flex gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/20">
                    <img src={openaiLogo} alt="Profile Assistant" className="h-4 w-4 object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 text-[11px] font-medium text-gray-400">Profile Assistant</div>
                    <span
                      className={`inline-block max-w-fit overflow-hidden whitespace-nowrap border-r-2 border-[#76B900] pr-2 font-mono text-sm leading-tight text-white ${typingStage === "output" ? "animate-typing" : "opacity-0"}`}
                      style={{
                        animationDuration: `2.2s`,
                        maxWidth: "fit-content",
                      }}
                    >
                      {lang === "zh"
                        ? "他結合資訊工程、國際商務與 AI 系統實作..."
                        : "He combines CS, business training, and AI system building..."}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <div className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
                  <div className="mb-1 text-[10px] uppercase tracking-[0.14em] text-gray-500">
                    INPUT
                  </div>
                  <div
                    className={`inline-block max-w-fit overflow-hidden whitespace-nowrap border-r-2 border-[#76B900] pr-2 font-mono text-sm leading-tight text-gray-200 ${typingStage === "input" ? "animate-typing" : ""}`}
                    style={{
                      animationDuration: `${"Is Benjamin a good fit for AI roles?".length * 0.045}s`,
                      maxWidth: "fit-content",
                    }}
                  >
                    {lang === "zh" ? "Benjamin 適合 AI 相關職位嗎？" : "Is Benjamin a good fit for AI roles?"}
                  </div>
                </div>
              </div>
            </div>
          )}

              {/* Job System animation */}
              {activeProject === 1 && (
                <div
                  className="relative flex w-full h-full flex-col rounded-xl border border-white/10 bg-[#0a0a0a] p-5 overflow-hidden shadow-[0_0_40px_rgba(118,185,0,0.08)]"
                  style={{
                    backgroundImage: "radial-gradient(rgba(148,163,184,0.18) 1px, transparent 1px)",
                    backgroundSize: "14px 14px",
                  }}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm uppercase tracking-[0.14em] text-[#76B900]">
                        n8n Workflow
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {lang === "zh" ? "104 → OpenAI → LINE" : "104 → OpenAI → LINE"}
                      </div>
                    </div>
                    <span className="rounded-full border border-[#76B900]/30 bg-[#76B900]/10 px-3 py-1 text-xs text-[#76B900]">
                      n8n
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="grid grid-cols-5 gap-3">
                      {[
                        ["T", lang === "zh" ? "排程" : "Trigger", lang === "zh" ? "每日執行" : "Daily"],
                        ["104", "104 API", lang === "zh" ? "搜尋職缺" : "Search"],
                        ["S", "Split Out", lang === "zh" ? "逐筆處理" : "Items"],
                        ["F", lang === "zh" ? "薪資過濾" : "Salary", "Kept"],
                        ["AI", "OpenAI", lang === "zh" ? "回覆文字" : "Response"],
                      ].map(([icon, title, subtitle], index) => (
                        <div
                          key={title}
                          className={`relative min-w-0 rounded-lg border px-2.5 py-3 h-[80px] bg-[#1b1b1b]/90 ${
                            index === 4
                              ? "border-[#76B900]/35 shadow-[0_0_18px_rgba(118,185,0,0.10)]"
                              : "border-white/10"
                          }`}
                        >
                          {index !== 4 && (
                            <span className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 text-xs text-gray-600 animate-flow-arrow">
                              →
                            </span>
                          )}
                          <div className={index === 4 ? "text-sm font-semibold text-[#76B900]" : "text-sm font-semibold text-gray-300"}>
                            {icon}
                          </div>
                          <div className="mt-1 truncate text-xs font-medium text-white">
                            {title}
                          </div>
                          <div className="truncate text-[11px] text-gray-500">
                            {subtitle}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 px-4 text-xs text-gray-500">
                      <div className="h-px flex-1 bg-white/10"></div>
                      <span>{lang === "zh" ? "保留符合條件的職缺" : "Kept jobs continue"}</span>
                      <div className="h-px flex-1 bg-white/10"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        ["F", lang === "zh" ? "過濾不符合" : "Reject filter", lang === "zh" ? "排除職缺" : "Remove"],
                        ["{}", lang === "zh" ? "分類符合" : "Classify", lang === "zh" ? "分裝資料" : "Package"],
                        ["LINE", lang === "zh" ? "推播 LINE" : "Send LINE", lang === "zh" ? "通知用戶" : "Notify"],
                      ].map(([icon, title, subtitle], index) => (
                        <div
                          key={title}
                          className={`relative min-w-0 rounded-lg border px-4 py-3 h-[86px] bg-[#1b1b1b]/90 ${
                            index === 2
                              ? "border-[#76B900]/35 shadow-[0_0_18px_rgba(118,185,0,0.10)]"
                              : "border-white/10"
                          }`}
                        >
                          {index !== 2 && (
                            <span className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 text-xs text-gray-600 animate-flow-arrow">
                              →
                            </span>
                          )}
                          <div className={index === 2 ? "text-sm font-semibold text-[#76B900]" : "text-sm font-semibold text-gray-300"}>
                            {icon}
                          </div>
                          <div className="mt-1 truncate text-sm font-medium text-white">
                            {title}
                          </div>
                          <div className="truncate text-[11px] text-gray-500">
                            {subtitle}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ITCE learning assistant animation */}
              {activeProject === 2 && (
                <div className="relative flex w-full h-full flex-col rounded-xl border border-white/10 bg-[#0a0a0a] p-4 overflow-hidden shadow-[0_0_40px_rgba(118,185,0,0.08)]">
                  <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#76B900] to-transparent animate-[itce-scan_3s_ease-in-out_infinite]"></div>

                  <div className="mb-2.5 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm uppercase tracking-[0.14em] text-[#76B900]">
                        ITCE RAG Workspace
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {lang === "zh" ? "Streamlit 互動學習介面" : "Streamlit learning interface"}
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      {["PDF", "JSONL", "RAG"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#76B900]/30 bg-[#76B900]/10 px-2.5 py-0.5 text-xs text-[#76B900]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                    <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-gray-500">
                      <span>Streamlit Input</span>
                      <span className="text-[#76B900]">
                        {lang === "zh" ? "Starter / Text" : "Starter / Text"}
                      </span>
                    </div>
                    <div className="truncate rounded-md bg-black/25 px-3 py-1.5 font-mono text-[15px] text-gray-200">
                      {lang === "zh"
                        ? "Incoterms 常考哪些觀念？"
                        : "What does Incoterms usually test?"}
                    </div>
                    <div className="mt-1.5 grid grid-cols-3 gap-2 text-center text-xs text-gray-500">
                      {(lang === "zh"
                        ? ["學觀念", "解題", "整理筆記"]
                        : ["Concept", "Solve", "Notes"]
                      ).map((item) => (
                        <span key={item} className="rounded border border-white/10 bg-black/20 px-1.5 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="my-1.5 flex items-center gap-2 text-[11px] text-gray-500">
                    <span className="h-px flex-1 bg-white/10"></span>
                    <span>{lang === "zh" ? "需要題庫時才檢索" : "Retrieve only when needed"}</span>
                    <span className="h-px flex-1 bg-white/10"></span>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.14em] text-gray-500">
                        RAG Pipeline
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#76B900]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#76B900] animate-pulse"></span>
                        INCOTERMS
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      {["PDF", "JSONL", "Vector", lang === "zh" ? "第14-34題" : "Q14-Q34"].map((item, index) => (
                        <div
                          key={item}
                          className={`relative rounded border px-1.5 py-1 ${
                            index === 3
                              ? "border-[#76B900]/35 bg-[#76B900]/10 text-[#76B900]"
                              : "border-white/10 bg-black/20 text-gray-400"
                          }`}
                        >
                          {index !== 3 && (
                            <span className="absolute -right-1.5 top-1/2 z-10 -translate-y-1/2 text-gray-600 animate-flow-arrow">
                              →
                            </span>
                          )}
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto grid grid-cols-4 gap-2 pt-2 pb-0.5 text-center text-xs">
                    {(lang === "zh"
                      ? ["題目解析", "觀念教學", "常考觀念", "互動教學"]
                      : ["Analysis", "Teaching", "Frequent", "Tutoring"]
                    ).map((item) => (
                      <div key={item} className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-gray-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Smart factory monitoring animation */}
              {activeProject === 3 && (
                <div
                  className="relative w-full h-full rounded-xl border border-white/10 bg-[#0a0a0a] p-5 overflow-hidden shadow-[0_0_40px_rgba(118,185,0,0.08)]"
                  style={{
                    backgroundImage: "radial-gradient(rgba(148,163,184,0.16) 1px, transparent 1px)",
                    backgroundSize: "14px 14px",
                  }}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm uppercase tracking-[0.14em] text-[#76B900]">
                        Smart Factory Loop
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {lang === "zh" ? "n8n → Sheets → OpenAI" : "n8n → Sheets → OpenAI"}
                      </div>
                    </div>
                    <span className="rounded-full border border-[#76B900]/30 bg-[#76B900]/10 px-2.5 py-0.5 text-xs text-[#76B900]">
                      {lang === "zh" ? "回寫" : "Writeback"}
                    </span>
                  </div>

                  <div className="grid grid-cols-[1.02fr_1fr] gap-3">
                    <div className="rounded-lg border border-white/10 bg-[#1b1b1b]/90 p-3.5">
                      <div className="mb-2 flex items-center justify-between">
                        <div>
                          <div className="text-xs uppercase tracking-[0.12em] text-gray-500">
                            Machine Data
                          </div>
                          <div className="mt-1 text-lg font-semibold text-white">M-03 / Etch</div>
                        </div>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-xs text-amber-300">
                          !
                        </div>
                      </div>

                      <div className="space-y-2">
                        {[
                          ["TEMP", "82.4 C", "w-[82%]"],
                          ["PRESS", "2.1 bar", "w-[58%]"],
                          ["VIB", "0.38 g", "w-[72%]"],
                        ].map(([label, value, width]) => (
                          <div key={label}>
                            <div className="mb-1 flex justify-between text-xs text-gray-400">
                              <span>{label}</span>
                              <span>{value}</span>
                            </div>
                            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                              <div className={`h-full origin-left rounded-full bg-[#76B900] ${width} animate-meter-fill`}></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 rounded border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-xs text-amber-200">
                        {lang === "zh" ? "Rule Status: 注意" : "Rule Status: Warning"}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-lg border border-white/10 bg-[#1b1b1b]/90 p-3.5">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-xs uppercase tracking-[0.12em] text-gray-500">
                            Google Sheet
                          </span>
                          <span className="text-xs text-[#76B900]">
                            {lang === "zh" ? "近 5 筆" : "Last 5"}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
                          {["M-01", "M-02", "M-03"].map((machine) => (
                            <div
                              key={machine}
                              className={`rounded border px-1.5 py-1 ${
                                machine === "M-03"
                                  ? "border-[#76B900]/35 bg-[#76B900]/10 text-[#76B900]"
                                  : "border-white/10 bg-black/20 text-gray-500"
                              }`}
                            >
                              {machine}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg border border-[#76B900]/30 bg-[#76B900]/10 p-3.5">
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="text-xs uppercase tracking-[0.12em] text-[#76B900]">
                            OpenAI Diagnosis
                          </span>
                          <span className="h-2 w-2 rounded-full bg-[#76B900] animate-pulse"></span>
                        </div>
                        <div className="text-lg font-semibold text-white">
                          {lang === "zh" ? "AI Status: 注意" : "AI Status: Attention"}
                        </div>
                        <div className="mt-1 truncate text-xs text-gray-400">
                          {lang === "zh" ? "Action: 檢查冷卻與壓力" : "Action: Check cooling / pressure"}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-[11px] text-gray-500">
                    <span className="h-px flex-1 bg-white/10"></span>
                    {["row_id", "ai_status", "action"].map((field) => (
                      <span key={field} className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5">
                        {field}
                      </span>
                    ))}
                    <span className="h-px flex-1 bg-white/10"></span>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Bottom interactive NVIDIA-style tabs with progress bar */}
        <div className="mt-16 flex gap-6 overflow-hidden">
          {content[lang].projects.map((project, index) => (
            <div
              onClick={() => {
                manualTriggerRef.current = true;

                setFade(false);
                setTimeout(() => {
                  setActiveProject(index);
                  setTypingStage("input");
                  setCycle((c) => c + 1);
                  setFade(true);

                  // allow auto-rotation again AFTER this cycle
                  setTimeout(() => {
                    manualTriggerRef.current = false;
                  }, 50);

                }, 200);
              }}
              className="flex-1 basis-0 min-w-0 cursor-pointer"
            >
              {/* progress bar */}
              <div className="h-[2px] w-full bg-gray-700 mb-3 relative overflow-hidden">
                {activeProject === index ? (
                  <div
                    key={`${index}-${cycle}`}
                    className="absolute top-0 left-0 h-full bg-[#76B900]"
                    style={{
                      animation: `progress-bar ${TIMELINE.TOTAL}ms linear forwards`
                    }}
                  ></div>
                ) : (
                  <div className="absolute top-0 left-0 h-full w-0"></div>
                )}
              </div>

              <div className={`text-sm leading-snug transition whitespace-nowrap overflow-hidden text-ellipsis text-center ${activeProject === index ? "text-white" : "text-gray-400"}`}>
                {project.title}
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
      {/* Section separation is now handled by background color alternation */}

      {/* Skills */}
      <section id="skills" data-reveal className="relative w-full overflow-hidden bg-[#0a0a0a]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16] animate-mesh-move"
          style={{
            backgroundImage: "radial-gradient(rgba(118,185,0,0.45) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        ></div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#76B900]/10 blur-3xl"></div>

        <div className="relative px-4 md:px-6 py-32 md:py-40 max-w-[1040px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-14 items-start">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#76B900]">
                <span className="h-px w-8 bg-[#76B900]"></span>
                <span>{content[lang].nav.skills}</span>
              </div>
              <h2 className="max-w-sm text-3xl md:text-[38px] font-semibold leading-tight tracking-tight text-white">
                {lang === "zh" ? "我正在累積 AI、自動化與專案實作相關能力" : "I’m building skills in AI, automation, and project execution."}
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
                {lang === "zh"
                  ? "也嘗試把這些能力用在實際問題上。"
                  : "I’m also applying them to practical problems."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(lang === "zh"
                ? [
                    ["AI Systems", ["提示詞工程", "RAG 應用", "OpenAI API"]],
                    ["Automation", ["n8n 流程", "API 串接", "資料整理"]],
                    ["Business", ["專案管理", "商業分析", "跨部門協作"]],
                  ]
                : [
                    ["AI Systems", ["Prompt Engineering", "RAG Applications", "OpenAI API"]],
                    ["Automation", ["n8n Workflows", "API Integration", "Data Handling"]],
                    ["Business", ["Project Management", "Business Analysis", "Cross-functional Work"]],
                  ]).map(([group, items]) => (
                <div key={group} className="group border border-white/10 bg-[#0f0f0f]/85 p-5 backdrop-blur transition hover:border-[#76B900]/40 hover:bg-white/[0.055]">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#76B900]">{group}</h3>
                    <span className="h-2 w-2 rounded-full bg-[#76B900] opacity-60 transition group-hover:opacity-100"></span>
                  </div>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="h-px w-5 bg-white/20"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section separation is now handled by background color alternation */}

      {/* Education */}
      <section id="education" data-reveal className="relative overflow-hidden bg-[#050505]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(118,185,0,0.2),transparent_30%),radial-gradient(circle_at_78%_70%,rgba(255,255,255,0.08),transparent_32%)]"></div>
        <div className="pointer-events-none absolute inset-0 opacity-40 animate-edu-bands bg-[linear-gradient(115deg,transparent_0%,transparent_42%,rgba(118,185,0,0.12)_49%,transparent_56%,transparent_100%)] bg-[length:240%_240%]"></div>
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[820px] -translate-x-1/2 opacity-65">
          <div className="absolute left-0 top-[18%] h-px w-full rotate-[-8deg] bg-gradient-to-r from-transparent via-[#76B900]/65 to-transparent shadow-[0_0_18px_rgba(118,185,0,0.35)]"></div>
          <div className="absolute left-0 top-[54%] h-px w-full rotate-[7deg] bg-gradient-to-r from-transparent via-white/35 to-transparent shadow-[0_0_18px_rgba(255,255,255,0.2)]"></div>
          <div className="absolute left-[18%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#76B900] shadow-[0_0_26px_rgba(118,185,0,0.9)] animate-edu-node"></div>
          <div className="absolute right-[20%] top-[58%] h-2.5 w-2.5 rounded-full bg-white/80 shadow-[0_0_24px_rgba(255,255,255,0.7)] animate-edu-node-delayed"></div>
        </div>

        <div className="relative mx-auto grid max-w-[1040px] grid-cols-1 items-start gap-10 px-4 py-32 md:grid-cols-[0.75fr_1.25fr] md:gap-16 md:px-6 md:py-40">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#76B900]">
              <span className="h-px w-8 bg-[#76B900]"></span>
              <span>{content[lang].education.title}</span>
            </div>
            <h2 className="max-w-sm text-3xl md:text-[38px] font-semibold leading-tight tracking-tight text-white">
              {lang === "zh" ? "橫跨資訊工程與國際商務的訓練" : "Training across computer science and international business."}
            </h2>
          </div>

          <div key={lang} className="relative space-y-5">
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-white/10"></div>
            {[
              {
                period: "2019 — 2024",
                school: content[lang].education.ncuName,
                program: `${content[lang].education.ncuProgram}\n${content[lang].education.ncuDegree}`,
                desc: content[lang].education.ncuDesc,
              },
              {
                period: "2025 — 2026",
                school: content[lang].education.itiName,
                program: content[lang].education.itiProgram,
                desc: content[lang].education.itiDesc,
              },
            ].map((item) => (
              <div key={item.school} className="relative pl-9">
                <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border border-[#76B900] bg-[#050505] shadow-[0_0_16px_rgba(118,185,0,0.35)]"></span>
                <div className="relative overflow-hidden border border-white/10 bg-[#101010]/80 px-5 py-5 shadow-[0_22px_70px_rgba(0,0,0,0.25)] backdrop-blur transition hover:border-[#76B900]/35 hover:bg-white/[0.055]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#76B900]/45 to-transparent"></div>
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">{item.school}</h3>
                      <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-gray-500">{item.program}</p>
                    </div>
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-[#76B900]">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section separation is now handled by background color alternation */}

      {/* Certification */}
      <section id="certification" data-reveal className="relative w-full overflow-hidden bg-[#0a0a0a]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22] animate-mesh-move"
          style={{
            backgroundImage:
              "linear-gradient(rgba(118,185,0,0.38) 1px, transparent 1px), linear-gradient(90deg, rgba(118,185,0,0.38) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        ></div>
        <div className="pointer-events-none absolute left-[-10%] top-12 h-72 w-72 rounded-full bg-[#76B900]/16 blur-3xl animate-cert-glow"></div>
        <div className="pointer-events-none absolute bottom-8 right-[-8%] h-80 w-80 rounded-full bg-[#76B900]/12 blur-3xl animate-cert-glow-delayed"></div>
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#76B900]/70 to-transparent animate-cert-scan"></div>
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#76B900]/25 to-transparent"></div>

        <div className="relative px-4 md:px-6 py-32 md:py-40 max-w-[1040px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[0.78fr_1.22fr] gap-10 md:gap-14 items-start">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#76B900]">
                <span className="h-px w-8 bg-[#76B900]"></span>
                <span>{content[lang].nav.certification}</span>
              </div>
              <h2 className="max-w-sm text-3xl md:text-[38px] font-semibold leading-tight tracking-tight text-white">
                {lang === "zh" ? "持續補強 AI、專案與實作能力" : "Credentials that reinforce AI, project, and execution skills."}
              </h2>
            </div>

            <div className="border-y border-white/10">
              {content[lang].certification.map((item) => (
                <div key={item} className="group grid grid-cols-[28px_1fr] items-center gap-4 border-b border-white/10 py-5 last:border-b-0">
                  <span className="h-2 w-2 rounded-full bg-[#76B900] shadow-[0_0_16px_rgba(118,185,0,0.45)] transition group-hover:scale-125"></span>
                  <h3 className="text-sm font-medium leading-relaxed text-gray-200 transition group-hover:text-white">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section separation is now handled by background color alternation */}

      {/* Contact */}
      <section id="contact" data-reveal className="relative overflow-hidden bg-[#050505] px-4 py-32 md:px-6 md:py-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(118,185,0,0.18),transparent_32%),linear-gradient(180deg,transparent,rgba(118,185,0,0.06))]"></div>
        <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-[#76B900]/10"></div>
        <div className="pointer-events-none absolute left-1/2 top-10 h-px w-[min(760px,80vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#76B900]/55 to-transparent"></div>

        <div className="relative mx-auto flex max-w-[920px] flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#76B900]/25 bg-[#76B900]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#76B900]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#76B900] shadow-[0_0_14px_rgba(118,185,0,0.8)]"></span>
            <span>Contact</span>
          </div>

          <h2 className="w-full max-w-[860px] text-[clamp(3rem,6.2vw,5.4rem)] font-semibold leading-[0.95] tracking-tight text-white">
            AI First,
            <span className="block text-[#76B900]">Human Centered</span>
          </h2>

          <p key={`contact-desc-${lang}`} className="mt-8 min-h-[58px] w-full max-w-[620px] px-3 text-center text-lg leading-relaxed text-gray-400 md:text-xl">
            {content[lang].contact.desc}
          </p>

          <div className="mt-12 flex w-full max-w-2xl flex-col gap-3 border border-white/10 bg-white/[0.035] p-3 sm:flex-row sm:items-center sm:justify-between">
            <a
              key={`contact-button-${lang}`}
              href="mailto:benjamintsao2000@gmail.com"
              className="group relative inline-flex min-h-[50px] shrink-0 items-center justify-center gap-3 overflow-hidden bg-[#76B900] px-6 text-sm font-semibold text-black hover:bg-[#8bdc00]"
            >
              <span className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-white/35 opacity-0 transition duration-500 group-hover:left-[120%] group-hover:opacity-100"></span>
              <span className="relative">{content[lang].contact.button}</span>
              <span className="relative transition group-hover:translate-x-1">→</span>
            </a>
            <div className="flex min-h-[50px] flex-1 flex-col justify-center px-2 text-center text-sm leading-relaxed text-gray-500 sm:text-right">
              <span className="font-medium text-gray-300">benjamintsao2000@gmail.com</span>
              <span>AI / Automation / Product</span>
            </div>
          </div>
        </div>
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
    [data-reveal] {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 720ms ease, transform 720ms ease;
    }
    [data-reveal].is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    @keyframes project-enter {
      from { opacity: 0; transform: translateY(18px) scale(0.985); filter: blur(8px); }
      to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
    }
    .animate-project-enter {
      animation: project-enter 520ms ease both;
    }
    @keyframes flow-arrow {
      0%, 100% { opacity: 0.28; transform: translate(0, -50%); }
      50% { opacity: 0.95; transform: translate(4px, -50%); }
    }
    .animate-flow-arrow {
      animation: flow-arrow 1.6s ease-in-out infinite;
    }
    @keyframes meter-fill {
      from { transform: scaleX(0.18); opacity: 0.55; }
      to { transform: scaleX(1); opacity: 1; }
    }
    .animate-meter-fill {
      animation: meter-fill 900ms ease-out both;
    }
    @keyframes project-orbit {
      0%, 100% { opacity: 0.26; transform: translateX(-50%) rotate(0deg) scale(1); }
      50% { opacity: 0.52; transform: translateX(-50%) rotate(8deg) scale(1.06); }
    }
    @keyframes project-data {
      0%, 100% { opacity: 0.08; transform: translateY(-18px); }
      50% { opacity: 0.22; transform: translateY(18px); }
    }
    .animate-project-orbit {
      animation: project-orbit 12s ease-in-out infinite;
    }
    .animate-project-data {
      animation: project-data 7s ease-in-out infinite;
    }
    @keyframes about-signal {
      0%, 100% { opacity: 0.18; transform: translateX(-18px); }
      50% { opacity: 0.75; transform: translateX(18px); }
    }
    .animate-about-signal {
      animation: about-signal 6s ease-in-out infinite;
    }
    .animate-about-signal-delayed {
      animation: about-signal 7s ease-in-out infinite reverse;
    }
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
	    .animate-typing {
	      display: inline-block;
	      animation: typing steps(30, end) 1 normal both;
	    }
	    .project-title-lock,
	    .project-summary-lock,
	    .project-impact-lock {
	      display: -webkit-box;
	      -webkit-box-orient: vertical;
	      overflow: hidden;
	    }
	    .project-title-lock {
	      -webkit-line-clamp: 2;
	    }
	    .project-summary-lock {
	      -webkit-line-clamp: 2;
	    }
	    .project-impact-lock {
	      -webkit-line-clamp: 2;
	    }
	    @keyframes progress-bar {
	      from { width: 0% }
	      to { width: 100% }
    }
	    @keyframes itce-scan {
	      0%, 100% { opacity: 0.25; transform: translateY(18px); }
	      50% { opacity: 1; transform: translateY(238px); }
	    }
	    @keyframes cert-scan {
	      0%, 100% { transform: translateY(-110px); opacity: 0.22; }
	      50% { transform: translateY(110px); opacity: 0.85; }
	    }
	    .animate-cert-scan {
	      animation: cert-scan 5s ease-in-out infinite;
	    }
	    @keyframes cert-glow {
	      0%, 100% { opacity: 0.45; transform: translate3d(0, 0, 0) scale(1); }
	      50% { opacity: 0.9; transform: translate3d(36px, 20px, 0) scale(1.18); }
	    }
	    .animate-cert-glow {
	      animation: cert-glow 7s ease-in-out infinite;
	    }
	    .animate-cert-glow-delayed {
	      animation: cert-glow 8s ease-in-out infinite reverse;
	    }
	    @keyframes edu-node {
	      0%, 100% { opacity: 0.35; transform: translate3d(0, 0, 0) scale(1); }
	      50% { opacity: 1; transform: translate3d(18px, -10px, 0) scale(1.35); }
	    }
	    @keyframes edu-bands {
	      0% { background-position: 0% 50%; opacity: 0.28; }
	      50% { background-position: 100% 50%; opacity: 0.55; }
	      100% { background-position: 0% 50%; opacity: 0.28; }
	    }
	    .animate-edu-node {
	      animation: edu-node 6s ease-in-out infinite;
	    }
	    .animate-edu-node-delayed {
	      animation: edu-node 7s ease-in-out infinite reverse;
	    }
    .animate-edu-bands {
      animation: edu-bands 8s ease-in-out infinite;
    }
	    @media (prefers-reduced-motion: reduce) {
	      [data-reveal],
	      .animate-project-enter,
	      .animate-flow-arrow,
	      .animate-meter-fill {
	        animation: none;
	        opacity: 1;
	        transform: none;
	        filter: none;
	        transition: none;
	      }
	    }
	    `}
    </style>
    </div>
  );
}
