import { Link } from 'react-router-dom'

function About() {
    return (
        <div className="min-h-[100dvh] bg-[var(--bg)] flex flex-col">
            <nav className="px-8 py-4 border-b border-[var(--line)]">
                <Link to="/" className="font-[family-name:var(--font-small)] text-[13px] text-[var(--fg-dim)] hover:text-[var(--fg)]">
                    &larr; back home
                </Link>
            </nav>

            <div className="flex-1 flex items-center px-8 py-16">
                <div className="max-w-2xl mx-auto w-full">
                    <div className="font-[family-name:var(--font-small)] text-xs text-[var(--teal)] tracking-wide">about</div>

                    <h1 className="mt-5 font-[family-name:var(--font-title)] text-[clamp(1.9rem,5vw,3rem)] leading-tight text-[var(--fg)] max-w-[18ch]">
                        My name is Jackson Lam
                    </h1>

                    <div className="mt-9 flex flex-col gap-4 max-w-[54ch]">
                        <p className="text-[17px] text-[var(--fg-dim)] leading-[1.8]">
                            and I'm a CS student at Cal State Long Beach, graduating June 2027. I build full-stack web apps React, Python, and lately a lot of MCP, which is how you hand an AI model actual tools instead of hoping the prompt covers it. I'm still learning it, which is most of the fun. Looking for a software engineering internship for summer 2027. Connect with me! Some of my hobbies include boxing, working out, video games, and cooking.
                        </p>
                    </div>

                    <div className="mt-10 pt-6 border-t border-[var(--line)] flex flex-wrap items-center gap-x-6 gap-y-3 font-[family-name:var(--font-small)] text-[13px]">
                        <a href="https://github.com/jackson0-0" target="_blank" rel="noreferrer" className="text-[var(--fg-dim)] hover:text-[var(--fg)]">GitHub</a>
                        <a href="https://linkedin.com/in/jacksonlam227" target="_blank" rel="noreferrer" className="text-[var(--fg-dim)] hover:text-[var(--fg)]">LinkedIn</a>
                        <a href="/resume.pdf" className="text-[var(--fg-dim)] hover:text-[var(--fg)]">Resume</a>
                        <a href="mailto:jacksonlam510@gmail.com" className="text-[var(--fg-dim)] hover:text-[var(--fg)]">jacksonlam510@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About