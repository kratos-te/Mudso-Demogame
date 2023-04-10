import React from 'react'

const Clock = () => {
  return (
    <div className="flex justify-center py-2 h-[100%] opacity-90">
        <div className="relative flex items-center justify-end h-[3.5vh] w-[3.5vh] overflow-hidden bg-gray-500 rounded-full">
            <div className="absolute transition minute-hand w-1/2 h-0.5 origin-left ease-in-out animate-spin">
                <div className="w-3/4 h-1/5 bg-white rounded-full opacity-90"/>
            </div>
            <div className="absolute animate-spin hour-hand transition w-1/2 h-0.5  origin-left ease-in-out">
                <div className="w-2/3 h-1/5 bg-white rounded-full opacity-90"/>
            </div>
            <div className="absolute flex justify-center flex-1 w-full">
                <div className="w-[0.1vh] h-[0.1vh] bg-white rounded-full" />
            </div>
        </div>
    </div>
  )
}

export default Clock;