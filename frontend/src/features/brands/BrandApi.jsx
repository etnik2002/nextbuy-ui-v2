import { axiosi } from "../../config/axios";
const environment = {
    apiurl: "http://localhost:8000"
}
export const fetchAllBrands=async()=>{
    try {
        const res=await axiosi.get(`${environment.apiurl}/brands`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}