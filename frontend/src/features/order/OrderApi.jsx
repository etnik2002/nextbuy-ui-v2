import {axiosi} from '../../config/axios'

const environment = {
    apiurl: "http://localhost:8000"
}

export const createOrder=async(order)=>{
    try {
        const res=await axiosi.post(`${environment.apiurl}/orders`,order)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const getOrderByUserId=async(id)=>{
    try {
        const res=await axiosi.get(`${environment.apiurl}/orders/user/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const getAllOrders=async()=>{
    try {
        const res=await axiosi.get(`${environment.apiurl}/orders`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const updateOrderById=async(update)=>{
    try {
        const res=await axiosi.patch(`${environment.apiurl}/orders/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}