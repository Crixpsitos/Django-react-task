import { useNavigate } from 'react-router-dom';

export function TaskCard({task}) {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/tasks/${task.id}`);
  };
  if (task.done) {
    <p>the task is done</p>
  }else {
    <p>the task is not done</p>
  }

    return (
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer'
        onClick={handleClick}
        >  
          <h1 className='font-bold uppercase'>{task.title}</h1>
          <p className='text-slate-400'>{task.description}</p>
          <p className='text-slate-400'>{task.done ? 'Done: ✅' : 'Done: ❌'}</p>
        </div>
      );
}

