import React, { useState } from 'react'

import bugImageURL from '../../assets/bug.svg'
import ideaImageURL from '../../assets/idea.svg'
import thoughtImageURL from '../../assets/thought.svg'
import { FeedbackTypeStep } from './Steps/FeedbackType'
import { FeedbackContent } from './Steps/FeedbackContent'
import { FeedbackSuccess } from './Steps/FeedbackSuccess'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageURL,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: { source: ideaImageURL, alt: 'Imagem de um lâmpada' },
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thoughtImageURL,
      alt: 'Imagem de um balão de pensamento',
    },
  },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>()
  const [feedbackSent, setFeedbackSent] = useState(false)

  function backToTypeFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent ? (
        <FeedbackSuccess backToTypeFeedback={backToTypeFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep
              onFeedbackTypeChanged={setFeedbackType}
              backToTypeFeedback={backToTypeFeedback}
            />
          ) : (
            <FeedbackContent
              feedbackType={feedbackType}
              backToTypeFeedback={backToTypeFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className='text-xs text-neutral-400'>
        Feito com ♥ pela{' '}
        <span className='underline underline-offset-2'>FrontBeginners</span>
      </footer>
    </div>
  )
}
