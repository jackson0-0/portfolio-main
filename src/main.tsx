import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// createRoot is the React 18+ API for mounting an app (replaces the old ReactDOM.render).
// It enables concurrent rendering features. getElementById('root') matches the <div id="root">
// in index.html; the `!` is a TypeScript non-null assertion telling the compiler "trust me,
// this element exists" since getElementById's return type is technically `HTMLElement | null`.
createRoot(document.getElementById('root')!).render(
  // StrictMode is a dev-only wrapper (no effect in production builds) that intentionally
  // double-invokes renders and effects to help surface side-effect bugs early, e.g. state
  // updates or effects that aren't idempotent.
  <StrictMode>
    {/* BrowserRouter provides the client-side routing context (using the HTML5 History API)
        that App's <Routes>/<Route>/<Link> components rely on. Without this wrapper, calling
        those hooks/components throws, since they need a Router ancestor in context. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
