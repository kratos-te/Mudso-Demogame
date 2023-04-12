import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import OrangeBtn from '@/components/OrangeBtn'
import InventoryBoxes from '@/components/InventoryBoxes'
import InterItem from '@/components/InterItem'

const Inventory = () => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  
  const handleClick = (index:number) => {
    setClickedIndex(index);
    console.log(index);
  };
  const nftArray = ['inventory/dnft.svg'];
  const lenArray = nftArray.length;
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="w-screen overflow-y-auto">
        <div className="flex items-center mobile:flex-col justify-between w-full mx-auto  min-h-screen">
        <div className="flex laptop:w-4/5 ipad:w-full flex-col mobile:flex-row mobile:items-start mobile:justify-end mobile:w-[90%] mobile:mb-5">
              <InterItem imageURL='../inventory/dnft.svg' classes='mx-auto laptop:min-w-[300px] ipad:min-w-[280px]  mobile:mt-[7vh] mobile: w-[270px] mobile:m-0' />
              <div className="laptop:mx-auto ipad:mx-auto mobile:w-auto">
                <OrangeBtn content="Unstake" classes="relative px-3 laptop:text-4xl laptop:px-[40px] laptop:mt-[40px] laptop:mt-3 ipad:text-3xl ipad:mt-4 mobile:text-xl mobile:top-[40px] mobile:px-[20px]"/>
              </div>
            </div>
          <div className="relative custom-xm:top-4 flex flex-col w-full items-center justify-center mobile:mt-6">
              <div className="flex justify-start mobile:justify-center  w-full items-center">
                <div className="grid grid-cols-5 custom-sm:grid-cols-4 w-[80%] laptop:max-w-[80%] ipad-[90%] custom-xm:grid-cols-3 justify-center">
                  <InventoryBoxes inventoryArray={ nftArray } handleClick={handleClick} clickedIndex={clickedIndex} />
              </div>      
              </div>
              <div className="flex w-full mt-10 mobile:justify-center">
                <div className="flex items-center w-[95%] laptop:w-[70%] mobile:w-[80%]">
                  <div className="mr-[2vw] w-1/5 custom-sm:w-1/4">
                    <Link href="/inventory/weapon">
                      <div className={`${pathname == '/inventory/weapon' ? 'bg-purpleBack border-2 border-[#000000] rounded-xl w-full': ''}`}>
                        <img src="/inventory/sword-icon.png" className="w-[full]"></img>
                      </div>
                    </Link>
                  </div>
                  <div className="mr-[2vw] w-1/5 custom-sm:w-1/4">
                      <Link href="/inventory/props">
                        <div className={`flex items-center justify-center ${pathname == '/inventory/props' ? 'bg-purpleBack border-2 border-black rounded-xl min-w-[9vh] max-w-[9vh]': ''}`}>
                          <img src="/inventory/pocket-icon.svg" className="min-w-full max-w-full"></img>
                        </div>
                      </Link>
                  </div>
                  <div className="w-1/5 custom-sm:w-1/4">
                      <Link href="/inventory/">
                        <div className={`text-4xl text-center py-[1vh] rounded-xl min-w-full max-w-full ${pathname == '/inventory' ? 'flex items-center justify-center bg-purpleBack border-2 border-black rounded-xl aspect-square': 'bg-greyBack'}`}>
                          NFT
                        </div>
                      </Link>
                  </div>   
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Inventory;