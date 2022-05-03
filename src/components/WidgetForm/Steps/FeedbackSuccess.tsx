import { CloseButton } from '../../CloseButton'
import checkImageURL from '../../../assets/check.svg'

interface FeedbackSuccessProps {
  backToTypeFeedback: () => void
}

export function FeedbackSuccess({ backToTypeFeedback }: FeedbackSuccessProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className='flex flex-col items-center py-10 w-[304px]'>
        <img src={checkImageURL} alt='imagem de deu certo' />
        <span className='tex-xl mt-2'>Agradecemos o feedback!</span>
        <button
          className='py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-zinc-900'
          onClick={backToTypeFeedback}
          type='button'
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}
