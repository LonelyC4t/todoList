import Task from "./task";
import "./taskList.css"

const TaskList = ({todos, deleteTask, completeTask, stateFilter}) => {
    
    console.log(stateFilter);
    let elementTask = todos.filter((el) => {

        if (stateFilter === true) {
            return !el.done;
        } else if (stateFilter === false) {
            return el.done;
        } else {
            return el;
        }
        
    }).map((el) => {
        return (
            <li  className = {el.done ? "completed" : "active"} key = {el.id}>
                <Task 
                deleteTask = { () => deleteTask(el.id)} 
                completeTask = { () => completeTask(el.id) } todos={el}
                />
            </li>
        );
    });

    return (
        <ul className="todo-list">        
            {elementTask}  
        </ul>
    );
};

export default TaskList;
