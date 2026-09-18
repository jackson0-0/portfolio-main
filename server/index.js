import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fetch from 'node-fetch'

// dotenv.config() reads the .env file in this directory and copies its key=value pairs into
// process.env at startup. Keeping secrets (API keys) in .env instead of hardcoded in source is
// what lets .gitignore exclude just that file — the keys never end up in git history.
dotenv.config()
const app = express()
// cors() middleware adds the Access-Control-Allow-Origin headers needed for the frontend
// (running on a different origin/port — Vite's dev server, or the deployed site's domain) to be
// allowed to call this API at all. Browsers block cross-origin fetches by default (the
// Same-Origin Policy); CORS headers are the server opting in to allow it.
app.use(cors())
// express.json() is body-parsing middleware: it reads an incoming request's JSON body and
// populates `req.body` with the parsed object, for any route that needs it (see /api/caption).
app.use(express.json())

const QUERIES = ['dog', 'mountain', 'coffee', 'city skyline', 'smile', 'ocean', 'forest', 'sunset']

// This is a GET route (app.get) — REST convention for "fetch/read data, no side effects,
// safe to cache or retry." async/await lets us write the sequential network-call logic
// (call Pexels, wait for the response, parse it, respond) without nested .then() callbacks;
// under the hood it's still Promise-based, `await` just pauses this function until each
// Promise resolves.
app.get('/api/image', async (req, res) => {
    const query = QUERIES[Math.floor(Math.random() * QUERIES.length)]

    // process.env.PEXELS_API_KEY reads the key dotenv loaded from .env — the actual secret
    // value never appears in this source file, only the variable name does.
    const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=15`,
        { headers: { Authorization: process.env.PEXELS_API_KEY } }
    )
    const data = await response.json()
    const photos = data.photos
    const photo = photos[Math.floor(Math.random() * photos.length)]

    // NOTE (common interview gap to point out): there's no error handling here. If the fetch
    // fails, the key is invalid, or Pexels returns zero photos for a query, `photo` would be
    // undefined and `photo.src` would throw — crashing this request instead of returning a
    // clean error response. A try/catch with a res.status(500 or 502).json({...}) would be the
    // production-ready version.
    res.json({ query, imageUrl: photo.src.large, photographer: photo.photographer })
})

// POST here (vs GET above) follows REST convention too: this request has a body and its result
// depends on that input, so it's not just "fetch a resource by URL" — POST is the conventional
// verb for "send data to be processed."
app.post('/api/caption', async (req, res) => {
    // Object destructuring pulls `query` out of req.body (populated by the express.json()
    // middleware above) — equivalent to `const query = req.body.query`, just more concise when
    // you only need specific fields.
    const { query } = req.body

    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.ANTHROPIC_API_KEY,
            'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
            model: 'claude-sonnet-4-6',
            max_tokens: 60,
            messages: [{ role: 'user', content: `Write a short, one-sentence caption for a photo of: ${query}` }],
        }),
    })
    const data = await response.json()
    res.json({ caption: data.content[0].text })
})

// Starts an HTTP server listening on port 3001. This process runs completely separately from
// the frontend's Vite dev server (typically port 5173) — they're two independent processes
// talking over HTTP, which is exactly why the CORS middleware above is necessary.
app.listen(3001, () => console.log('Server running on port 3001'))