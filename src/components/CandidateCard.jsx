import { FileText } from 'lucide-react'
import { useId } from 'react'

const CandidateCard = ({name, position}) => {
  const candidateId = useId()

  return (
    <article className='group relative h-full w-36 shrink-0'>
      <input
        type='radio'
        name='candidate'
        id={candidateId}
        className='peer sr-only'
      />

      <div className='flex h-full flex-col gap-1.5 rounded-md border border-slate-200 bg-white p-2 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-500 peer-focus-visible:ring-offset-2 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:[&_[data-selection-indicator]]:border-emerald-600 peer-checked:[&_[data-selection-indicator]]:bg-emerald-600'>
        <label htmlFor={candidateId} className='cursor-pointer'>
          <div className='flex items-start gap-2'>
            <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700 ring-2 ring-white'>
              CN
            </div>

            <div className='min-w-0 flex-1'>
              <div className='flex items-start justify-between gap-1.5'>
                <div className='min-w-0'>
                  <h2 className='truncate text-[13px] font-semibold leading-tight text-slate-950'>
                    {name}
                  </h2>
                  <p className='mt-0.5 truncate text-[11px] leading-tight text-slate-500'>
                    {/* {party} */}
                  </p>
                </div>

                <span
                  data-selection-indicator
                  className='mt-0.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-slate-300 bg-white'
                />
              </div>
            </div>
          </div>
        </label>

        <div className='line-clamp-2 rounded-md bg-slate-50 px-2 py-1 text-[10px] font-medium leading-tight text-slate-600'>
          {position}
        </div>

        <button
          type='button'
          className='mt-auto inline-flex h-7 items-center justify-center gap-1 rounded-md border border-slate-200 bg-white px-1.5 text-[10px] font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2'
        >
          <FileText className='h-3.5 w-3.5' aria-hidden='true' />
          {/* {manifesto} */}
        </button>
      </div>
    </article>
  )
}

export default CandidateCard
