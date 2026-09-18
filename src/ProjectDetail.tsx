import { useParams, Link } from 'react-router-dom'
import { projects } from './projects'

function ProjectDetail() {
    // useParams() reads the dynamic segments from the current URL, matched against the route
    // pattern registered in App.tsx (`/projects/:slug`). Its return type allows `slug` to be
    // `undefined` (e.g. if this component were ever rendered outside that route), which is why
    // the lookup below has to handle a "not found" case rather than assuming it always exists.
    const { slug } = useParams()

    // Array.prototype.findIndex scans the array and returns the index of the first element
    // where the callback returns true, or -1 if none match — it never throws.
    const index = projects.findIndex(p => p.slug === slug)
    // Reading projects[-1] (when findIndex found nothing) doesn't throw in JS — out-of-range
    // array access just evaluates to undefined. That's what feeds the guard clause below.
    const project = projects[index]
    // Modulo wraparound: (index + 1) % projects.length walks to the next item, and once index
    // is the last one, (last + 1) % length wraps back around to 0 — a common circular-list
    // pattern so "next project" from the final card loops back to the first instead of erroring.
    const next = projects[(index + 1) % projects.length]

    // Early-return guard clause: if the slug in the URL didn't match any project, bail out and
    // render a fallback instead of letting `project.title` etc. below crash on undefined.
    if (!project) return <div className="px-8 py-24 text-[var(--fg)]">Project not found.</div>

    return (
        <div className="min-h-screen bg-[var(--bg)]">
            <div className="flex justify-between items-center px-8 py-4 border-b border-[var(--line)]">
                <Link to="/" className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] hover:text-[var(--fg)]">
                    &larr; back to projects
                </Link>
                {/* Template literal + ternary is a common inline-conditional-styling pattern:
                    build the className string dynamically based on data (project.status) rather
                    than writing two nearly-identical JSX blocks. */}
                <span className={`font-[family-name:var(--font-small)] text-xs px-2 py-1 border ${project.status === 'live' ? 'text-[var(--teal)] border-[var(--teal)]' : 'text-[var(--amber)] border-[var(--amber)]'}`}>
                    {project.status}
                </span>
            </div>

            <div className="max-w-4xl mx-auto px-8 pt-10">
                <div className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] mb-3">
                    PROJECT {index + 1} / {projects.length}
                </div>
                <h1 className="font-[family-name:var(--font-title)] text-4xl text-[var(--fg)] mb-4">{project.title}</h1>
                <p className="text-sm text-[var(--fg-dim)] max-w-xl leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-7">
                    {/* Rendering a list with .map requires a `key` prop on each element — React
                        uses it to track which DOM node corresponds to which array item across
                        re-renders, so it can update/reorder efficiently instead of re-rendering
                        the whole list. `tech` (the string itself) works as a key here because
                        stack entries are unique within a given project; using the array index as
                        a key instead is a common anti-pattern once items can be reordered/added/
                        removed, since indexes shift but React thinks each index IS the identity. */}
                    {project.stack.map(tech => (
                        <span key={tech} className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">{tech}</span>
                    ))}
                </div>

                <div className="flex gap-4 mb-10">
                    <a href={project.sourceUrl} target="_blank" className="font-[family-name:var(--font-small)] text-xs px-5 py-3 border border-[var(--line)] text-[var(--fg-dim)]">view source</a>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-8 mb-10 aspect-video border border-[var(--line)] overflow-hidden">
                <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-full object-cover" />
            </div>

            {/* Same fix as App.tsx's project cards/contact section: grid-cols-1 stacks Problem
                above Build on mobile, md:grid-cols-2 puts them side by side once there's room. */}
            <div className="max-w-4xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                    <div className="font-[family-name:var(--font-small)] text-xs text-[var(--teal)] mb-2">THE PROBLEM</div>
                    <p className="text-sm text-[var(--fg-dim)] leading-relaxed">{project.problem}</p>
                </div>
                <div>
                    <div className="font-[family-name:var(--font-small)] text-xs text-[var(--teal)] mb-2">THE BUILD</div>
                    <p className="text-sm text-[var(--fg-dim)] leading-relaxed">{project.build}</p>
                </div>
            </div>

            <div className="flex justify-between items-center max-w-4xl mx-auto px-8 py-6 border-t border-[var(--line)]">
                <Link to="/" className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] hover:text-[var(--fg)]">&larr; all projects</Link>
                {/* `to` is built from a template literal using `next.slug` — this generates the
                    same kind of URL (/projects/pokemon-team-builder) that the dynamic Route in
                    App.tsx matches, closing the loop between reading a URL param and writing one. */}
                <Link to={`/projects/${next.slug}`} className="font-[family-name:var(--font-small)] text-xs text-[var(--fg)]">next: {next.title} &rarr;</Link>
            </div>
        </div>
    )
}

export default ProjectDetail