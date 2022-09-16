import React from 'react'
import Item from './item';
import bgImage from '../../../resources/landing1.png'
import icon1 from '../../../resources/landingsection3/icon1.png'
import icon2 from '../../../resources/landingsection3/icon2.png'
import icon3 from '../../../resources/landingsection3/icon3.png'
import icon4 from '../../../resources/landingsection3/icon4.png'
import play from '../../../resources/landingsection3/play.png'
const Section2 = () => {
  return (
    <div className='bg-[rgb(238,250,250)] p-10'>
        <div className='flex bg-bgcolor1 justify-center px-2 py-5'>
            
            <div className='flex-1 flex flex-col gap-y-10 justify-around'>
            <h1 className='text-5xl font-bold font-inter'>Insure your workwith compentent skills</h1>
            <Item icon={icon1} header='Insuring Skills with Trainings' text='No matter skills level you have you kick start from today.'/>
            <Item icon={icon2} header='Tackle the challenge' text='Access all the skills assements and hands on real world project.'/>
            <Item icon={icon3} header='Exposed to employer' text='your experience and perfmance is highly ranked to recruters'/>
            <Item icon={icon4} header='Outsourcing' text='Expose your skills to employer do assements.'/>
            </div>
            <div className='flex flex-col flex-1' >
            
                <span className='h-full'><img  className='rounded-2xl' src={bgImage} alt="" /></span>
                <button className='self-center flex gap-x-2 border rounded-md py-2 px-2 mt-2 w-36'> How it work <span><img src={play} alt="" /></span></button>
            </div>
        </div>
    </div>
  )
}

export default Section2