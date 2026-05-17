export const projects = [
  {
    title: "QueueForge – Distributed Job Queue",
    tech: [
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
    ],
    date: "Mar 2026 – Apr 2026",
    src: "/images/queueForge.png",
    bullets: [
      "Built a multi-tenant SaaS backend infrastructure supporting organization-based tenant isolation within a single application instance.",
      "Implemented database-driven RBAC and middleware-based authorization for organizations, members, and projects.",
      "item Designed modular REST APIs for authentication, team invitations, feature gating, and usage tracking; documented with Swagger (OpenAPI).",
    ],
    link: "https://github.com/Devrikh/Queueforge",
  },
  {
    title: "Tenovate - Multi-Tenant SaaS Backend",
    tech: ["TypeScript", "Express.js", "PostgreSQL", "Prisma", "JWT"],
    date: "Jan 2026 – Feb 2026",
    src: "/images/tenovate.jpg",
    bullets: [
      "Built a multi-tenant SaaS backend infrastructure supporting organization-based tenant isolation within a single application instance.",
      "Implemented database-driven RBAC and middleware-based authorization for organizations, members, and projects.",
      "item Designed modular REST APIs for authentication, team invitations, feature gating, and usage tracking; documented with Swagger (OpenAPI).",
    ],
    link: "https://tenovate.onrender.com/api/v1/docs/",
  },
  // {
  //   title: "Blockchain-Based 5G Video Streaming",
  //   tech: ["React.js", "IPFS (Pinata)", "Docker", "Hardhat"],
  //   date: "Feb 2025 – Apr 2025",
  //   src: "/images/stream.jpg",
  //   bullets: [
  //     "Developed a decentralized video streaming platform with IPFS-based storage, enabling uploads up to 500 MB and playback through a MERN frontend.",
  //     "Simulated a 5G-enabled CDN using 3 Dockerized edge nodes for distributed content delivery.",
  //     "Integrated Ethereum smart contracts for video purchase and access control.",
  //   ],
  //   link: "https://github.com/Devrikh/2024GR15CS462_Blockchain-Based-5G-CDN",
  // },
  // {
  //   title: "Blockchain-Based Supply Chain for Fisheries",
  //   tech: ["Hardhat", "Solidity", "Express.js", "CSS"],
  //   date: "Aug 2024 – Dec 2024",
  //   src: "/images/fish.jpg",
  //   bullets: [
  //     "Engineered a blockchain solution to enhance traceability and transparency in the Indian fisheries supply chain.",
  //     "Deployed smart contracts in Solidity, reducing errors by 20 and increasing trust in the process.",
  //     "Integrated a MERN-based interface enabling 10+ stakeholders to track quotas, pricing, and logistics.",
  //     "Optimized gas fees and accelerated contract execution by 30.",
  //   ],
  //   link: "https://github.com/Devrikh/FishChain.git",
  // },
];


export const experience = [
  {
    title: "Research Intern",
    org: "IIITV",
    date: "Dec 2025 – May 2026",
    bullets: [
      "ML inference at key issuance made access control slow; designed a server-side eligibility bulletin precomputing Random Forest scores at registration, cutting runtime ML overhead to 0ms.",
      "Crypto, blockchain, and ML services had no unified layer; built a Node.js API gateway integrating a C/PBC engine, Hyperledger Besu, and a Flask ML microservice via JSON-IPC and REST.",
      "System had no automated proof of correctness; wrote 95 tests across 5 suites covering encrypt, decrypt, key issuance, and access-denial flows end-to-end."
    ],
  },
  {
    title: "Research Intern",
    org: "IIITV",
    date: "May 2025 – Jul 2025",
    bullets: [
      "Implemented the DKCAE scheme using the PBC library, enabling dynamic key updates with zero secure transmissions.",
      "Achieved up to 15 percent better performance compared to ABE-based schemes.",
      "Co-authored a research paper accepted for presentation at ICISS 2025.",
    ],
  },
];

