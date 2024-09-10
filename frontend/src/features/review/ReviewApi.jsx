import {axiosi} from '../../config/axios'

const environment = {
    apiurl: "http://localhost:8000"
}

export const createReview=async(review)=>{
    try {
        const res=await axiosi.post(`${environment.apiurl}/reviews`,review)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const fetchReviewsByProductId=async(id)=>{
    try {
        const res=await axiosi.get(`${environment.apiurl}/reviews/product/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const updateReviewById=async(update)=>{
    try {
        const res=await axiosi.patch(`${environment.apiurl}/reviews/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteReviewById=async(id)=>{
    try {
        const res=await axiosi.delete(`${environment.apiurl}/reviews/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}