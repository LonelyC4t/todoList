import Task from "./task";
import "./taskList.css";
import PropTypes from "prop-types";

const TaskList = ({todos, deleteTask, completeTask, stateFilter}) => {
    
    TaskList.defaultProps = {
        todos: {},
        completeTask: () => {},
        deleteTask: () => {},
        stateFilter: undefined,
    };

    TaskList.propTypes = {
        todos: PropTypes.arrayOf(PropTypes.object).isRequired,
        completeTask: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired,
        stateFilter: PropTypes.oneOf([true, false, undefined]),
    };

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
