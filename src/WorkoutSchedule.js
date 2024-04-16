import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {FaSignal} from 'react-icons/fa6'
import {IoWifi} from 'react-icons/io5'
import {IoBatteryFull} from 'react-icons/io5'
import {FaGreaterThan} from 'react-icons/fa6'
import {IoMdAdd} from 'react-icons/io'
import {CiSearch} from 'react-icons/ci'

import {FaLessThan} from 'react-icons/fa6'
import '../src/App.css'
const WorkoutSchedule = () => {
  const navigate = useNavigate()

  const [selectedDay, setSelectedDay] = useState(1)

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur']
  const time = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5]

  const handleDaySelection = index => {
    setSelectedDay(index)
  }
  return (
    <div className="max-w-[480px] m-5 border-1 min-h-full rounded-2xl shadow-lg shadow-gray-300 border-gray-400 h-[100%] flex w-full pb-[11px] py-1 px-2 mx-auto justify-center">
      <div className="w-full">
        <div className="statusbar  flex justify-between">
          <span>9:41</span>
          <div className="flex justify-evenly w-[20%]">
            <FaSignal />
            <IoWifi />
            <IoBatteryFull />
          </div>
        </div>
        <div className="flex space-x-12 my-4">
          <span
            className="px-2 bg-gray-100 cursor-pointer"
            onClick={() => {
              navigate('/tracker')
            }}
          >
            {'<'}
          </span>
          <h1 className="text-md">Workout Schedule</h1>
        </div>
        <div className="flex justify-center space-x-2 items-center">
          <FaLessThan size={15} />
          <span className="text-[15px]">April 2024</span>
          <FaGreaterThan size={15} />
        </div>
        {/* newcomponent */}

        <div className="flex justify-center">
          <form className="mt-3 ">
            {days.map((e, index) => (
              <label className="radio-container md:mx-[10px]" key={index}>
                <input
                  type="radio"
                  name="radio"
                  checked={selectedDay === index}
                  onChange={() => handleDaySelection(index)}
                />
                <div
                  className={`radio-label  md:pl-[25px] ${
                    selectedDay === index && 'checked'
                  }`}
                >
                  <span>
                    {e}
                    <br />

                    <span className="text-2xl ml-1 ">{index + 14}</span>
                  </span>
                </div>
              </label>
            ))}
          </form>
        </div>
        <div className="mt-10 space-y-2 ">
          {time.map(e => {
            if (e === 7) {
              return (
                <div>
                  <span className=" text-[15px] px-2">00:0{e} AM</span>

                  <h4 className="textBetween" style={{margin: '0px'}}>
                    <span
                      className="relative left-[45px]  "
                      style={{
                        color: 'white',
                        background: '#DEB5F0   ',
                        padding: '5px 8px ',
                        borderRadius: '12px',
                      }}
                    >
                      Abb workout 7:30 AM
                    </span>
                  </h4>
                </div>
              )
            } else if (e === 9) {
              return (
                <div>
                  <span className=" text-[15px] px-2">00:0{e} AM</span>

                  <h4 className="textBetween" style={{margin: '0px'}}>
                    <span
                      className="relative left-[45px] bottom-2.5  "
                      style={{
                        color: 'white',
                        background: '#DEB5F0',
                        padding: '5px 8px ',
                        borderRadius: '12px',
                      }}
                    >
                      Upper body workout {e} AM
                    </span>
                  </h4>
                </div>
              )
            } else if (e === 3) {
              return (
                <div>
                  <span className=" text-[15px] px-2">00:0{e} AM</span>

                  <h4 className="textBetween" style={{margin: '0px'}}>
                    <span
                      className="relative left-[45px] bottom-3  "
                      style={{
                        background: ' #F2F2F2 ',
                        padding: '5px 8px ',
                        borderRadius: '12px',
                      }}
                    >
                      Lower body workout {e} AM
                    </span>
                  </h4>
                </div>
              )
            } else if (e >= 10) {
              return (
                <div>
                  <span className="text-[15px] px-2 ">{e}:00 AM</span>
                  <hr />
                </div>
              )
            } else
              return (
                <div>
                  <span className=" text-[15px] px-2">00:0{e} AM</span>
                  <hr />
                </div>
              )
          })}
        </div>
        <div
          className="rounded-[50%] relative bottom-40 shadow-md shadow-gray-400  left-[70%] w-14
           h-14 flex justify-center items-center bg-gradient-to-r from-fuchsia-300 to-fuchsia-200 "
          onClick={() => {
            navigate('/tracker')
          }}
        >
          <span>
            <IoMdAdd size={30} fill="white" />
          </span>
        </div>
        <div
          className="rounded-[50%] relative bottom-10  shadow-md shadow-gray-400  left-[42%] w-20 h-20 flex justify-center items-center bg-gradient-to-r from-blue-200 to-blue-500  "
          onClick={() => {
            navigate('/tracker')
          }}
        >
          <span>
            <CiSearch size={30} fill="white" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default WorkoutSchedule
