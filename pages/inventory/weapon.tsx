import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import InterItem from '@/components/InterItem'
import OrangeBtn from '@/components/OrangeBtn'
import InventoryBoxes from '@/components/InventoryBoxes'
const Weapon = () => {
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleClick = (index:number) => {
    setClickedIndex(index);
    console.log(index);
    };
    
  const router = useRouter();
  const { pathname } = router;
  
  const inventoryArray = ['../inventory/armor.png', '../inventory/spear.svg'];
  return (
    <div className=" w-screen">
        <div className="flex items-center mobile:flex-col justify-between w-full mx-auto  min-h-screen">
            <div className="flex laptop:w-4/5 ipad:w-full flex-col mobile:flex-row mobile:items-center mobile:justify-between mobile:w-[80%] mobile:mb-5">
              <InterItem imageURL='../inventory/spear.svg' classes='mx-auto laptop:min-w-[300px] ipad:min-w-[280px]  mobile:mt-[7vh] mobile:w-[270px] mobile:m-0' />
              <div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-end">
                    <div className="relative top-4 text-3xl custom-sm:text-2xl mobile:top-4">Golden</div>
                    <div className="text-6xl font-semibold custom-sm:text-4xl tracking-[0.31px]">Dagger</div>
                  </div>
                  <div className='flex flex-col items-end'>
                    <div className="text-3xl mt-3 custom-sm:text-xl">
                      <div className="flex pb-2 mobile:pb-1 border-b-[2px] mobile:border-b-[1px] border-gray-500 px-1 ">Att. &nbsp;&nbsp;&nbsp;100</div>
                        <div className="text-dodgerBlue mt-1">
                          <div>def.&nbsp;+20%</div>
                          <div>rec. &nbsp;&nbsp; +50</div>
                        </div>
                      </div>
                      <OrangeBtn content="Enchant" classes="relative px-3 laptop:text-4xl laptop:mt-3 ipad:text-3xl ipad:mt-4 mobile:text-2xl mobile:top-[40px]"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative custom-xm:top-4 flex flex-col w-full items-center justify-center mobile:mt-6">
              <div className="flex justify-start mobile:justify-center  w-full items-center">
                <div className="grid grid-cols-5 custom-sm:grid-cols-4 w-[80%] laptop:max-w-[80%] ipad-[90%] custom-xm:grid-cols-3 justify-center">
                  <InventoryBoxes inventoryArray={ inventoryArray } handleClick={handleClick} clickedIndex={clickedIndex} />
              </div>      
              </div>
              <div className="flex w-full mt-10 mobile:justify-center">
                <div className="flex items-center w-[95%] laptop:w-[80%] mobile:w-[80%]">
                  <div className="mr-[2vw] w-1/5 custom-sm:w-1/4">
                    <Link href="/inventory/weapon">
                      <div className={`${pathname == '/inventory/weapon' ? 'bg-purpleBack border-2 border-[#000000] rounded-xl w-full': ''}`}>
                        <img src="/inventory/sword-icon.png" className="w-full"></img>
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
                        <div className={`text-4xl text-center py-[1vh] rounded-xl min-w-full max-w-full ${pathname == '/inventory' ? 'bg-purpleBack border-2 border-black rounded-xl': 'bg-greyBack'}`}>
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

export default Weapon;