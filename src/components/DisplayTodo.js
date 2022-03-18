import Button from "./Button";

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
                          <td> <Button name="Complete" handle={() => completeTask(i)} color="success" /> </td>
                          <td> <Button name="Edit" handle={() => editTask(i)} color="success" /> </td>
                          <td> <Button name="Delete" handle={() => deleteTask(i)} color="success" /> </td>
                      </tr>
                  ))}
              </tbody>
            </table>
        </>
    )
}

export default DisplayTodo;