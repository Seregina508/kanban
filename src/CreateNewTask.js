// import React, {useState} from 'react';
//
// const CreateNewTask = (props) => {
//
//     const [inputValue, setInputValue] = useState('');
//
//     const handleCreateTask = () => {
//         console.log( 'handleCreateTask called: ' +  inputValue )
//         props.createTask(inputValue)
//         setInputValue('')
//     }
//
//     return (
//         <div>
//             <input type="text"
//                    value={inputValue}
//                    onChange={e => setInputValue(e.target.value)}
//             />
//
//             <button onClick={handleCreateTask}>Save</button>
//         </div>
//     );
// };
//
// export default CreateNewTask;


// import React, {useState} from 'react';
//
// const CreateNewTask = (props) => {
//
//     const [inputValue, setInputValue] = useState('');
//
//     const handleCreateTask = () => {
//         console.log( 'handleCreateTask called: ' +  inputValue )
//         props.createTask(inputValue)
//         setInputValue('')
//     }
//
//     return (
//         <div>
//             <input type="text"
//                    value={inputValue}
//                    onChange={e => setInputValue(e.target.value)}
//             />
//
//             <button onClick={handleCreateTask}>Save</button>
//         </div>
//     );
// };
//
// export default CreateNewTask;


// import React, {useState} from 'react';
//
// const CreateNewTask = (props) => {
//
//     const [inputValue, setInputValue] = useState('');
//
//     return (
//         <div>
//             <button className="btn btn-outline-success" onClick={() => props.creteNewTask(inputValue)}>Create New Task</button>
//             <input className='"form-control"' type="text" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
//
//         </div>
//     );
// };
//
// export default CreateNewTask;


//12.07
// import React, {useState} from 'react';
//
// const CreateNewTask = (props) => {
//
//     const [inputValue, setInputValue] = useState('');
//
//     return (
//         <div>
//             <button className="btn btn-outline-success" onClick={() => props.creteNewTask(inputValue)}>Create New Task</button>
//             <input className='"form-control"' type="text" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
//
//         </div>
//     );
// };
//
// export default CreateNewTask;


//07.15
// import React, {useState} from 'react';
//
// const CreateNewTask = (props) => {
//
//     const [inputValue, setInputValue] = useState('');
//
//     return (
//         <div>
//             <button className="btn btn-outline-success" onClick={() => props.creteNewTask(inputValue)}>Create New Task</button>
//             <input className='"form-control"' type="text" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
//
//         </div>
//     );
// };
//
// export default CreateNewTask;




//=====================
//07.15 repeat
// import React, {useState} from 'react';
//
// const CreateNewTask = (props) => {
//
//     const [inputValue, setInputValue] = useState('');
//
//     return (
//         <div>
//             <button className="btn btn-outline-success" onClick={() => props.creteNewTask(inputValue)}>Create New Task</button>
//             <input className='"form-control"' type="text" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
//
//         </div>
//     );
// };
//
// export default CreateNewTask;





import React, {useState} from 'react';

const CreateNewTask = (props) => {

    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <button className="btn btn-outline-success" onClick={() => props.creteNewTask(inputValue)}>Create New Task</button>
            <input className='"form-control"' type="text" value={inputValue} onChange={event => setInputValue(event.target.value)}/>

        </div>
    );
};

export default CreateNewTask;