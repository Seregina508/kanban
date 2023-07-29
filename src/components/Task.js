// import React, {useState} from 'react';
//
// const Task = (props) => {
//
//     const [openEditMode, setOpenEditMode] = useState(false);
//     const [name, setName] = useState(props.task.name)
//
//     const toggle = () => {
//         setOpenEditMode(!openEditMode)
//     }
//
//     const saveButtonHandler = () => {
//         props.editTask(props.task._id, name)
//         toggle()
//     }
//
//     return (
//         <div className='col'>
//             {props.task.name}
//             {' '}
//             {!openEditMode ?
//                 <>
//                     <button onClick={toggle}>Edit</button>
//                     <button onClick={() => props.deleteTask(props.task._id)}>Delete</button>
//                 </> :
//                 <>
//                     <input type="text" value={props.task.name} onChange={e => setName(e.target.value)}/>
//                     <button onClick={saveButtonHandler}>Save</button>
//                     <button onClick={toggle}>Cancel</button>
//                 </>
//             }
//         </div>
//     );
// };
//
// export default Task;


// import React, {useState} from 'react';
//
// const Task = (props) => {
//
//     const [openEditMode, setOpenEditMode] = useState(false);
//     const [name, setName] = useState(props.task.name)
//
//     const toggle = () => {
//         setOpenEditMode(!openEditMode)
//     }
//
//     const saveButtonHandler = () => {
//         props.editTask(props.task._id, name)
//         toggle()
//     }
//
//     return (
//         <div className='col'>
//             {props.task.name}
//             {' '}
//             {!openEditMode ?
//                 <>
//                     <button onClick={toggle}>Edit</button>
//                     <button onClick={() => props.deleteTask(props.task._id)}>Delete</button>
//                 </> :
//                 <>
//                     <input type="text" value={props.task.name} onChange={e => setName(e.target.value)}/>
//                     <button onClick={saveButtonHandler}>Save</button>
//                     <button onClick={toggle}>Cancel</button>
//                 </>
//             }
//         </div>
//     );
// };
//
// export default Task;


// import React, {useState} from 'react';
//
// const Task = (props) => {
//
//     const [openEditMode, setOpenEditMode] = useState(false);
//     const [name, setName] = useState(props.task.name)
//
//     const toggle = () => {
//         setOpenEditMode(!openEditMode)
//     }
//
//     const saveButtonHandler = () => {
//         props.editTask(props.task._id, name)
//         toggle()
//     }
//
//     return (
//         <div className='col'>
//             {props.task.name}
//             {' '}
//             {!openEditMode ?
//                 <>
//                     <button onClick={toggle}>Edit</button>
//                     <button onClick={() => props.deleteTask(props.task._id)}>Delete</button>
//                 </> :
//                 <>
//                     <input type="text" value={props.task.name} onChange={e => setName(e.target.value)}/>
//                     <button onClick={saveButtonHandler}>Save</button>
//                     <button onClick={toggle}>Cancel</button>
//                 </>
//             }
//         </div>
//     );
// };
//
// export default Task;

//-------------------------------------
// import React from 'react';
//
// const Task = ({task}) => {
//     return (
//         <div className="card">
//             <div className="card-header">
//                 Priority: {task.priority}
//             </div>
//             <div className="card-body">
//                 <h5 className="card-title">{task.name}</h5>
//                 <p className="card-text">{task.description}</p>
//                 <a href="#" className="btn btn-primary">Update</a>
//             </div>
//         </div>
//     );
// };
//
// export default Task;


//part 3
// import React from 'react';
//
// const Task = ({task}) => {
//     return (
//         <div className="card">
//             <div className="card-header">
//                 Priority: {task.priority}
//             </div>
//             <div className="card-body">
//                 <h5 className="card-title">{task.name}</h5>
//                 <p className="card-text">{task.description}</p>
//                 <a href="#" className="btn btn-primary">Update</a>
//             </div>
//         </div>
//     );
// };
//
// export default Task;


//07.12
// import React from 'react';
//
// const Task = ({task}) => {
//     return (
//         <div className="card">
//             <div className="card-header">
//                 Priority: {task.priority}
//             </div>
//             <div className="card-body">
//                 <h5 className="card-title">{task.name}</h5>
//                 <p className="card-text">{task.description}</p>
//                 <a href="#" className="btn btn-primary">Update</a>
//             </div>
//         </div>
//     );
// };
//
// export default Task;


//07.15
// import React from 'react';
//
// const Task = ({task, changePriority, setOpenModal}) => {
//     return (
//         <div className="card">
//             <div className="card-header">
//                 Priority: {task.priority}
//                 <button className="btn btn-outline-success btn-sm"
//                         onClick={() => changePriority(task._id, {priority: +task.priority + 1})}
//                 >↑
//                 </button>
//
//                 <button className="btn btn-outline-success btn-sm"
//                         onClick={() => changePriority(task._id, {priority: +task.priority - 1})}
//                 >↓
//                 </button>
//             </div>
//             <div className="card-body">
//                 <h5 className="card-title">{task.name}</h5>
//                 <p className="card-text">{task.description}</p>
//                 <div>
//
//                 <a href="#" className="btn btn-outline-primary">Update</a>
//                 <button className="btn btn-outline-danger"
//                 onClick={() => setOpenModal({
//                     isOpen: true,
//                     mode: "delete",
//                     data: task
//                 })}>Delete</button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Task;


//==============================
//07.15 repeat
// import React from 'react';
//
// const Task = ({task}) => {
//     return (
//         <div className="card">
//             <div className="card-header">
//                 Priority: {task.priority}
//             </div>
//             <div className="card-body">
//                 <h5 className="card-title">{task.name}</h5>
//                 <p className="card-text">{task.description}</p>
//                 <a href="#" className="btn btn-primary">Update</a>
//             </div>
//         </div>
//     );
// };
//
// export default Task;


import React from 'react';
import UpdateModal from "./UpdateModal";

const Task = ({task, changePriority, setOpenModal, changeStatus, statuses, priorities, editTask}) => {
    return (
        <div className="card">
            <div className="card-header">
                Priority: {task.priority}
                <div>
                    <button className="btn btn-outline-success btn-sm"
                            onClick={() => changePriority(task._id, {priority: +task.priority + 1})}
                    >↑
                    </button>

                    <button className="btn btn-outline-success btn-sm"
                            onClick={() => changePriority(task._id, {priority: +task.priority - 1})}
                    >↓
                    </button>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{task.name}</h5>

                <p className="card-text">{task.description}</p>
                <div style={{marginBottom: "4px"}}>

                    <button className="btn btn-outline-success"
                            disabled={statuses[0].title === task.status}
                            onClick={() => changeStatus(task._id, task.status, -1)}
                    >←
                    </button>
                    <button className="btn btn-outline-success"
                            onClick={() => changeStatus(task._id, task.status, 1)}
                            disabled={statuses[statuses.length -1].title ===task.status}
                    >→</button>
                </div>

                <UpdateModal
                    statuses={statuses}
                    priorities={priorities}
                    task={task}
                    editTask={editTask}
                />
                <button className="btn btn-outline-danger"
                        onClick={() => setOpenModal({
                            isOpen: true,
                            mode: "delete",
                            data: task,
                        })}
                >
                    Delete
                </button>


            </div>
        </div>
    );
};

export default Task;