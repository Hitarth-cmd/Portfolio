export const Bio = {
  name: "Hitarth Malviya",
  roles: ["Full Stack Developer"],
  description:
    "I am a Full Stack Developer focused on building practical, user-centric products with clean architecture and reliable APIs. I enjoy turning real-world requirements into performant web and mobile experiences.",
  github: "https://github.com/Hitarth-cmd",
  resume: "/Final_Resume.pdf",
  linkedin: "https://www.linkedin.com/in/hitarth-malviya-6a8b9b23a/",
  email: "hitarth.malviya22@gmail.com",
  phone: "+91 6351450613",
};

export const about = {
  summary:
    "I am a Computer Science and Engineering student at Charusat University with hands-on experience in MERN stack development and strong fundamentals in APIs, databases, and software problem solving. I build scalable full stack applications, experiment with AI-assisted solutions, and continuously improve through hackathons, internships, and production-style project work.",
};

export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      { name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Bootstrap", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "REST APIs", image: "https://img.icons8.com/color/96/api-settings.png" },
      { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "NPM", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
      { name: "JSON", image: "https://cdn-icons-png.flaticon.com/512/136/136526.png" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "SQLite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      {
        name: "Cisco Packet Tracer",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
      },
      {
        name: "Data Structures",
        image: "https://img.icons8.com/color/96/flow-chart.png",
      },
      {
        name: "Basic Machine Learning",
        image: "https://img.icons8.com/color/96/artificial-intelligence.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://img.icons8.com/color/96/company.png",
    role: "MERN Stack Development Intern",
    company: "Brainybeam Info-Tech Pvt Ltd, Ahmedabad",
    date: "May 2025",
    desc: "Completed a 30-day internship specializing in MERN stack development. Contributed to real-world development tasks under the guidance of senior engineers and strengthened practical skills in React.js, Node.js, and API-driven workflows.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
  },
];

export const projects = [
  {
    id: 0,
    title: "Hostel Management System",
    date: "2025",
    description:
      "A full-stack platform to streamline hostel operations with student registration, room allocation, and fee tracking. Built role-based flows for students and administrators to improve operational transparency and reduce manual workload.",
    image: "/images/projects/hostel_black.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    category: "web app",
    github: "https://github.com/Hitarth-cmd/hostel-management-system",
    webapp: "https://github.com/Hitarth-cmd/hostel-management-system",
  },
  {
    id: 1,
    title: "Care Companion App",
    date: "2025",
    description:
      "A Flutter-based accessibility-first mobile app for elderly users featuring medicine reminders, alarm-enabled to-do lists, curated news, and light games. Designed with gesture-friendly interactions to improve usability and day-to-day independence.",
    image: "/images/projects/care_blacked.png",
    tags: ["Flutter", "Dart", "Mobile UI", "Notifications"],
    category: "android app",
    github: "https://github.com/Hitarth-cmd/care-companion-app",
    webapp: "https://github.com/Hitarth-cmd/care-companion-app",
  },
  {
    id: 2,
    title: "Talento-AI",
    date: "2025",
    description:
      "An AI-powered job discovery platform that enables users to explore jobs, inspect detailed listings, and save opportunities. Implemented intelligent matching backed by a SQL data layer and REST APIs for relevant and fast recommendations.",
    image: "/images/projects/talento_blacked.png",
    tags: ["Next.js", "SQL", "REST APIs", "AI Features"],
    category: "machine learning",
    github: "https://github.com/Hitarth-cmd/talento-ai",
    webapp: "https://github.com/Hitarth-cmd/talento-ai",
  },
  {
    id: 3,
    title: "Mini Projects Collection",
    date: "2024 - 2025",
    description:
      "A focused collection of practical builds including a Spotify Clone, Amazon Clone, Rock Paper Scissor Game, Currency Converter using live API integration, and this Portfolio Website. These projects strengthened frontend architecture, API integration, and rapid prototyping skills.",
    image: "/images/projects/clone_black.png",
    tags: ["React.js", "JavaScript", "API Integration", "UI Development"],
    category: "web app",
    github: "https://github.com/Hitarth-cmd",
    webapp: "https://github.com/Hitarth-cmd",
  },
];

export const achievements = [
  "Top 75 out of 2200+ teams in Odoo Hackathon 2025.",
  "Participated in Data Quest Hackathon 2025 at Charusat University.",
  "Built a real-time meeting sentiment analysis system.",
  "Maintained a CGPA of 9.17 in B.Tech Computer Science & Engineering.",
];

export const education = [
  {
    id: 0,
    img: "https://img.icons8.com/color/96/university.png",
    school: "Charusat University, Gujarat",
    date: "2023 - 2027",
    grade: "CGPA: 9.17",
    desc: "Pursuing B.Tech in Computer Science & Engineering with consistent academic performance and active participation in hackathons and technical projects.",
    degree: "B.Tech Computer Science & Engineering",
  },
  {
    id: 1,
    img: "https://img.icons8.com/color/96/school-building.png",
    school: "Don Bosco High School",
    date: "2022 - 2023",
    grade: "Percentile: 86.15",
    desc: "Completed Class XII Science with strong fundamentals in analytical and quantitative subjects.",
    degree: "Class XII Science",
  },
  {
    id: 2,
    img: "https://img.icons8.com/color/96/school-building.png",
    school: "Don Bosco High School",
    date: "2020 - 2021",
    grade: "Percentile: 96.83",
    desc: "Completed Class X with excellent academic performance and foundational problem-solving skills.",
    degree: "Class X",
  },
];
