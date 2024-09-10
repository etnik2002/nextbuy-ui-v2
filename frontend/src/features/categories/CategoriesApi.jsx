import { axiosi } from "../../config/axios"

const environment = {
    apiurl: "http://localhost:8000"
}

export const fetchAllCategories=async()=>{
    try {
        const res=await axiosi.get(`${environment.apiurl}/categories`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}