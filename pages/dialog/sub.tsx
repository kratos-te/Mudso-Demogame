import Link from 'next/link'
import { Fragment } from 'react'

import ButtonSequence from '@/components/Dialog/Options';
export default function sub() {
  const options = ['option 1', 'option 2', 'option 3', 'option 4'];
    return (
      <div className="absolute h-[88%] w-screen bottom-0 flex flex-col items-center">
        <div className="absolute bottom-3 z-10 flex flex-col border-2 p-4 rounded-xl items-center border-dodgerBlue w-4/5 h-[50%] bg-greyBackTrans
        ">
          <div className="w-[90%] h-full">
            <div className="h-[10%] pb-[6vh] text-dodgerBlue text-[5vh]">dialog box</div>  
            <div className="h-[80%] my-5 flex flex-col  justify-between">
              <ButtonSequence elements={options} />
            </div>
          </div>
        </div>
        <div className="flex justify-center relative w-full h-full -bottom-7">
            <img src="../characterFront.svg" alt="wrong_url" className="absolute h-full -bottom-[1vh] object-cover" />
        </div>
      </div>
  )
}