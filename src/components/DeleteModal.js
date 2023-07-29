// import React, {useState} from 'react';
//
// const DeleteModal = () => {
//
//     const [inputValue, setInputValue] = useState();
//
//     return (
//         <div>
//             <h3>Are you sure you want to delete ?</h3>
//
//             <p>Task name: </p>
//
//             <p>To confirm, type in the box below</p>
//
//
//             <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
//         </div>
//     );
// };
//
// export default DeleteModal;


//07.15 repeat
// import React from 'react';
//
// const DeleteModal = () => {
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default DeleteModal;


import React, {useState} from 'react';

const DeleteModal = ({openModal, setOpenModal, removeTask}) => {

    const [inputValue, setInputValue] = useState();

    const onClose = () => {
        setOpenModal({
            isOpen: false,
            mode: null,
            data: null,
        })
    }

    const onDelete = () => {
        removeTask(openModal.data._id);
        onClose()
    }

    return (
        <div>
            <h3>Delete this task? </h3>
            <p>Task name: <b>{openModal.data?.name}</b></p>
            {/*added '?'*/}
            <p>To confirm, type <b>{openModal.data.name}</b> in the box below.</p>

            <input type="text" value={inputValue}
                   onChange={(event) => setInputValue(event.target.value)}
            />

            <button className="btn btn-outline-primary"
                    onClick={onClose}
            >Cancel
            </button>
            <button
                disabled={inputValue !== openModal.data.name}
                className="btn btn-outline-danger"
                onClick={onDelete}
            >
                Delete
            </button>
        </div>
    );
};

export default DeleteModal;



















