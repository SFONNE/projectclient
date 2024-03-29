import { useEffect, useState } from "react";
import Link from 'next/link'

const Bear = ({ avatar_url, login }) => {

  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [picture, setPicture] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [idEdit, setidEdit] = useState(0);

   /*useEffect( async () => {
    let ts = await getBear();
    console.log(ts)
    setTasks(ts)
    }, [] )*/


  const addTask = () => {
    console.log("add");
    if (tasks.length > 50) {
      alert('อาหารเกิน 50 เมนู');
    }
    else if (name.trim() !== '') {
      const id = [tasks.length - 1] < 0 ? 1 : tasks[tasks.length - 1].id + 1;
      setTasks([...tasks, { id: id, name: name, weight: weight, picture: picture }]);
    }
    console.log('Tasks:', tasks);
  }

  const deleteTask = (id) => {
    console.log("Delete", id);
    const newTasks = tasks.filter((item) => +item.id !== +id);
    setTasks(newTasks);
  };

  const editTask = (id) => {
    console.log('Edit Task', id);
    setidEdit(id)
    let t = tasks.find((task) => +task.id === +id)
    setName(t.name)
    setWeight(t.weight)
    setPicture(t.picture)
    if (+idEdit === +id) { //Press Edit again
      let newTasks = tasks.map((task, index) => {
        if (+task.id === +id) {
          tasks[index].name = name
          tasks[index].weight = weight
          tasks[index].picture = picture
        }
        return task
      })
      setTasks(newTasks)
      setidEdit(0)
    }
  };

  const renderTask = () => {
    return tasks.map((item, index) => (
      
      <li key={index} className="relative m-4 border-dashed border-2 p-5 flex flex-col  ">
     
        <div className="absolute bottom-0 right-0 text-xl mr-2 text-[#17202A] font-bold font-display ">
          {index + 1}
        </div>{+idEdit !== +item.id ? (
          <div className="text-2xl text-[#000000] font-bold drop-shadow-lg max-w-xs font-display">{item.name}</div>) : (
          <input className="text-xl rounded-lg text-[#000000] bg-[#FFFFFF] font-bold pl-4 mt-2 mb-2 outline-[#FFFFFF] font-display" type="task" value={name} onChange={(e) => setName(e.target.value)} />
        )
        }
        {+idEdit !== +item.id ? (
          <div className="text-2xl text-[#000000] font-bold drop-shadow-lg max-w-xs font-display">{item.weight}</div>) : (
          <input className="text-xl rounded-lg text-[#000000] bg-[#FFFFFF] font-bold pl-4 mt-2 mb-2 outline-[#00ADB5] font-display" type="task" value={weight} onChange={(e) => setWeight(e.target.value)} />
        )
        }
        {+idEdit !== +item.id ? (
          <div className="mb-4 max-w-xs max-h-xs items-center"><img src={item.picture} /></div>) : (
          <input className="text-xl rounded-lg text-[#000000] bg-[#EEEEEE] font-bold pl-4 mt-2 mb-2 outline-[#00ADB5] font-display" type="task" value={picture} onChange={(e) => setPicture(e.target.value)} />
        )
        }
        <div className="mt-2 flex justify-center">
          <button className="mr-4 p-2 bg-red-400 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none" onClick={() => deleteTask(item.id)}>Delete</button>
          <button className="p-2 bg-yellow-500 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none"
            onClick={() => editTask(item.id)}
          > Edit</button>
        </div>
      </li>
    ));
  };
  return (
    <div className=" bg-gradient-to-r from-pink-500 to-lime-500 flex flex-col items-center ">
      <h1 className="m-2 text-[#17202A] text-5xl font-extrabold uppercase font-display">Food Menu</h1>
      {/* <h1 className="text-[#EEEEEE] text-1xl font-bold uppercase font-display"><img src={avatar_url} width="40" /> Power by <span >{login} </span> </h1> */}
      <div className="flex flex-col w-5/6 justify-around items-center mt-2 mb-2 ">
        <p className="text-slate-900  font-extrabold">Enter  Food</p>
       <input className="text-xl text-[#FF#17202A] w-1/3 bg-[#EEEEEE] rounded-lg pl-4 mt-2 mb-2 font-bold outline-[#FFFFFF] font-display" type="text" name="task" onChange={(e) => setName(e.target.value)} />
        <p className="text-slate-900  font-extrabold">Enter Food Price</p>
         <input className="text-xl text-[#17202A] w-1/3 bg-[#EEEEEE] rounded-lg pl-4 mt-2 mb-2 font-bold outline-[#FFFFFF] font-display" type="number" name="task" onChange={(e) => setWeight(e.target.value)} />
        <p className="text-slate-900  font-extrabold">Enter Food image</p>
        <input className="text-xl text-[#17202A] w-1/3 bg-[#EEEEEE] rounded-lg pl-4 mt-2 mb-2 font-bold outline-[#FFFFFF] font-display " type="text" name="task" onChange={(e) => setPicture(e.target.value)} />
        <button className="text-2x w-1/3 bg-pink-800 font-bold text-[#FEFEFF] hover:text-[#ECEEEE] dark:md:hover:bg-[#000000] rounded-lg mt-2 mb-2 font-display" onClick={addTask}>Add</button>
        <Link href="/profile">
          <a className="text-2x w-1/3 bg-pink-800 font-bold text-[#FEFEFF] hover:text-[#ECEEEE] dark:md:hover:bg-[#000000] rounded-lg mt-2 mb-2 font-display text-center">Back to Profile</a>
        </Link>
        <Link href="/logout">
          <a className="text-2x w-1/3 bg-pink-800 font-bold text-[#FEFEFF] hover:text-[#ECEEEE] dark:md:hover:bg-[#000000] rounded-lg mt-2 mb-2 font-display text-center">Logout</a>
        </Link>
      </div>
      <ul className="flex flex-wrap mb-8">{renderTask()}</ul>
    </div>
    
  );
  
};

const getBear = async () => {
  const res = await fetch('http://localhost:3000/bear')
  const json = await res.json()
  console.log(json)
  return json;
}

Bear.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/users/nnahttan')
  const json = await res.json()
  return { login: json.login, avatar_url: json.avatar_url }
}
export default Bear;