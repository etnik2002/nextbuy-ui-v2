import {axiosi} from '../../config/axios'

const environment = {
    apiurl: "http://localhost:8000"
}

export const addToCart=async(item)=>{
    try {
        const res=await axiosi.post(`${environment.apiurl}/cart`,item)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const fetchCartByUserId=async(id)=>{
    try {
        const res=await axiosi.get(`${environment.apiurl}/cart/user/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const updateCartItemById=async(update)=>{
    try {
        const res=await axiosi.patch(`${environment.apiurl}/cart/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteCartItemById=async(id)=>{
    try {
        const res=await axiosi.delete(`${environment.apiurl}/cart/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const resetCartByUserId=async(userId)=>{
    try {
        const res=await axiosi.delete(`${environment.apiurl}/cart/user/${userId}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
