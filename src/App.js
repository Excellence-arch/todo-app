import { useState } from 'react'

const App = () => {

  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);
  const [activities, setActivities] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editNum, setEditNum] = useState('');

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

  return(
    <>
      <section className="container-fluid mt-3">
        <div className="row">
          <div className="col-6 container-fluid">
            <input type="text" placeholder="Add activity here..." onChange={e => setName(e.target.value)} value={name} className="form-control my-3" />
            {!editMode ? 
            <button className="btn btn-success w-100" onClick={handleActivity} >Add Activity</button>
            :
            <button className="btn btn-success w-100" onClick={updateChanges}>Update Activity</button>
            }
          </div>
          <div className="col-6 container-fluid">
            <table className="table table-striped table-border">
              <thead className="border">
                <tr className="border">
                  <td className="border">S/N</td>
                  <td className="border">Activity</td>
                  <td className="border">Status</td>
                  <td className="border">Actions</td>
                </tr>
              </thead>
              <tbody className="border">
                {activities.map((val, i)=> (
                  <tr className="border" key={i}>
                    <td className="border">{i+1}</td>
                    <td className="border" style={{textDecoration: !val.completed ? "none" : "line-through"}} >{val.name}</td>
                    <td className="border"> <button className="btn btn-success" onClick={() => handleComplete(i)}>Complete</button> </td>
                    <td className="border"> <button className="btn btn-warning" onClick={ () => handleEdit(i)}>Edit</button> <button className="btn btn-danger" onClick={() => handleDelete(i)}>Delete</button> </td>
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