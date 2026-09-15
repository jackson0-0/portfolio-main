import { useState } from 'react'
import { Link } from 'react-router-dom'

function ImageDemo() {
    const [image, setImage] = useState<{ imageUrl: string; query: string; photographer: string } | null>(null)
    const [caption, setCaption] = useState('')
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        setLoading(true)
        setCaption('')

        const imgRes = await fetch('https://portfolio-main-0bup.onrender.com/api/image')
        const imgData = await imgRes.json()
        setImage(imgData)

        const capRes = await fetch('https://portfolio-main-0bup.onrender.com/api/caption', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: imgData.query }),
        })
        const capData = await capRes.json()
        setCaption(capData.caption)

        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-[var(--bg)]">
            <div className="flex justify-between items-center px-8 py-4 border-b border-[var(--line)]">
                <Link to="/" className="font-[family-name:var(--font-small)] text-xs text-[var(--fg-dim)] hover:text-[var(--fg)]">
                    &larr; back home
                </Link>
            </div>

            <div className="max-w-2xl mx-auto px-8 py-24 text-center">
                <h1 className="font-[family-name:var(--font-title)] text-3xl text-[var(--fg)] mb-8">Image + AI caption demo</h1>

                <button
                    onClick={handleClick}
                    disabled={loading}
                    className="px-6 py-3 bg-[var(--teal)] text-black text-sm font-[family-name:var(--font-small)] mb-10"
                >
                    {loading ? 'loading...' : 'generate image'}
                </button>

                {image && (
                    <div>
                        <img src={image.imageUrl} alt={image.query} className="w-full mb-4" />
                        <p className="text-sm text-[var(--fg-dim)] mb-2">Photo of: {image.query} · by {image.photographer}</p>
                        {caption && <p className="text-[var(--fg)] italic">"{caption}"</p>}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImageDemo