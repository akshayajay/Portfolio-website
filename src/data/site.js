export const profile = {
  name: 'Akshaya Jayakanth',
  tagline: 'Hi, I’m Akshaya.',
  intro: [
    'I’m a Data Science master’s student at Brown University who builds reliable machine-learning systems from messy, real-world data. My work spans data engineering, statistical modeling, NLP, deep learning, and decision-focused analytics.',
    'I’m especially interested in work where careful data pipelines and rigorous evaluation turn research ideas into useful products—from clinical risk prediction and multi-modal diagnosis to financial modeling and education research.',
  ],
  projectsIntro:
    'Selected data science and machine-learning projects, with results, implementation details, tests, and source code.',
  workIntro:
    'Research and industry experience across data engineering, machine learning, document intelligence, financial analytics, and education research—alongside a decade of community and student leadership.',
  researchIntro:
    'Research outputs spanning multi-modal healthcare AI, reinforcement learning for portfolio optimization, and NLP-based personality assessment.',
  skillsIntro:
    'The languages, frameworks, data systems, and analytical methods I use to move from raw data to tested, interpretable results.',
  currently: [
    ['studying', 'ScM in Data Science at Brown University'],
    ['researching', 'career outcomes and teacher attrition'],
    ['building', 'reliable ML and data pipelines'],
    ['based in', 'Providence, Rhode Island'],
  ],
  email: 'akshaya_jayakanth@brown.edu',
  github: 'https://github.com/akshayajay',
  linkedin: 'https://www.linkedin.com/in/akshayajayakanth/',
  status: 'Currently: Student Research Assistant at Brown University.',
  resume: '/resume.pdf',
};

export const places = [
  { name: 'Chennai', lat: 13.08, lng: 80.27, note: 'B.Tech at SRM and AI/ML work at In22labs.' },
  { name: 'Hyderabad', lat: 17.39, lng: 78.49, note: 'Data analytics internship at Agasthya Data Solution.' },
  { name: 'Providence', lat: 41.82, lng: -71.41, note: 'Data Science graduate study and research at Brown University.' },
];

export const placesIntro =
  'A quick view of the places, coursework, projects, and results that have shaped my path in data science.';

export const placesCurrently = [
  ['degree', 'ScM in Data Science'],
  ['research', 'career outcomes + teacher attrition'],
  ['focus', 'data engineering and applied ML'],
  ['location', 'Providence, RI'],
];

export const coffeeStatus = [
  ['data', 'SQL, PostgreSQL, MongoDB'],
  ['modeling', 'scikit-learn, TensorFlow, PyTorch'],
  ['delivery', 'FastAPI, Streamlit, CI/CD'],
  ['compute', 'Linux + Brown OSCAR HPC'],
];

export const funStats = [
  ['clinical records modeled', '9,105'],
  ['stocks analyzed', '50+'],
  ['box-office films studied', '312'],
  ['best clinical ROC-AUC', '0.916'],
];

export const randomLikes = [
  'Python',
  'R',
  'SQL',
  'statistical modeling',
  'NLP',
  'deep learning',
  'data visualization',
  'reproducible research',
];

export const shelfBooks = [
  { title: 'Data Engineering', author: 'Brown University', color: '#8da28a' },
  { title: 'Statistical Learning', author: 'Brown University', color: '#b98f76' },
  { title: 'Fairness in ADM', author: 'Brown University', color: '#7e8ca3' },
  { title: 'Hands-on Data Science', author: 'Brown University', color: '#c9b48a' },
];

export const shows = [
  { title: 'Build', note: 'modular pipelines and reproducible experiments' },
  { title: 'Evaluate', note: 'cross-validation, testing, and interpretable metrics' },
  { title: 'Communicate', note: 'dashboards and clear research narratives' },
];

export const experience = [
  {
    role: 'Student Research Assistant',
    company: 'Brown University — Center for Career Exploration',
    date: 'Jun 2026 – Present',
    summary:
      'Building the data foundation for CR@B, a research project connecting career engagement with student outcomes.',
    bullets: [
      'Architected a unified relational schema that normalizes career engagement and outcome data from multiple institutional sources while enforcing referential integrity.',
      'Authored analytical SQL using window functions and multi-table joins to power downstream visualization pipelines.',
      'Engineered modular Python and SQL ETL pipelines on Brown’s OSCAR HPC cluster, automating multi-source ingestion and eliminating manual reconciliation.',
    ],
  },
  {
    role: 'Capstone Researcher',
    company: 'Annenberg Institute for School Reform at Brown University',
    date: 'Jun 2026 – Present',
    summary:
      'Studying how themes in teacher induction narratives relate to early-career attrition.',
    bullets: [
      'Applying topic modeling and transformer-based text classification to tens of thousands of qualitative teacher induction narratives.',
      'Linking text-derived themes with Connecticut administrative records to quantify predictors of attrition across school and district contexts.',
    ],
  },
  {
    role: 'AI/ML Intern',
    company: 'In22labs (Unwind Learning Labs Pvt Ltd)',
    date: 'Aug 2024 – Jan 2025',
    summary:
      'Built a production document question-answering system and helped scale the internship program.',
    bullets: [
      'Engineered OCR-based ingestion for PDF, TXT, PNG, and JPG files and served model inference through FastAPI.',
      'Benchmarked Gemma, Mistral, and Llama 3.2, then migrated from OpenAI APIs to locally deployed Llama 3.2 through Ollama, reducing inference costs to zero.',
      'Proposed and closed a formal MoU with SRM University, then designed recruitment and onboarding for two cohorts that grew the team by 17 interns.',
    ],
  },
  {
    role: 'Data Analytics Intern',
    company: 'Agasthya Data Solution',
    date: 'Jun 2023 – Jul 2023',
    summary:
      'Analyzed five years of NIFTY50 market data to identify momentum and sector-level patterns.',
    bullets: [
      'Engineered time-series feature extraction pipelines in Python and SQL across daily price and volume data for 50 companies.',
      'Produced the analytical foundation for a published paper on deep reinforcement learning for portfolio optimization.',
    ],
  },
];

export const leadership = [
  {
    kind: 'Community impact',
    role: 'Founder',
    organization: 'TeenClean',
    date: 'Jul 2016 – Present',
    summary:
      'Founded at age 13 to improve sanitation access and menstrual-hygiene awareness for underprivileged adolescent girls in rural communities.',
    highlights: [
      'Led fundraising, beneficiary identification, community coordination, and the delivery of eco-san sanitation facilities.',
      'Organized menstrual-hygiene awareness programs focused on practical health, hygiene, and sanitation education.',
    ],
    recognition:
      'Recognized with the Phenomenal She Award, Abdul Kalam Award, and Young Social Worker Award.',
  },
  {
    kind: 'Student leadership',
    role: 'Charter President',
    organization: 'NextGen Intelligence Club',
    date: 'Jul 2024 – Jun 2025',
    summary:
      'Founded the university club and built its vision, operating structure, and cross-functional leadership team from the ground up.',
    highlights: [
      'Directed teams across technical programs, design, finance, public relations, content, outreach, and operations.',
      'Launched workshops, industry talks, an inter-college symposium, and the club’s flagship hackathon in its first year.',
    ],
  },
  {
    kind: 'Conference leadership',
    role: 'Executive Director',
    organization: 'SRM Vadapalani Model United Nations',
    date: 'Jul 2022 – Jun 2025',
    summary:
      'Progressed from delegate to Under-Secretary-General of Hospitality and then Executive Director across three conference editions.',
    highlights: [
      'Directed end-to-end conference planning, logistics, delegate experience, stakeholder coordination, and multiple organizing teams.',
    ],
  },
  {
    kind: 'Campus leadership',
    role: 'Joint Secretary',
    organization: 'White Hat Hackers Club',
    date: 'Jul 2022 – Jan 2024',
    summary:
      'Led technical workshops, cybersecurity-awareness sessions, inter-college events, sponsorships, and external partnerships.',
    highlights: [],
  },
  {
    kind: 'Communications',
    role: 'Vice President, Public Relations',
    organization: 'Toastmasters Club',
    date: 'Jun 2024 – Dec 2024',
    summary:
      'Led public-relations work for the campus speaking and leadership community.',
    highlights: [],
  },
];

export const projects = [
  {
    slug: 'box-office-prediction',
    title: 'Early Prediction of Movie Box-Office Success',
    tag: 'Statistical modeling',
    date: '2026',
    stack: 'R · Gamma GLM · ggplot2 · testthat',
    oneLiner:
      'Predicting opening-weekend revenue from pre-release Wikipedia activity using time-aware features and distributionally appropriate regression.',
    metric: '0.78',
    metricLabel: 'cross-validated R²',
    links: [
      { label: 'GitHub', href: 'https://github.com/akshayajay/Early-Prediction-of-Movie-Box-Office-Success-Based-on-Wikipedia-Activity-Data' },
    ],
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'Can collaborative activity on Wikipedia predict a film’s opening-weekend revenue before release? The project studies 312 films using page views, unique editors, revisions, editor counts, and theater counts measured over time.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: [
          'I engineered time-aware activity features, compared alternative distributional specifications, and selected a Gamma generalized linear model with a log-log transformation to handle strongly skewed revenue.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Achieved cross-validated R² of 0.78 using 10-fold cross-validation across 312 films.',
          'Identified Wikipedia page views and theater count as statistically significant dominant predictors.',
          'Added reusable R utilities and automated tests so the analysis can be reproduced without the source dataset.',
        ],
      },
    ],
  },
  {
    slug: 'hospital-mortality',
    title: 'In-Hospital Mortality Prediction',
    tag: 'Healthcare ML',
    date: '2025',
    stack: 'Python · scikit-learn · XGBoost · SHAP',
    oneLiner:
      'A rigorously evaluated clinical-risk pipeline trained on 9,105 critically ill patients from the SUPPORT2 dataset.',
    metric: '0.916',
    metricLabel: 'ROC-AUC',
    links: [
      { label: 'GitHub', href: 'https://github.com/akshayajay/hospital-mortality-prediction' },
    ],
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'The goal is to provide an early, data-driven mortality risk signal that can support clinical decision-making and ICU resource allocation.',
        ],
      },
      {
        heading: 'Methodology',
        paragraphs: [
          'The pipeline handles missing values, encodes categorical variables, scales numeric features, and compares five models using stratified five-fold cross-validation. Evaluation centers on ROC-AUC alongside precision, recall, and F1.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Gradient Boosting achieved 0.916 ROC-AUC.',
          'SHAP analysis identified acute physiology severity as the dominant predictor.',
          'Forty unit tests and a CI/CD workflow validate preprocessing, modeling, and evaluation behavior.',
        ],
      },
    ],
  },
  {
    slug: 'liver-disease-diagnosis',
    title: 'AI-Driven Liver Disease Diagnosis',
    tag: 'Patent · Multi-modal AI',
    date: '2025',
    stack: 'PyTorch · Vision Transformer · XGBoost · Streamlit',
    oneLiner:
      'A patented research system that fuses medical imaging, EHR text, and blood-test values to classify liver conditions.',
    metric: '85–93%',
    metricLabel: 'reported precision',
    links: [
      { label: 'GitHub', href: 'https://github.com/akshayajay/liver-disease-detection' },
    ],
    sections: [
      {
        heading: 'System Design',
        paragraphs: [
          'The system combines Vision Transformer embeddings from CT, MRI, or ultrasound images with TF-IDF features from EHR text and structured ALT, AST, ALP, and bilirubin values. An XGBoost classifier predicts across 23 liver conditions.',
        ],
      },
      {
        heading: 'Data and Evaluation',
        paragraphs: [
          'Because real liver imaging data could not be procured under privacy constraints, the research pipeline uses synthetically generated medical images and clinically informed EHR and laboratory templates. The system reports 85–93% precision in the project evaluation.',
        ],
      },
      {
        heading: 'Research Note',
        bullets: [
          'Patent application number: 202541059774.',
          'Research and educational prototype only; it is not approved for clinical use.',
        ],
      },
    ],
  },
  {
    slug: 'equity-portfolio-analysis',
    title: 'NIFTY50 Equity Portfolio Analyser',
    tag: 'Financial analytics',
    date: '2023–2026',
    stack: 'Python · Streamlit · yfinance · pandas · Altair',
    oneLiner:
      'An interactive momentum-strategy dashboard that benchmarks selected stocks against equal-weight and index baselines.',
    metric: '50+',
    metricLabel: 'stocks analyzed',
    links: [
      { label: 'GitHub', href: 'https://github.com/akshayajay/Equity-Portfolio-Analysis' },
    ],
    tryIt: 'streamlit run App.py',
    sections: [
      {
        heading: 'What It Does',
        paragraphs: [
          'The application ingests roughly 1,500 trading days for more than 50 stocks, ranks NIFTY50 constituents by configurable momentum, and compares the resulting portfolio against equal-weight and index benchmarks.',
        ],
      },
      {
        heading: 'Evaluation',
        bullets: [
          'Reports CAGR, annualized volatility, Sharpe ratio, and maximum drawdown for each strategy.',
          'Lets users tune dates, lookback period, portfolio size, and initial capital interactively.',
          'Includes 34 unit tests and a CI/CD pipeline.',
        ],
      },
    ],
  },
];

export const otherProjects = [
  {
    title: 'Deep Learning Anomaly Detection for the S&P 500',
    tag: 'Deep learning',
    date: '2024',
    description:
      'A TensorFlow autoencoder that learns normal price behavior and flags irregular trading patterns from reconstruction error; validated with 21 unit tests.',
    metric: '21',
    metricLabel: 'unit tests',
    href: 'https://github.com/akshayajay/Deep-Learning-Based-Anomaly-Detection-systems',
  },
  {
    title: 'Real-Time Personality Assessment via Big Five Traits',
    tag: 'NLP',
    date: '2024',
    description:
      'A Streamlit resume-ranking system combining skill matching, sentence-transformer similarity, structured fit scoring, and Big Five trait indicators.',
    metric: '4 GB',
    metricLabel: 'research dataset',
    href: 'https://github.com/akshayajay/Real-time-personality-assessment-via-big-five-traits',
  },
  {
    title: 'Vision-Based Query Retrieval System',
    tag: 'Document AI',
    date: '2024',
    description:
      'OCR-based multi-format document QA served through FastAPI and migrated to locally deployed Llama 3.2 after model benchmarking.',
    metric: '0',
    metricLabel: 'API inference cost',
    href: 'https://github.com/akshayajay',
  },
];

export const skills = [
  { group: 'Languages', items: 'Python, R, SQL, C, C++' },
  {
    group: 'Machine Learning & AI',
    items: 'Machine learning, deep learning, NLP, statistical modeling, predictive modeling, model interpretation',
  },
  {
    group: 'Libraries & Frameworks',
    items: 'pandas, NumPy, scikit-learn, TensorFlow, PyTorch, XGBoost, FastAPI, Streamlit',
  },
  {
    group: 'Databases & Data Engineering',
    items: 'MySQL, PostgreSQL, MongoDB, relational modeling, ETL pipelines, data warehousing, analytical SQL',
  },
  {
    group: 'Tools & Platforms',
    items: 'Git, GitHub Actions, Jupyter, Tableau, Power BI, Matplotlib, Seaborn, Linux, Brown OSCAR HPC',
  },
];

export const topics = [
  {
    group: 'Model Development',
    items: 'Classification, generalized linear models, gradient boosting, deep autoencoders, transformers, cross-validation, SHAP',
  },
  {
    group: 'Data Systems',
    items: 'Schema design, multi-source ingestion, data quality, feature engineering, reproducible pipelines, CI/CD',
  },
  {
    group: 'Applied Domains',
    items: 'Healthcare, education, career outcomes, financial markets, document intelligence, and media analytics',
  },
];

export const publications = [
  {
    type: 'Patent',
    title: 'AI-Driven Liver Disease Diagnosis: Multi-Modal Fusion of Medical Imaging and Clinical Reports',
    venue: 'Patent No. 202541059774 · 2025',
    href: null,
    projectHref: 'https://github.com/akshayajay/liver-disease-detection',
    highlight: '23 liver conditions',
    note: 'A multi-modal AI system combining medical imaging, EHR text, and clinical laboratory values for automated liver disease classification, with reported precision of 85–93%.',
  },
  {
    type: 'Paper',
    title: 'Enhancing Portfolio Optimisation with Deep Reinforcement Learning',
    venue: 'IJSREM',
    href: null,
    projectHref: 'https://github.com/akshayajay/Equity-Portfolio-Analysis',
    highlight: 'DQN · PPO · TRPO',
    note: 'A portfolio-optimization framework comparing DQN, PPO, and TRPO on NIFTY50 data with Sharpe ratio as the reward signal.',
  },
  {
    type: 'Preprint',
    title: 'Real-Time Personality Assessment via Big Five Traits',
    venue: 'Research Square',
    href: null,
    projectHref: 'https://github.com/akshayajay/Real-time-personality-assessment-via-big-five-traits',
    highlight: 'NLP + behavioral signals',
    note: 'An NLP pipeline combining embeddings, sentiment scoring, and behavioral features from a 4 GB dataset for personality evaluation in HR workflows.',
  },
  {
    type: 'Paper',
    title: 'Integrating Quantum-Inspired Principles into Financial Data Science: Optimizing Reservoir Computing Models',
    venue: 'IJSREM · Jun 2024',
    href: null,
    projectHref: null,
    highlight: 'Financial data science',
    note: 'A study of quantum-inspired principles for optimizing reservoir-computing approaches in financial modeling.',
  },
  {
    type: 'Paper',
    title: 'A Comprehensive Framework for Computational Neuroscience: Descriptive, Mechanistic, and Interpretive Models',
    venue: 'IJRITCC · Mar 2024',
    href: null,
    projectHref: null,
    highlight: 'Computational neuroscience',
    note: 'A structured analysis of descriptive, mechanistic, and interpretive modeling approaches in computational neuroscience.',
  },
];

export const education = [
  {
    school: 'Brown University',
    degree: 'ScM, Data Science',
    detail: 'Aug 2025 – May 2027',
  },
  {
    school: 'SRM Institute of Science and Technology',
    degree: 'B.Tech, Computer Science Engineering — Big Data Analytics',
    detail: 'Sep 2021 – Jun 2025',
  },
];

export const certifications = [];
