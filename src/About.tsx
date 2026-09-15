import { Link } from 'react-router-dom'

function About() {
    return (
        <div className="min-h-screen bg-[var(--bg)]">
            <div className="flex justify-between items-center px-8 py-4 border-b border-[var(--line)]">
                <Link to="/" className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] hover:text-[var(--fg)]">
                    &larr; back home
                </Link>
            </div>

            <div className="max-w-3xl mx-auto px-8 py-24">
                <h1 className="font-[family-name:var(--font-title)] text-4xl text-[var(--fg)] mb-6">About me</h1>
                <p className="text-sm text-[var(--fg-dim)] leading-relaxed mb-4">
                    {/* your bio goes here */}
                </p>
            </div>
        </div>
    )
}

export default About