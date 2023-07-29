// import React from 'react';
// import Task from "./Task";
//
// const StatusColumns = ({status, tasks}) => {
//     return (
//         <div className="col">
//             <h3>{status.title}</h3>
//
//             {tasks.filter(task => task.status === status.title).map(task =>
//                 <Task task={task}/>
//             )}
//
//         </div>
//     );
// };
//
// export default StatusColumns;


//part 3
// import React from 'react';
// import Task from "./Task";
//
// const StatusColumns = ({status, tasks}) => {
//     return (
//         <div className="col">
//             <h3>{status.title}</h3>
//
//             {tasks.filter(task => task.status === status.title).map((task) =>
//                 <Task task={task}
//                 key={task._id}
//                 />
//             )}
//
//         </div>
//     );
// };
//
// export default StatusColumns;



//07.12
// import React from 'react';
// import Task from "./Task";
//
// const StatusColumns = ({status, tasks}) => {
//     return (
//         <div className="col">
//             <h3>{status.title}</h3>
//
//             {tasks.filter(task => task.status === status.title).map(task =>
//                 <Task key={task._id} task={task}/>
//             )}
//
//         </div>
//     );
// };
//
// export default StatusColumns;




//07.15
// import React from 'react';
// import Task from "./Task";
//
// const StatusColumns = ({status, tasks, changePriority}, setOpenModal) => {
//     return (
//         <div className="col">
//             <h3>{status.title}</h3>
//
//             {tasks.filter(task => task.status === status.title).map(task =>
//                 <Task key={task._id}
//                       task={task}
//                       changePriority={changePriority}
//                       setOpenModal={setOpenModal}
//                 />
//             )}
//
//         </div>
//     );
// };
//
// export default StatusColumns;




//================================
//07.15 repeat
// import React from 'react';
// import Task from "./Task";
//
// const StatusColumns = ({status, tasks}) => {
//     return (
//         <div className="col">
//             <h3>{status.title}</h3>
//
//             {tasks.filter(task => task.status === status.title).map((task) =>
//                 <Task task={task}
//                 key={task._id}
//                 />
//             )}
//
//         </div>
//     );
// };
//
// export default StatusColumns;





import React from 'react';
import Task from "./Task";

const StatusColumns = ({status, tasks, changePriority, setOpenModal, changeStatus, statuses, priorities, editTask}) => {
    return (
        <div className="col">
            <h3>{status.title}</h3>

            {tasks.filter(task => task.status === status.title).sort().map(task =>
                <Task key={task._id}
                      task={task}
                      changePriority={changePriority}
                      setOpenModal={setOpenModal}
                      changeStatus={changeStatus}
                      status={status}
                      statuses={statuses}
                      priorities={priorities}
                      editTask={editTask}
                />
            )}

        </div>
    );
};

export default StatusColumns;