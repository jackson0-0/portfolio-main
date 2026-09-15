import { useParams, Link } from 'react-router-dom'
import { projects } from './projects'

function ProjectDetail() {
    const { slug } = useParams()
    const index = projects.findIndex(p => p.slug === slug)
    const project = projects[index]
    const next = projects[(index + 1) % projects.length]

    if (!project) return <div className="px-8 py-24 text-[var(--fg)]">Project not found.</div>

    return (
        <div className="min-h-screen bg-[var(--bg)]">
            <div className="flex justify-between items-center px-8 py-4 border-b border-[var(--line)]">
                <Link to="/" className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] hover:text-[var(--fg)]">
                    &larr; back to projects
                </Link>
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
                    {project.stack.map(tech => (
                        <span key={tech} className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] border border-[var(--line)] px-2 py-1">{tech}</span>
                    ))}
                </div>

                <div className="flex gap-4 mb-10">
                    <a href={project.liveUrl} target="_blank" className="font-[family-name:var(--font-small)] text-xs px-5 py-3 bg-[var(--teal)] text-black">visit live site &#8599;</a>
                    <a href={project.sourceUrl} target="_blank" className="font-[family-name:var(--font-small)] text-xs px-5 py-3 border border-[var(--line)] text-[var(--fg-dim)]">view source</a>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-8 mb-10 aspect-video border border-[var(--line)] flex items-center justify-center">
                <span className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)]">full screenshot / demo gif</span>
            </div>

            <div className="max-w-4xl mx-auto px-8 grid grid-cols-2 gap-8 mb-10">
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
                <Link to={`/projects/${next.slug}`} className="font-[family-name:var(--font-small)] text-xs text-[var(--fg)]">next: {next.title} &rarr;</Link>
            </div>
        </div>
    )
}

export default ProjectDetail