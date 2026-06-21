import React from 'react'

const UserInfo = () => {
  return (
      <>
      <div className='p-4 flex items-center justify-between shadow text-sm gap-6'>
          <section className='flex gap-4 items-center'>
               <section>
              <img src='/path/to/user-avatar.jpg' alt='User Avatar' className='h-10 w-10 rounded-full' />
          </section>
          <section className='flex flex-col gap-1 sm:gap-2'>
              <h1>Welcome Back!</h1>
              <h2 className='text-lg font-semibold text-gray-900'>John Doe</h2>
              <span className='flex justify-around w-full gap-4' >
                  <p className='text-sm text-gray-500'>24/789/BSSE-J</p>
                  <p className='text-sm text-gray-500'>Faculty</p>
              </span>
              <p className='text-sm text-gray-500 md:hidden'>vote status</p>
          </section>
         </section>
          <section className='hidden md:flex flex-col sm:gap-2 items-center mr-4 shadow-md p-1 rounded-lg bg-gray-100'>
              <p1 className='font-semibold'>Vote Status</p1>
              <h2>Not Yet Voted</h2>
              <p1 className='text-sm text-gray-500'>You can cast your vote until 20:00</p1>
          </section>
          
          </div>
      </>
  )
}


export default UserInfo
