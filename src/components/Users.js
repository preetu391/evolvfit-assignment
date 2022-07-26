import {useState} from 'react';
import './Users.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PieChart } from 'react-minimal-pie-chart';
import { BsPersonCheck } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineExclamation } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import ToolTip from './ToolTip';

const Users = ({name,email,stepsWalked,stepsTarget,performedDate,scheduledDate,calorieIntake,calorieTarget, userId, feedback}) => {

  const [steps, setSteps] = useState(stepsTarget)

  const[calories, setCalories] = useState(calorieTarget)

  const [hover, setHover] = useState(false)

  var feed= feedback;

  var sd=scheduledDate;

  var pd=performedDate;
  
  return (
    <>
        <div className='user-row'>
            <div className='user-img'>
                <h5>Img</h5>
            </div>
            <div className='user-details'>
                <h3>{name}</h3><br></br>
                <h5>{email}</h5>
            </div>
            
            <div className='user-steps-pie' style={{ width: 57, height: 57}}>
              <CircularProgressbar value={60} text={`${stepsWalked} walked`} styles={{
                path: {
                    stroke: `#ffffff, ${60 / 100})`,
                  },
                  trail: {
                    stroke:` #99ffdd`,
                  },
                  text: {
                    fill: `#ffffff`,
                    fontSize: '12px',
                  },
                  background: {
                    fill: `#ffffff`,
                  }
              }}/>
            </div>
                
            <div className='user-steps-target'>
              <div classname='increment-decrement-buttons' onClick={() => setSteps(steps + 500)}><AiOutlinePlus/></div>
              <div><h4>{steps}</h4></div>
              <div><h5 className='target-weight-less'>Target</h5></div>
              <div classname='increment-decrement-buttons' onClick={() => setSteps(steps - 500)}><AiOutlineMinus/></div>
             </div>
              <div className='user-workout'>
                <h5><BsPersonCheck/> {performedDate}</h5><br></br>
                {pd===sd? <h5 className='equaldate'><TbCalendarTime size={15}/> {scheduledDate}</h5> : <h5><TbCalendarTime size={15}/> {scheduledDate}</h5>}
                
            </div>
            <NavLink to={`/user/${userId}/workout`}>
            {feed && <div className='btn-calendar-red'><AiOutlineExclamation color='white'/></div>}
            {!feed && <div className='btn-calendar' ><AiOutlineRight color='white'/></div>}
            </NavLink>
            <div className='user-calorie-intake'>
                <div className='piechart' onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
                  {hover && <ToolTip /> }
                  <PieChart
                    data={[
                     { title: 'One', value: 10, color: '#03C7FC' },
                     { title: 'Two', value: 15, color: '#F45C84' },
                     { title: 'Three', value: 20, color: '#F5C90F' },
                     ]}
                     radius={50} lineWidth={20} paddingAngle={3} />
                </div>
            </div>
            <div className='user-calorie-target'>
              <div classname='increment-decrement-buttons' onClick={() => setCalories(calories + 100)}><AiOutlinePlus color='white' /></div>
              <div><h3>{calories}</h3></div>
              <div><h5>calories</h5></div>
              <div classname='increment-decrement-buttons' onClick={() => setCalories(calories - 100)}><AiOutlineMinus/></div>
            </div>
            <NavLink to={`/user/${userId}/nutrition`}>
            <div className='btn-calorie'><AiOutlineRight color='white'/></div>
            </NavLink>
            <div className='notification-bell'>
              <BsBell size={20} color={'black'}/>
            </div>
        </div>
    </>
  )
}

export default Users