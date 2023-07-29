//part 3

// import React from 'react';
//
// const CreateModal = ({priorities}) => {
//     return (
//         <div>
//             <h3>Create new task</h3>
//             <div className="input-group flex-nowrap">
//                 <input type="text" className="form-control" placeholder="Task Name" aria-label="Taskname"
//                        aria-describedby="addon-wrapping"/>
//
//             </div>
//
//             <div className="input-group flex-nowrap">
//                 <input type="text" className="form-control" placeholder="Description" aria-label="Description"
//                        aria-describedby="addon-wrapping"/>
//             </div>
//
//             <select className="form-select" aria-label="Default select example">
//                 <option selected>Priority</option>
//                 {priorities.map((el, index) =>
//                 <option key={index} value={el}>{el}</option>
//                 )}
//             </select>
//
//             <select className="form-select" aria-label="Default select example">
//                 <option selected>Open this select menu</option>
//                 <option value="1">One</option>
//                 <option value="2">Two</option>
//                 <option value="3">Three</option>
//             </select>
//         </div>
//     );
// };
//
// export default CreateModal;



//07.12
// import React, {useState} from 'react';
// import MyButton from "./ui/Button/MyButton";
//
// const CreateModal = ({priorities, statuses, createTask, setOpenModal}) => {
//
//     const initialTask = {
//         name: '',
//         description: '',
//         priority: priorities[0],
//         status: statuses[0]?.title
//     }
//
//     const [newTask, setNewTask] = useState(initialTask);
//
//     const onCreate = () => {
//         createTask(newTask)
//         setOpenModal(false)
//         setNewTask(initialTask)
//     }
//
//     const onCancel = () => {
//         setOpenModal(false)
//         setNewTask(initialTask)
//     }
//
//     console.log(newTask)
//
//     return (
//         <div>
//             <h3>Create new Task</h3>
//             <div className="input-group flex-nowrap" style={{margin: '5px'}}>
//
//                 <input onChange={event => setNewTask({...newTask, name: event.target.value})} value={newTask.name}
//                        type="text" className="form-control" placeholder="Task name" aria-label="Task name"
//                        aria-describedby="addon-wrapping"/>
//             </div>
//
//             <div className="input-group flex-nowrap" style={{margin: '5px'}}>
//                 <input onChange={event => setNewTask({...newTask, description: event.target.value})} value={newTask.description}
//                        type="text" className="form-control" placeholder="Description" aria-label="Description"
//                        aria-describedby="addon-wrapping"/>
//
//             </div>
//
//             <select className="form-select" aria-label="Default select example" style={{margin: '5px'}}
//                     onChange={event => setNewTask({...newTask, description: event.target.value})} value={newTask.name}>
//                 <option selected>Priority</option>
//                 {priorities.map((el, ind) =>
//                     <option key={ind} value={el}>{el}</option>
//                 )}
//
//             </select>
//
//             <select className="form-select" aria-label="Default select example" style={{margin: '5px'}}
//                     onChange={event => setNewTask({...newTask, status: event.target.value})} value={newTask.name}>
//                 <option selected>Status</option>
//                 {statuses.map((el) =>
//                     <option key={el._id} value={el.title}>{el.title}</option>
//                 )}
//             </select>
//
//             <MyButton onClick={onCreate}>Create</MyButton>
//             <MyButton onClick={onCancel}>Cancel</MyButton>
//
//
//         </div>
//     );
// };
//
// export default CreateModal;


//07.15
// import React, {useState} from 'react';
// import MyButton from "./ui/Button/MyButton";
//
// const CreateModal = ({priorities, statuses, createTask, setOpenModal}) => {
//
//     const initialTask = {
//         name: '',
//         description: '',
//         priority: priorities[0],
//         status: statuses[0]?.title
//     }
//
//     const [newTask, setNewTask] = useState(initialTask);
//
//     const onCloseModal = () => {
//         setNewTask(initialTask)
//         setOpenModal({
//             isOpen: false,
//             mode: null,
//             data: null
//         })
//     }
//
//     const onCreate = () => {
//         createTask(newTask)
//         onCloseModal()
//     }
//
//     const onCancel = () => {
//         onCloseModal()
//         // setNewTask(initialTask) //??????
//     }
//
//     console.log(newTask)
//
//     return (
//         <div>
//             <h3>Create new Task</h3>
//             <div className="input-group flex-nowrap" style={{margin: '5px'}}>
//
//                 <input onChange={event => setNewTask({...newTask, name: event.target.value})} value={newTask.name}
//                        type="text" className="form-control" placeholder="Task name" aria-label="Task name"
//                        aria-describedby="addon-wrapping"/>
//             </div>
//
//             <div className="input-group flex-nowrap" style={{margin: '5px'}}>
//                 <input onChange={event => setNewTask({...newTask, description: event.target.value})} value={newTask.description}
//                        type="text" className="form-control" placeholder="Description" aria-label="Description"
//                        aria-describedby="addon-wrapping"/>
//
//             </div>
//
//             <select className="form-select" aria-label="Default select example" style={{margin: '5px'}}
//                     onChange={event => setNewTask({...newTask, description: event.target.value})} value={newTask.name}>
//                 <option selected>Priority</option>
//                 {priorities.map((el, ind) =>
//                     <option key={ind} value={el}>{el}</option>
//                 )}
//
//             </select>
//
//             <select className="form-select" aria-label="Default select example" style={{margin: '5px'}}
//                     onChange={event => setNewTask({...newTask, status: event.target.value})} value={newTask.name}>
//                 <option selected>Status</option>
//                 {statuses.map((el) =>
//                     <option key={el._id} value={el.title}>{el.title}</option>
//                 )}
//             </select>
//
//             <MyButton onClick={onCreate}>Create</MyButton>
//             <MyButton onClick={onCancel}>Cancel</MyButton>
//
//
//         </div>
//     );
// };
//
// export default CreateModal;



//==============================
//07.15 repeat
// import React from 'react';
//
// const CreateModal = ({priorities, statuses}) => {
//     return (
//         <div>
//             <h3>Create new task</h3>
//             <div className="input-group flex-nowrap">
//                 <input type="text" className="form-control" placeholder="Task Name" aria-label="Taskname"
//                        aria-describedby="addon-wrapping"/>
//
//             </div>
//
//             <div className="input-group flex-nowrap">
//                 <input type="text" className="form-control" placeholder="Description" aria-label="Description"
//                        aria-describedby="addon-wrapping"/>
//             </div>
//
//             <select className="form-select" aria-label="Default select example">
//                 <option selected>Priority</option>
//                 {priorities.map((el, index) =>
//                 <option key={index} value={el}>{el}</option>
//                 )}
//             </select>
//
//             <select className="form-select" aria-label="Default select example">
//                 <option selected>Priority</option>
//                 {statuses.map((el) =>
//                     <option key={el._id} value={el.title}>{el.title}</option>
//                 )}
//             </select>
//
//             <select className="form-select" aria-label="Default select example">
//                 <option selected>Open this select menu</option>
//                 <option value="1">One</option>
//                 <option value="2">Two</option>
//                 <option value="3">Three</option>
//             </select>
//         </div>
//     );
// };
//
// export default CreateModal;





import React, {useState} from 'react';
import MyButton from "./ui/Button/MyButton";

const CreateModal = ({priorities, statuses, createTask, setOpenModal, changeStatus}) => {

    const initialTask = {
        name: '',
        description: '',
        priority: priorities[0],
        status: statuses[0]?.title
    }

    const [newTask, setNewTask] = useState(initialTask);

    const onCloseModal = () => {
       setNewTask(initialTask)
       setOpenModal({
           isOpen: false,
           mode: null,
           data: null,
       })
    }

    const onCreate = () => {
        createTask(newTask)
        onCloseModal()
    }

    const onCancel = () => {
        onCloseModal()
    }

    // console.log(newTask)

    return (
        <div>
            <h3>Create new Task</h3>
            <div className="input-group flex-nowrap" style={{margin: '5px'}}>

                <input onChange={event => setNewTask({...newTask, name: event.target.value})} value={newTask.name}
                       type="text" className="form-control" placeholder="Task name" aria-label="Task name"
                       aria-describedby="addon-wrapping"/>
            </div>

            <div className="input-group flex-nowrap" style={{margin: '5px'}}>
                <input onChange={event => setNewTask({...newTask, description: event.target.value})} value={newTask.description}
                       type="text" className="form-control" placeholder="Description" aria-label="Description"
                       aria-describedby="addon-wrapping"/>

            </div>

            <select className="form-select" aria-label="Default select example" style={{margin: '5px'}}
                    onChange={event => setNewTask({...newTask, description: event.target.value})} value={newTask.name}>
                <option selected>Priority</option>
                {priorities.map((el, ind) =>
                    <option key={ind} value={el}>{el}</option>
                )}

            </select>

            <select className="form-select" aria-label="Default select example" style={{margin: '5px'}}
                    onChange={event => setNewTask({...newTask, status: event.target.value})} value={newTask.name}>
                <option selected>Status</option>

                {statuses.map((el) =>
                    <option key={el._id} value={el.title}>{el.title}</option>
                )}
            </select>

            <MyButton onClick={onCreate}>Create</MyButton>
            <MyButton onClick={onCancel}>Cancel</MyButton>


        </div>
    );
};

export default CreateModal;