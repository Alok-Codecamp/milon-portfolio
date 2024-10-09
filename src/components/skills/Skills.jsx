import React from 'react'
import './Skills.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Skills = () => {
  return (
    <>
    <h1 className='text-4xl text-white text-center mt-20 mb-10'>Skills & Expertise</h1>
    <div className='skills-container mr-10 ml-10 flex items-center justify-between bg-cyan-950 mt-10 mb-10'>
      <div className="softwere-expertise bg-slate-50 p-12
       rounded-lg
       shadow-lg
       text-center">
        <h1 className='text-blue-900 font-extrabold text-4xl'>Softwere Expertise</h1>
        <div className='redial-progress flex justify-center items-center pl-10 pr-10 pt-28 pb-28'>
        <div
  className="radial-progress  text-info border-primary-content  bg-sky-50 border-4  text-center mr-10"
  style={{ "--value": "70", "--size": "22rem", "--thickness": "1rem" }}
  role="progressbar">
  <h1 className='text-3xl'>85%</h1>
  <p className='text-2xl'>Adobe Illustrator</p>
</div>
        <div
  className="radial-progress  text-info border-primary-content bg-sky-50 border-4  text-center ml-10"
  style={{ "--value": "70", "--size": "22rem", "--thickness": "1rem" }}
  role="progressbar">
  <h1 className='text-3xl'>85%</h1>
  <p className='text-2xl'>Adobe Photoshop</p>
</div>

        </div>
        
      </div>
   <div className="slill-progress 
   bg-slate-50
       p-6
       rounded-lg
       shadow-lg">
        <h1 className='text-center text-blue-900 font-extrabold text-4xl '>Skill Progress</h1>
   <div className='logo-design p-6 text-3xl font-extrabold'>
    <span className=''> Logo Designs ➔</span><progress className="progress progress-info w-96 h-4 ml-4" value={90} max="100"></progress><span>9/10</span>
    </div>
<div className='logo-design p-6 text-3xl font-extrabold'>
 <span className=''> Flyer Designs ➔</span><progress className="progress progress-info w-96 h-4 ml-4" value="50" max="100" ></progress><span>5/10</span>
</div>
<div className='logo-design p-6 text-3xl font-extrabold'>
  <span className=''>T-Shirt Designs ➔ </span><progress className="progress progress-info w-96 h-4 ml-4" value="50" max="100" ></progress><span>5/10</span>
</div>
<div className='logo-design p-6 text-3xl font-extrabold'>
  <span className=''>Brochure Designs ➔ </span><progress className="progress progress-info w-96 h-4 ml-4" value="46" max="100" ></progress><span>4/10</span>
</div>
<div className='logo-design p-6 text-3xl font-extrabold'>
  <span className=''>Banner / Poster Designs ➔ </span><progress className="progress progress-info w-96 h-4 ml-4 " value="55" max="100" ></progress><span>5/10</span>
</div>
<div className='logo-design p-6 text-3xl font-extrabold'>
  <span className=''>Business Card Designs ➔ </span><progress className="progress progress-info w-96 h-4 ml-4 " value="60" max="100" ></progress><span>6/10</span>
</div>
<div className='logo-design p-6 text-3xl font-extrabold'>
  <span className=''>Icon Designs ➔ </span><progress className="progress progress-info w-96 h-4 ml-4 " value="48" max="100" ></progress><span>4/10</span>
</div>
<div className='logo-design p-6 text-3xl font-extrabold'>

</div>
   </div>

    </div>
    </>
  )
}

export default Skills