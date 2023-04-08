import Link from 'next/link'
import svgCharacter from '../../public/characterFront.svg'
import { Fragment } from 'react'
export default function Dialogue() {
    return (
        <div className="absolute h-3/4 w-full bottom-0">
            <div>
                <Link href='/dialog/sub'>
                    <div className="flex justify-center">
                        <div className="absolute bottom-12 z-10 flex flex-col border-2 p-4 rounded-xl items-center border-dodgerBlue w-4/5 h-20 bg-greyBack opacity-80 hover:opacity-90">
                            <div className="w-[90%] text-center">
                                <div className="text-dodgerBlue text-2xl">dialog box</div>
                            </div>    
                        </div>
                    </div>
                </Link>
            </div>
            <div className="relative h-full">
                <img src="character.png" className="absolute h-full -bottom-0 right-0 object-cover" />
            </div>
        </div>
  )
}
