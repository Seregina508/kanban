// import React from 'react';
// import FileLoader from "../Utils/FileLoader";
// import StatusColumns from "./StatusColumns";
//
//
// const Kanban = ({statuses, tasks, isLoader, isStatusesLoader, statusesError, tasksError, isTaskLoader}) => {
//     if (isLoader || isTaskLoader) return <FileLoader/>
//     if(statusesError || tasksError) return <h2>{tasksError}</h2>
//     return (
//         <div>
//
//             <div className="container text-center">
//                 <div className="row align-items-start">
//                     {statuses.map(status =>
//                         <StatusColumns
//                             status={status}
//                             tasks={tasks}
//                         />
//                     )}
//
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Kanban;



//part 3
// import React from 'react';
// import FileLoader from "../Utils/FileLoader";
// import StatusColumns from "./StatusColumns";
//
//
// const Kanban = ({statuses, tasks, isLoader, isStatusesLoader, statusesError, tasksError, isTaskLoader}) => {
//     if (isLoader || isTaskLoader) return <FileLoader/>
//     if(statusesError) return <h2>{statusesError}</h2>
//     if(tasksError) return <h2>{tasksError}</h2>
//     return (
//         <div>
//
//             <div className="container text-center">
//                 <div className="row align-items-start">
//                     {statuses.map((status) =>
//                         <StatusColumns
//                             status={status}
//                             tasks={tasks}
//                             key={status._id}
//                         />
//                     )}
//
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Kanban;



//07.12
// import React from 'react';
// import FileLoader from "../Utils/FileLoader";
// import StatusColumns from "./StatusColumns";
//
//
// const Kanban = ({statuses, tasks, isLoader, isStatusesLoader, statusesError, tasksError, isTaskLoader}) => {
//     if (isLoader || isTaskLoader) return <FileLoader/>
//     if(tasksError) return <h2>{tasksError}</h2>
//     if(statusesError) return <h2>{statusesError}</h2>
//     return (
//         <div>
//
//             <div className="container text-center">
//                 <div className="row align-items-start">
//                     {statuses.map((status) =>
//                         <StatusColumns
//                             key={status._id}
//                             status={status}
//                             tasks={tasks}
//                         />
//                     )}
//
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Kanban;



// 07.15
// import React from 'react';
// import FileLoader from "../Utils/FileLoader";
// import StatusColumns from "./StatusColumns";
//
//
// const Kanban = ({setOpenModal, statuses, tasks, isLoader, isStatusesLoader, statusesError, tasksError, isTaskLoader, changePriority}) => {
//     if (isLoader || isTaskLoader) return <FileLoader/>
//     if(tasksError) return <h2>{tasksError}</h2>
//     if(statusesError) return <h2>{statusesError}</h2>
//     return (
//         <div>
//
//             <div className="container text-center">
//                 <div className="row align-items-start">
//                     {statuses.map((status) =>
//                         <StatusColumns
//                             key={status._id}
//                             status={status}
//                             tasks={tasks}
//                             changePriority={changePriority}
//                             setOpenModal={setOpenModal}
//                         />
//                     )}
//
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Kanban;




//================================
//07.15 repeat
// import React from 'react';
// import FileLoader from "../Utils/FileLoader";
// import StatusColumns from "./StatusColumns";
//
//
// const Kanban = ({statuses, tasks, isLoader, isStatusesLoader, statusesError, tasksError, isTaskLoader}) => {
//     if (isLoader || isTaskLoader) return <FileLoader/>
//     if(statusesError) return <h2>{statusesError}</h2>
//     if(tasksError) return <h2>{tasksError}</h2>
//     return (
//         <div>
//
//             <div className="container text-center">
//                 <div className="row align-items-start">
//                     {statuses.map((status) =>
//                         <StatusColumns
//                             status={status}
//                             tasks={tasks}
//                             key={status._id}
//                         />
//                     )}
//
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Kanban;





//Kanban

import React from 'react';
import FileLoader from "../Utils/FileLoader";
import StatusColumns from "./StatusColumns";


const Kanban = ({statuses, tasks, isLoader, statusesError, tasksError,
                    isTaskLoader, changePriority, setOpenModal, changeStatus, priorities, editTask}) => {
    if (isLoader || isTaskLoader) return <FileLoader/>
    if(tasksError) return <h2>{tasksError}</h2>
    if(statusesError) return <h2>{statusesError}</h2>
    return (
        <div>

            <div className="container text-center">
                <div className="row align-items-start">
                    {statuses.map((status) =>
                        <StatusColumns
                            key={status._id}
                            status={status}
                            tasks={tasks}
                            changePriority={changePriority}
                            setOpenModal={setOpenModal}
                            changeStatus={changeStatus}
                            statuses={statuses}
                            priorities={priorities}
                            editTask={editTask}
                        />
                    )}

                </div>
            </div>
        </div>
    );
};

export default Kanban;