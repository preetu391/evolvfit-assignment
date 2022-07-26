import React from 'react'
import Data from './data.json'
import Users from './Users'
import './Dashboard.css'
import {IconContext} from "react-icons";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { TbWalk } from "react-icons/tb";
import { MdOutlineLunchDining } from "react-icons/md";


const Dashboard = () => {
  console.log(Data);
  return (
  <>
  
    <div className='page'>
     <div className='heading'>
        <div className='steps '><h1>
        <IconContext.Provider value={{ className: "myReact-icons"}}>
        <TbWalk />
  </IconContext.Provider> Steps</h1></div>
        <div className='workout'><h1><MdOutlineDirectionsBike styles={{color:'#fff'}}/> Workout</h1></div>
        <div className='nutrition'><h1><MdOutlineLunchDining/> Nutrition</h1></div>
      </div>
        {Data.map((user) => (
          <div key={user.userId}>
            <Users
              userId={user.userId}
              name={user.name}
              email={user.email}
              stepsWalked={user.stepsWalked}
              stepsTarget={user.stepsTarget}
              performedDate={user.performedDate}
              scheduledDate={user.scheduledDate}
              calorieIntake={user.calorieIntake}
              calorieTarget={user.calorieTarget}
              feedback={user.feedback} />
          </div>
        ))}
    </div>
    </>
  )
}

export default Dashboard