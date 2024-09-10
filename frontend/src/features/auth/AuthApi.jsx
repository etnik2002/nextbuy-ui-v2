import {axiosi} from '../../config/axios'
const environment = {
    apiurl: "http://localhost:8000"
}

export const signup=async(cred)=>{
    try {
        const res=await axiosi.post(`${environment.apiurl}/auth/signup`,cred)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const login=async(cred)=>{
    try {
        const res=await axiosi.post(`${environment.apiurl}/auth/login`,cred)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const verifyOtp=async(cred)=>{
    try {
        const res=await axiosi.post(`${environment.apiurl}/${environment.apiurl}/auth/verify-otp`,cred)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const resendOtp=async(cred)=>{
    try {
        const res=await axiosi.post(`${environment.apiurl}/${environment.apiurl}/auth/resend-otp`,cred)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const forgotPassword=async(cred)=>{
    try {
        const res=await axiosi.post(`${environment.apiurl}/auth/forgot-password`,cred)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const resetPassword=async(cred)=>{
    try {
        const res=await axiosi.post(`${environment.apiurl}/auth/reset-password`,cred)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const checkAuth=async(cred)=>{
    try {
        const res=await axiosi.get(`${environment.apiurl}/auth/check-auth`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const logout=async()=>{
    try {
        const res=await axiosi.get(`${environment.apiurl}/auth/logout`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}