import { useState, useEffect } from 'react';
import completeImg from './assets/icons8_Ok.ico';
import editImg from './assets/edit.ico';
import deleteImg from './assets/delete.ico';
import pinImg from './assets/pin.ico';

const App = () => {

  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);
  const [activities, setActivities] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editNum, setEditNum] = useState('');
  const [color, setColor] = useState("pink");
  // const [pending, setPending] = useState(0);


  const handleActivity = () => {
    setCompleted(false)
    let newActivity = {name, completed};
    setActivities([...activities, newActivity]);
    setName("");
  }

  const handleComplete = (i) => {
    let update = [...activities];
    update[i].completed = !update[i].completed;
    setCompleted(!update[i].completed);
    setActivities(update);
  }

  const handleEdit = i => {
    setName(activities[i].name);
    setEditMode(true);
    setEditNum(i);
  }

  const updateChanges = () => {
    let edit = [...activities];
    edit[editNum].name = name;
    setActivities(edit);
    setName("")
    setEditMode(false)
  }

  const handleDelete = i => {
    setActivities(activities.filter((_, ind)=> i != ind))
  }

  // useEffect(() => {
  //   return () => {
  //     setPending(activities.filter((val,_)=> val.completed == false).length);
  //   };
  // });

  const handlePin = i => {
    let changeActivity = [...activities];
    let p = changeActivity[i];
    changeActivity.splice(i, 1);
    changeActivity = [p, ...changeActivity];
    setActivities(changeActivity);
  }

  return(
    <>
      <section className="container-fluid vh-100" style={{backgroundColor: color, color: "white"}}>
        <h1 className="text-center mb-3">Todo App</h1>
        {/* <div className="row"> */}
          <div className="col-6 container-fluid">
          <p className="text-center">Change color here</p>
          <input type="color" className="form-control bg-transparent" onChange={e => setColor(e.target.value)} />
            <input type="text" placeholder="Add activity here..." autoFocus onChange={e => setName(e.target.value)} value={name} className="form-control my-3" />
            {!editMode ? 
            <button className="btn btn-success w-100" onClick={handleActivity} >Add Activity</button>
            :
            <button className="btn btn-success w-100" onClick={updateChanges}>Update Activity</button>
            }
          </div>
          <div className="col-6 container-fluid mt-4" style={{height: "60vh", overflowY: "scroll"}}>
            <table className="table table-striped table-border shadow">
              <thead>
                <tr className="bg-secondary">
                  <td>S/N</td>
                  <td>Activity</td>
                  <td>Status</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {activities.map((val, i)=> (
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td style={{textDecoration: !val.completed ? "none" : "line-through"}} >{val.name}</td>
                    <td> <img src={completeImg} alt="Complete" title="Complete" onClick={() => handleComplete(i)} className="pointer" /> </td>
                    <td> <img src={editImg} alt="Edit" title="Edit" className="pointer" onClick={ () => handleEdit(i)} /> <img src={deleteImg} title="Delete" alt="Delete" className="mx-4  pointer" onClick={ () => handleDelete(i)} />  <img src={pinImg} alt="Pin" className="pointer" title="Pin" onClick={() => handlePin(i)} /> </td>
                  </tr>
                ))}
              </tbody>
              {/* <tfooter className="w-100">
                <tr>
                  <td>You have {pending} pending tasks</td>
                </tr>
              </tfooter> */}
            </table>
          </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default App;