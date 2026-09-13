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
      <section id="skills">Skills</section>
      <section id="experience">Experience</section>
      <section id="hackathons">Hackathons</section>
      <section id="activity">Activity</section>
      <section id="contact">Contact</section>

      <footer></footer>
    </>
  )
}

export default App