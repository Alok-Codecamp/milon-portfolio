import React from 'react'
import './RecentWork.css'
const RecentWork = () => {
  return (
    <>
    <h1 className='text-4xl text-white text-center mt-20 mb-10'>Explore My Recent Work</h1>
    <div className='RecentWork-container  text-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 mr-10 gap-4'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </>
  )
}

export default RecentWork

export const Card = ()=>{

  return (
    <>
    <div className="card glass w-96">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
    </>
  )
}