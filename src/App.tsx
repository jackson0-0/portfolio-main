import './App.css'

function App() {
  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-black border-b border-gray-800">
        <div className="text-lg font-[family-name:var(--font-title)] text-white">
          jackson.lam
        </div>
        <nav className="flex gap-8 text-sm text-gray-400">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#hackathons">Hackathons</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="px-8 py-24 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          available for summer 2027 internships
        </div>

        <h1 className="text-5xl font-[family-name:var(--font-title)] text-black max-w-xl leading-tight">
          From idea to deployment. I build full stack applications.
        </h1>

        <p className="font-[family-name:var(--font-small)] text-sm text-gray-400 mt-6 max-w-xl leading-relaxed">
          Jackson Lam — Computer Science student at CSULB, freelance full-stack developer.
          I take projects from a data source to a deployed app: React front ends, FastAPI/Node
          backends, and the AWS plumbing in between.
        </p>

        <div className="flex gap-4 mt-9">
          <a href="#projects" className="px-5 py-3 bg-black text-white text-sm font-[family-name:var(--font-small)]">
            see the work
          </a>
          <a href="#" target="_blank" className="px-5 py-3 border border-gray-700 text-sm font-[family-name:var(--font-small)] text-gray-500">
            resume ↗
          </a>
          <a href="#contact" className="px-5 py-3 border border-gray-700 text-sm font-[family-name:var(--font-small)] text-gray-500">
            get in touch
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mt-11 text-xs text-gray-500 font-[family-name:var(--font-small)]">
          <span className="border border-gray-400 px-2 py-1">React</span>
          <span className="border border-gray-400 px-2 py-1">TypeScript</span>
          <span className="border border-gray-400 px-2 py-1">FastAPI</span>
          <span className="border border-gray-400 px-2 py-1">Node.js</span>
          <span className="border border-gray-400 px-2 py-1">PostgreSQL</span>
          <span className="border border-gray-400 px-2 py-1">MongoDB</span>
          <span className="border border-gray-400 px-2 py-1">AWS Lambda</span>
        </div>
      </section>
      <section id="projects" className="px-8 py-24 max-w-5xl mx-auto border-t border-gray-200">
        <div className="flex justify-between items-baseline mb-10 pb-5 border-b border-gray-200">
          <h2 className="text-2xl font-[family-name:var(--font-title)] text-black">Projects</h2>
          <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">01 / demos</span>
        </div>

        <div className="grid grid-cols-2 border border-gray-300 mb-6">
          <div className="aspect-video border-r border-gray-300 flex items-center justify-center">
            <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">demo screenshot</span>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <span className="font-[family-name:var(--font-small)] text-xs text-gray-500 border border-gray-400 px-2 py-1 self-start">live</span>
            <h3 className="text-lg text-black">IPO Calendar & Analyzer</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Pulls upcoming IPOs and runs an AI pass over each filing to score it in plain language. Deployed on AWS Lambda.
            </p>
            <div className="flex flex-wrap gap-2 font-[family-name:var(--font-small)] text-xs text-gray-500">
              <span className="border border-gray-300 px-2 py-1">AWS Lambda</span>
              <span className="border border-gray-300 px-2 py-1">Node.js</span>
              <span className="border border-gray-300 px-2 py-1">MongoDB</span>
            </div>
            <div className="flex gap-4 text-sm pt-2">
              <a href="#" className="underline text-black">live demo</a>
              <a href="#" className="underline text-black">source</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border border-gray-300 mb-6 min-h-[280px]">
          <div className="aspect-video border-r border-gray-300 flex items-center justify-center">
            <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">demo screenshot</span>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <span className="font-[family-name:var(--font-small)] text-xs text-gray-500 border border-gray-400 px-2 py-1 self-start">live</span>
            <h3 className="text-lg text-black">Options Analytics Dashboard</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Real-time options-chain analytics — greeks, IV surface, and volume/OI overlays. Currently wiring up the AWS deploy.
            </p>
            <div className="flex flex-wrap gap-2 font-[family-name:var(--font-small)] text-xs text-gray-500">
              <span className="border border-gray-300 px-2 py-1">React</span>
              <span className="border border-gray-300 px-2 py-1">FastAPI</span>
              <span className="border border-gray-300 px-2 py-1">PostgreSQL</span>
            </div>
            <div className="flex gap-4 text-sm pt-2">
              <a href="#" className="underline text-black">source</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border border-gray-300">
          <div className="aspect-video border-r border-gray-300 flex items-center justify-center">
            <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">demo screenshot</span>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <span className="font-[family-name:var(--font-small)] text-xs text-gray-500 border border-gray-400 px-2 py-1 self-start">live</span>
            <h3 className="text-lg text-black">Pokémon Team Builder</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Full-stack app to search, assemble, and save Pokémon teams — matchup and coverage checks on top of a searchable dex.
            </p>
            <div className="flex flex-wrap gap-2 font-[family-name:var(--font-small)] text-xs text-gray-500">
              <span className="border border-gray-300 px-2 py-1">React</span>
              <span className="border border-gray-300 px-2 py-1">Node.js</span>
              <span className="border border-gray-300 px-2 py-1">MongoDB</span>
            </div>
            <div className="flex gap-4 text-sm pt-2">
              <a href="#" className="underline text-black">source</a>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="px-8 py-24 max-w-5xl mx-auto border-t border-gray-200">
        <div className="flex justify-between items-baseline mb-10 pb-5 border-b border-gray-200">
          <h2 className="text-2xl font-[family-name:var(--font-title)] text-black">What I work with</h2>
          <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">02 / skills</span>
        </div>

        <div className="grid grid-cols-3 border border-gray-300">
          <div className="p-6 border-r border-gray-300">
            <h4 className="font-[family-name:var(--font-small)] text-xs text-gray-500 mb-4">FRONTEND</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 border border-gray-300 px-2 py-1">React</span>
              <span className="text-sm text-gray-600 border border-gray-300 px-2 py-1">TypeScript</span>
              <span className="text-sm text-gray-600 border border-gray-300 px-2 py-1">Tailwind CSS</span>
              <span className="text-sm text-gray-600 border border-gray-300 px-2 py-1">Vite</span>
            </div>
          </div>
          <div className="p-6 border-r border-gray-300">
            <h4 className="font-[family-name:var(--font-small)] text-xs text-gray-500 mb-4">BACKEND & DATA</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 border border-gray-300 px-2 py-1">FastAPI</span>
              <span className="text-sm text-gray-600 border border-gray-300 px-2 py-1">Node.js</span>
              <span className="text-sm text-gray-600 border border-gray-300 px-2 py-1">PostgreSQL</span>
              <span className="text-sm text-gray-600 border border-gray-300 px-2 py-1">MongoDB</span>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-[family-name:var(--font-small)] text-xs text-gray-500 mb-4">CLOUD & AI</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 border border-gray-300 px-2 py-1">AWS Lambda</span>
              <span className="text-sm text-gray-600 border border-gray-300 px-2 py-1">Google Cloud</span>
              <span className="text-sm text-gray-600 border border-gray-300 px-2 py-1">Vertex AI</span>
              <span className="text-sm text-gray-600 border border-gray-300 px-2 py-1">Docker</span>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="px-8 py-24 max-w-5xl mx-auto border-t border-gray-200">
        <div className="flex justify-between items-baseline mb-10 pb-5 border-b border-gray-200">
          <h2 className="text-2xl font-[family-name:var(--font-title)] text-black">Experience</h2>
          <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">03 / timeline</span>
        </div>

        <div className="border-l-2 border-gray-300 pl-7 flex flex-col gap-10">
          <div className="relative">
            <span className="absolute -left-[33px] top-1 w-2.5 h-2.5 rounded-full bg-black"></span>
            <div className="font-[family-name:var(--font-small)] text-xs text-gray-400 mb-2">2026 — present</div>
            <h3 className="text-lg text-black mb-1">Freelance Software Developer</h3>
            <div className="text-sm text-gray-500 mb-3">Independent</div>
            <ul className="list-disc list-inside flex flex-col gap-1.5">
              <li className="text-sm text-gray-500 leading-relaxed">Full-stack client builds in React, FastAPI, and Node, deployed on AWS and Google Cloud.</li>
              <li className="text-sm text-gray-500 leading-relaxed">Own each project end to end — scoping, architecture, build, and deployment.</li>
            </ul>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] top-1 w-2.5 h-2.5 rounded-full bg-black"></span>
            <div className="font-[family-name:var(--font-small)] text-xs text-gray-400 mb-2">2025 — present</div>
            <h3 className="text-lg text-black mb-1">Computer Science — CSULB</h3>
            <div className="text-sm text-gray-500 mb-3">California State University, Long Beach</div>
            <ul className="list-disc list-inside flex flex-col gap-1.5">
              <li className="text-sm text-gray-500 leading-relaxed">Upper-division coursework including senior project (CECS 491A).</li>
              <li className="text-sm text-gray-500 leading-relaxed">Coursework spans systems, databases, and software engineering practice.</li>
            </ul>
          </div>

        </div>
      </section>
      <section id="hackathons" className="px-8 py-24 max-w-5xl mx-auto border-t border-gray-200">
        <div className="flex justify-between items-baseline mb-10 pb-5 border-b border-gray-200">
          <h2 className="text-2xl font-[family-name:var(--font-title)] text-black">Hackathons</h2>
          <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">04 / current build</span>
        </div>

        <div className="border-l-2 border-gray-300 pl-7">
          <div className="relative">
            <span className="absolute -left-[33px] top-1 w-2.5 h-2.5 rounded-full bg-black"></span>
            <div className="font-[family-name:var(--font-small)] text-xs text-gray-400 mb-2">Oct 2026 — 47 days to deadline</div>
            <h3 className="text-lg text-black mb-1">Nebius x NVIDIA Global AI Hackathon</h3>
            <div className="text-sm text-gray-500 mb-3">Online · Devpost · $50,000 in prizes</div>
            <ul className="list-disc list-inside flex flex-col gap-1.5 mb-4">
              <li className="text-sm text-gray-500 leading-relaxed">Building an AI system on Nebius Token Factory / AI Cloud using an NVIDIA Nemotron open-source model.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="font-[family-name:var(--font-small)] text-xs text-gray-500 border border-gray-300 px-2 py-1">Nebius Token Factory</span>
              <span className="font-[family-name:var(--font-small)] text-xs text-gray-500 border border-gray-300 px-2 py-1">NVIDIA Nemotron</span>
            </div>
            <div className="flex gap-5 text-sm">
              <span className="text-gray-300">demo (in progress)</span>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="activity">Activity</section> */}
      <section id="contact" className="px-8 py-24 max-w-5xl mx-auto border-t border-gray-200 pb-32">
        <div className="flex justify-between items-baseline mb-10 pb-5 border-b border-gray-200">
          <h2 className="text-2xl font-[family-name:var(--font-title)] text-black">Contact</h2>
          <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">05 / get in touch</span>
        </div>

        <p className="text-sm text-gray-500 max-w-md leading-relaxed mb-2">
          Open to summer 2027 SWE internships, freelance builds, or just talking through an idea. Fastest reply is email.
        </p>
        <div className="flex items-center gap-2 font-[family-name:var(--font-small)] text-xs text-gray-500 mt-5 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          available now — replies within 24h
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div>
            <span className="font-[family-name:var(--font-small)] text-xs text-gray-400 mb-2 block">NEXT AVAILABLE — 30 MIN CALL</span>
            <div className="grid grid-cols-3 gap-2 mb-9">
              <button className="font-[family-name:var(--font-small)] text-xs text-gray-500 border border-gray-300 py-2">Mon 2:00p</button>
              <button className="font-[family-name:var(--font-small)] text-xs text-gray-500 border border-gray-300 py-2">Mon 3:30p</button>
              <button className="font-[family-name:var(--font-small)] text-xs text-gray-500 border border-gray-300 py-2">Tue 10:00a</button>
              <button className="font-[family-name:var(--font-small)] text-xs text-gray-500 border border-gray-300 py-2">Tue 1:00p</button>
              <button className="font-[family-name:var(--font-small)] text-xs text-gray-500 border border-gray-300 py-2">Wed 11:30a</button>
              <button className="font-[family-name:var(--font-small)] text-xs text-gray-500 border border-gray-300 py-2">Thu 4:00p</button>
            </div>
            <div className="border-t border-gray-200">
              <div className="flex justify-between py-3.5 border-b border-gray-200 text-sm">
                <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">EMAIL</span>
                <span className="text-black">jacksonlam510@gmail.com</span>
              </div>
              <div className="flex justify-between py-3.5 border-b border-gray-200 text-sm">
                <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">LINKEDIN</span>
                <span className="text-black">linkedin.com/in/jacksonlam</span>
              </div>
              <div className="flex justify-between py-3.5 border-b border-gray-200 text-sm">
                <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">GITHUB</span>
                <span className="text-black">github.com/jackson0-0</span>
              </div>
              <div className="flex justify-between py-3.5 border-b border-gray-200 text-sm">
                <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">TIMEZONE</span>
                <span className="text-black">America/Los_Angeles</span>
              </div>
              <div className="flex justify-between py-3.5 border-b border-gray-200 text-sm">
                <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">LOCATION</span>
                <span className="text-black">Anaheim, CA</span>
              </div>
              <div className="flex justify-between py-3.5 border-b border-gray-200 text-sm">
                <span className="font-[family-name:var(--font-small)] text-xs text-gray-400">RESUME</span>
                <span className="text-black">download ↗</span>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-4">
            <div>
              <label className="font-[family-name:var(--font-small)] text-xs text-gray-400 block mb-1.5">NAME</label>
              <input type="text" placeholder="Jane Smith" className="w-full border border-gray-300 px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="font-[family-name:var(--font-small)] text-xs text-gray-400 block mb-1.5">EMAIL</label>
              <input type="email" placeholder="jane@company.com" className="w-full border border-gray-300 px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="font-[family-name:var(--font-small)] text-xs text-gray-400 block mb-1.5">WHAT'S THIS ABOUT</label>
              <input type="text" placeholder="internship, freelance project, just saying hi..." className="w-full border border-gray-300 px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="font-[family-name:var(--font-small)] text-xs text-gray-400 block mb-1.5">MESSAGE</label>
              <textarea placeholder="Tell me a bit about what you're working on." className="w-full border border-gray-300 px-3 py-2.5 text-sm min-h-[110px]"></textarea>
            </div>
            <button type="submit" className="self-start bg-black text-white text-sm px-6 py-3 font-[family-name:var(--font-small)] mt-1">
              send message →
            </button>
          </form>
        </div>
      </section>

      <footer></footer>
    </>
  )
}

export default App