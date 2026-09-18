import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fetch from 'node-fetch'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const QUERIES = ['dog', 'mountain', 'coffee', 'city skyline', 'smile', 'ocean', 'forest', 'sunset']

// pick a random query, get a random image for it from Pexels
app.get('/api/image', async (req, res) => {
    const query = QUERIES[Math.floor(Math.random() * QUERIES.length)]

    const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=15`,
        { headers: { Authorization: process.env.PEXELS_API_KEY } }
    )
    const data = await response.json()
    const photos = data.photos
    const photo = photos[Math.floor(Math.random() * photos.length)]

    res.json({ query, imageUrl: photo.src.large, photographer: photo.photographer })
})

// generate a caption for the given query using Claude
app.post('/api/caption', async (req, res) => {
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

app.listen(3001, () => console.log('Server running on port 3001'))