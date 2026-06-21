import { ClipboardList } from "lucide-react";

const Election = () => {
  return (
      <div className='md:hidden flex justify-around gap-4 p-4 m-1.5 bg-white rounded-md shadow-md'>
          <section className='flex items-center gap-2'>
              <ClipboardList className='h-6 w-6 text-gray-500' />
        </section>
          <section>
              <h1 className='text-lg font-semibold text-gray-900'>Election 2024</h1>
              <p className='text-sm text-gray-500'>Voting ends on 20th June 2024</p>
        </section>
          <section>
              <h1 className='text-lg font-semibold text-green-500'>Active</h1>
        </section>
    </div>
  )
}

export default Election

