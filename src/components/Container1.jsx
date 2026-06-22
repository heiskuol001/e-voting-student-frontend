import CandidateCard from './CandidateCard'
import { useState, useEffect } from 'react'
import { FileCheck, Bell } from 'lucide-react'
import PositionCard from './PositionCard'


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
        <div className='grid min-h-0 min-w-0 flex-1 grid-cols-1 gap-3 px-3 pb-3 lg:grid-cols-[minmax(0,3fr)_minmax(15rem,1fr)]'>
            <section className='flex min-h-0 min-w-0 flex-col gap-3 rounded-md bg-white p-3 shadow-md lg:row-span-2'>
                <div className='rounded-md border px-3 py-2'>
                    <div className="flex items-start gap-2">
                        <FileCheck className="mt-1 h-5 w-5 shrink-0" />

                        <div className='min-w-0'>
                            <h1 className="font-semibold text-lg">
                                Cast Your Vote
                            </h1>

                            <p className="text-sm text-gray-500">
                                Select your preferred candidate
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap gap-3 rounded-md px-0 py-1 sm:px-3 sm:py-2'>
                    <PositionCard />
                    <PositionCard />
                    
                </div>
                <div className='grid w-full grid-flow-col auto-cols-[minmax(9rem,11rem)] gap-3 overflow-x-auto rounded-md p-1 pb-3 scroll-smooth sm:p-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>

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
                        <p className='col-span-full text-sm text-gray-500'>No candidates available.</p>
                    )}

                </div>
            </section>
            <section className='rounded-md border bg-white p-3'>
                    <div>
                    <h1 className='flex items-center gap-2 text-base font-semibold text-gray-900'>
                        <Bell className='h-5 w-5' />
                        Notifications
                    </h1>
                </div>
                <div>
                    <p className='text-sm text-gray-500'>No new notifications</p>
                </div>
             
            </section>
            <section className='rounded-md bg-white p-3'>
                <button type='button' className='inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-emerald-300 bg-emerald-500 px-3 text-sm font-semibold text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500'>
                    vote now
                </button>
            </section>

        </div>
    )
}

export default Container1
