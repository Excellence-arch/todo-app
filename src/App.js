// import { useState } from 'react';

// const App = () => {

//   const [check, setCheck] = useState(false);
//   const [change, setChange] = useState("");
//   const [toDo, setToDo] = useState([]);

//   const crossed = 'line-through'

//   const handleAdd = (e) => {
//     e.preventDefault();
//     setCheck(false);
//     let activity = {name: change, completed: check};
//     setToDo([...toDo, activity]);
//   }

//   const handleSelect = (e, i) => {
//     setCheck(e.target.checked);
//     toDo[i].completed = e.target.checked;
//   }

//   const handleDelete = (e, i) => {
//     setToDo(toDo.filter((_,ind)=> i != ind));
//     setCheck(toDo[i].completed)
//   }
//   return (
//     <>
//       <section className="container-fluid">
//         <div className="row">
//           <div className="col-6 border rounded shadow container-fluid">
//             <input type="text" placeholder="Add activity here..." onChange={e => setChange(e.target.value)} className="my-2 form-control" />
//             <button className="btn btn-success w-100" onClick={e => handleAdd(e)}>Add</button>
//           </div>
//           <div className="col-6 container-fluid">
//             <table className="table border">
//               <thead>
//                 <tr>
//                   <td>Activity</td>
//                   <td>Completed</td>
//                   <td>Delete</td>
//                 </tr>
//               </thead>
//               <tbody>
//                 {toDo.map((val, i)=> (
//                   <tr key={i}>
//                     <td style={{textDecoration: val.completed == true ? crossed : 'none'}}>{val.name}</td>
//                     <td><input type="checkbox" name={val.name} onChange={(e)=> handleSelect(e, i)}/> </td>
//                     <td><button className="btn btn-warning" onClick={e => handleDelete(e, i)}>Delete</button></td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default App;


import { useState } from 'react';
import image from './icons8_Ok.ico'

const App = () => {
  const [activity, setActivity] = useState("");
  const [complete, setComplete] = useState(false);
  const crossed = 'line-through';
  const [todo, setTodo] = useState([]);

  const handleActivity = (e) => {
    e.preventDefault();
    setComplete(false)
    let newTodo = {name: activity, completed: complete};
    setTodo([...todo, newTodo]);
    setActivity("");
  }

  const handleComplete = (e, i) => {
    let changeTodo = todo;
    let completed
    if (complete == true) {
      completed = false;
      setComplete(completed);
    } else {
      completed = true;
      setComplete(completed);
    }
    changeTodo[i].completed = completed;
    setTodo(changeTodo);
  }

  const handleDelete = (e, i) => {
    setTodo(todo.filter((_, ind)=> i != ind));
  }

  return(
    <>
       <section className="container-fluid">
         <div className="row">
           <div className="col-6 border rounded shadow container-fluid">
             <input type="text" placeholder="Add activity here..." onChange={e => setActivity(e.target.value)} value={activity} className="my-2 form-control" />
             <button className="btn btn-success w-100" onClick={e => handleActivity(e)}>Add</button>
           </div>
           <div className="col-6 container-fluid">
             <table className="table border">
               <thead>
                 <tr>
                   <td>S/N</td>
                   <td>Activity</td>
                   <td>Status</td>
                   <td>Delete</td>
                 </tr>
               </thead>
               <tbody>
                 {todo.map((val, i)=> (
                   <tr key={i}>
                     <td>{i+1}</td>
                     <td style={{textDecoration: val.completed == true ? crossed : 'none'}}>{val.name}</td>
                     <td><img alt="Complete" src={image} onClick={(e)=> handleComplete(e, i)}/> </td>
                     <td><button className="btn btn-warning" onClick={e => handleDelete(e, i)}>Delete</button></td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       </section>
    </>
  )
}

export default App;