import {axiosi} from '../../config/axios'

const environment = {
    apiurl: "http://localhost:8000"
}

export const createWishlistItem=async(data)=>{
    try {
        const res=await axiosi.post(`${environment.apiurl}/wishlist`,data)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const fetchWishlistByUserId=async(id)=>{
    try {
        const res=await axiosi.get(`${environment.apiurl}/wishlist/user/${id}`)
        const totalResults=await res.headers.get("X-Total-Count")
        return {data:res.data,totalResults:totalResults}
    } catch (error) {
        throw error.response.data
    }
}

export const updateWishlistItemById=async(update)=>{
    try {
        const res=await axiosi.patch(`${environment.apiurl}/wishlist/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const deleteWishlistItemById=async(id)=>{
    try {
        const res=await axiosi.delete(`${environment.apiurl}/wishlist/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}