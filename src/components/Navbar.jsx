import { Bell, Menu } from 'lucide-react'

const Navbar = ({ isSidebarOpen, onMenuClick }) => {
  return (
    <header className='border-b border-slate-200 bg-white md:hidden'>
      <div className='flex h-16 items-center justify-between px-4'>
        <div className='flex min-w-0 items-center gap-3'>
          <button
            type='button'
            aria-label='Open sidebar'
            aria-expanded={isSidebarOpen}
            onClick={onMenuClick}
            className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gray-800 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
          >
            <Menu className='h-5 w-5' aria-hidden='true' />
          </button>

          <h1 className='truncate text-lg font-semibold text-gray-900'>
            E-Voting
          </h1>
        </div>

        <button
          type='button'
          aria-label='Notifications'
          className='relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400'
        >
          <Bell className='h-5 w-5' aria-hidden='true' />
          <span className='absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500' />
        </button>
      </div>
    </header>
  )
}

export default Navbar
