import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <button
        type="button"
        className="inline-block rounded-full border-2 border-dodgerBlue text-lg text-normalColor">     
        Connect Wallet
      </button>
    </>
  )
}
