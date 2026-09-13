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

      <section id="home">Home</section>
      <section id="projects">Projects</section>
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