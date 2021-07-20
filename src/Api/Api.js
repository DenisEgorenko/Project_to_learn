import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY":"0e3dbaa5-06d2-497d-ae53-9e7cb996b8ab"}
})


export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },

    getProfile(user_Id){
        return instance.get(`profile/` + user_Id)
    },

    getStatus(user_Id){
        return instance.get(`profile/status/` + user_Id)
    },

    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    },

    uploadPhoto(photo){
        const formData = new FormData();
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData, {headers:{"Content-Type": "multipart/form-data"}})
    }
}

export const followAPI = {

    unfollowUser(userId){
        return instance.delete( `follow/`+ userId).then(response => {
            return response.data;
        });
    },

    followUser(userId){
        return instance.post( `follow/`+ userId).then(response => {
            return response.data;
        });
    }

}

export const AuthAPI = {

    authMe(){
        return instance.get( `auth/me`).then(response => {
            return response.data;
        });
    },

    logIn(data){
        return instance.post(`auth/login`, data).then(response => {
            return response.data;
        });
    },

    logOut(){
        return instance.delete(`auth/login`).then(response => {
            return response.data;
        });
    }
}