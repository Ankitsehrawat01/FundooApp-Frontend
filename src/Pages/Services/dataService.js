import axios from 'axios'

const headerConfig = {
    headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
}
//to create Notes
export const createNoteAPI =(createNoteoObj) => {
    let response = axios.post('https://localhost:44342/api/Notes/Create',createNoteoObj,headerConfig)
    return response
}

//to retrive Notes
export const retriveNoteAPI =() => {
    let response = axios.get('https://localhost:44342/api/Notes/RetrieveAll',headerConfig)
    return response
}
