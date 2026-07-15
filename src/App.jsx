import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { featuredProjects, projects } from './data/projects';
import { publications } from './data/publications';
import { events, leadership } from './data/leadership';
import { accolades, experience, media, profile, teenClean } from './data/stories';
import './index.css';

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH1 = motion.h1;
const MotionSpan = motion.span;

const descriptors = [
  'I work with data and ask a lot of questions.',
  'I look for structure in messy datasets.',
  'Some problems need a model. Some need a better question.',
  'Not everything needs a model. Some things need butter.',
];

const navItems = [
  ['Home', '/'], ['Projects', '/#work'], ['Research', '/research'], ['Accolades', '/accolades'],
  ['Leadership', '/leadership'], ['Beyond Tech', '/beyond-tech'], ['Contact', '/#contact'],
];

function Cursor() {
  const [state, setState] = useState({ x: -100, y: -100, label: '' });
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;
    const move = (event) => {
      const target = event.target.closest('[data-cursor]');
      setState({ x: event.clientX, y: event.clientY, label: target?.dataset.cursor || '' });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div className={`custom-cursor ${state.label ? 'is-active' : ''}`} style={{ transform: `translate3d(${state.x}px, ${state.y}px, 0)` }}>
      {state.label}
    </div>
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    }, 20);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" className="wordmark">AKSHAYA<span>.</span></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <FiX /> : <FiMenu />}
        </button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map(([label, to]) => (
            <NavLink key={label} to={to} onClick={() => setOpen(false)} className={({ isActive }) => isActive && !to.includes('#') ? 'active' : ''}>{label}</NavLink>
          ))}
        </nav>
        <div className="nav-socials">
          <a href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
        </div>
      </div>
    </header>
  );
}

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <MotionDiv className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: .7, delay, ease: [.22, 1, .36, 1] }}>
      {children}
    </MotionDiv>
  );
}

function SectionHeading({ eyebrow, title, intro, light = false }) {
  return (
    <Reveal className={`section-heading ${light ? 'light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  );
}

function ArrowLink({ to, href, children, cursor = 'VIEW', secondary = false }) {
  const cls = secondary ? 'arrow-link secondary' : 'arrow-link';
  const content = <>{children}<FiArrowUpRight /></>;
  return to ? <Link className={cls} to={to} data-cursor={cursor}>{content}</Link> : <a className={cls} href={href} target="_blank" rel="noreferrer" data-cursor={cursor}>{content}</a>;
}

function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % descriptors.length), 2800);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <section className="hero" id="home">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      {['Python', 'NLP', 'ideas', 'SQL', 'research', 'AI'].map((word, i) => <span key={word} className={`float-word word-${i + 1}`}>{word}</span>)}
      <div className="hero-copy">
        <MotionP className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>Data Scientist · ML Engineer · Researcher</MotionP>
        <MotionH1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [.22, 1, .36, 1] }}>Hi, I’m <em>Akshaya.</em></MotionH1>
        <div className="descriptor-wrap" aria-live="polite">
          <AnimatePresence mode="wait">
            <MotionP key={descriptors[index]} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: .45 }}>{descriptors[index]}</MotionP>
          </AnimatePresence>
        </div>
        <MotionP className="hero-support" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>
          I’m an ScM Data Science student at Brown University. Lately, I’ve been working across machine learning, NLP, data systems, and education research.
        </MotionP>
        <MotionDiv className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .75 }}>
          <Link className="button button-dark" to="/#work">Browse projects <FiArrowDownRight /></Link>
          <a className="text-link" href={profile.resume} target="_blank" rel="noreferrer">Download résumé</a>
        </MotionDiv>
      </div>
      <div className="hero-side-note"><span>Brown University</span><span>Providence, RI</span></div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about"><span>Scroll</span><i /></a>
    </section>
  );
}

function AboutStrip() {
  const statements = ['I’m studying Data Science at Brown.', 'My work moves between ML, NLP, data engineering, and research.', 'I like figuring out which tool actually fits the problem.', 'I’ve published research and worked on a patent.', 'Some of my favorite work has been collaborative.', 'I spent a lot of college organizing events and teams.', 'I cook and bake when I need a different kind of problem.', 'I am usually taking notes about something.'];
  return (
    <section className="about-strip section-pad" id="about">
      <SectionHeading eyebrow="01 — Introducing Akshaya" title="A few things about me." intro="My interests are broad. I’ve decided to make peace with that." />
      <div className="statement-grid">
        {statements.map((text, i) => <Reveal key={text} delay={(i % 4) * .06} className={`statement-card statement-${i + 1}`}><span>0{i + 1}</span><p>{text}</p></Reveal>)}
      </div>
      <Reveal className="identity-line"><span>I keep coming back to</span><div className="identity-words"><b>models.</b><b>questions.</b><b>people.</b><b>ideas.</b><b>desserts.</b></div></Reveal>
    </section>
  );
}

function ProjectVisual({ type }) {
  if (type === 'education') return <div className="project-visual document-visual"><p>TEACHER NARRATIVE RESEARCH</p><div className="flow-row">{['Narratives', 'Clean', 'Themes', 'Link records', 'Study'].map((x, i) => <span key={x}><b>{x}</b>{i < 4 && <i>→</i>}</span>)}</div><div className="doc-sheet"><i/><i/><i/><i/></div></div>;
  if (type === 'clinical') return <div className="project-visual clinical-visual"><div className="clinical-head"><span>MODEL COMPARISON</span><span>SUPPORT2 · TEST SET</span></div><div className="model-board"><div><span>Gradient Boosting</span><i style={{width:'91.6%'}}/><b>0.916</b></div><div><span>XGBoost</span><i style={{width:'88%'}}/><b>evaluated</b></div><div><span>Random Forest</span><i style={{width:'82%'}}/><b>evaluated</b></div><div><span>Logistic Regression</span><i style={{width:'76%'}}/><b>baseline</b></div></div><div className="clinical-summary"><span><b>5</b> models compared</span><span><b>SHAP</b> explainability</span><span><b>40</b> automated tests</span></div></div>;
  if (type === 'cinema') return <div className="project-visual cinema-visual"><div className="marquee">NOW MODELING</div><div className="film-title">WIKIPEDIA<br/><em>at the movies</em></div><div className="signal-bars">{[72, 43, 83, 55, 94, 67].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div><div className="film-meta"><span>VIEWS</span><span>EDITORS</span><span>REVISIONS</span></div></div>;
  if (type === 'document') return <div className="project-visual document-visual"><p>DOCUMENT INTELLIGENCE PIPELINE</p><div className="flow-row">{['Document', 'OCR', 'Retrieval', 'Local LLM', 'Answer'].map((x, i) => <span key={x}><b>{x}</b>{i < 4 && <i>→</i>}</span>)}</div><div className="doc-sheet"><i/><i/><i/><i/></div></div>;
  if (type === 'sql') return <div className="project-visual document-visual"><p>NATURAL LANGUAGE TO SQL</p><div className="flow-row">{['Question', 'Schema', 'SQL', 'Validate', 'Result'].map((x, i) => <span key={x}><b>{x}</b>{i < 4 && <i>→</i>}</span>)}</div><div className="doc-sheet"><i/><i/><i/><i/></div></div>;
  if (type === 'anomaly') return <div className="project-visual finance-visual"><div className="finance-head"><span>S&amp;P 500 / ANOMALY STUDY</span><b>DL</b></div><div className="chart-grid"><div className="chart-line line-a"><i/><i/><i/><i/><i/><i/></div><div className="chart-line line-b"><i/><i/><i/><i/><i/><i/></div></div><div className="finance-metrics"><span>SERIES<strong>S&amp;P 500</strong></span><span>METHOD<strong>DEEP LEARNING</strong></span><span>FOCUS<strong>ANOMALIES</strong></span></div></div>;
  return <div className="project-visual finance-visual"><div className="finance-head"><span>NIFTY50 / MOMENTUM</span><b>+18.4%</b></div><div className="chart-grid"><div className="chart-line line-a"><i/><i/><i/><i/><i/><i/></div><div className="chart-line line-b"><i/><i/><i/><i/><i/><i/></div></div><div className="finance-metrics"><span>CAGR<strong>12.8%</strong></span><span>SHARPE<strong>1.24</strong></span><span>VOLATILITY<strong>14.2%</strong></span></div></div>;
}

function ProjectCard({ project, index }) {
  return (
    <Reveal className={`project-feature tone-${project.tone}`}>
      <div className="project-copy">
        <div className="project-meta"><span>{project.number}</span><span>{project.category}</span><span>{project.year}</span></div>
        <h3>{project.title}</h3><p>{project.summary}</p>
        <div className="project-outcome"><strong>{project.metric}</strong><span>{project.metricLabel}</span><small>{project.secondaryMetric}</small></div>
        <div className="tags">{project.techStack.slice(0, 5).map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="card-actions">{project.liveUrl && <ArrowLink href={project.liveUrl} cursor="TRY">Try live demo</ArrowLink>}<ArrowLink to={`/projects/${project.slug}`}>View case study</ArrowLink>{project.githubUrl && <ArrowLink href={project.githubUrl} secondary cursor="CODE">View output</ArrowLink>}</div>
      </div>
      <MotionDiv className="project-art" whileHover={{ rotate: index % 2 ? 1 : -1, scale: 1.01 }} transition={{ type: 'spring', stiffness: 180, damping: 18 }}><ProjectVisual type={project.visual} /></MotionDiv>
    </Reveal>
  );
}

function WorkSection({ all = false }) {
  const list = all ? projects : featuredProjects;
  return <section className="work-section section-pad" id="work"><SectionHeading eyebrow="02 — Projects" title={all ? 'Projects, experiments & systems.' : 'A few projects I’ve spent time with.'} intro="Each one began with a question, then moved through the less tidy work of choosing data, testing assumptions, and learning what held up."/><div className="project-stack">{list.map((project, i) => <ProjectCard key={project.slug} project={project} index={i}/>)}</div>{!all && <div className="section-end-link"><ArrowLink to="/projects">View every project</ArrowLink></div>}</section>;
}

function ResearchSection({ all = false }) {
  const list = all ? publications : publications.slice(0, 3);
  return (
    <section className="research-section section-pad" id="research">
      <SectionHeading light eyebrow="03 — Research" title="Questions I’ve explored." intro="Published work, a patent application, and ongoing research across healthcare, finance, NLP, and education."/>
      <div className="publication-list">{list.map(pub => <Reveal key={pub.slug} className="publication-card"><div className="pub-number">{pub.number}</div><div className="pub-main"><div className="pub-meta"><span>{pub.type}</span><span>{pub.year}</span></div><h3>{pub.title}</h3><p>{pub.summary}</p><div className="tags dark">{pub.technologies.map(x => <span key={x}>{x}</span>)}</div><div className="card-actions"><ArrowLink to={`/research/${pub.slug}`}>Read the research story</ArrowLink>{pub.projectUrl&&<ArrowLink href={pub.projectUrl} secondary cursor="CODE">View output</ArrowLink>}</div></div><div className="pub-highlight"><strong>{pub.highlight}</strong><span>{pub.label}</span></div></Reveal>)}</div>
      {!all && <div className="section-end-link light-link"><ArrowLink to="/research">Open the research archive</ArrowLink></div>}
    </section>
  );
}

function AccoladesSection({ all = false }) {
  const list = all ? accolades : accolades.slice(0, 4);
  return <section className="accolades-section section-pad" id="accolades"><SectionHeading eyebrow="04 — Milestones" title="A few moments that have meant a lot." intro="Academic and community recognitions, each tied to work I was fortunate to do with other people."/><div className="accolade-gallery">{list.map((award, i) => <Reveal key={award.title} className={`award-card award-${i + 1}`}><div className="award-tape"/><p className="award-year">{award.year}</p><div className="award-seal">✦</div><h3>{award.title}</h3><p className="award-org">{award.organization}</p><p>{award.description}</p><span className="hand-note">a good day to remember</span></Reveal>)}</div>{!all && <div className="section-end-link"><ArrowLink to="/accolades">See every accolade</ArrowLink></div>}</section>;
}

function MediaSection() {
  return <section className="media-section section-pad"><SectionHeading eyebrow="Writing & elsewhere" title="Notes, articles, and a few things on the internet."/><div className="media-strip">{media.map((item, i) => <Reveal key={item.url} delay={i*.08} className="media-card"><div className="media-index">0{i+1}</div><span>{item.type} · {item.date}</span><h3>{item.title}</h3><p>{item.publisher}</p><ArrowLink href={item.url} cursor="READ">{item.type === 'Writing archive' ? 'Visit Medium' : 'View feature'}</ArrowLink></Reveal>)}</div></section>;
}

function LeadershipSection({ all = false }) {
  const list = all ? leadership : leadership.slice(0, 4);
  return <section className="leadership-section section-pad" id="leadership"><SectionHeading eyebrow="05 — Outside the classroom" title="A lot of organizing, and a lot of shared spreadsheets." intro="These roles taught me how much good work depends on listening, clear ownership, and people who trust one another."/><div className="impact-stats"><div><strong>10</strong><span>years with TeenClean</span></div><div><strong>6</strong><span>leadership roles</span></div><div><strong>17</strong><span>interns recruited</span></div><div><strong>3</strong><span>MUN editions</span></div></div><div className="leadership-list">{list.map((item, i) => <Reveal key={item.organization} className="leadership-card"><span className="lead-index">0{i+1}</span><div><p className="eyebrow">{item.dates}</p><h3>{item.role}<em> · {item.organization}</em></h3><p>{item.description}</p><div className="impact-note"><b>What we worked on</b><span>{item.impact}</span></div></div></Reveal>)}</div>{!all && <div className="section-end-link"><ArrowLink to="/leadership">Leadership & events archive</ArrowLink></div>}</section>;
}

function InitiativeSection() {
  return <section className="initiative-section section-pad"><div className="initiative-mark">TC</div><div className="initiative-copy"><p className="eyebrow">06 — Something that stayed with me</p><h2>TeenClean</h2><p className="initiative-lead">TeenClean began when I was 13. After a road trip made me think more carefully about rural women’s access to safe sanitation, my birthday wish became an Ecosan toilet for Arthi, a girl my age. The initiative grew from there.</p><div className="initiative-columns"><div><span>WHAT WE NOTICED</span><p>Adolescent girls in underserved rural communities often had limited access to safe sanitation infrastructure and practical hygiene information.</p></div><div><span>WHAT WE TRIED</span><p>Fundraising, beneficiary coordination, waterless Ecosan toilet support, menstrual-hygiene programs, and direct community outreach.</p></div><div><span>WHAT I LEARNED</span><p>Community work is patient, local, and collaborative. The initiative has continued for a decade because many people chose to keep showing up.</p></div></div><div className="initiative-links"><ArrowLink href={teenClean.website}>Visit TeenClean</ArrowLink><ArrowLink href={teenClean.telegraph} cursor="READ">Read the Telegraph story</ArrowLink><ArrowLink href={teenClean.testimonials} cursor="READ">See testimonials</ArrowLink><ArrowLink href={teenClean.instagram} cursor="VIEW">TeenClean on Instagram</ArrowLink></div></div></section>;
}

function EventsSection() {
  return <section className="events-section section-pad"><SectionHeading eyebrow="Selected events" title="A lot of planning. Usually worth it."/><div className="event-rail">{events.map((event, i) => <Reveal key={event.title} className="event-card"><div className="event-top"><span>0{i+1}</span><span>{event.category}</span></div><h3>{event.title}</h3><p>{event.description}</p><div className="event-foot"><span>{event.role}</span><span>{event.date}</span></div></Reveal>)}</div></section>;
}

function ExperienceSection() {
  return <section className="experience-section section-pad"><SectionHeading eyebrow="Experience" title="Places I’ve learned from."/><div className="timeline">{experience.map(job => <Reveal key={job.role+job.organization} className="timeline-item"><div className="timeline-date">{job.dates}</div><div><h3>{job.role}</h3><h4>{job.organization}</h4><p>{job.description}</p><div className="tags">{job.skills.map(x=><span key={x}>{x}</span>)}</div></div></Reveal>)}</div></section>;
}

function CurrentResearch() {
  const nodes = ['Teacher narratives', 'Topic modeling', 'Transformers', 'Administrative data', 'Teacher attrition'];
  return <section className="curious-section section-pad"><div className="curious-copy"><p className="eyebrow">Currently curious about...</p><h2>What teachers say, and what it can tell us about who stays.</h2><p>At Brown’s Annenberg Institute, I’m linking themes from tens of thousands of induction narratives with Connecticut administrative records to study early-career attrition.</p></div><div className="network" aria-label="Research concept network"><div className="network-core">research<br/>question</div>{nodes.map((n,i)=><MotionSpan key={n} className={`node node-${i+1}`} animate={{ y: [0,-7,0] }} transition={{ repeat: Infinity, duration: 3+i*.35, ease:'easeInOut' }}>{n}</MotionSpan>)}<i className="net-line n1"/><i className="net-line n2"/><i className="net-line n3"/><i className="net-line n4"/><i className="net-line n5"/></div></section>;
}

function BeyondSection({ full = false }) {
  return <section className="beyond-section section-pad" id="beyond"><div className="steam steam-one">~</div><div className="steam steam-two">~</div><div className="beyond-copy"><p className="eyebrow">07 — Away from my laptop</p><h2>Not everything needs a model.<br/><em>Some things need butter.</em></h2><p>Cooking and baking give me a different kind of focus: part precision, part instinct, and best when there is someone to share it with.</p><div className="recipe-flow"><span><small>START</small>Ingredients</span><i>→</i><span><small>THEN</small>A little improvisation</span><i>→</i><span><small>BEST PART</small>Something to share</span></div><ArrowLink href={profile.instagram} cursor="YUM">See what I’m cooking</ArrowLink>{full && <div className="beyond-notes"><p>I keep a food journal for the meals, desserts, experiments, and occasional near-misses that happen along the way.</p><p><em>Choux pastry to sambar, and quite a lot in between.</em></p></div>}</div><div className="dessert-board"><div className="plate"><span>made<br/>with<br/>curiosity</span></div><div className="recipe-card"><b>AKSHAYA’S TEST KITCHEN</b><span>01 — measure</span><span>02 — improvise</span><span>03 — taste</span><span>04 — share</span><em>repeat as needed ↗</em></div></div></section>;
}

function ContactSection() {
  return <section className="contact-section section-pad" id="contact"><p className="eyebrow">08 — Let’s connect</p><h2>If something here made you curious,<br/><em>say hello.</em></h2><a className="contact-email" href={`mailto:${profile.email}`} data-cursor="WRITE">{profile.email}<FiArrowUpRight /></a><div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer"><FiGithub/>GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin/>LinkedIn</a><a href={profile.medium} target="_blank" rel="noreferrer">Medium</a><a href={profile.resume} target="_blank" rel="noreferrer">Résumé</a></div></section>;
}

function HomePage() {
  return <main><Hero/><AboutStrip/><WorkSection/><ResearchSection/><AccoladesSection/><MediaSection/><LeadershipSection/><InitiativeSection/><EventsSection/><ExperienceSection/><CurrentResearch/><BeyondSection/><ContactSection/></main>;
}

function PageHero({ eyebrow, title, intro, dark = false }) { return <section className={`page-hero ${dark?'dark':''}`}><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></section>; }
function ProjectsPage() { return <main><PageHero eyebrow="Project archive" title="Things I’ve tried, tested, and learned from." intro="Projects across machine learning, statistical modeling, document intelligence, finance, and education research."/><WorkSection all/><ContactSection/></main>; }
function ResearchPage() { return <main><PageHero dark eyebrow="Research archive" title="Questions I’ve explored." intro="Published work, a patent application, and ongoing research across healthcare, finance, NLP, and education."/><ResearchSection all/><ContactSection/></main>; }
function AccoladesPage() { return <main><PageHero eyebrow="Accolades" title="A few moments that have meant a lot." intro="A record of the work, communities, and people behind each recognition."/><AccoladesSection all/><MediaSection/><ContactSection/></main>; }
function LeadershipPage() { return <main><PageHero eyebrow="Leadership" title="Things I helped organize." intro="Student organizations, community work, events, and the teams that made each one possible."/><LeadershipSection all/><InitiativeSection/><EventsSection/><ContactSection/></main>; }
function BeyondPage() { return <main><PageHero eyebrow="Beyond tech" title="When I’m not at my laptop." intro="Food, creativity, and the parts of life that do not fit neatly inside a résumé bullet."/><BeyondSection full/><ContactSection/></main>; }

function DetailMetric({ value, label }) { return <div className="detail-metric"><strong>{value}</strong><span>{label}</span></div>; }
function ProjectDetail() {
  const { slug } = useParams(); const project = projects.find(p => p.slug === slug);
  if (!project) return <NotFound/>;
  return <main className="detail-page"><section className={`detail-hero tone-${project.tone}`}><Link to="/projects" className="back-link">← All projects</Link><div className="detail-title"><p>{project.number} · {project.category} · {project.year}</p><h1>{project.title}</h1><p>{project.detailedDescription}</p><div className="card-actions">{project.liveUrl&&<ArrowLink href={project.liveUrl} cursor="TRY">Try live demo</ArrowLink>}{project.githubUrl&&<ArrowLink href={project.githubUrl} secondary cursor="CODE">View output</ArrowLink>}</div></div><ProjectVisual type={project.visual}/></section><section className="case-body"><div className="case-sidebar"><DetailMetric value={project.metric} label={project.metricLabel}/><DetailMetric value={project.secondaryMetric} label="project scale"/><div className="tags">{project.techStack.map(x=><span key={x}>{x}</span>)}</div></div><div className="case-content"><CaseBlock title="The problem" text={project.problem}/><CaseBlock title="Why I built it" text={project.why}/><CaseBlock title="The dataset" text={project.dataset}/><CaseBlock title="Methodology" text={project.methodology}/><div className="case-block"><p className="eyebrow">Results</p><h2>What the work showed.</h2><ul>{project.results.map(x=><li key={x}>{x}</li>)}</ul></div><CaseBlock title="What I learned" text={project.lessons}/><CaseBlock title="What I’d improve" text={project.improve}/></div></section><ContactSection/></main>;
}
function CaseBlock({ title, text }) { return <section className="case-block"><p className="eyebrow">{title}</p><h2>{text}</h2></section>; }

function ResearchDetail() {
  const { slug } = useParams(); const pub = publications.find(p=>p.slug===slug);
  if(!pub) return <NotFound/>;
  return <main className="detail-page research-detail"><section className="detail-hero dark"><Link to="/research" className="back-link">← Research archive</Link><div className="detail-title"><p>{pub.number} · {pub.type} · {pub.year}</p><h1>{pub.title}</h1><p>{pub.summary}</p></div><DetailMetric value={pub.highlight} label={pub.label}/></section><section className="research-body"><aside className="research-citation"><p className="eyebrow">Authors</p><p>{pub.authors}</p><p className="eyebrow">Citation</p><p>{pub.citation}</p><div className="tags">{pub.technologies.map(x=><span key={x}>{x}</span>)}</div></aside><div><CaseBlock title="My contribution" text={pub.contribution}/><CaseBlock title="Methodology" text={pub.methodology}/><CaseBlock title="Key findings" text={pub.findings}/>{pub.image&&<figure className="patent-proof"><img src={pub.image} alt={pub.imageAlt}/><figcaption>Published patent application · Indian Patent Office · July 4, 2025</figcaption></figure>}<div className="card-actions">{pub.publicationUrl&&<ArrowLink href={pub.publicationUrl}>Read publication</ArrowLink>}{pub.projectUrl&&<ArrowLink href={pub.projectUrl} secondary cursor="CODE">View output</ArrowLink>}</div></div></section><ContactSection/></main>;
}

function NotFound() { return <main className="not-found"><p className="eyebrow">404</p><h1>This page wandered off.</h1><Link className="button button-dark" to="/">Return home</Link></main>; }
function Footer() { return <footer><span>© 2026 Akshaya Jayakanth</span><span>Data, ideas & a little bit of dessert.</span><a href={`mailto:${profile.email}`}><FiMail/>Say hello</a></footer>; }

function AppShell() {
  return <><ScrollManager/><Cursor/><Header/><Routes><Route path="/" element={<HomePage/>}/><Route path="/projects" element={<ProjectsPage/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="/research" element={<ResearchPage/>}/><Route path="/research/:slug" element={<ResearchDetail/>}/><Route path="/accolades" element={<AccoladesPage/>}/><Route path="/leadership" element={<LeadershipPage/>}/><Route path="/beyond-tech" element={<BeyondPage/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></>;
}

export default function App() { return <BrowserRouter><AppShell/></BrowserRouter>; }
