import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import InventoryBoxes from '@/components/InventoryBoxes'
import InterItem from '@/components/InterItem'
import OrangeBtn from '@/components/OrangeBtn'

const Props = () => {
  const [clickedIndex, setClickedIndex] = useState(-1);


  const handleClick = (index:number) => {
    setClickedIndex(index);
    console.log(index);
    };

  const router = useRouter();
  const { pathname } = router; 
  
  const propsArray = ['../inventory/mushroom.svg', '../inventory/cereal.svg'];
  const lenArray = propsArray.length;

  return (
    <div className=" w-screen">
        <div className="flex items-center mobile:flex-col justify-between w-full mx-auto  min-h-screen">
        <div className="flex laptop:w-4/5 ipad:w-full flex-col mobile:flex-row mobile:items-center mobile:justify-center mobile:w-[80%] mobile:mb-5">
              <InterItem imageURL='../inventory/cereal.svg' classes='mx-auto laptop:min-w-[300px] ipad:min-w-[280px]  mobile:mt-[7vh] mobile:w-[270px] mobile:m-0' />
              <div>
                <div className='flex flex-col items-center mobile:items-start mobile: ml-2'>
                  <OrangeBtn content="Use" classes="relative laptop:text-4xl laptop:px-[70px] laptop:mt-6 ipad:text-3xl ipad:px-[38px] ipad:mt-4 mobile:text-2xl mobile:top-[40px] mobile:px-6 mobile:px-[30px] custom-sm:text-lg" />
                  <OrangeBtn content="Dump" classes="relative laptop:text-4xl laptop:px-[50px] laptop:mt-3  ipad:px-[22px] ipad:text-3xl ipad:mt-4 mobile:text-2xl mobile:top-[40px] mobile:mt-[20px] mobile:px-[21px] mobile:px-[17px] custom-sm:text-lg"/>
                </div>
              </div>
            </div>
          <div className="relative custom-xm:top-4 flex flex-col w-full items-center justify-center">
              <div className="flex justify-start mobile:justify-center  w-full items-center">
                <div className="grid grid-cols-5 custom-sm:grid-cols-4 w-[80%] laptop:max-w-[80%] ipad-[90%] custom-xm:grid-cols-3 justify-center">
                  <InventoryBoxes inventoryArray={ propsArray } handleClick={handleClick} clickedIndex={clickedIndex} />
              </div>      
              </div>
              <div className="flex w-full mt-10 mobile:justify-center">
                <div className="flex items-center w-[95%] laptop:w-[80%] mobile:w-[80%]">
                  <div className="mr-[2vw] w-1/5 custom-sm:w-1/4">
                    <Link href="/shop/weapon">
                      <div className={`${pathname == '/shop/weapon' ? 'bg-purpleBack border-2 border-[#000000] rounded-xl w-full': ''}`}>
                        <img src="/inventory/sword-icon.png" className="w-[full]"></img>
                      </div>
                    </Link>
                  </div>
                  <div className="mr-[2vw] w-1/5 custom-sm:w-1/4">
                      <Link href="/shop/props">
                        <div className={`flex items-center justify-center ${pathname == '/shop/props' ? 'bg-purpleBack border-2 border-black rounded-xl min-w-[full] max-w-[full]': ''}`}>
                          <img src="/inventory/pocket-icon.svg" className="min-w-full max-w-full"></img>
                        </div>
                      </Link>
                  </div>
                  <div className="w-1/5 custom-sm:w-1/4">
                      <Link href="/shop/">
                        <div className={`text-4xl text-center py-[1vh] rounded-xl min-w-full max-w-full ${pathname == '/shop' ? 'bg-purpleBack border-2 border-black rounded-xl': 'bg-greyBack'}`}>
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

export default Props;