export const profile = {
  name: 'Shravya Munugala',
  tagline: 'Hi, I’m Shravya.',
  intro: [
    'I’m a CS master’s student at Brown University. I spend most of my time building AI systems and then making sure they actually keep working: a debugger for LLM agents, a RAG pipeline that notices when it’s gone stale, an AI mental-health companion that ended up with a patent.',
    'When I’m not debugging agents, I’m usually deep in a fantasy series, something with at least five books and a fandom wiki, or planning a trip. I plan trips the way I plan projects: over-researched, under-budgeted.',
  ],
  projectsIntro:
    'A running list of what I’ve been building. Everything links to real code, and a couple of things have live demos you can poke at.',
  workIntro:
    'Internships and research jobs so far, plus where I’ve studied. The short version: I like teams where I can own something end to end.',
  researchIntro:
    'The papers and the patent that came out of my projects. Each one links to the real thing, not a PDF on my laptop.',
  skillsIntro:
    'Some of the languages, tools, and topics I’ve picked up along the way, through classes, internships, and mostly through building the things on the projects page.',
  currently: [
    ['building', 'AgentRewind, a flight recorder for LLM agents'],
    ['reading', 'Fourth Wing, Rebecca Yarros'],
    ['watching', 'Game of Thrones (again)'],
    ['noticing', 'a clear dragon theme in the two lines above'],
  ],
  email: 'shravya_munugala@brown.edu',
  github: 'https://github.com/Shravya29M',
  linkedin: 'https://linkedin.com/in/shravya29M',
  status: 'Right now: SWE intern at Kilowant + research at Brown.',
  resume: '/resume.pdf',
};

// Pins for the scrapbook map. Every pin gets a one-line memory (`note`)
// shown on hover. Country/state-level visits are pinned on a representative city.
export const places = [
  // India
  { name: 'Hyderabad', lat: 17.39, lng: 78.49, note: 'Home. Still the city whose food wins every debate.' },
  { name: 'Chennai', lat: 13.08, lng: 80.27, note: 'Where I spent my college years.' },
  { name: 'Kerala', lat: 9.93, lng: 76.26, note: 'Backwaters, coconut everything, zero regrets.' },
  { name: 'Andhra Pradesh', lat: 16.51, lng: 80.65, note: 'Spice levels I still brag about surviving.' },
  { name: 'Delhi', lat: 28.61, lng: 77.21, note: 'History every hundred meters, chaos in between.' },
  { name: 'Rajasthan', lat: 26.91, lng: 75.79, note: 'Forts, deserts, and unreasonable sunsets.' },
  { name: 'Maharashtra', lat: 19.08, lng: 72.88, note: 'Mumbai moves fast. I mostly just watched.' },
  { name: 'Uttar Pradesh', lat: 27.18, lng: 78.02, note: 'Yes, the Taj is worth the hype.' },
  { name: 'Goa', lat: 15.49, lng: 73.83, note: 'Beach brain: activated.' },
  { name: 'Karnataka', lat: 12.97, lng: 77.59, note: 'Bengaluru traffic taught me patience.' },
  // Europe
  { name: 'France', lat: 48.86, lng: 2.35, note: 'Paris looked exactly like the movies promised.' },
  { name: 'Nice', lat: 43.71, lng: 7.26, note: 'The sea really is that blue.' },
  { name: 'Rome', lat: 41.9, lng: 12.5, note: 'Probably consumed more gelato than water.' },
  { name: 'Switzerland', lat: 47.37, lng: 8.54, note: 'Convinced me trains should always be this punctual.' },
  { name: 'Germany', lat: 48.14, lng: 11.58, note: 'Pretzels the size of my head.' },
  { name: 'Prague', lat: 50.08, lng: 14.44, note: 'A city that looks permanently lit for a film.' },
  { name: 'Vienna', lat: 48.21, lng: 16.37, note: 'Cafés that take dessert very, very seriously.' },
  { name: 'Salzburg', lat: 47.81, lng: 13.04, note: 'The hills are, in fact, alive.' },
  { name: 'Hallstatt', lat: 47.56, lng: 13.65, note: 'Looked too pretty to be real.' },
  { name: 'Budapest', lat: 47.5, lng: 19.04, note: 'The parliament at night made me forget to take a photo.' },
  { name: 'Croatia', lat: 42.65, lng: 18.09, note: 'Accidentally toured half the Game of Thrones sets.' },
  { name: 'Bosnia', lat: 43.86, lng: 18.41, note: 'Quietly the most underrated stop of the trip.' },
  { name: 'Montenegro', lat: 42.42, lng: 18.77, note: 'Small country, unreasonable scenery.' },
  // Asia & the Middle East
  { name: 'Thailand', lat: 13.76, lng: 100.5, note: 'Street food completely spoiled me.' },
  { name: 'Singapore', lat: 1.35, lng: 103.82, note: 'So clean it made me self-conscious.' },
  { name: 'Malaysia', lat: 3.14, lng: 101.69, note: 'Came for the towers, stayed for the food courts.' },
  { name: 'Dubai', lat: 25.2, lng: 55.27, note: 'Everything is the world’s biggest something.' },
  { name: 'Abu Dhabi', lat: 24.45, lng: 54.38, note: 'The Grand Mosque earns the word grand.' },
  { name: 'Baku', lat: 40.41, lng: 49.87, note: 'Everyone asks why. It was great, that’s why.' },
  // Americas
  { name: 'Providence', lat: 41.82, lng: -71.41, note: 'Where I accidentally became an AI researcher.' },
  { name: 'Boston', lat: 42.36, lng: -71.06, note: 'Autumn here almost makes the winter forgivable.' },
  { name: 'New York City', lat: 40.71, lng: -74.01, note: 'Loud, chaotic, and somehow charming anyway.' },
  { name: 'New Jersey', lat: 40.22, lng: -74.75, note: 'The quiet counterweight to the city next door.' },
  { name: 'Punta Cana', lat: 18.58, lng: -68.4, note: 'Did absolutely nothing. Five stars.' },
];

export const placesIntro =
  'The rest of this site is what I build. This page is the scrapbook: the places, books, shows, and frankly concerning amounts of coffee that happen around the building.';

// The little card next to the coffee one. Easy to update, meant to go stale.
export const placesCurrently = [
  ['reading', 'Fourth Wing, Rebecca Yarros'],
  ['watching', 'Game of Thrones (again)'],
  ['building', 'AgentRewind, between espressos'],
  ['dreaming of', 'Japan in cherry-blossom season'],
];

export const coffeeStatus = [
  ['currently', 'iced latte'],
  ['favorite', 'Vietnamese iced coffee'],
  ['stance', 'iced > hot, no exceptions'],
  ['coding fuel', '100%'],
];

export const funStats = [
  ['coffee consumed while coding', '∞'],
  ['books bought', 'more than books finished'],
  ['“just one more episode”', 'a number I won’t disclose'],
  ['bugs fixed', 'hopefully more than I created'],
];

export const randomLikes = [
  '☕ coffee',
  '📚 bookstores',
  '🌧 rainy weather',
  '✈ airport windows',
  '🌅 sunsets',
  '🧋 cute cafés',
  '🎧 music while coding',
  '📖 fantasy with a map in the front',
];

// Spines on the shelf. Muted colors only; the last book leans.
export const shelfBooks = [
  { title: 'A Game of Thrones', author: 'George R.R. Martin', color: '#8da28a' },
  { title: 'The Name of the Wind', author: 'Patrick Rothfuss', color: '#b98f76' },
  { title: 'Mistborn', author: 'Brandon Sanderson', color: '#7e8ca3' },
  { title: 'Six of Crows', author: 'Leigh Bardugo', color: '#c9b48a' },
  { title: 'Fourth Wing', author: 'Rebecca Yarros', color: '#a48a9e' },
];

export const shows = [
  { title: 'Game of Thrones', note: 'rewatch number three, no regrets' },
  { title: 'House of the Dragon', note: 'for the dragons, obviously' },
  { title: 'Grey’s Anatomy', note: 'the comfort show, all umpteen seasons' },
];

export const experience = [
  {
    role: 'Software Engineering Intern',
    company: 'Kilowant',
    date: 'Summer 2026',
    summary:
      'I’m building the admin dashboard for an energy procurement platform, and the data plumbing behind it.',
    bullets: [
      'Built an Angular/TypeScript admin dashboard for an energy procurement platform, consolidating buyer, supplier, advisor, contract, and utility data into operational analytics views.',
      'Developed a Node.js data pipeline to clean, transform, and validate production SQL exports into lightweight JSON datasets consumed by the frontend.',
      'Refactored backend services with typed models and repository abstractions to support migration from static data snapshots to live Microsoft SQL Server APIs.',
      'Built an AI-assisted email generation workflow using LLM APIs, prompt templates, and backend validation for personalized customer outreach.',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'Brown University',
    date: 'Feb 2026 - Present',
    summary:
      'I check whether parents can actually find special-education resources on 900+ school district websites, using browser automation that navigates the way a real person would.',
    bullets: [
      'Built a Python/Selenium automation pipeline validating whether Special Education resources are discoverable through real user navigation across 900+ school district websites.',
      'Designed grey-box navigation tests that inspect rendered DOM state, expand dynamic menus, replay user interactions, and verify end-to-end navigation paths.',
      'Developed automated quality checks and failure classification for stale domains, WAF challenge pages, unreachable sites, and non-discoverable content.',
      'Integrated axe-core accessibility audits and WCAG compliance reporting; debugged race conditions, dynamic DOM changes, and DNS instability in the crawler.',
    ],
  },
  {
    role: 'Cloud Computing Intern',
    company: 'Pentabrains Solutions',
    date: 'Apr - Jul 2025',
    summary: 'Serverless APIs on AWS, and the CI/CD pipelines around them.',
    bullets: [
      'Designed and deployed serverless REST APIs with AWS Lambda and API Gateway, reducing query latency by 20%.',
      'Built CI/CD pipelines with GitHub Actions and CloudFormation for reliable production deployments.',
      'Contributed to sprint planning, code reviews, and live production debugging on a 6-person Agile team.',
    ],
  },
  {
    role: 'Research Intern',
    company: 'Center for Healthcare Advancement, Innovation and Research',
    date: 'May - Dec 2024',
    summary: 'Deep-learning pipelines for 3D medical imaging.',
    bullets: [
      'Implemented scalable TensorFlow deep-learning pipelines for processing and classifying 3D medical imaging data.',
      'Built preprocessing, training, and evaluation workflows to handle heterogeneous datasets reliably.',
      'Optimized experimentation pipelines for cross-validation and reproducible performance analysis.',
    ],
  },
];

export const projects = [
  {
    slug: 'agentrewind',
    title: 'AgentRewind',
    tag: 'Open source',
    date: 'Jul 2026',
    stack: 'Python · SQLite · GitHub Actions · PyPI',
    oneLiner:
      'A flight recorder for LLM agents. Record a run once, replay it for free, and diff two runs to see exactly where the behavior changed.',
    links: [
      { label: 'PyPI', href: 'https://pypi.org/project/llm-run-recorder/' },
      { label: 'GitHub', href: 'https://github.com/Shravya29M/agentrewind' },
    ],
    gif: 'https://raw.githubusercontent.com/Shravya29M/agentrewind/main/docs/demo.gif',
    gifAlt: 'Recording two agent runs and diffing them in the terminal',
    tryIt: 'pip install llm-run-recorder',
    sections: [
      {
        heading: 'Background',
        paragraphs: [
          '“It worked yesterday. Why is it different today?” is the defining debugging problem of agent development. An agent run is a chain of nondeterministic LLM calls and tool invocations, so when behavior changes after a prompt tweak or a model update, there is usually no way to reproduce the old run, let alone pinpoint where the new one went off course.',
          'Existing tracing tools show you what happened. AgentRewind also lets you re-execute what happened and compare runs structurally. It is published on PyPI as llm-run-recorder, with a stdlib-only core.',
        ],
      },
      {
        heading: 'Project Goal',
        bullets: [
          'Record every LLM and tool call an agent makes with near-zero setup: no account, no server, traces stored locally.',
          'Replay a recorded run deterministically: no API calls, no cost, no nondeterminism.',
          'Diff two runs structurally and surface the first point where their behavior diverged.',
          'Keep the core dependency-free so it can be dropped into any Python agent codebase.',
        ],
      },
      {
        heading: 'How It Works',
        paragraphs: [
          'A @traced decorator and a trace() context manager build a span tree for each run. Provider instrumentation for OpenAI- and Anthropic-compatible clients captures requests, responses, latency, tool calls, and token usage automatically, and everything persists to a local SQLite database.',
          'Replay mode serves recorded responses back to the agent instead of hitting the API, which makes runs reproducible and free to re-execute. The diff engine compares two span trees structurally (same tools called? same arguments? same order?) and reports the first behavioral divergence, which is far more useful than a text diff of transcripts when reviewing a prompt or tool change.',
          'For production traffic, an opt-in redaction policy recursively strips API keys, tokens, and other credential-shaped data from trace metadata and payloads before anything touches disk, balancing reproducibility with privacy.',
        ],
      },
      {
        heading: 'Testing & Release',
        paragraphs: [
          'The project is tested the way I would want a debugging tool to be tested: automated unit and integration suites cover synchronous, asynchronous, streaming, replay, and CLI workflows. GitHub Actions runs CI on every push, and releases to PyPI are automated.',
        ],
      },
      {
        heading: 'What Worked and What Didn’t',
        bullets: [
          'Worked: keeping the core stdlib-only made installation trivial and removed a whole class of dependency conflicts.',
          'Worked: local-first SQLite storage: no infrastructure to stand up before you can start debugging.',
          'Hard: matching spans between two runs that took different paths is genuinely difficult; the diff heuristics took several iterations before divergence reports felt trustworthy.',
          'Hard: capturing streaming responses cleanly without altering the behavior of the code under trace.',
        ],
      },
      {
        heading: 'Future Work',
        bullets: [
          'Broader provider instrumentation beyond OpenAI- and Anthropic-compatible clients.',
          'A richer web trace viewer for exploring span trees and diffs visually.',
          'A pytest plugin so recorded runs can serve as regression fixtures in CI.',
        ],
      },
    ],
  },
  {
    slug: 'driftguard',
    title: 'DriftGuard',
    tag: 'ML systems',
    date: '2026',
    stack: 'Python · FastAPI · FAISS · Prometheus',
    oneLiner:
      'A RAG pipeline that watches itself after deployment. It can tell “users are asking about new things” apart from “my index has gone stale”, and it only re-indexes for the second one.',
    links: [
      { label: 'GitHub', href: 'https://github.com/Shravya29M/RAG-Drift_Detection' },
    ],
    tryIt: `git clone https://github.com/Shravya29M/RAG-Drift_Detection && cd RAG-Drift_Detection
docker-compose up --build -d
curl -X POST "http://localhost:8000/drift/simulate?windows=3"  # watch an incident open`,
    sections: [
      {
        heading: 'Background',
        paragraphs: [
          'Most RAG portfolio projects stop right after deployment. This one focuses on what happens after it goes live: user queries evolve, the indexed corpus ages, and retrieval quality quietly degrades with nobody watching.',
          'The key design insight is that drift alone never means the index is stale. Users asking about a new topic the corpus already covers is not a failure, so alerting on embedding drift by itself just produces false alarms. DriftGuard gates every escalation on retrieval quality.',
        ],
      },
      {
        heading: 'Project Goal',
        bullets: [
          'Detect when incoming query traffic drifts away from the distribution the index was built for.',
          'Distinguish benign topic shifts (drift with healthy retrieval scores) from genuine staleness (drift with degraded retrieval).',
          'Escalate in stages (log, webhook alert, automatic re-index) without paging anyone for a false alarm.',
          'Make the whole loop observable and testable, not a black box.',
        ],
      },
      {
        heading: 'Methodology',
        paragraphs: [
          'Documents are ingested, chunked, and embedded into a FAISS index; queries retrieve top-k chunks that are passed to an LLM through a provider router. In the background, a drift monitor projects query embeddings onto a PCA basis fitted on the indexed corpus, calibrates a baseline from the first window of real traffic, and compares each subsequent 50-query window against it with per-dimension two-sample KS tests (Bonferroni-corrected).',
          'Hysteresis prevents single noisy windows from raising alarms. When drift is sustained, escalation is quality-gated: healthy retrieval scores mean a benign topic shift (webhook alert, baseline recalibrated, no re-index), while degraded scores mean staleness and trigger an automatic re-index. The FAISS store supports A/B index swaps under a lock so re-indexing never blocks live queries.',
        ],
      },
      {
        heading: 'Architecture',
        pre: `  Documents (PDF / MD / TXT / URL)
          │
          ▼
  ┌───────────────┐       ┌─────────────────────────────────────┐
  │   Ingestion   │       │           Drift Monitor             │
  │  parse →      │       │                                     │
  │  chunk →      │  vecs │  query vecs                         │
  │  embed        │──────▶│  ──────────▶ DriftScheduler         │
  └──────┬────────┘       │                  │ queue            │
         │ chunks+vecs    │                  ▼                  │
         ▼                │           DriftDetector             │
  ┌─────────────┐         │        (rolling window,             │
  │  FAISSStore │         │         PCA + KS test,              │
  │  (A/B swap, │         │         hysteresis)                 │
  │  RLock)     │◀────────│                  │ DriftResult      │
  └──────┬──────┘ reindex │                  ▼                  │
         │                │            DriftAlarm               │
         │ top-k search   │    SOFT ──▶ W&B log                 │
         ▼                │    HARD ──▶ webhook POST            │
  ┌─────────────┐         │    AUTO ──▶ re-index callback       │
  │  Retriever  │         └─────────────────────────────────────┘
  └──────┬──────┘
         │ chunks              ┌──────────────────────────┐
         ▼                     │  CLI (rag ingest/query/  │
  ┌─────────────┐              │      drift-status/       │
  │  LLMRouter  │              │      reindex)            │
  │  (OpenAI /  │              └──────────────────────────┘
  │  Anthropic) │
  └──────┬──────┘
         │ answer
         ▼
    FastAPI  :8000`,
      },
      {
        heading: 'Testing & Results',
        paragraphs: [
          '245 unit and integration tests cover the retrieval pipeline, API contracts, scheduler concurrency, alert escalation, and remediation workflows. An offline evaluation framework benchmarks retrieval quality against production embeddings and FAISS indexes, and incident tooling includes alert deduplication, cooldown windows, Prometheus metrics, and operator-guided re-ingestion. A drift-simulation endpoint pushes off-topic traffic through the monitor to demo the full escalation path end to end.',
        ],
      },
      {
        heading: 'What Worked and What Didn’t',
        bullets: [
          'Worked: quality-gating the escalation. It is the difference between a monitoring system people trust and one they mute.',
          'Worked: hysteresis across windows killed nearly all single-window false positives.',
          'Didn’t: the embedding model loads on construction, so the first request after a cold start has multi-second latency and model weights are fetched at runtime instead of being baked into the Docker image.',
          'Didn’t: the in-process queue and APScheduler pattern means ingest and drift-check jobs do not survive process restarts.',
        ],
      },
      {
        heading: 'Future Work',
        bullets: [
          'Bake embedding weights into the image at build time and gate readiness on a warm model.',
          'Replace the in-process queue with a real task queue (Celery + Redis or ARQ) so jobs survive restarts and scale horizontally.',
          'Move drift history from SQLite to Postgres to support multiple API replicas.',
        ],
      },
    ],
  },
  {
    slug: 'elyssa',
    title: 'Elyssa',
    tag: 'Research · Patent',
    date: '2024 - 2025',
    stack: 'FastAPI · Docker · Kubernetes · LLMs',
    oneLiner:
      'An AI mental-health companion that reads both your words and your face. Five microservices on Kubernetes, and it earned a patent.',
    links: [
      { label: 'Live demo', href: 'https://elyssa-ijm1.onrender.com' },
      { label: 'GitHub', href: 'https://github.com/Shravya29M/Elyssa' },
    ],
    image: {
      src: '/images/elyssa.png',
      alt: 'The Elyssa live demo: chat UI with a simulated facial emotion selector and conflict detector',
      caption:
        'The live demo. The free tier can’t run the GPU vision model, so a dropdown stands in for your face, but the sentiment and conflict-detection pipeline behind it is real.',
    },
    tryIt: `git clone https://github.com/Shravya29M/Elyssa.git && cd Elyssa
docker compose -f docker-compose.mock.yml up --build   # full 5-service stack, no GPU needed
# open http://localhost:7860`,
    sections: [
      {
        heading: 'Background',
        paragraphs: [
          'Mental-health support is hard to access, and text-only chatbots miss half the signal: how someone looks when they say “I’m fine” often matters more than the words. Elyssa combines real-time facial emotion detection with text sentiment analysis to deliver context-aware, empathetic responses, and flags conflicts between the two channels.',
          'The engineering bet was that this should be built like a production system, not a notebook demo. The work led to Indian Patent No. 202541093582A (Interactive System for Emotional Well-Being and Assisted Care, Oct 2025).',
        ],
      },
      {
        heading: 'Project Goal',
        bullets: [
          'Fuse vision-based emotion detection and text sentiment into a single conversational response pipeline.',
          'Architect the system so the heavy GPU inference scales independently of the lightweight services.',
          'Make every failure mode observable and recoverable. This is a domain where silent failures are unacceptable.',
        ],
      },
      {
        heading: 'Architecture',
        paragraphs: [
          'Elyssa runs as five FastAPI services on Kubernetes behind an NGINX ingress: a Gradio frontend, a gateway orchestrator, a vision inference service (Llama 3.2-11B Vision for emotion detection), a sentiment service, and a response service (a mental-health-tuned Llama 3.2-3B). The gateway owns the orchestration logic (circuit breakers, retries, and timeout budgets), and each service has its own horizontal pod autoscaler, so the GPU-heavy inference service scales separately from everything else.',
          'A docker-compose mock mode runs the full five-service stack locally with mocked LLMs in about two minutes, which is what made the system practical to develop and test without a GPU.',
        ],
      },
      {
        heading: 'Reliability & Testing',
        paragraphs: [
          'Regression tests cover API contracts, prompt construction, health endpoints, and failure recovery using mocked LLM dependencies, with GitHub Actions running the suite in CI. Readiness probes and Prometheus metrics make the services observable in the cluster.',
          'The most instructive bug: a sentiment regression caused by generic lexicons misclassifying common mental-health language (phrases like “I’m struggling” scored as far more negative than users meant them). The fix was domain-specific sentiment rules, plus regression tests so it stays fixed.',
        ],
      },
      {
        heading: 'What Worked and What Didn’t',
        bullets: [
          'Worked: the microservice split: model swaps and scaling decisions never required touching the rest of the system.',
          'Worked: mock-first local development kept the iteration loop fast despite two large models in the architecture.',
          'Didn’t: the free-tier live demo cannot run the GPU vision model, so facial emotion is a dropdown stand-in there (the sentiment and conflict-detection pipeline is real).',
          'Hard: keeping per-turn latency acceptable while every message crosses multiple service boundaries.',
        ],
      },
      {
        heading: 'Future Work',
        bullets: [
          'A GPU deployment of the full vision pipeline for the public demo (an HF Space build exists in the repo).',
          'Longitudinal conversation memory with clinical-safety guardrails.',
        ],
      },
    ],
  },
  {
    slug: 'viz-public-trust',
    title: 'VizPublicTrust',
    tag: 'Research',
    date: 'Dec 2025',
    stack: 'JavaScript · D3.js · UMAP',
    oneLiner:
      'An interactive way to explore a big public-trust survey: UMAP clusters plus little radial glyphs. We tested it on 25 real people and it genuinely was faster.',
    links: [
      { label: 'Live demo', href: 'https://viz.gordanmilovac.com' },
      { label: 'GitHub', href: 'https://github.com/Shravya29M/VizPublicTrust' },
      { label: 'Full write-up', href: 'https://www.gordanmilovac.com/posts/PublicTrust' },
    ],
    image: {
      src: '/images/vizpublictrust.png',
      alt: 'The UMAP explorer view: agencies plotted by trust score with warmth-colored glyphs',
      caption:
        'The UMAP explorer in the live demo. Every circle is a federal agency, colored by perceived warmth, positioned by trust.',
    },
    sections: [
      {
        heading: 'Background',
        paragraphs: [
          'Public-trust survey data is high-dimensional (dozens of institutional-trust dimensions per respondent), and the standard tools (parallel coordinates, heatmaps) make cross-cluster comparison painful. This was the final project for Brown’s Interdisciplinary Scientific Visualization course (CSCI 2370), built with course teammates.',
        ],
      },
      {
        heading: 'Project Goal',
        bullets: [
          'Let users explore the cluster structure of survey respondents rather than read walls of bar charts.',
          'Make two clusters comparable at a glance.',
          'Validate the design empirically instead of assuming it works.',
        ],
      },
      {
        heading: 'Methodology',
        paragraphs: [
          'A Python preprocessing step computes a UMAP projection of the survey responses; the frontend is vanilla JavaScript and D3. Each respondent is drawn as a custom radial glyph compact enough to compare side by side, and brushing with linked highlighting connects the projection view to a per-respondent detail panel.',
        ],
      },
      {
        heading: 'User Study & Results',
        paragraphs: [
          'We ran a user study (n=25) comparing the radial + UMAP system against a baseline view on comparison tasks. Task completion was 18.5% faster with our design. Modest, but real. It changed how I think about validating visualization choices.',
        ],
      },
      {
        heading: 'What Worked and What Didn’t',
        bullets: [
          'Worked: the radial encoding made cluster-to-cluster comparison genuinely fast.',
          'Hard: keeping radial glyphs legible at small sizes took many design iterations.',
          'Hard: tuning UMAP parameters so clusters stayed stable across reloads.',
        ],
      },
    ],
  },
];

export const otherProjects = [
  {
    title: 'MeshGPT',
    tag: 'Course project',
    date: '2026',
    description:
      'Generative 3D mesh modeling, my final project for CSCI 2470 (Deep Learning) at Brown.',
    href: 'https://github.com/Shravya29M/MeshGPT',
  },
  {
    title: 'Alzheimer’s Detection',
    tag: 'Research',
    date: '2024',
    description:
      'Classifying Alzheimer’s from MRI scans with a DenseNet201 + VGG16 ensemble. My first published paper (IEEE ICICNIS 2024).',
    href: 'https://github.com/Shravya29M/Alzeihmer-s-Detection',
  },
  {
    title: 'GenoCrypt',
    tag: 'Research',
    date: '2024',
    description:
      'Hiding encrypted data in DNA codon sequences, the basis of the GenoCryptNet paper at IEEE ICSTSDG 2024.',
    href: 'https://github.com/Shravya29M/Genocrypt',
  },
  {
    title: 'SentioSphere',
    tag: 'Computer vision',
    date: '2024',
    description:
      'Teaching a model to read emotions from faces: the computer-vision experiments that later fed into Elyssa.',
    href: 'https://github.com/Shravya29M/SentioSphere-Decoding-Emotions-Through-Vision',
  },
  {
    title: 'AutoNewsSummarizer',
    tag: 'NLP',
    date: '2023',
    description:
      'Paste a news URL, get a readable summary in under a second. BERT picks the important sentences, BART rewrites them.',
    href: 'https://github.com/Shravya29M/Abstractive-Text-Summarization',
  },
  {
    title: 'IPFS for Healthcare',
    tag: 'Prototype',
    date: '2023',
    description:
      'A prototype storing encrypted health records on IPFS, because patient data deserves better than a single point of failure.',
    href: 'https://github.com/Shravya29M/IPFS-For-Healthcare',
  },
  {
    title: 'Schizophrenia Detection',
    tag: 'ML',
    date: '2023',
    description:
      'Detecting schizophrenia from clinical data with classical ML. The dataset was small, so interpretability mattered more than fancy models.',
    href: 'https://github.com/Shravya29M/Schizophrenia-Detection',
  },
];

export const skills = [
  { group: 'Languages', items: 'Python, Java, C++, JavaScript/TypeScript, SQL' },
  {
    group: 'Testing & Automation',
    items: 'Pytest, Selenium, GitHub Actions, CI/CD, REST APIs, integration / unit / regression testing',
  },
  {
    group: 'AI Systems',
    items: 'LLMs, RAG, prompt engineering, LangChain, Hugging Face, FAISS',
  },
  {
    group: 'Frameworks & Tools',
    items: 'FastAPI, Angular, Node.js, Docker, Kubernetes, Prometheus, Git',
  },
  { group: 'Cloud', items: 'AWS (Lambda, EC2, API Gateway, S3)' },
];

export const topics = [
  {
    group: 'AI & Machine Learning',
    items:
      'Deep learning, NLP, computer vision, retrieval-augmented generation, agent systems, model evaluation & drift detection',
  },
  {
    group: 'Systems & Infrastructure',
    items:
      'Microservice architecture, container orchestration, observability, fault tolerance (retries, circuit breakers, readiness probes), serverless',
  },
  {
    group: 'Data & Visualization',
    items:
      'ETL pipelines, embeddings & vector search, dimensionality reduction (UMAP, PCA), interactive visualization, user studies',
  },
];

export const publications = [
  {
    type: 'Patent',
    title: 'Interactive System for Emotional Well-Being and Assisted Care',
    venue: 'Indian Patent No. 202541093582A · Oct 2025',
    href: null,
    note: 'The patent behind Elyssa: a system that combines facial emotion detection with text sentiment to respond with actual context. (Indian patent applications don’t get a public URL, so the number is what I can give you.)',
  },
  {
    type: 'Paper',
    title:
      'Alzheimer’s Disease Classification Using CUDA-Accelerated DenseNet201 and VGG16',
    venue: 'IEEE ICICNIS · 2024',
    href: 'https://ieeexplore.ieee.org/document/10823113',
    note: 'My first published paper. An ensemble of two CNN backbones classifying Alzheimer’s from MRI scans. Most of the gains came from getting the preprocessing right.',
  },
  {
    type: 'Paper',
    title: 'GenoCryptNet: The Future of Secure Communication Through DNA',
    venue: 'IEEE ICSTSDG · 2024',
    href: 'https://ieeexplore.ieee.org/document/11026200',
    note: 'Hiding encrypted data inside the least significant bits of DNA codons. Yes, DNA. It started as a “wait, could you?” conversation and ended as a paper.',
  },
];

export const education = [
  {
    school: 'Brown University',
    degree: 'MS, Computer Science',
    detail: 'GPA 4.0 · Expected May 2027',
  },
  {
    school: 'VIT Chennai',
    degree: 'BTech, Computer Science',
    detail: 'GPA 3.97 · May 2025',
  },
];

export const certifications = [
  'AWS Certified Cloud Practitioner',
  'Google Cloud Digital Leader',
];
