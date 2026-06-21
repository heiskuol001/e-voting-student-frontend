const UserInfo = () => {
  return (
      <>
      <div className='flex items-center justify-between gap-6 bg-white p-3 text-sm shadow-sm md:mx-3 md:mt-3 md:rounded-md'>
          <section className='flex gap-4 items-center'>
               <section>
              <img src='/path/to/user-avatar.jpg' alt='User Avatar' className='h-9 w-9 rounded-full' />
          </section>
          <section className='flex flex-col gap-0.5 sm:gap-1'>
              <h1>Welcome Back!</h1>
              <h2 className='text-base font-semibold text-gray-900'>John Doe</h2>
              <span className='flex justify-around w-full gap-4' >
                  <p className='text-sm text-gray-500'>24/789/BSSE-J</p>
                  <p className='text-sm text-gray-500'>Faculty</p>
              </span>
              <p className='text-sm text-gray-500 md:hidden'>vote status</p>
          </section>
         </section>
          <section className='mr-4 hidden flex-col items-center rounded-md bg-gray-100 p-2 shadow-sm md:flex sm:gap-1'>
              <p className='font-semibold'>Vote Status</p>
              <h2>Not Yet Voted</h2>
              <p className='text-sm text-gray-500'>You can cast your vote until 20:00</p>
          </section>
          
          </div>
      </>
  )
}


export default UserInfo
