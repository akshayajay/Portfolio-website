import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useLocation,
} from 'react-router-dom';
import {
  profile,
  experience,
  projects,
  otherProjects,
  skills,
  topics,
  publications,
  education,
  certifications,
} from './data/site';
import './index.css';

function ExternalLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-accent hover:underline underline-offset-4 ${className}`}
    >
      {children}
    </a>
  );
}

function Divider() {
  return (
    <div className="my-16 text-center font-mono text-xs tracking-[0.6em] text-faint select-none">
      · · ·
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <Divider />
      <h2 className="mb-8 text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

function Header() {
  const nav = [
    ['About', '/'],
    ['Work', '/work'],
    ['Projects', '/projects'],
    ['Research', '/research'],
    ['Skills', '/skills'],
  ];
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-10">
      <Link to="/" className="font-semibold tracking-tight">
        {profile.name}
      </Link>
      <nav className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs">
        {nav.map(([label, to]) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              isActive ? 'text-ink' : 'text-faint hover:text-ink'
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-hairline py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <p>
          Thanks for scrolling all the way down. Say hi:{' '}
          <a
            href={`mailto:${profile.email}`}
            className="text-accent hover:underline underline-offset-4"
          >
            {profile.email}
          </a>
        </p>
        <p className="font-mono text-xs text-faint">© 2026 {profile.name}</p>
      </div>
      <p className="mt-4 font-mono text-xs text-faint">
        Handmade with React + Tailwind, set in Charter, hosted on Vercel. No
        trackers, no analytics, no gradients.
      </p>
    </footer>
  );
}

function PageTitle({ title, intro }) {
  return (
    <div className="mt-16">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      {intro && <p className="mt-4 max-w-xl">{intro}</p>}
    </div>
  );
}

/* ---------- About (home) ---------- */

function Intro() {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-semibold tracking-tight">{profile.tagline}</h1>
      {profile.intro.map((para) => (
        <p key={para} className="mt-5 max-w-xl">
          {para}
        </p>
      ))}
      <p className="mt-6 font-mono text-xs text-faint">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
        {profile.status}
      </p>
      <p className="mt-3 max-w-xl">
        If you’d rather have all of this on one tidy page,{' '}
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline underline-offset-4"
        >
          here’s my resume
        </a>
        .
      </p>
      <div className="mt-5 flex gap-5 font-mono text-xs">
        <ExternalLink href={profile.github}>GitHub</ExternalLink>
        <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
        <a
          href={`mailto:${profile.email}`}
          className="text-accent hover:underline underline-offset-4"
        >
          Email
        </a>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline underline-offset-4"
        >
          Resume
        </a>
      </div>

      <div className="mt-10 rounded-md border border-hairline px-5 py-4 font-mono text-xs leading-6">
        <p className="mb-2 uppercase tracking-[0.2em] text-faint">Currently</p>
        {profile.currently.map(([label, value]) => (
          <p key={label}>
            <span className="text-faint">{label}:</span>{' '}
            <span className="text-ink">{value}</span>
          </p>
        ))}
      </div>

      <p className="mt-8">
        If you want to see what I’ve actually built,{' '}
        <Link to="/projects" className="text-accent hover:underline underline-offset-4">
          the projects page
        </Link>{' '}
        is the good part. My internships are over on{' '}
        <Link to="/work" className="text-accent hover:underline underline-offset-4">
          work
        </Link>
        , and the papers live under{' '}
        <Link to="/research" className="text-accent hover:underline underline-offset-4">
          research
        </Link>
        .
      </p>
    </div>
  );
}

function AboutPage() {
  return (
    <main>
      <Intro />
    </main>
  );
}

/* ---------- Work ---------- */

function WorkPage() {
  return (
    <main>
      <PageTitle title="Where I’ve worked" intro={profile.workIntro} />
      <div className="mt-12 space-y-12">
        {experience.map((job) => (
          <div key={job.company + job.role}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">
                {job.role} <span className="font-normal text-faint">· {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-faint">{job.date}</span>
            </div>
            <p className="mt-2 italic text-faint">{job.summary}</p>
            <ul className="mt-3 space-y-1.5">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="select-none text-hairline">-</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Section title="Education">
        <div className="space-y-5">
          {education.map((e) => (
            <div
              key={e.school}
              className="flex flex-wrap items-baseline justify-between gap-x-4"
            >
              <p>
                <span className="font-semibold">{e.school}</span>
                <span className="text-faint"> · {e.degree}</span>
              </p>
              <span className="font-mono text-xs text-faint">{e.detail}</span>
            </div>
          ))}
          <p className="font-mono text-xs text-faint">
            Certifications: {certifications.join(' · ')}
          </p>
        </div>
      </Section>
    </main>
  );
}

/* ---------- Research ---------- */

function ResearchPage() {
  return (
    <main>
      <PageTitle title="Papers & a patent" intro={profile.researchIntro} />
      <div className="mt-12 space-y-8">
        {publications.map((pub) => (
          <div key={pub.title} className="border-t border-hairline pt-5">
            <p className="font-semibold">
              {pub.href ? (
                <ExternalLink href={pub.href} className="text-ink hover:text-accent">
                  {pub.title} ↗
                </ExternalLink>
              ) : (
                pub.title
              )}
            </p>
            <p className="mt-1 font-mono text-xs text-faint">
              {pub.type} · {pub.venue}
            </p>
            {pub.note && <p className="mt-2">{pub.note}</p>}
          </div>
        ))}
      </div>
      <p className="mt-12">
        The code behind these lives on the{' '}
        <Link to="/projects" className="text-accent hover:underline underline-offset-4">
          projects page
        </Link>. The patent came out of{' '}
        <Link
          to="/projects/elyssa"
          className="text-accent hover:underline underline-offset-4"
        >
          Elyssa
        </Link>
        , and the papers came out of Alzheimer’s Detection and GenoCrypt.
      </p>
    </main>
  );
}

/* ---------- Projects ---------- */

function ProjectIndexEntry({ title, tag, date, description, readMoreTo, githubHref }) {
  return (
    <div className="border-t border-hairline pt-5 pb-1">
      <div className="flex flex-wrap items-baseline gap-x-3">
        {readMoreTo ? (
          <Link to={readMoreTo} className="font-semibold hover:text-accent">
            {title}
          </Link>
        ) : (
          <ExternalLink
            href={githubHref}
            className="font-semibold text-ink hover:text-accent"
          >
            {title}
          </ExternalLink>
        )}
        <span className="font-mono text-xs uppercase tracking-wider text-faint">
          ({tag})
        </span>
      </div>
      <p className="mt-1.5">{description}</p>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-5 font-mono text-xs">
        {readMoreTo ? (
          <Link to={readMoreTo} className="text-accent hover:underline underline-offset-4">
            Read more →
          </Link>
        ) : (
          <ExternalLink href={githubHref}>GitHub →</ExternalLink>
        )}
        <span className="text-faint">{date}</span>
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <main>
      <PageTitle title="Things I’ve built" intro={profile.projectsIntro} />
      <div className="mt-10 space-y-6">
        {projects.map((p) => (
          <ProjectIndexEntry
            key={p.slug}
            title={p.title}
            tag={p.tag}
            date={p.date}
            description={p.oneLiner}
            readMoreTo={`/projects/${p.slug}`}
          />
        ))}
        {otherProjects.map((p) => (
          <ProjectIndexEntry
            key={p.title}
            title={p.title}
            tag={p.tag}
            date={p.date}
            description={p.description}
            githubHref={p.href}
          />
        ))}
      </div>
    </main>
  );
}

function ProjectPost() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <NotFound />;

  return (
    <main className="mt-16">
      <Link to="/projects" className="font-mono text-xs text-faint hover:text-ink">
        ← Back to projects
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight">{project.title}</h1>
      <p className="mt-3 font-mono text-xs text-faint">
        {project.tag} · {project.date} · {project.stack}
      </p>
      <div className="mt-4 flex flex-wrap gap-5 font-mono text-xs">
        {project.links.map((l) => (
          <ExternalLink key={l.href} href={l.href}>
            {l.label} ↗
          </ExternalLink>
        ))}
      </div>

      {project.gif && (
        <img
          src={project.gif}
          alt={project.gifAlt}
          loading="lazy"
          className="mt-8 w-full rounded-md border border-hairline"
        />
      )}

      {project.image && (
        <figure className="mt-8">
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            className="w-full rounded-md border border-hairline"
          />
          <figcaption className="mt-2 font-mono text-xs text-faint">
            {project.image.caption}
          </figcaption>
        </figure>
      )}

      {project.tryIt && (
        <div className="mt-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-faint">
            Try it
          </p>
          <pre className="overflow-x-auto rounded-md border border-hairline bg-white/60 px-4 py-3 font-mono text-xs leading-6">
            {project.tryIt}
          </pre>
        </div>
      )}

      {project.sections.map((section) => (
        <section key={section.heading} className="mt-12">
          <h2 className="mb-4 text-lg font-semibold tracking-tight">
            {section.heading}
          </h2>
          {section.paragraphs?.map((para) => (
            <p key={para} className="mt-3 first:mt-0">
              {para}
            </p>
          ))}
          {section.pre && (
            <pre className="overflow-x-auto rounded-md border border-hairline bg-white/60 px-4 py-3 font-mono text-xs leading-5">
              {section.pre}
            </pre>
          )}
          {section.bullets && (
            <ul className="mt-3 space-y-1.5 first:mt-0">
              {section.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="select-none text-hairline">-</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
}

/* ---------- Skills ---------- */

function SkillGroupList({ groups }) {
  return (
    <div className="space-y-6">
      {groups.map((s) => (
        <div key={s.group}>
          <h3 className="font-semibold">{s.group}</h3>
          <p className="mt-1">{s.items}</p>
        </div>
      ))}
    </div>
  );
}

function SkillsPage() {
  return (
    <main>
      <PageTitle title="Tools I reach for" intro={profile.skillsIntro} />
      <div className="mt-10">
        <SkillGroupList groups={skills} />
      </div>
      <Section title="Topics covered">
        <SkillGroupList groups={topics} />
      </Section>
    </main>
  );
}

/* ---------- 404 ---------- */

function NotFound() {
  return (
    <main className="mt-24 mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        This page doesn’t exist.
      </h1>
      <p className="mt-5 max-w-xl">
        You’ve wandered beyond the Wall. There’s nothing up here but white
        walkers and broken links.
      </p>
      <p className="mt-6 font-mono text-xs">
        <Link to="/" className="text-accent hover:underline underline-offset-4">
          ← Head back south
        </Link>
      </p>
    </main>
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="mx-auto max-w-2xl px-6">
        <Header />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectPost />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
