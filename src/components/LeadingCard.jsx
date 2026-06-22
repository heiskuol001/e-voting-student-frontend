const LeadingCard = ({name,position}) => {
  return (
    <div className='flex h-full min-w-0 items-center gap-3 sm:flex-col sm:items-start'>
          <img src='/path/to/user-avatar.jpg' alt='User Avatar' className='h-10 w-10 shrink-0 rounded-full bg-slate-200 object-cover' />
          <div className='min-w-0 text-sm'>
              <p className='truncate font-medium text-gray-900'>Name: {name || 'No leader yet'}</p>
              <p className='truncate text-gray-500'>Position: {position || 'Pending results'}</p>
          </div>
    </div>
  )
}

export default LeadingCard
