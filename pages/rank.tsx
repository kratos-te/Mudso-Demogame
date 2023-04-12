const Rank = () => {
  return (
    <div className="w-screen overflow-y-auto">
        <div className="flex items-center mobile:flex-col justify-between w-full mx-auto  min-h-screen">
        <div className="flex laptop:w-4/5 ipad:w-full flex-col mobile:flex-row mobile:justify-end mobile:w-[90%] mobile:mb-5 mobile:items-center">
                <img src='character.png' className='mx-auto laptop:min-w-[300px] ipad:min-w-[280px]  mobile:mt-[7vh] mobile: w-[270px] mobile:m-0' />
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-start">
                      <div className="relative top-4 text-3xl custom-sm:text-2xl mobile:text-2xl mobile:top-4">titanium</div>
                      <div className="text-6xl font-semibold custom-sm:text-4xl mobile:text-5xl tracking-[0.31px]">armor</div>
                    </div>
                    <div className='flex flex-col items-center mobile:ml-[12px]'>
                        <div className="flex laptop:text-6xl ipad:text-5xl text-orangeText pb-2 mobile:pb-1 mobile:text-4xl">900G</div>
                          <div className="mt-1 text-2xl mobile:text-lg">
                            <div>#9201</div>
                            <div className='flex flex-nowrap '>800 / 10000</div>
                          </div>
                        </div>
                    </div>
                </div>
          </div>      
        </div>
    </div>
  )
}

export default Rank;