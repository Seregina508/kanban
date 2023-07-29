//part 3
// import React from 'react';
// import classes from './MyModal.module.css';
//
// const MyModal = ({openModal, setOpenModal, children}) => {
//
//     return (
//         <div className={openModal ? classes.modal + " " + classes.modal_active : classes.modal}
//              onClick={() => setOpenModal(false)}
//         >
//             <div className={openModal ? classes.content + " " + classes.content_active : classes.content}
//                  onClick={(e) => e.stopPropagation()}
//             >
//                 {children}
//             </div>
//
//         </div>
//     );
// };
//
// export default MyModal;

////07.15
// import React from 'react';
// import classes from "./MyModal.module.css";
//
// const MyModal = ({openModal, setOpenModal, children}) => {
//     console.log(children)
//
//     return (
//         <div className={openModal.isOpen ? classes.modal + " " + classes.modal_active : classes.modal}
//              onClick={() => setOpenModal(false)}
//         >
//             <div className={openModal.isOpen ? classes.content + " " + classes.content_active : classes.content}
//                  onClick={(event) => event.stopPropagation()}
//             >
//                 {children}
//             </div>
//
//         </div>
//     );
// };
//
// export default MyModal;

//===========================
//07.15 repeat
// import React from 'react';
// import classes from "./MyModal.module.css";
//
// const MyModal = ({openModal, setOpenModal, children}) => {
//
//     return (
//         <div className={openModal ? classes.modal + " " + classes.modal_active : classes.modal}
//              onClick={() => setOpenModal(false)}
//         >
//             <div className={openModal ? classes.content + " " + classes.content_active : classes.content}
//                  onClick={(event) => event.stopPropagation()}
//             >
//                 {children}
//             </div>
//
//         </div>
//     );
// };
//
// export default MyModal;


import React from 'react';
import classes from './MyModal.module.css';

const MyModal = ({openModal, setOpenModal, children}) => {

    const modalStateNames = ['create', 'delete' ]

    return (
        <div className={openModal.isOpen ? classes.modal + " " + classes.modal_active : classes.modal}
             onClick={() => setOpenModal({
                 isOpen: false,
                 mode: null,
                 data: null,
             })}  //bubbling
        >
            <div className={openModal.isOpen ? classes.content + " " + classes.content_active : classes.content}
                 onClick={(e) => e.stopPropagation()}
            >
                {
                    // openModal.mode === "create" ? children[0] : children[1]
                    children.find((child, i) =>  openModal.mode === modalStateNames[i])
                }
            </div>

        </div>
    );
};

export default MyModal;







