import React from 'react'
import {FaSignal} from 'react-icons/fa6'
import {IoWifi} from 'react-icons/io5'
import {IoBatteryFull} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'
const Start = () => {
  const navigate = useNavigate()
  return (
    <div className="p-5 max-w-[480px] min-h-full border-1 rounded-2xl shadow-lg shadow-gray-300 border-gray-400 h-[100%] flex w-full py-1 px-2 mx-auto m-5  justify-center">
      <div>
        <div className="status bar flex justify-between">
          <span>9:41</span>
          <div className="flex justify-evenly w-[20%]">
            <FaSignal />
            <IoWifi />
            <IoBatteryFull />
          </div>
        </div>
        <div>
          <span className="flex justify-end ">
            <a href="/signin" className="text-[#9FB2FF] underline text-lg ">
              Skip
            </a>
          </span>
        </div>
        <div className="centerImage my-12 flex justify-center">
          <img src="image2.png" className="w-[1000px]" alt="centerimage" />
        </div>
        <h1 className="text-xl font-semibold my-5">Get Burn</h1>
        <p className="text-sm text-gray-400">
          Let’s keep burning to achieve your goals, it hurts only temporarily,
          if you give up now you will be in pain forever
        </p>

        <div
          className="flex justify-end m-[37px] ml-[390px] rounded-full p-1 mx-2 "
          style={{
            borderBottom: '3px solid #89A1FF',
            borderRight: '3px solid #89A1FF',
          }}
        >
          <div
            className="rounded-full bg-gradient-to-r from-blue-200 to-blue-500  flex justify-center  items-center p-7 w-1 h-1"
            onClick={() => navigate('/signin')}
          >
            <button className="text-white text-[28px]">{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start
