import { axiosi } from "../../config/axios";

const environment = {
    apiurl: "http://localhost:8000"
}
export const addAddress=async(address)=>{
    try {
        const res=await axiosi.post(`${environment.apiurl}/address`,address)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const fetchAddressByUserId=async(id)=>{
    try {
        const res=await axiosi.get(`${environment.apiurl}/address/user/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const updateAddressById=async(update)=>{
    try {
        const res=await axiosi.patch(`${environment.apiurl}/address/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteAddressById=async(id)=>{
    try {
        const res=await axiosi.delete(`${environment.apiurl}/address/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}