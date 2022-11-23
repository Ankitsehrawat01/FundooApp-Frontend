import axios from 'axios'

const headerConfig = {
    headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
}
export const createNoteAPI =(createNoteoObj) => {
    let response = axios.post('https://localhost:44342/api/Notes/Create',createNoteoObj,headerConfig)
    return response
}