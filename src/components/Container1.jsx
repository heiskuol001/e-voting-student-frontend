import CandidateCard from './CandidateCard'
import { useState, useEffect } from 'react'


const Container1 = () => {
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        const fetchCandidates = async () => {
            const response = await fetch('http://localhost:8000/candidate/get')
            const data = await response.json()
            console.log(Array.isArray(data))
            setCandidates(data.candidates || []) 
        }

        fetchCandidates()
    }, [])

    

    return (
        <div className='hidden min-h-0 min-w-0 flex-1 md:grid grid-cols-[minmax(0,3fr)_minmax(0,1fr)] gap-2 px-3 pb-3'>
            <section className='flex min-h-0 min-w-0 flex-col gap-2 rounded-md border bg-white p-3'>
                <div className='rounded-md border px-3 py-2'>
                    <h1>Election Title</h1>
                </div>
                <div className='rounded-md border px-3 py-2'>
                    <h1>select candidate sections</h1>
                </div>
                <div className='flex h-48 w-full max-w-full items-stretch gap-3 overflow-x-auto overflow-y-hidden rounded-md border p-3 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
                    
                    {/* Render CandidateCard components for each candidate */}
                    {candidates.length > 0 ? (
                        candidates.map((candidate) => (
                            <CandidateCard
                                key={candidate._id}
                                name={candidate.name}
                                // party={candidate.party}
                                // manifesto={candidate.manifesto}
                                position={candidate.position}
                            />
                        ))
                    ) : (
                        <p>No candidates available.</p>
                    )}
                   
                </div>
            </section>
            <section className='rounded-md border bg-white p-3'>
                <div>
                    <h1>Voting Status</h1>
                </div>
                <div>
                    <p>You have not voted in this election.</p>
                </div>
            </section>

        </div>
    )
}

export default Container1
