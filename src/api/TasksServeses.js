// import axios from "axios";
//
// export async function fetchTasks() {
//     const response = await axios.get(`https://expressjs-server.vercel.app/tasks`)
//     return response;
// }


// //part 3
// import axios from "axios";
//
// export async function fetchTasks() {
//     const response = await axios.get(`https://expressjs-server.vercel.app/tasks`)
//     return response;
// }


//12.07
// import axios from "axios";
//
// export async function fetchTasks() {
//     const response = await axios.get(`https://expressjs-server.vercel.app/tasks`)
//     return response;
// }
//
// export async function postTask(newTask) {
//     const response = await axios.post(`https://expressjs-server.vercel.app/tasks`, newTask)
//     return response;
// }



//07.15
// import axios from "axios";
//
// const url = `https://expressjs-server.vercel.app/tasks`;
//
// export async function fetchTasks() {
//     const response = await axios.get(url);
//     return response;
// }
//
// export async function postTask(newTask) {
//     const response = await axios.post(url, newTask);
//     return response;
// }
//
// export const updateTask = async(id, updatedTask) => {
//     const taskUrl = `${url}/${id}`;
//     const response = await axios.patch(taskUrl, updatedTask);
//     return response;
// }



//=======================
//07.15 repeat
// import axios from "axios";
//
// export async function fetchTasks() {
//     const response = await axios.get(`https://expressjs-server.vercel.app/tasks`)
//     return response;
// }





import axios from "axios";
const url = `https://expressjs-server.vercel.app/tasks`;

export async function fetchTasks() {
    const response = await axios.get(url)
    return response;
}

export async function postTask(newTask) {
    const response = await axios.post(url, newTask)
    return response;
}

export async function updateTask(id, updatedTask) {
    const taskUrl = `${url}/${id}`
    const response = await axios.patch(taskUrl, updatedTask)
    return response;
}

export async function deleteTask(id) {
    const taskUrl = `${url}/${id}`
    const response = await axios.delete(taskUrl)
    return response;
}