// // Edit these to match your real projects. Add `href` (live site) or `repo` (GitHub) to show links.
// const projects = [
//   {
//     title: "CBMS",
//     kind: "services",
//     slug: "cbms",
//     role: "Software Engineer (started as Trainee, Dec 2021)",
//     period: "2021 – Present",
//     overview: "CBMS is a large enterprise platform built as a set of .NET services with a Next.js frontend. Services talk to each other through Kafka, run in Docker containers and store data in PostgreSQL. Add more detail here: the problem it solves, who uses it, and the scale it runs at.",
//     category: "Enterprise microservices platform",
//     description: "A large enterprise system built as a set of .NET services with a Next.js frontend, using Kafka for service-to-service communication.",
//     contributions: [
//       "Built and maintained backend services on .NET Core 5 and PostgreSQL.",
//       "Implemented Kafka messaging between microservices.",
//       "Optimized queries, API responses and service interactions.",
//     ],
//     technologies: [".NET Core 5", "PostgreSQL", "Kafka", "Docker", "Next.js"],
//   },
//   {
//     title: "TU EMIS",
//     kind: "dashboard",
//     slug: "tu-emis",
//     role: "Software Engineer",
//     period: "2022 – Present",
//     overview: "TU EMIS is a management information system with a .NET Core backend and a React interface. Add more detail here: what the system manages, who uses it, and the hardest problem you solved.",
//     category: "Institutional information system",
//     description: "A management information system with a .NET Core backend and a React interface.",
//     contributions: [
//       "Worked across backend and frontend delivery.",
//       "Built React interfaces for data-heavy workflows.",
//     ],
//     technologies: [".NET Core", "React.js", "REST APIs"],
//   },
//   {
//     title: "This website",
//     kind: "site",
//     slug: "portfolio-website",
//     role: "Designer and developer",
//     period: "2026",
//     overview: "The site you are looking at: a Next.js and Tailwind CSS portfolio with a built-in blog, RSS feed, dark and light themes, and case-study pages, all statically generated.",
//     category: "Personal site and blog",
//     description: "My portfolio and engineering notes, built with Next.js and Tailwind CSS, with a built-in blog and RSS feed.",
//     contributions: [
//       "Designed and built end to end.",
//       "Statically generated for fast loads and good SEO.",
//     ],
//     technologies: ["Next.js", "React", "Tailwind CSS"],
//     repo: "https://github.com/yourusername",
//   },
// ];

// export default projects;



// Edit these to match your real projects.
// Add `href` for a live site or `repo` for GitHub when available.

const projects = [
  /*
   * ============================================================
   * ITS — IRD
   * ============================================================
   */

  {
    title: "ITS — IRD",

    kind: "services",

    slug: "its-ird",

    role: "Software Engineer",

    period: "Current",

    overview:
      "ITS is a large enterprise system for the Inland Revenue Department (IRD). I work across .NET Core backend services, React.js interfaces, Oracle databases and microservices, contributing to APIs, business workflows, data access and distributed application components.",

    category: "Enterprise system · Inland Revenue Department",

    description:
      "A large-scale enterprise system for the Inland Revenue Department, built with .NET Core, React.js, Oracle and microservices.",

    contributions: [
      "Develop and maintain .NET Core backend services and REST APIs.",

      "Build React.js interfaces for complex tax and enterprise workflows.",

      "Work with Oracle databases, SQL queries, stored procedures and data-access layers.",

      "Contribute to microservices and service-to-service communication.",

      "Implement and integrate frontend, backend and database-driven business workflows.",

      "Troubleshoot and optimize APIs, database operations and service interactions.",

      "Work with enterprise application requirements and translate complex business rules into maintainable software.",
    ],

    technologies: [
      ".NET Core",
      "C#",
      "React.js",
      "Oracle",
      "Microservices",
      "REST APIs",
      "Dapper",
      "Kafka",
    ],
  },

  /*
   * ============================================================
   * CBMS
   * ============================================================
   */

  {
    title: "CBMS",

    kind: "services",

    slug: "cbms",

    role: "Software Engineer · Trainee Software Engineer",

    period: "December 2021 – Present",

    overview:
      "CBMS is a large enterprise platform built around .NET services and modern web applications. My work involved backend services, frontend applications, PostgreSQL data access, Kafka-based communication and Docker-based development and deployment.",

    category: "Enterprise microservices platform",

    description:
      "A large enterprise platform built with .NET services and modern web applications, using Kafka for distributed communication and PostgreSQL for data storage.",

    contributions: [
      "Built and maintained backend services using .NET Core 5 and PostgreSQL.",

      "Developed and integrated REST APIs for enterprise business workflows.",

      "Implemented Kafka messaging between microservices.",

      "Worked with Dapper and database-access layers.",

      "Optimized database queries, API responses and service interactions.",

      "Contributed to frontend applications using React.js and Next.js.",

      "Used Docker for consistent development and deployment environments.",
    ],

    technologies: [
      ".NET Core 5",
      "C#",
      "PostgreSQL",
      "Dapper",
      "Kafka",
      "Docker",
      "React.js",
      "Next.js",
    ],
  },

  /*
   * ============================================================
   * TU EMIS
   * ============================================================
   */

  {
    title: "TU EMIS",

    kind: "dashboard",

    slug: "tu-emis",

    role: "Software Engineer",

    period: "Previous project",

    overview:
      "TU EMIS is an enterprise management information system for Tribhuvan University. I contributed across backend services, React interfaces and database-driven workflows, working with enterprise application requirements and data-heavy modules.",

    category: "Enterprise information system · Tribhuvan University",

    description:
      "An enterprise management information system for Tribhuvan University, combining .NET Core backend services, React interfaces and database-driven workflows.",

    contributions: [
      "Worked across backend and frontend development.",

      "Developed and maintained .NET Core backend services.",

      "Built React.js interfaces for data-heavy enterprise workflows.",

      "Integrated REST APIs between frontend applications and backend services.",

      "Worked with database queries and data-access operations.",

      "Contributed to application maintenance, debugging and feature development.",

      "Worked with enterprise business requirements and complex application workflows.",
    ],

    technologies: [
      ".NET Core",
      "C#",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "Dapper",
    ],
  },

  /*
   * ============================================================
   * PORTFOLIO WEBSITE
   * ============================================================
   */

  {
    title: "This website",

    kind: "site",

    slug: "portfolio-website",

    role: "Designer and Developer",

    period: "2026",

    overview:
      "A personal engineering portfolio designed to present my professional journey, enterprise systems experience, technical skills, projects and engineering notes through a premium editorial interface.",

    category: "Personal site · Portfolio",

    description:
      "A premium developer portfolio built with Next.js and Tailwind CSS, featuring case studies, engineering experience, a blog and responsive dark and light themes.",

    contributions: [
      "Designed and developed the website end to end.",

      "Created a responsive editorial-style interface with a custom design system.",

      "Built reusable React components for sections, projects, experience and content.",

      "Implemented dark and light themes.",

      "Built project case-study pages and engineering content sections.",

      "Optimized the site structure for performance, accessibility and SEO.",
    ],

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
    ],

    repo: "https://github.com/yourusername",
  },
];

export default projects;