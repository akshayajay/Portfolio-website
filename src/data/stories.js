export const accolades = [
  { title: 'Best Outgoing Student', organization: 'SRM Institute of Science and Technology, Vadapalani', year: '2025', description: 'A meaningful close to four years shaped by coursework, research, student organizations, events, and a great deal of learning outside the classroom.', featured: true },
  { title: 'Phenomenal She Award', organization: 'Indian National Bar Association', year: '2023', description: 'I was one of the youngest recipients in 2023, recognized for the sanitation and menstrual-hygiene work carried out through TeenClean.', featured: true },
  { title: 'Overall Proficiency Award — Rank 1', organization: 'SRM IST', year: '2022', description: 'Recognition for finishing first in overall academic proficiency.', featured: false },
  { title: 'Abdul Kalam Award', organization: 'Dr. Abdul Kalam Trust for Education and Greenery', year: '—', description: 'Recognition for community work in sanitation access and menstrual-hygiene awareness.', featured: false },
  { title: 'Young Social Worker Award', organization: 'Padaippu', year: '—', description: 'The Sammuga Akkaraiyalar Viruthu, recognizing sustained community service through TeenClean.', featured: false },
  { title: 'IBN Felicitation', organization: 'IBN Chapter 13', year: '2023', description: 'A felicitation following the Phenomenal She Award, shared with the people who helped TeenClean keep going.', featured: false },
];

export const media = [
  { title: 'TeenClean — youth-led hygiene and health initiative', publisher: 'TeenClean', type: 'Initiative', date: 'Ongoing', url: 'https://teencleaninfo.wixsite.com/teencleanorg' },
  { title: 'Time Series Data Analysis: Predicting the Future with the Past', publisher: 'Medium', type: 'Article', date: '2023', url: 'https://medium.com/@akshayajayakanth/time-series-data-analysis-predicting-the-future-with-the-past-fc82b3cc5d57' },
  { title: 'Four years of learning, leadership, and building', publisher: 'LinkedIn', type: 'Graduation story', date: '2025', url: 'https://www.linkedin.com/posts/akshayajayakanth_stepping-out-as-a-graduate-from-the-class-activity-7363064349000654848-YSVn' },
  { title: 'Notes on data, modeling, and things I’m learning', publisher: 'Akshaya Jayakanth on Medium', type: 'Writing archive', date: 'Ongoing', url: 'https://medium.com/@akshayajayakanth' },
];

export const experience = [
  { role: 'Graduate Research Assistant', organization: 'Annenberg Institute at Brown University', dates: 'Sep 2026 – Present', description: 'Continuing the TEAM project after my ScM capstone: running preprocessing, embeddings, and BERTopic analysis over 100,000+ Connecticut administrative records as SLURM jobs on OSCAR. I validate incoming schemas, review cleaning and embedding reports, and document reproducible workflows. The project now extends to Indiana and California.', skills: ['Python', 'BERTopic', 'SentenceTransformers', 'SLURM', 'HPC'] },
  { role: 'NLP Capstone Researcher', organization: 'Annenberg Institute at Brown University', dates: 'Jun – Aug 2026', description: 'Built preprocessing and embedding pipelines for Connecticut TEAM records, including HTML decoding, markup stripping, date normalization, and spaCy NER pseudonymization. Compared TF-IDF/SVD with sentence-transformer embeddings and presented the architecture and cleaning approach to stakeholders.', skills: ['NLP', 'spaCy', 'TF-IDF', 'SentenceTransformers', 'GitHub'] },
  { role: 'Student Research Assistant', organization: 'Brown University · Lizzie and Jonathan Tisch Center for Career Exploration', dates: 'Jun – Aug 2026', description: 'Designed the Career Readiness at Brown relational schema and ETL pipelines, integrating five years of engagement and outcome data into an access-controlled PostgreSQL repository. Fixed a Handshake export mismatch in dbt staging, added PII pseudonymization and synthetic test data, and connected the repository to Tableau. Changes shipped through PR review, Ruff, unittest, and CI coverage gates.', skills: ['PostgreSQL', 'dbt', 'Python', 'SQL', 'Tableau', 'CI/CD'] },
  { role: 'AI/ML Intern', organization: 'In22labs', dates: 'Aug 2024 – Jan 2025', description: 'Migrated document QA from the OpenAI API to self-hosted open-source models with 2.7-second median response latency. Built FastAPI ingestion with OCR for four file formats and benchmarked Llama 3.2, Gemma, and Mistral. Negotiated an SRM University partnership and recruited and onboarded 17 interns across two batches.', skills: ['FastAPI', 'OCR', 'LLMs', 'Ollama'] },
  { role: 'Data Science Intern', organization: 'Agastya Data Solutions', dates: 'Jun 2023', description: 'Built a holding-period return prediction tool using five years of NIFTY 50 constituent data, with data cleaning, exploratory analysis, and visual reports. This dataset became the basis for my published deep reinforcement learning portfolio optimization paper.', skills: ['Python', 'SQL', 'Financial Analytics'] },
];

export const education = [
  { organization: 'Brown University', degree: 'ScM in Data Science', dates: 'Aug 2025 – May 2027', note: 'Expected graduation: May 2027.' },
  { organization: 'Harvard University', degree: 'Cross-registered graduate coursework', dates: 'Sep – Dec 2026', note: 'Faculty of Arts and Sciences · Applied Computation: Advanced Practical Data Science, MLOps.' },
  { organization: 'SRM University', degree: 'BTech in Computer Science with Big Data Analysis', dates: '2021 – 2025', note: '' },
  { organization: 'M.Ct.M Chiddambaram Chetteyar International School', degree: 'High School Diploma', dates: 'Jul 2015 – Jun 2021', note: '' },
];

export const skillGroups = [
  { title: 'Languages & analysis', items: ['Python', 'SQL', 'R'] },
  { title: 'Data engineering', items: ['PostgreSQL', 'dbt', 'ETL', 'Data modeling', 'PII pseudonymization'] },
  { title: 'NLP & research', items: ['spaCy', 'BERTopic', 'SentenceTransformers', 'TF-IDF / SVD'] },
  { title: 'Systems & delivery', items: ['FastAPI', 'Docker', 'GCP', 'Linux', 'HPC / SLURM', 'CI/CD', 'Tableau'] },
];

export const certifications = ['Foundations: Data, Data, Everywhere', 'Introduction to Cyber Attacks', 'Sales force', 'UiPath Automation Explorer', 'Foundations of Digital Marketing and E-commerce'];
export const languages = ['English · Native or bilingual', 'Tamil · Native or bilingual', 'French · Limited working', 'Hindi · Elementary', 'German · Elementary'];

export const profile = {
  personalEmail: 'akshayajayakanth@gmail.com',
  name: 'Akshaya Jayakanth', email: 'akshaya_jayakanth@brown.edu',
  github: 'https://github.com/akshayajay', linkedin: 'https://www.linkedin.com/in/akshayajayakanth/',
  medium: 'https://medium.com/@akshayajayakanth',
  resume: '/resume.pdf', instagram: 'https://www.instagram.com/chouxpastry_to_sambar/',
};

export const teenClean = {
  website: 'https://teencleaninfo.wixsite.com/teencleanorg',
  telegraph: 'https://www.telegraphindia.com/india/birthday-gesture-a-toilet-for-needy-girl/cid/1517007',
  testimonials: 'https://teencleanorg.wordpress.com/testimonial/testimonials/',
  instagram: 'https://www.instagram.com/teen.clean2016/',
};
