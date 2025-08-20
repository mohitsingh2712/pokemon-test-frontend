import { useEffect, useMemo, useRef, useState } from 'react'
import { getPokemonByName } from '../../http/api'
import IdleCard from './components/IdleCard.jsx'
import LoadingCard from './components/LoadingCard.jsx'
import ResultCard from './components/ResultCard.jsx'
import ErrorCard from './components/ErrorCard.jsx'

const SAMPLES = ['Pikachu', 'Charizard', 'Ninetales']

export default function Home() {
    const [query, setQuery] = useState('')
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState('')
    const [data, setData] = useState(null)
    const [autoSubmit, setAutoSubmit] = useState(false)

    const fillAndFetch = (name) => {
        setQuery(name)
        setAutoSubmit(true)
    }

    useEffect(() => {
        if (autoSubmit && query.trim()) {
            onSubmit()
            setAutoSubmit(false)
        }
    }, [autoSubmit, query])

    const inputRef = useRef(null)
    const canSearch = useMemo(() => query.trim().length > 0, [query])

    const onSubmit = async (e) => {
        e?.preventDefault?.()
        setError('')
        setData(null)
        if (!canSearch) { setStatus('idle'); return }
        setStatus('loading')
        try {
            const res = await getPokemonByName(query.trim())
            setData(res)
            setStatus('success')
        } catch (err) {
            setStatus('error')
            setError(err?.response?.data?.error || `The pokemon '${query}' is not in the database.`)
        }
    }

    // const fillAndFetch = (name) => { setQuery(name); setTimeout(() => onSubmit(), 0) }
    const tryAgain = () => { setQuery(''); setData(null); setError(''); setStatus('idle'); inputRef.current?.focus?.() }

    return (
        <div className="container-app py-6">
            <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-sm border p-6">
                <form onSubmit={onSubmit} className="flex gap-3">
                    <input ref={inputRef} className="w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Which pokemon?" value={query} onChange={(e) => setQuery(e.target.value)} />

                    <button className="rounded-md bg-primary px-4 py-2 text-white disabled:opacity-50" disabled={!canSearch || status === 'loading'}>Fetch</button>
                </form>
                {status === 'error' && (
                    <div className="mt-2 text-sm text-red-600 flex items-center gap-2">
                        <span>{error}</span>
                        <button
                            onClick={tryAgain}
                            className="text-red-500 cursor-pointer underline "
                        >
                            Try again
                        </button>
                    </div>
                )}
                <div className="text-sm text-gray-500 mt-2">Try {SAMPLES.map((s) => (
                    <button key={s} type="button" className="text-primary hover:underline mr-1" onClick={() => fillAndFetch(s)}>{s}</button>
                ))}</div>
            </div>

            <div className="mx-auto max-w-3xl mt-6 rounded-2xl border bg-white p-6 shadow-sm">
                {status === 'idle' && <IdleCard />}
                {status === 'loading' && <LoadingCard name={query} />}
                {status === 'success' && data && <ResultCard data={data} />}
                {status === 'error' && <ErrorCard message={error} onTryAgain={tryAgain} />}
            </div>
        </div>
    )
}

// card components moved to ./components
