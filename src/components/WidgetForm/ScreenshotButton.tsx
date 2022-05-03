import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import React, { useState } from 'react'
import { Loading } from './LoadingSpinner'

interface ScreenshotButtonProps {
  onScreenShootTook: (screenshot: string | null) => void
  screenshot: string | null
}

export function ScreenshotButton({
  onScreenShootTook,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!) // Seleciona o que você quer tirar foto
    const base64image = canvas.toDataURL('image/png') //gera uma imagem em texto base64
    onScreenShootTook(base64image)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type='button'
        onClick={() => onScreenShootTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
        className='p-1 w-10 h-10 border-transparent flex justify-end items-end rounded-md text-zinc-400 hover:text-zinc-100 transition-colors'
      >
        <Trash weight='fill' />
      </button>
    )
  }
  return (
    <button
      type='button'
      onClick={handleTakeScreenshot}
      className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-zinc-900'
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className='w-6 h-6 text-zinc-100' />
      )}
    </button>
  )
}
