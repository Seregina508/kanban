// import './App.css';
// import {useEffect, useState} from "react";
// import axios from "axios";
// import Task from "./Task";
// import CreateNewTask from "./CreateNewTask";
// import 'bootstrap/dist/css/bootstrap.min.css'
//
// function App() {
//
//     const [tasks, setTasks] = useState([]);
//     const [statuses, setStatuses] = useState([])
//
//
//     const getTasks = () => {
//         axios.get('https:expressjs-server.vercel.app/tasks')
//             .then(response => {
//                 console.log(response)
//                 console.log(response.data)
//                 setTasks(response.data)
//             })
//             .catch(error => {
//                 console.log(error)
//                 alert("Something went wrong, try again later")
//             })
//     }
//
//     useEffect(() => {
//         getTasks()
//     }, [])
//
//     const deleteTask = (id) => {
//         axios.delete(`https:expressjs-server.vercel.app/tasks/${id}`)
//             .then(res => {
//                 console.log(res)
//                 getTasks()
//             })
//             .catch(err => alert("Something went wrong, try again later"))
//     }
//
//     const createTask = (name) => {
//         const newTask = {
//             name: name,
//             description: "some description",
//             status: '1',
//             priority: 'todo'
//         };
//         axios.post(`https:expressjs-server.vercel.app/tasks`, newTask)
//             .then(res => getTasks())
//             .catch(err => alert("Something went wrong, try again later"))
//     }
//
//     const editTask = (id, newName) => {
//         axios.patch(`https:expressjs-server.vercel.app/tasks/${id}`, {name: newName})
//             .then(res => getTasks())
//             .catch(err => alert("Something went wrong, try again later"))
//     }
//
//     return (
//         <div className="App">
//
//             <h1>Kanban board</h1>
//
//
//             {tasks.map((task, id) =>
//                 <Task task={task} key={task.id}
//                       deleteTask={deleteTask}
//                       _id={id}
//                       editTask={editTask}
//                 />
//             )}
//
//             <CreateNewTask createTask={createTask}/>
//

//         </div>
//     );
// }
//
// export default App;
//https://expressjs-server.vercel.app/tasks
// https://expressjs-server.vercel.app/statuses


// import './App.css';
// import {useEffect, useState} from "react";
// import axios from "axios";
// import Task from "./Task";
// import CreateNewTask from "./CreateNewTask";
// import 'bootstrap/dist/css/bootstrap.min.css'
//
// function App() {
//
//     const [tasks, setTasks] = useState([]);
//     const [statuses, setStatuses] = useState([])
//
//
//     const getTasks = () => {
//         axios.get('https:expressjs-server.vercel.app/tasks')
//             .then(response => {
//                 console.log(response)
//                 console.log(response.data)
//                 setTasks(response.data)
//             })
//             .catch(error => {
//                 console.log(error)
//                 alert("Something went wrong, try again later")
//             })
//     }
//
//     useEffect(() => {
//         getTasks()
//     }, [])
//
//     const deleteTask = (id) => {
//         axios.delete(`https:expressjs-server.vercel.app/tasks/${id}`)
//             .then(res => {
//                 console.log(res)
//                 getTasks()
//             })
//             .catch(err => alert("Something went wrong, try again later"))
//     }
//
//     const createTask = (name) => {
//         const newTask = {
//             name: name,
//             description: "some description",
//             status: '1',
//             priority: 'todo'
//         };
//         axios.post(`https:expressjs-server.vercel.app/tasks`, newTask)
//             .then(res => getTasks())
//             .catch(err => alert("Something went wrong, try again later"))
//     }
//
//     const editTask = (id, newName) => {
//         axios.patch(`https:expressjs-server.vercel.app/tasks/${id}`, {name: newName})
//             .then(res => getTasks())
//             .catch(err => alert("Something went wrong, try again later"))
//     }
//
//     return (
//         <div className="App">
//
//             <h1>Kanban board</h1>
//
//             {/*<div className="container text-center">*/}
//             {/*    <div className="row align-items-start">*/}
//
//             {tasks.map((task, id) =>
//                 <Task task={task} key={task.id}
//                       deleteTask={deleteTask}
//                       _id={id}
//                       editTask={editTask}
//                 />
//             )}
//
//             <CreateNewTask createTask={createTask}/>
//
//             {/*        </div>*/}
//             {/*</div>*/}
//         </div>
//     );
// }
//
// export default App;

// import React, {useEffect, useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
// import Kanban from "./components/Kanban";
// import {fetchStatuses} from "./api/StatusesServeses";
// import {fetchTasks} from "./api/TasksServeses";
// import useFetching from "./hooks/useFetching";
//
//
// const App = () => {
//
//     const [tasks, setTasks] = useState([]);
//     const [statuses, setStatuses] = useState([]);
//
//
// const [getStatuses, isStatusesLoader, statusesError] = useFetching(async () => {
//     const res = await fetchStatuses()
//     setStatuses(res.data)
// })
//
//     const [getTasks, isTaskLoader, tasksError] = useFetching(async () => {
//         const res = await fetchTasks()
//         setTasks(res.data)
//     })
//
//     useEffect(() => {
//         getStatuses();
//         getTasks()
//     }, [])
//
//
//     return (
//         <div className="App">
//             <h1>Kanban Board</h1>
//            <Kanban isStatusesLoader={isStatusesLoader}
//                    statusesError={statusesError}
//                    isTaskLoader={isTaskLoader}
//                    tasksError={tasksError}
//                    statuses={statuses}
//                    tasks={tasks}
//            />
//         </div>
//     );
// };
//
// export default App;


// import React, {useEffect, useState} from 'react';
// import FileLoader from "./Utils/FileLoader";
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
// import CreateNewTask from "./CreateNewTask";
//
//
// const App = () => {
//
//     const [tasks, setTasks] = useState([]);
//     const [statuses, setStatuses] = useState([]);
//     const [isLoader, setIsLoader] = useState(false);
//
//     const getStatuses = () => {
//         setIsLoader(true);
//         axios.get(`https://expressjs-server.vercel.app/statuses`)
//             .then(response => {
//                 setStatuses(response.data)
//             })
//             .catch(err => {
//                 console.log(err)
//                 alert("Something went wrong, try again later")
//             })
//             .finally(() => setIsLoader(false))
//     }
//
//     const getTasks = async () => {
//         try {
//             const response = await axios.get(`https://expressjs-server.vercel.app/tasks`)
//             console.log(response)
//             setTasks(response.data)
//         } catch (err) {
//             alert("Something went wrong, try again later")
//         } finally {
//         }
//     }
//
//     const deleteTask = (id) => {
//         axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
//             .then(res => {
//                 console.log(res)
//                 getTasks()
//             })
//             .catch(err => alert("Something get wrong, try again later"))
//     }
//
//     useEffect(() => {
//         getStatuses();
//         getTasks()
//     }, [])
//
//     const creteNewTask = (name) => {
//         const newTask = {
//             name: name,
//             description: "some description",
//             status: "1",
//             priority: "todo",
//         };
//         axios.post(`https://expressjs-server.vercel.app/tasks`, newTask)
//             .then(res => getTasks())
//             .catch(err => alert("Something get wrong, try again later"))
//     }
//
//
//     return (
//         <div className="App">
//
//             <h1>Kanban Board</h1>
//             <CreateNewTask creteNewTask={creteNewTask}/>
//             {isLoader && <FileLoader/>}
//
//             <div className="container text-center">
//                 <div className="row align-items-start">
//                     {statuses.map(status =>
//
//                         <div className="col">
//                             <h3>{status.title}</h3>
//
//                             {tasks.filter(task => task.status === status.title).map(task =>
//                                 <div className="card">
//                                     <div className="card-header">
//                                         Priority: {task.priority}
//                                         <button className="btn btn-outline-primary">↑</button>
//                                         <button className="btn btn-outline-primary">↓</button>
//                                     </div>
//                                     <div className="card-body">
//                                         <h5 className="card-title">{task.name}</h5>
//                                         <p className="card-text">{task.description}</p>
//                                         <a href="#" className="btn btn-outline-warning">Update</a>
//                                     </div>
//                                     <div>
//                                         <button className="btn btn-outline-primary">←</button>
//                                         <button className="btn btn-outline-danger"
//                                         onClick={() => deleteTask(task._id)}
//                                         >Delete</button>
//                                         <button className="btn btn-outline-primary">→</button>
//                                     </div>
//                                 </div>
//                             )}
//
//                         </div>
//                     )}
//
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;


//part 3 07.08


// import React, {useEffect, useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
// import Kanban from "./components/Kanban";
// import {fetchStatuses} from "./api/StatusesServeses";
// import {fetchTasks} from "./api/TasksServeses";
// import useFetching from "./hooks/useFetching";
// import MyModal from "./components/ui/MyModal";
// import CreateModal from "./components/CreateModal";
//
//
// const App = () => {
//
//     const [tasks, setTasks] = useState([]);
//     const [statuses, setStatuses] = useState([]);
//     const [openModal, setOpenModal] = useState(false)
//
//
//     const [getStatuses, isStatusesLoader, statusesError] = useFetching(async () => {
//         const res = await fetchStatuses()
//         setStatuses(res.data)
//     })
//
//     const [getTasks, isTaskLoader, tasksError] = useFetching(async () => {
//         const res = await fetchTasks()
//         setTasks(res.data)
//     })
//
//     const priorities = [1, 2, 3, 4, 5, 6]
//
//     useEffect(() => {
//         getStatuses();
//         getTasks()
//     }, [])
//
//
//     return (
//         <div className="App">
//             <h1>Kanban Board</h1>
//
//             <button type="button"  className='btn btn-secondary' onClick={() => setOpenModal(true)}> Create new task </button>
//
//             <Kanban isStatusesLoader={isStatusesLoader}
//                     statusesError={statusesError}
//                     isTaskLoader={isTaskLoader}
//                     tasksError={tasksError}
//                     statuses={statuses}
//                     tasks={tasks}
//             />
//
//             <MyModal
//                 openModal={openModal}
//                 setOpenModal={setOpenModal}
//             > <CreateModal priorities={priorities}/> </MyModal>
//         </div>
//     );
// };
//
// export default App;


// import React, {useEffect, useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
// import Kanban from "./components/Kanban";
// import {fetchStatuses} from "./api/StatusesServeses";
// import {fetchTasks, postTask} from "./api/TasksServeses";
// import useFetching from "./hooks/useFetching";
// import MyModal from "./components/ui/Modal/MyModal";
// import CreateModal from "./components/CreateModal";
//
//
// const App = () => {
//
//     const [tasks, setTasks] = useState([]);
//     const [statuses, setStatuses] = useState([]);
//
//
//     const [getStatuses, isStatusesLoader, statusesError] = useFetching(async () => {
//         const res = await fetchStatuses()
//         setStatuses(res.data)
//     })
//
//     const [getTasks, isTaskLoader, tasksError] = useFetching(async () => {
//         const res = await fetchTasks()
//         setTasks(res.data)
//     })
//
//     const [openModal, setOpenModal] = useState(false);
//
//     useEffect(() => {
//         getStatuses();
//         getTasks()
//     }, [])
//
//     const priorities = [1, 2, 3, 4, 5, 6];
//
//     const createTask = async (newTask) => {
//         try {
//             await postTask(newTask);
//             await getTasks();
//         }
//         catch (err) {
//             alert("Something went wrong")
//         }
//     }
//
//
//     return (
//         <div className="App">
//             <h1>Kanban Board</h1>
//
//             <button type="button" className="btn btn-secondary" onClick={() => setOpenModal(true)}>Create New Task
//             </button>
//
//             <Kanban isStatusesLoader={isStatusesLoader}
//                     statusesError={statusesError}
//                     isTaskLoader={isTaskLoader}
//                     tasksError={tasksError}
//                     statuses={statuses}
//                     tasks={tasks}
//             />
//
//             <MyModal
//                 openModal={openModal}
//                 setOpenModal={setOpenModal}
//             >
//                 <CreateModal priorities={priorities}
//                              statuses={statuses}
//                              createTask={createTask}
//                              setOpenModal={setOpenModal}
//                 />
//             </MyModal>
//         </div>
//     );
// };
//
// export default App;


//07.15 ----------
// import React, {useEffect, useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
// import Kanban from "./components/Kanban";
// import {fetchStatuses} from "./api/StatusesServeses";
// import {fetchTasks, postTask, updateTask} from "./api/TasksServeses";
// import useFetching from "./hooks/useFetching";
// import MyModal from "./components/ui/Modal/MyModal";
// import CreateModal from "./components/CreateModal";
// import DeleteModal from "./components/DeleteModal";
//
//
// const App = () => {
//
//     const isModalOpenInitialState = {
//         isOpen: false,
//         mode: null,
//         data: null
//     }
//
//     const [tasks, setTasks] = useState([]);
//     const [statuses, setStatuses] = useState([]);
//
//
//     const [getStatuses, isStatusesLoader, statusesError] = useFetching(async () => {
//         const res = await fetchStatuses()
//         setStatuses(res.data)
//     })
//
//     const [getTasks, isTaskLoader, tasksError] = useFetching(async () => {
//         const res = await fetchTasks()
//         setTasks(res.data)
//     })
//
//     const [openModal, setOpenModal] = useState(isModalOpenInitialState);
//
//     useEffect(() => {
//         getStatuses();
//         getTasks()
//     }, [])
//
//     const priorities = [1, 2, 3, 4, 5, 6];
//
//     const createTask = async (newTask) => {
//         try {
//             await postTask(newTask);
//             await getTasks();
//         }
//         catch (err) {
//             alert("Something went wrong")
//         }
//     }
//
//
//     const changePriority = async (id, updatedTask) => {
//         try {
//             await updateTask(id, updatedTask);
//             await getTasks();
//         }
//         catch (err) {
//             alert(err);
//         }
//     }
//
//
//     return (
//         <div className="App">
//             <h1>Kanban Board</h1>
//
//             <button type="button" className="btn btn-secondary"
//                     onClick={() => setOpenModal({
//                         isOpen: false,
//                         mode: "create",
//                         data: null
//                     })}
//             >Create New Task
//             </button>
//
//             <Kanban isStatusesLoader={isStatusesLoader}
//                     statusesError={statusesError}
//                     isTaskLoader={isTaskLoader}
//                     tasksError={tasksError}
//                     statuses={statuses}
//                     tasks={tasks}
//                     changePriority={changePriority}
//                     setOpenModal={setOpenModal}
//             />
//
//             <MyModal
//                 openModal={openModal}
//                 setOpenModal={setOpenModal}
//             >
//                 <CreateModal priorities={priorities}
//                              statuses={statuses}
//                              createTask={createTask}
//                              setOpenModal={setOpenModal}
//                 />
//
//                 <DeleteModal
//
//                 />
//             </MyModal>
//         </div>
//     );
// };
//
// export default App;


//===========================
//07.15 repeat----
// import React, {useEffect, useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
// import Kanban from "./components/Kanban";
// import {fetchStatuses} from "./api/StatusesServeses";
// import {fetchTasks} from "./api/TasksServeses";
// import useFetching from "./hooks/useFetching";
// import MyModal from "./components/ui/Modal/MyModal";
// import CreateModal from "./components/CreateModal";
//
//
// const App = () => {
//
//     const [tasks, setTasks] = useState([]);
//     const [statuses, setStatuses] = useState([]);
//     const [openModal, setOpenModal] = useState(false)
//
//
//     const [getStatuses, isStatusesLoader, statusesError] = useFetching(async () => {
//         const res = await fetchStatuses()
//         setStatuses(res.data)
//     })
//
//     const [getTasks, isTaskLoader, tasksError] = useFetching(async () => {
//         const res = await fetchTasks()
//         setTasks(res.data)
//     })
//
//     const priorities = [1, 2, 3, 4, 5, 6]
//
//     useEffect(() => {
//         getStatuses();
//         getTasks()
//     }, [])
//
//
//     return (
//         <div className="App">
//             <h1>Kanban Board</h1>
//
//             <button type="button"  className='btn btn-secondary' onClick={() => setOpenModal(true)}> Create new task </button>
//
//             <Kanban isStatusesLoader={isStatusesLoader}
//                     statusesError={statusesError}
//                     isTaskLoader={isTaskLoader}
//                     tasksError={tasksError}
//                     statuses={statuses}
//                     tasks={tasks}
//             />
//
//             <MyModal
//                 openModal={openModal}
//                 setOpenModal={setOpenModal}
//             > <CreateModal
//                 priorities={priorities}
//                 statuses={statuses}
//             />
//             </MyModal>
//         </div>
//     );
// };
//
// export default App;


import React, {useEffect, useMemo, useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Kanban from "./components/Kanban";
import { fetchStatuses } from "./api/StatusesServeses";
import { deleteTask, fetchTasks, postTask, updateTask } from "./api/TasksServeses";
import useFetching from "./hooks/useFetching";
import MyModal from "./components/ui/Modal/MyModal";
import CreateModal from "./components/CreateModal";
import DeleteModal from "./components/DeleteModal";
import MyInput from "./components/ui/Input/MyInput"
import {useSearch} from "./hooks/useSearch";



const App = () => {

    const openModalInitialState = {
        isOpen: false,
        mode: null,
        data: null,
    }

    const [tasks, setTasks] = useState([]);
    const [statuses, setStatuses] = useState([]);


    const [getStatuses, isStatusesLoader, statusesError] = useFetching(async () => {
        const res = await fetchStatuses()
        setStatuses(res.data);
    })

    const [getTasks, isTaskLoader, tasksError] = useFetching(async () => {
        const res = await fetchTasks()
        setTasks(res.data)
    })

    const [openModal, setOpenModal] = useState(openModalInitialState);  //modalState

    const [searchQuery, setSearchQuery] = useState('');

    const searchedTasks = useSearch(tasks, searchQuery)

    // const searchedTasks = useMemo(() =>
    //     searchTasks()
    // , [searchQuery, tasks]);

    useEffect(() => {
        getStatuses();
        getTasks()
    }, [])

    const priorities = [1, 2, 3, 4, 5, 6];

    const createTask = async (newTask) => {
        try {
            await postTask(newTask);
            await getTasks();
        } catch (err) {
            alert("Unable to add a new task")
        }
    }

    const changePriority = async (id, updatedTask) => {
        try {
            await updateTask(id, updatedTask);
            await getTasks();
        } catch (err) {
            alert("task wasn't updated");
        }
    }

    const editTask = async (id, updatedTask) => {
        try {
            await updateTask(id, updatedTask);
            await getTasks();
        } catch (err) {
            alert("task wasn't edited");
        }
    }

    const removeTask = async (id) => {
        try {
            await deleteTask(id);
            await getTasks();
        } catch (err) {
            alert("task wasn't deleted");
        }
    }

    // const changeStatus = async (id, status, direction) => {
    //     const statusesArr = statuses.map(status => status.title)
    //     const currIndex = statusesArr.indexOf(status)
    //     const newStatus = statusesArr[currIndex + direction]
    //     try {
    //         await changeStatuses(id, {status: newStatus})
    //         await getStatuses();
    //     } catch (err) {
    //         alert("status wasn't changed")
    //     }
    // }


    const changeStatus = async (id, status, direction) => {
        const statusesArray = statuses.map(status => status.title)
        const oldStatusIndex = statusesArray.indexOf(status)
        const newStatusIndex = oldStatusIndex + direction
        const updatedTask = {status: statusesArray[newStatusIndex]}
        try {
            await updateTask(id, updatedTask)
            await getTasks()

        } catch (err) {
            alert("status wasn't changed")
        }
    }

    return (
        <div className="App">
            <h1>Kanban Board</h1>

            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                padding: "0 30px"
            }}>

            <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setOpenModal({
                    isOpen: true,
                    mode: "create",
                    data: null,
                })}
            >
                Create New Task
            </button>

            {/*<Input type="text" placeholder="Find Task" value={searchQuery} onChange={(e) =>*/}
            {/*    setSearchQuery(e.target.value)}*/}
            {/*/>*/}

            <MyInput
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            </div>

            <Kanban
                isStatusesLoader={isStatusesLoader}
                statusesError={statusesError}
                isTaskLoader={isTaskLoader}
                tasksError={tasksError}
                statuses={statuses}
                tasks={searchedTasks}
                changePriority={changePriority}
                setOpenModal={setOpenModal}
                changeStatus={changeStatus}
                priorities={priorities}
                editTask={editTask}
            />

            <MyModal
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
                <CreateModal
                    priorities={priorities}
                    statuses={statuses}
                    createTask={createTask}
                    setOpenModal={setOpenModal}
                />

                <DeleteModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    removeTask={removeTask}
                />
            </MyModal>
        </div>
    );
};

export default App;




