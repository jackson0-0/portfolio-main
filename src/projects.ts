// import ipoImg from './assets/ipo.png' — only used by the commented-out ipo-analyzer entry below
import optionsImg from './assets/options.png'
import pokemonImg from './assets/pokemon.png'

// This array is the single source of truth for project data, consumed by ProjectDetail.tsx
// (via useParams + slug lookup). Note there's no explicit TypeScript `interface`/`type` here —
// TS infers the shape of `projects` (and therefore of `project.title`, `project.stack: string[]`,
// etc. in ProjectDetail) purely from these object literals. That's convenient for a small file
// like this, but an interviewer might ask "why not define an explicit Project type?" — the
// tradeoff is that inferred types give weaker guarantees (e.g. nothing stops one object here
// from accidentally omitting a field or misspelling `status` as `'live '`) versus an explicit
// type/interface that all entries are checked against and that other files could import and reuse.
export const projects = [
    // ipo-analyzer removed from the list for now — it still exists (see git history / the
    // commented-out card in App.tsx), just excluded from display and from the "next project"
    // cycling in ProjectDetail.tsx, since that cycling walks this exact array.
    /*
    {
        slug: 'ipo-analyzer',
        status: 'live',
        image: ipoImg,
        title: 'IPO Calendar and Analyzer',
        description: "A site that tracks upcoming IPOs and uses AI to break down each filing so it's actually readable. Runs on AWS Lambda.",
        stack: ['AWS Lambda', 'Node.js', 'MongoDB'],
        liveUrl: '#',
        sourceUrl: 'https://github.com/jackson0-0/ipo-analyzer',
        problem: "I wanted to keep track of upcoming IPOs but every site either buried the info or you had to read through a 100+ page filing just to understand what a company actually does.",
        build: "I set up a scheduled job on Lambda that pulls new filings automatically, then runs each one through an AI pass to summarize it in plain English instead of legal/finance jargon. Was my first time working with scheduled cloud functions instead of just building something that runs when a user clicks a button.",
    },
    */
    {
        slug: 'options-dashboard',
        status: 'live',
        image: optionsImg,
        title: 'Options Analytics Dashboard',
        description: "Still building this one — a dashboard for looking at options chains without needing five different tabs open.",
        stack: ['React', 'FastAPI', 'PostgreSQL'],
        liveUrl: 'https://monte-simulation.vercel.app/',
        sourceUrl: 'https://github.com/jackson0-0/monte-simulation',
        problem: "Every time I wanted to look at an options chain I'd end up with a bunch of tabs open just to piece together greeks, IV, and volume. Wanted one place that shows all of it together.",
        build: "FastAPI backend pulling live chain data, React frontend doing the charting. Still working on getting the deploy set up on AWS — this is the one I'm actively building right now.",
    },
    {
        slug: 'pokemon-team-builder',
        status: 'live',
        image: pokemonImg,
        title: 'Pokémon Team Builder',
        description: "A tool for building and testing Pokémon teams without doing the type-coverage math in your head.",
        stack: ['React', 'Node.js', 'MongoDB'],
        liveUrl: 'https://pokemon-app-puce-one.vercel.app/',
        sourceUrl: 'https://github.com/jackson0-0/pokemon-app',
        problem: "Building a team that doesn't fall apart against common matchups usually means checking type charts across a dozen tabs. Wanted something that just tells you your team's weaknesses as you build it.",
        build: "Searchable Pokédex feeding into a team builder that runs coverage checks live as you add Pokémon. Started this one mostly to get more comfortable with MongoDB.",
    },
]