import { axiosi } from "../../config/axios"

const environment = {
    apiurl: "http://localhost:8000"
}

export const fetchLoggedInUserById=async(id)=>{
    try {
        const res=await axiosi.get(`${environment.apiurl}/users/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const updateUserById=async(update)=>{
    try {
        const res=await axiosi.patch(`${environment.apiurl}/users/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}