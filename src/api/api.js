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

/*
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true})
        .then(response => {
            return response.data;
        })
}*/
