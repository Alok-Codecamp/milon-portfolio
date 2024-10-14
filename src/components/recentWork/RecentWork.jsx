import React, { useEffect, useState } from 'react';
import './RecentWork.css';

const RecentWork = () => {
  const [projects,setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    fetch('/projects.json')
    .then(res =>res.json())
    .then(data =>setProjects(data))
    .catch(error=>{
      console.error(error);
      setLoading(false)
    })
    setLoading(false)
  },[])


  return (
    <>
      <h1 className='text-4xl text-white text-center mt-20 mb-10'>Explore My Recent Work</h1>
      <div className='RecentWork-container text-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:ml-8 md:mr-8  gap-4'>
        {projects.map(project => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default RecentWork;

export const Card = ({ project }) => {
  const openModal = (id) => {
    document.getElementById(`modal_${id}`).showModal();
  };

  return (
    <>
      <div className="card glass">
        <figure>
          <img className='h-60' src={project.pic} alt={project.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title h-10">{project.name}</h2>
          <div className="card-actions justify-end">
            <button onClick={() => openModal(project.id)} className="btn btn-info">Learn now!</button>
          </div>
        </div>
      </div>

      {/* Modal for each project */}
      <dialog id={`modal_${project.id}`} className="modal">
        <div className="modal-box h-9/12">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-black text-lg">{project.name}</h3>
          <img className='w-9/12' src={project.pic} alt={project.name} />
        </div>
      </dialog>
    </>
  );
};
