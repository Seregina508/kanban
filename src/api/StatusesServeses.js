// import axios from "axios";
//
// export async function fetchStatuses() {
//     const response = await axios.get(`https://expressjs-server.vercel.app/statuses`)
//     return response;
// }


//part 3
// import axios from "axios";
//
// export async function fetchStatuses() {
//     const response = await axios.get(`https://expressjs-server.vercel.app/statuses`)
//     return response;
// }



//07.12
// import axios from "axios";
//
// export async function fetchStatuses() {
//     const response = await axios.get(`https://expressjs-server.vercel.app/statuses`)
//     return response;
// }



//07.15
// import axios from "axios";
//
// export async function fetchStatuses() {
//     const response = await axios.get(`https://expressjs-server.vercel.app/statuses`)
//     return response;
// }



//=================================/
//07.15 repeat
// import axios from "axios";
//
// export async function fetchStatuses() {
//     const response = await axios.get(`https://expressjs-server.vercel.app/statuses`)
//     return response;
// }





import axios from "axios";

const url = `https://expressjs-server.vercel.app/statuses`;

export async function fetchStatuses() {
    const response = await axios.get(url)
    return response;
}


export async function changeStatuses(id, changedStatus) {
    const statusUrl = `${url}/${id}`
    const response = await axios.patch(statusUrl, changedStatus)
    return response;
}