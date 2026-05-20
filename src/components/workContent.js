export const projects = [
  {
    title: "QueueForge",
    subtitle: "Distributed Job Queue",
    tech: ["TypeScript", "BullMQ", "Redis", "PostgreSQL", "Docker"],
    date: "Mar 2026",
    src: "/images/queueForge.png",
    bullets: [
      "In-process execution blocked API throughput. Decoupled 3 BullMQ worker types via Redis-backed queue, enabling horizontal scaling without API-layer changes.",
      "Worker crashes caused silent job loss. Built a Dead Letter Queue with 3-attempt exponential backoff and PostgreSQL-persisted state, making all failures recoverable and traceable.",
      "Failure paths were untested against real infra. Wrote 18 tests (Jest, Supertest, testcontainers) over live Redis and PostgreSQL covering the full job and DLQ lifecycle.",
    ],
    link: "https://github.com/Devrikh/Queueforge",
    github: "https://github.com/Devrikh/Queueforge",
    live: null,
  },
  {
    title: "Tenovate",
    subtitle: "Multi-Tenant SaaS Backend",
    tech: ["TypeScript", "Express.js", "PostgreSQL", "Prisma", "JWT"],
    date: "Jan 2026",
    src: "/images/tenovate.jpg",
    bullets: [
      "Per-controller auth checks made security easy to skip. Built a 5-layer middleware pipeline (JWT, org, RBAC, feature gating, usage), ensuring controllers receive pre-validated context with no inline auth logic.",
      "Hardcoded roles required redeployment on every change. Implemented database-driven RBAC resolved at runtime, making permission updates a single DB write with no redeployment.",
      "Tenant isolation lacked automated verification. Wrote 30 integration tests over live PostgreSQL across 3 subscription tiers, catching all boundary violations.",
    ],
    link: "https://tenovate.onrender.com/api/v1/docs/",
    github: "https://github.com/Devrikh/Tenovate",
    live: "https://tenovate.onrender.com/api/v1/docs/",
  },
];

export const certificates = [
  {
    title: "Develop GenAI Apps with Gemini and Streamlit",
    issuer: "Google Cloud",
    level: "Intermediate Skill Badge",
    link: "https://www.skills.google/public_profiles/9ba876d0-9c29-4978-9438-79ac79f7827f/badges/9013761?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    icon: "google",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    level: "Certificate of Competency",
    link: "https://learn.nvidia.com/certificates?id=YG2FbPikRXOt74AUaAVTJA",
    icon: "nvidia",
  },
];

// Publication first — strongest selling point
export const experience = [
  {
    role: "Research Intern",
    org: "IIITV",
    date: "May 2025 – Jul 2025",
    tech: ["C", "PBC Library"],
    publication: "DKCAE · ICISS 2025 · Springer Nature Switzerland",
    publicationLink:
      "https://www.springerprofessional.de/en/dynamic-key-constant-aggregate-encryption-dkcae-for-secure-data-/51826050",
    bullets: [
      'Co-authored and published "Dynamic Key-Constant Aggregate Encryption (DKCAE) for Secure Data Sharing in Contemporary Computing" at ICISS 2025, introducing a novel encryption scheme for efficient partial and full user revocation with no secure communication overhead.',
      "No reference implementation existed for DKCAE. Built a working prototype in C using the PBC library, validating correctness and outperforming existing KAE schemes in revocation and update cost.",
      "Scheme had no performance benchmarks against real workloads. Conducted a comparative analysis against existing dynamic KAE schemes, demonstrating lower dynamic update cost and zero secure transmission overhead during revocation.",
    ],
  },
  {
    role: "Research Intern",
    org: "IIITV",
    date: "Dec 2025 – May 2026",
    tech: ["Node.js", "C", "Flask", "Docker", "Blockchain"],
    bullets: [
      "Attribute eligibility was self-reported and checked via live ML inference at key issuance. Designed a server-side Public Bulletin pre-computing Random Forest scores for 6 attribute types at registration, making key issuance a fast synchronous lookup with no ML in the critical path.",
      "Three independent subsystems (C/PBC crypto engine, Hyperledger Besu, Flask ML service) had no unified interface. Built a Node.js/Express API gateway integrating all 3 via IPC, JSON-RPC, and REST, validated by 95 tests across 5 suites.",
    ],
  },
];
