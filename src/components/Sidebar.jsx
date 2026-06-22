import { BarChart3, LayoutDashboard, Vote, X } from 'lucide-react'

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'Voting', icon: Vote },
    { label: 'Results', icon: BarChart3 },
  ]

  return (
    <>
      {isOpen && (
        <button
          type='button'
          aria-label='Close sidebar'
          onClick={onClose}
          className='fixed inset-0 z-40 bg-black/50 md:hidden'
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-dvh w-[min(18rem,85vw)] -translate-x-full flex-col bg-gray-800 text-white shadow-xl transition-transform duration-300 ease-in-out md:w-20 md:translate-x-0 md:shadow-none lg:w-64 ${
          isOpen ? 'translate-x-0' : ''
        }`}
      >
        <div className='flex min-h-16 items-center justify-between border-b border-white/10 p-4 md:justify-center lg:justify-between'>
          <div className='min-w-0'>
            <h2 className='truncate text-xl font-bold md:hidden lg:block'>
              E-Voting App
            </h2>
            <span className='hidden h-10 w-10 items-center justify-center rounded-md bg-white/10 text-sm font-bold md:flex lg:hidden'>
              EV
            </span>
          </div>
          <button
            type='button'
            aria-label='Close sidebar'
            onClick={onClose}
            className='flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-gray-700 md:hidden'
          >
            <X className='h-5 w-5' aria-hidden='true' />
          </button>
        </div>

        <nav className='flex-1 p-3 md:px-2 lg:p-4' aria-label='Main navigation'>
          <ul className='space-y-1.5'>
            {navItems.map(({ label, icon: Icon }) => (
              <li key={label}>
                <button
                  type='button'
                  onClick={onClose}
                  className='flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white/60 md:justify-center md:px-2 lg:justify-start lg:px-3'
                  title={label}
                >
                  <Icon className='h-5 w-5 shrink-0' aria-hidden='true' />
                  <span className='truncate md:hidden lg:inline'>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className='border-t border-white/10 p-4 text-xs text-white/70 md:hidden lg:block'>
          <p className='font-medium text-white'>Student Portal</p>
          <p className='mt-1'>Secure voting dashboard</p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
