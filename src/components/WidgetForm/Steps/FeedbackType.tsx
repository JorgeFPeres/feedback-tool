import { feedbackTypes, FeedbackType } from '..'
import { CloseButton } from '../../CloseButton'

interface FeedbackTypeProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
  backToTypeFeedback: () => void
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeProps) {
  return (
    <>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className='flex py-8 gap-2 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          const { image, title } = value
          return (
            <button
              key={key}
              className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
              type='button'
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={image.source} alt={image.alt} />
              <span>{title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
