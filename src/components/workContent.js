export const projects = [
  {
    title: "QueueForge",
    subtitle: "Distributed Job Queue",
    tech: ["TypeScript", "BullMQ", "Redis", "PostgreSQL", "Docker"],
    date: "Mar 2026",
    src: "/images/queueForge.png",
    bullets: [
      "In-process execution blocked API throughput. Decoupled 3 BullMQ worker types via Redis-backed queue, enabling horizontal scaling with 0 API-layer changes.",
      "Worker crashes caused silent job loss. Built a Dead Letter Queue with exponential backoff and PostgreSQL-persisted state, dropping unrecoverable failures to 0.",
      "Failure paths were untested against real infra. Wrote 18 tests (Jest, Supertest, testcontainers) over live Redis and PostgreSQL covering the full job and DLQ lifecycle.",
    ],
    link: "https://github.com/Devrikh/Queueforge",
  },
  {
    title: "Tenovate",
    subtitle: "Multi-Tenant SaaS Backend",
    tech: ["TypeScript", "Express.js", "PostgreSQL", "Prisma", "JWT"],
    date: "Jan 2026",
    src: "/images/tenovate.jpg",
    bullets: [
      "Per-controller auth checks made security easy to skip. Built a 5-layer middleware pipeline (JWT, org, RBAC, feature gating, usage), reducing controller auth logic to 0 lines.",
      "Hardcoded roles required redeployment on every change. Implemented database-driven RBAC resolved at runtime, cutting policy updates to 1 DB write.",
      "Tenant isolation lacked automated verification. Wrote 30 integration tests over live PostgreSQL across 3 subscription tiers, catching all boundary violations.",
    ],
    link: "https://tenovate.onrender.com/api/v1/docs/",
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

export const experience = [
  {
    role: "Research Intern",
    org: "IIITV",
    date: "Dec 2025 – May 2026",
    bullets: [
      "ML inference at key issuance made access control slow. Designed a server-side eligibility bulletin pre-computing Random Forest scores at registration, cutting runtime ML overhead to 0ms.",
      "Crypto, blockchain, and ML services had no unified layer. Built a Node.js API gateway integrating a C/PBC engine, Hyperledger Besu, and a Flask ML microservice via JSON-IPC and REST.",
      "System had no automated proof of correctness. Wrote 95 tests across 5 suites covering encrypt, decrypt, key issuance, and access-denial flows end-to-end.",
    ],
  },
  {
    role: "Research Intern",
    org: "IIITV",
    date: "May 2025 – Jul 2025",
    publication: "DKCAE · ICISS 2025 · Springer",
    publicationLink:
      "https://www.springerprofessional.de/en/dynamic-key-constant-aggregate-encryption-dkcae-for-secure-data-/51826050",
    bullets: [
      "Existing schemes required O(n) secure transmissions per revocation. Co-authored DKCAE (accepted ICISS 2025), reducing revocation transmission overhead to 0.",
      "No working prototype existed for the scheme. Implemented DKCAE in C using the PBC library, enabling live key updates and partial revocation without modifying other users' keys.",
    ],
  },
];
