import { Clipboard } from 'lucide-react'
import LeadingCard from './LeadingCard'

const Container = () => {
    return (
        <div className='grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr]'>
            <section className='hidden rounded-md border bg-white p-3 md:block md:col-span-2 xl:col-span-1'>
                <div>
                    <h1 className='flex items-center gap-2 text-base font-semibold text-gray-900'>
                        <Clipboard className='h-5 w-5 shrink-0' />
                        Current Elections
                    </h1>
                </div>
                <div className='mt-3 rounded-md bg-slate-50 p-3'>
                    <h2 className='font-medium text-gray-900'>Election 2024</h2>
                    <p className='mt-1 text-sm text-gray-500'>Voting ends on 20th June 2024</p>
                </div>
            </section>
            <section className='rounded-md border bg-white p-3'>
                <h1 className='text-base font-semibold text-gray-900'>Total Candidates</h1>
                <p className='mt-3 text-sm text-gray-500'>Review the candidates listed below.</p>
            </section>
            <section className='rounded-md border bg-white p-3'>
                <LeadingCard />
            </section>
        </div>
    )
}

export default Container
