import './App.css'
import About from './About'
// import ipoImg from './assets/ipo.png' — only used by the commented-out IPO card below
import optionsImg from './assets/options.png'
import pokemonImg from './assets/pokemon.png'
import resumePdf from './assets/JacksonLamResume.pdf?url'
import { useState, useEffect } from 'react'
import { useForm } from '@formspree/react'
import { Routes, Route, Link } from 'react-router-dom'
import ProjectDetail from './ProjectDetail'
import ImageDemo from './ImageDemo'

function App() {
  const [time, setTime] = useState('')
  //empty when pages loads
  const [copied, setCopied] = useState(false)
  //clicking it sets it to true which then changes text to copied
  const [menuOpen, setMenuOpen] = useState(false)
  //tracks whether the mobile nav dropdown is open, only used below the md breakpoint
  const [formState, handleSubmit] = useForm('xyeyqzly')
  //Formspree hook: formState.submitting/succeeded/errors + handleSubmit to wire onSubmit

  const copyEmail = () => {
    navigator.clipboard.writeText('jacksonlam510@gmail.com')
    //copies to clipboard 
    setCopied(true)
    //setter changes copied  == true 
    setTimeout(() => setCopied(false), 1500)
    //after 1.5 seconds it flips copied back to false 
  }

  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval) //cleanup, stop tick running when off page
  }, [])
  // tick gets the current time, and setsTime to curr time,we run tick then every second we are on the page
  //timing : [] stops the effect from running when we are off the page 

  return (
    <Routes>
      <Route path="/" element={
        <>

          {/* sticky wrapper holds header + mobile dropdown together, so the dropdown (positioned
              absolute below) stays anchored under the header instead of scrolling away */}
          <div className="sticky top-0 z-50">
          <header className="grid grid-cols-[1fr_auto_1fr] items-center px-8 py-4 bg-[var(--bg)]/90 backdrop-blur border-b border-[var(--line)]">
            <div className="text-lg font-[family-name:var(--font-title)] text-[var(--fg)]">
              jackson<span className="text-[var(--teal)]">.</span>lam
            </div>
            {/* hidden md:flex — nav row only shows at/above the md breakpoint (768px) */}
            <nav className="hidden md:flex gap-8 text-sm text-[var(--fg-dim)] justify-self-center">
              <Link to="/about" className="hover:text-[var(--fg)]">About</Link>
              <a href="#projects" className="hover:text-[var(--fg)]">Projects</a>
              <a href="#skills" className="hover:text-[var(--fg)]">Skills</a>
              <a href="#experience" className="hover:text-[var(--fg)]">Experience</a>
              <a href="#hackathons" className="hover:text-[var(--fg)]">Hackathons</a>
              <Link to="/demo" className="hover:text-[var(--fg)]">Demo</Link>
              <a href="#contact" className="hover:text-[var(--fg)]">Contact</a>
            </nav>
            <div className="flex items-center gap-4 justify-self-end font-[family-name:var(--font-small)] text-sm text-[var(--fg)]">
              {time}
              {/* hamburger button — mirror of the nav above, only visible below md */}
              <button className="md:hidden text-lg leading-none" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? '✕' : '☰'}
              </button>
            </div>
          </header>

          {/* mobile dropdown — only rendered when menuOpen, absolute so it overlays the page
              content below instead of pushing it down / scrolling away with it */}
          {menuOpen && (
            <div className="md:hidden absolute inset-x-0 top-full flex flex-col gap-4 px-8 py-6 text-sm text-[var(--fg-dim)] bg-[var(--bg)] border-b border-[var(--line)]">
              <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[var(--fg)]">About</Link>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-[var(--fg)]">Projects</a>
              <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-[var(--fg)]">Skills</a>
              <a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-[var(--fg)]">Experience</a>
              <a href="#hackathons" onClick={() => setMenuOpen(false)} className="hover:text-[var(--fg)]">Hackathons</a>
              <Link to="/demo" onClick={() => setMenuOpen(false)} className="hover:text-[var(--fg)]">Demo</Link>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[var(--fg)]">Contact</a>
            </div>
          )}
          </div>

          <section id="home" className="px-8 py-24 max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-[var(--teal)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--teal)]"></span>
              available for summer 2027 internships
            </div>

            <h1 className="text-5xl font-[family-name:var(--font-title)] text-[var(--fg)] max-w-xl leading-tight">
              From idea to deployment. I build full stack applications.
            </h1>

            <p className="font-[family-name:var(--font-small)] text-sm text-[var(--fg-dim)] mt-6 max-w-xl leading-relaxed">
              Jackson Lam — Computer Science student at CSULB, freelance full-stack developer.
              I take projects from a data source to a deployed app: React front ends, FastAPI/Node
              backends, and the AWS plumbing in between.
            </p>

            <div className="flex gap-4 mt-9">
              <a href="#projects" className="px-5 py-3 bg-[var(--teal)] text-black text-sm font-[family-name:var(--font-small)]">
                see the work
              </a>
              <a href={resumePdf} target="_blank" className="px-5 py-3 border border-[var(--line)] text-sm font-[family-name:var(--font-small)] text-[var(--fg-dim)]">
                resume ↗
              </a>
              <a href="#contact" className="px-5 py-3 border border-[var(--line)] text-sm font-[family-name:var(--font-small)] text-[var(--fg-dim)]">
                get in touch
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mt-11 text-xs text-[var(--fg-dim)] font-[family-name:var(--font-small)]">
              <span className="border border-[var(--line)] px-2 py-1">React</span>
              <span className="border border-[var(--line)] px-2 py-1">TypeScript</span>
              <span className="border border-[var(--line)] px-2 py-1">FastAPI</span>
              <span className="border border-[var(--line)] px-2 py-1">Node.js</span>
              <span className="border border-[var(--line)] px-2 py-1">PostgreSQL</span>
              <span className="border border-[var(--line)] px-2 py-1">MongoDB</span>
              <span className="border border-[var(--line)] px-2 py-1">AWS Lambda</span>
            </div>
          </section>

          <section id="projects" className="px-8 py-24 max-w-5xl mx-auto border-t border-[var(--line)]">
            <div className="flex justify-between items-baseline mb-10 pb-5 border-b border-[var(--line)]">
              <h2 className="text-2xl font-[family-name:var(--font-title)] text-[var(--fg)]">Projects</h2>
              <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">01 / demos</span>
            </div>

            {/* IPO Calendar & Analyzer card — commented out for now
            <div className="grid grid-cols-2 border border-[var(--line)] mb-6 min-h-[280px]">
              <div className="border-r border-[var(--line)] overflow-hidden">
                <img src={ipoImg} alt="IPO Calendar & Analyzer screenshot" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <span className="font-[family-name:var(--font-small)] text-xs text-[var(--teal)] border border-[var(--teal)] px-2 py-1 self-start">live</span>
                <h3 className="text-lg text-[var(--fg)]">IPO Calendar & Analyzer</h3>
                <p className="text-sm text-[var(--fg-dim)] leading-relaxed">
                  Pulls upcoming IPOs and runs an AI pass over each filing to score it in plain language. Deployed on AWS Lambda.
                </p>
                <div className="flex flex-wrap gap-2 font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">
                  <span className="border border-[var(--line)] px-2 py-1">AWS Lambda</span>
                  <span className="border border-[var(--line)] px-2 py-1">Node.js</span>
                  <span className="border border-[var(--line)] px-2 py-1">MongoDB</span>
                </div>
                <Link to="/projects/ipo-analyzer" className="self-end mt-auto font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] border border-[var(--line)] px-4 py-2 hover:border-[var(--teal)] hover:text-[var(--teal)]">
                  preview
                </Link>
              </div>
            </div>
            */}

            {/* grid-cols-1 stacks image above text on mobile; md:grid-cols-2 restores
                side-by-side once there's room for both */}
            <div className="grid grid-cols-1 md:grid-cols-2 border border-[var(--line)] mb-6 min-h-[280px]">
              <div className="border-r border-[var(--line)] overflow-hidden">
                <img src={optionsImg} alt="Options Analytics Dashboard screenshot" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <span className="font-[family-name:var(--font-small)] text-xs text-[var(--teal)] border border-[var(--teal)] px-2 py-1 self-start">live</span>
                <h3 className="text-lg text-[var(--fg)]">Options Analytics Dashboard</h3>
                <p className="text-sm text-[var(--fg-dim)] leading-relaxed">
                  Real-time options-chain analytics — greeks, IV surface, and volume/OI overlays. Currently wiring up the AWS deploy.
                </p>
                <div className="flex flex-wrap gap-2 font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">
                  <span className="border border-[var(--line)] px-2 py-1">React</span>
                  <span className="border border-[var(--line)] px-2 py-1">FastAPI</span>
                  <span className="border border-[var(--line)] px-2 py-1">PostgreSQL</span>
                </div>
                <Link to="/projects/options-dashboard" className="self-end mt-auto font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] border border-[var(--line)] px-4 py-2 hover:border-[var(--teal)] hover:text-[var(--teal)]">
                  preview
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border border-[var(--line)] min-h-[280px]">
              <div className="border-r border-[var(--line)] overflow-hidden">
                <img src={pokemonImg} alt="Pokémon Team Builder screenshot" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <span className="font-[family-name:var(--font-small)] text-xs text-[var(--teal)] border border-[var(--teal)] px-2 py-1 self-start">live</span>
                <h3 className="text-lg text-[var(--fg)]">Pokémon Team Builder</h3>
                <p className="text-sm text-[var(--fg-dim)] leading-relaxed">
                  Full-stack app to search, assemble, and save Pokémon teams — matchup and coverage checks on top of a searchable dex.
                </p>
                <div className="flex flex-wrap gap-2 font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">
                  <span className="border border-[var(--line)] px-2 py-1">React</span>
                  <span className="border border-[var(--line)] px-2 py-1">Node.js</span>
                  <span className="border border-[var(--line)] px-2 py-1">MongoDB</span>
                </div>
                <Link to="/projects/pokemon-team-builder" className="self-end mt-auto font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] border border-[var(--line)] px-4 py-2 hover:border-[var(--teal)] hover:text-[var(--teal)]">
                  preview
                </Link>
              </div>
            </div>
          </section>

          <section id="skills" className="px-8 py-24 max-w-5xl mx-auto border-t border-[var(--line)]">
            <div className="flex justify-between items-baseline mb-10 pb-5 border-b border-[var(--line)]">
              <h2 className="text-2xl font-[family-name:var(--font-title)] text-[var(--fg)]">What I work with</h2>
              <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">02 / skills</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 border border-[var(--line)]">
              <div className="p-6 border-r border-[var(--line)]">
                <h4 className="font-[family-name:var(--font-small)] text-xs text-[var(--teal)] mb-4">FRONTEND</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">React</span>
                  <span className="text-sm text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">TypeScript</span>
                  <span className="text-sm text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">Tailwind CSS</span>
                  <span className="text-sm text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">Vite</span>
                </div>
              </div>
              <div className="p-6 border-r border-[var(--line)]">
                <h4 className="font-[family-name:var(--font-small)] text-xs text-[var(--teal)] mb-4">BACKEND & DATA</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">FastAPI</span>
                  <span className="text-sm text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">Node.js</span>
                  <span className="text-sm text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">PostgreSQL</span>
                  <span className="text-sm text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">MongoDB</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-[family-name:var(--font-small)] text-xs text-[var(--teal)] mb-4">CLOUD & AI</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">AWS Lambda</span>
                  <span className="text-sm text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">Google Cloud</span>
                  <span className="text-sm text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">Vertex AI</span>
                  <span className="text-sm text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">Docker</span>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="px-8 py-24 max-w-5xl mx-auto border-t border-[var(--line)]">
            <div className="flex justify-between items-baseline mb-10 pb-5 border-b border-[var(--line)]">
              <h2 className="text-2xl font-[family-name:var(--font-title)] text-[var(--fg)]">Experience</h2>
              <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">03 / timeline</span>
            </div>

            <div className="border-l-2 border-[var(--line)] pl-7 flex flex-col gap-10">
              <div className="relative">
                <span className="absolute -left-[33px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--teal)]"></span>
                <div className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] mb-2">2025 — present</div>
                <h3 className="text-lg text-[var(--fg)] mb-1">Computer Science — CSULB</h3>
                <div className="text-sm text-[var(--teal)] mb-3">California State University, Long Beach</div>
                <ul className="list-disc list-inside flex flex-col gap-1.5">
                  <li className="text-sm text-[var(--fg-dim)] leading-relaxed">Upper-division coursework including senior project (CECS 491A).</li>
                  <li className="text-sm text-[var(--fg-dim)] leading-relaxed">Coursework spans systems, databases, and software engineering practice.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="hackathons" className="px-8 py-24 max-w-5xl mx-auto border-t border-[var(--line)]">
            <div className="flex justify-between items-baseline mb-10 pb-5 border-b border-[var(--line)]">
              <h2 className="text-2xl font-[family-name:var(--font-title)] text-[var(--fg)]">Hackathons</h2>
              <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">04 / current build</span>
            </div>

            <div className="border-l-2 border-[var(--line)] pl-7">
              <div className="relative">
                <span className="absolute -left-[33px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--teal)]"></span>
                <div className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] mb-2">Oct 2026 — 47 days to deadline</div>
                <h3 className="text-lg text-[var(--fg)] mb-1">Nebius x NVIDIA Global AI Hackathon</h3>
                <div className="text-sm text-[var(--teal)] mb-3">Building</div>
                <ul className="list-disc list-inside flex flex-col gap-1.5 mb-4">
                  <li className="text-sm text-[var(--fg-dim)] leading-relaxed">Building an AI system on Nebius AI Cloud using NVIDIA Nemotron</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">Nebius Token Factory</span>
                  <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">NVIDIA Nemotron</span>
                </div>
                <div className="flex gap-5 text-sm">
                  <span className="text-[var(--fg-dim)] opacity-50">demo (in progress)</span>
                </div>
              </div>
            </div>
          </section>

          {/* <section id="activity">Activity</section> */}

          <section id="contact" className="px-8 py-24 max-w-5xl mx-auto border-t border-[var(--line)] pb-32">
            <div className="flex justify-between items-baseline mb-10 pb-5 border-b border-[var(--line)]">
              <h2 className="text-2xl font-[family-name:var(--font-title)] text-[var(--fg)]">Contact</h2>
              <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">05 / get in touch</span>
            </div>

            <p className="text-sm text-[var(--fg-dim)] max-w-md leading-relaxed mb-2">
              Open to summer 2027 SWE internships, freelance builds, or just talking through an idea. Fastest reply is email.
            </p>
            <div className="flex items-center gap-2 font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] mt-5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--teal)]"></span>
              available now — replies within 24h
            </div>

            {/* grid-cols-1 stacks the info list above the form on mobile; md:grid-cols-2 puts
                them side by side once there's room for both */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="border-t border-[var(--line)]">
                  {/* flex-col stacks label above value on mobile so long values don't overlap
                      the label; md:flex-row md:justify-between restores the side-by-side row */}
                  <div className="flex flex-col md:flex-row md:justify-between py-3.5 border-b border-[var(--line)] text-sm">
                    <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">EMAIL</span>
                    <button onClick={copyEmail} className="text-[var(--fg)] hover:text-[var(--teal)]">{copied ? 'copied!' : 'jacksonlam510@gmail.com'}</button>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between py-3.5 border-b border-[var(--line)] text-sm">
                    <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">LINKEDIN</span>
                    <a href="https://www.linkedin.com/in/jacksonlam227/" target="_blank" className="text-[var(--fg)] hover:text-[var(--teal)]">linkedin.com/in/jacksonlam227</a>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between py-3.5 border-b border-[var(--line)] text-sm">
                    <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">GITHUB</span>
                    <a href="https://github.com/jackson0-0" target="_blank" className="text-[var(--fg)] hover:text-[var(--teal)]">github.com/jackson0-0</a>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between py-3.5 border-b border-[var(--line)] text-sm">
                    <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">TIMEZONE</span>
                    <span className="text-[var(--fg)]">America/Los_Angeles</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between py-3.5 border-b border-[var(--line)] text-sm">
                    <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">LOCATION</span>
                    <span className="text-[var(--fg)]">Anaheim, CA</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between py-3.5 border-b border-[var(--line)] text-sm">
                    <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">RESUME</span>
                    <a href={resumePdf} target="_blank" className="text-[var(--fg)] hover:text-[var(--teal)]">download ↗</a>
                  </div>
                </div>
              </div>

              {/* formState.succeeded flips true once Formspree confirms the submission — show a
                  thank-you message instead of the form in that case */}
              {formState.succeeded ? (
                <div className="text-sm text-[var(--fg)]">Thanks — I'll get back to you soon.</div>
              ) : (
                // onSubmit={handleSubmit} replaces the native page-reloading form submission with
                // Formspree's handler; every input needs a `name` so Formspree can label it
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] block mb-1.5">NAME</label>
                    <input type="text" name="name" placeholder="Jane Smith" className="w-full bg-transparent border border-[var(--line)] text-[var(--fg)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--teal)]" />
                  </div>
                  <div>
                    <label className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] block mb-1.5">EMAIL</label>
                    <input type="email" name="email" placeholder="jane@company.com" className="w-full bg-transparent border border-[var(--line)] text-[var(--fg)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--teal)]" />
                  </div>
                  <div>
                    <label className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] block mb-1.5">WHAT'S THIS ABOUT</label>
                    <input type="text" name="subject" placeholder="internship, freelance project, just saying hi..." className="w-full bg-transparent border border-[var(--line)] text-[var(--fg)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--teal)]" />
                  </div>
                  <div>
                    <label className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] block mb-1.5">MESSAGE</label>
                    <textarea name="message" placeholder="Tell me a bit about what you're working on." className="w-full bg-transparent border border-[var(--line)] text-[var(--fg)] px-3 py-2.5 text-sm min-h-[110px] focus:outline-none focus:border-[var(--teal)]"></textarea>
                  </div>
                  {/* disabled while submitting, so a slow connection can't send it twice */}
                  <button type="submit" disabled={formState.submitting} className="self-start bg-[var(--teal)] text-black text-sm px-6 py-3 font-[family-name:var(--font-small)] mt-1 disabled:opacity-50">
                    {formState.submitting ? 'sending...' : 'send message →'}
                  </button>
                </form>
              )}
            </div>
          </section>

          <footer className="border-t border-[var(--line)] px-8 py-7 flex justify-between font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">
            <span>jackson lam © 2026</span>
            <span>{time}</span>
          </footer>
        </>
      } />
      <Route path="/about" element={<About />} />
      <Route path="/demo" element={<ImageDemo />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App