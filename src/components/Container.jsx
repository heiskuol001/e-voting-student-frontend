import { Bell, Clipboard } from 'lucide-react'

const Container = () => {
    return (
        <div className='hidden md:grid grid-cols-[2fr_1fr_1fr] gap-2 p-3'>
            <section className='gap-4 rounded-md border bg-white p-3'>
                <div>
                    <h1 className='flex items-center gap-2'><Clipboard />Current Elections</h1>
                </div>
                <div></div>
            </section>
            <section className='rounded-md border bg-white p-3'>
                <h1 className='text-base font-semibold text-gray-900'>Total Candidates</h1>
            </section>
            <section className='rounded-md border bg-white p-3'>
                <div>
                    <h1 className='flex items-center gap-2'>
                        <Bell className='h-5 w-5' />
                        Notifications
                    </h1>
                </div>
                <div>
                    <p className='text-sm text-gray-500'>No new notifications</p>
                </div>
            </section>
        </div>
    )
}

export default Container
