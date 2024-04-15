import "./task.css"

const Task = ({todos, completeTask, deleteTask}) => {
   

    return (
        <>     
            <div className="view"> 
                <input type="chekbox" className="toggle"/>
                <label htmlFor="">
                    <span onClick={completeTask} className="description">{todos.label}</span>
                    <span className="created">created 17 seconds ago</span>
                </label>
                <button  className="icon icon-edit"></button>
                <button onClick = {deleteTask} className="icon icon-destroy"></button>
            </div>
            {/* <input type="text" className="edit" defaultValue={"Editing Task"} /> */}
        </>

    )
};

export default Task;