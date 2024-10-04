import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <div className='skills-container   w-full flex items-center justify-between'>
      <div className="softwere-expertize
       
       h-5/6
       w-3/6
       m-8
       rounded-lg
       shadow-lg
       bg-slate-50
      ">
      <div className="adobe-illustrator">
      ADOBE ILLUSTRATOR
      </div>

      <div className="adobe-photoshop">
      ADOBE PHOTOSHOP
      </div>
      </div>
   <div className="slill-progress 
   bg-slate-50
       h-5/6
       w-3/6
       m-8
       p-12
       rounded-xl
       shadow-lg">
   <div className=''>
    <span> Logo Designs ➔</span><progress className="progress progress-info w-56 " value={0} max="100"></progress>
    </div>
<div>
 <span> Flyer Designs</span><progress className="progress progress-info w-56" value="50" max="100" ></progress>
</div>
<div>
  <span>T-Shirt Designs ➔ </span><progress className="progress progress-info w-56" value="50" max="100" ></progress>
</div>
<div>
  <span>Brochure Designs ➔ </span><progress className="progress progress-info w-56" value="50" max="100" ></progress>
</div>
<div>
  <span>Banner / Poster Designs ➔ </span><progress className="progress progress-info w-56" value="50" max="100" ></progress>
</div>
<div>
  <span>Business Card Designs ➔ </span><progress className="progress progress-info w-56" value="50" max="100" ></progress>
</div>
<div>
  <span>Icon Designs ➔ </span><progress className="progress progress-info w-56" value="50" max="100" ></progress>
</div>
<div>

</div>
   </div>

    </div>
  )
}

export default Skills