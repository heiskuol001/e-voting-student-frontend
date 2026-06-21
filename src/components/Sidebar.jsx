import { X } from 'lucide-react'

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = ['Dashboard', 'Voting', 'Results']

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
        className={`fixed inset-y-0 left-0 z-50 flex w-56 -translate-x-full flex-col bg-gray-800 text-white shadow-xl transition-transform duration-300 ease-in-out md:static md:h-screen md:translate-x-0 md:shadow-none ${
          isOpen ? 'translate-x-0' : ''
        }`}
      >
        <div className='flex items-center justify-between border-b border-white/10 p-4'>
          <h2 className='text-xl font-bold'>E-Voting App</h2>
          <button
            type='button'
            aria-label='Close sidebar'
            onClick={onClose}
            className='flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-gray-700 md:hidden'
          >
            <X className='h-5 w-5' aria-hidden='true' />
          </button>
        </div>

        <nav className='flex-1 p-4' aria-label='Main navigation'>
          <ul className='space-y-1'>
            {navItems.map((item) => (
              <li key={item}>
                <button
                  type='button'
                  onClick={onClose}
                  className='w-full rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white/60'
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
