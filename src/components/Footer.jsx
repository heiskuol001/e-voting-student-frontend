const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='mx-3 mb-3 mt-auto rounded-md border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600 shadow-sm'>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <div className='min-w-0'>
          <p className='font-semibold text-slate-900'>E-Voting App</p>
          <p className='mt-1 text-xs text-slate-500'>
            Student election platform
          </p>
        </div>

        <div className='flex flex-col gap-1 text-xs text-slate-500 sm:items-end'>
          <p>&copy; {year} E-Voting. All rights reserved.</p>
          <p>Secure, simple, and responsive.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
