import Button from "./Button";
import completeImg from '../assets/icons8_Ok.ico';
import editImg from '../assets/edit.ico';
import deleteImg from '../assets/delete.ico';
import pinImg from '../assets/pin.ico';

const DisplayTodo = ({allActivities, completeTask, editTask, deleteTask}) => {
    return (
        <>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <td>S/N</td>
                  <td>Activity</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                  {allActivities.map((val, i) => (
                      <tr key={i}>
                          <td>{i+1}</td>
                          <td style={{textDecoration: val.completed ? "line-through" : "none"}}>{val.name}</td>
                          <td> <img className="pointer" src={completeImg} alt="complete" title="Complete" onClick={() => completeTask(i)}/> 
                          <img className="pointer mx-3" alt="edit" src={editImg} title="Edit" onClick={() => editTask(i)}/>
                          <img className="pointer mx-3" src={deleteImg} alt="delete" title="Delete" onCLick={() => deleteTask(i)}/> </td>
                      </tr>
                  ))}
              </tbody>
            </table>
        </>
    )
}

export default DisplayTodo;