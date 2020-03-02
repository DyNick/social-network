import * as axios from 'axios'

const instance = axios.create({
    ithCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY':'6340ef45-39c8-4ddd-af1f-909b6c112888'}
})

export const usersAPI = {
    getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        }).then(response=>{
            return response.data
        })
    
    }
}
