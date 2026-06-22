import { ClipboardList } from "lucide-react";

const Election = () => {
  return (
      <div className='mx-3 mt-3 flex flex-col gap-3 rounded-md bg-white p-4 shadow-md sm:flex-row sm:items-center sm:justify-between md:hidden'>
          <section className='flex min-w-0 items-center gap-3'>
              <ClipboardList className='h-6 w-6 shrink-0 text-gray-500' />
              <div className='min-w-0'>
                <h1 className='truncate text-lg font-semibold text-gray-900'>Election 2024</h1>
                <p className='text-sm text-gray-500'>Voting ends on 20th June 2024</p>
              </div>
        </section>
          <section className='self-start rounded-md bg-green-50 px-3 py-1 sm:self-center'>
              <h2 className='text-sm font-semibold text-green-600'>Active</h2>
        </section>
    </div>
  )
}

export default Election

