import axios from "axios"

const URL = "http://localhost:8000/api/user"


export const getAllUsers = async () => {
    return await axios.get(`${URL}/users`);
}
export const createUser = async (user) => {
    
    return await axios.post(`${URL}/register`, user)
}

export const loginUser = async (user) => {
    return await axios.post(`${URL}/login`, user);
}


export const editUser = async (user, id) => {
    
    return await axios.put(`${URL}/user/${id}`, user)
}

export const deleteUser = async (id) => {
    
    return await axios.delete(`${URL}/user/${id}`)
}

