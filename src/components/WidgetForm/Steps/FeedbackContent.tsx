import { ArrowLeft, Camera } from 'phosphor-react'
import React, { FormEvent, useState } from 'react'
import { FeedbackType, feedbackTypes } from '..'
import { CloseButton } from '../../CloseButton'
import { ScreenshotButton } from '../ScreenshotButton'

interface FeedbackContentProps {
  feedbackType: FeedbackType
  backToTypeFeedback: () => void
  onFeedbackSent: () => void
}

export function FeedbackContent({
  feedbackType,
  backToTypeFeedback,
  onFeedbackSent,
}: FeedbackContentProps) {
  const [screenshot, setScreenshoot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const { title, image } = feedbackTypes[feedbackType]

  function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault()

    console.log({
      screenshot,
      comment,
    })

    onFeedbackSent()
  }

  return (
    <>
      <header>
        <button
          className='top-5 left-5 absolute  text-zinc-400 hover:text-zinc-100'
          onClick={backToTypeFeedback}
          type='button'
        >
          <ArrowLeft weight='bold' className='w-4 h-4' />
        </button>
        <span className='text-xl leading-6 flex gap-2 items-center'>
          <img src={image.source} alt={image.alt} className='w-6 h-6' />
          {title}
        </span>
        <CloseButton />
      </header>
      <form className='my-4 w-full'>
        <textarea
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus-outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
          placeholder='Conte com detalhes o que está acontecendo...'
          onChange={(e) => setComment(e.target.value)}
        />
        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenShootTook={setScreenshoot}
          />
          <button
            type='submit'
            disabled={comment.length === 0}
            onClick={handleSubmitFeedback}
            className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-zinc-900 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}
