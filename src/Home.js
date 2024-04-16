import React from 'react'
import '../src/App.css'
import {FaSignal} from 'react-icons/fa6'
import {IoWifi} from 'react-icons/io5'
import {IoBatteryFull} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="max-w-[480px] min-h-full border-1  rounded-2xl shadow-lg shadow-gray-300 border-gray-400 h-[100%] flex w-full  py-1 px-2 mx-auto m-5 justify-center">
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
            <a href="/start" className="text-[#9FB2FF] underline text-lg ">
              Skip
            </a>
          </span>
        </div>
        <div className="centerImage flex justify-center">
          <img src="image1.png" className="w-[1000px]" alt="centerimage" />
        </div>
        <h1 className="text-xl font-semibold my-5">Track Your Goal</h1>
        <p className="text-sm text-gray-400 ">
          Don't worry if you have trouble determining your goals ,We can help
          you determine your goals and track your goals
        </p>

        <div className="my-[28px]">
          <div
            className="flex justify-end mt-5 rounded-full p-1 mx-2  "
            style={{borderRight: '3px solid #89A1FF'}}
          >
            <span
              className="rounded-full  bg-gradient-to-r from-blue-200 to-blue-500 flex justify-center  items-center p-7 w-1 h-1"
              onClick={() => navigate('/start')}
            >
              <button className="text-white text-[28px]">{'>'}</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
