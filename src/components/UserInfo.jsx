const UserInfo = () => {
  return (
    <div className='mx-3 mt-3 flex flex-col gap-3 rounded-md bg-white p-3 text-sm shadow-sm sm:flex-row sm:items-center sm:justify-between md:mx-3'>
      <section className='flex min-w-0 items-center gap-3 sm:gap-4'>
        <img
          src='/path/to/user-avatar.jpg'
          alt='User Avatar'
          className='h-10 w-10 shrink-0 rounded-full bg-slate-200 object-cover'
        />

        <section className='min-w-0 flex-1'>
          <p className='text-sm text-gray-500'>Welcome Back!</p>
          <h1 className='truncate text-base font-semibold text-gray-900'>
            John Doe
          </h1>
          <div className='mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500'>
            <p>24/789/BSSE-J</p>
            <p>Faculty</p>
          </div>
        </section>
      </section>

      <section className='rounded-md bg-gray-100 p-3 shadow-sm sm:w-56 sm:text-center'>
        <p className='font-semibold text-gray-900'>Vote Status</p>
        <h2 className='text-sm font-medium text-gray-700'>Not Yet Voted</h2>
        <p className='text-sm text-gray-500'>You can cast your vote until 20:00</p>
      </section>
    </div>
  )
}


export default UserInfo
