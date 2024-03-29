import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    //  baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "98d6fd19-753b-465d-b047-34a0e3187ff5"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}

export const authAPI = {
    auth() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    },
    login(email, password, rememberMe = false) {
        console.log("name: ", email, password, rememberMe)
        return instance.post(`https://social-network.samuraijs.com/api/1.0/auth/login`,
            {
                email,
                password,
                rememberMe
            })
    },
    logout() {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
    },
    getStatus(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`https://social-network.samuraijs.com/api/1.0/profile/status/`, {status: status});
    }
}
