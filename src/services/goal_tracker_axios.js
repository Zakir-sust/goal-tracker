import http from '../http-common.js'

class goalTrackerDataService{
    getUsers(){
        console.log('axios get all users')
        return http.get('/user')
    }
    addUser(user){
        console.log('axios add a user')
        return http.post('/user',user)
    }
    getGoals(id){
        return http.get(`/goals?id=${id}`)
    }
    addGoal(data){
        return http.post('/goals',data)
    }
    deleteGoal(id){
        return http.delete(`goals?id=${id}`)
    }
    addCompletedGoal(data){
        return http.post('/completed-goals',data)
    }
    getCompletedGoals(id){
        return http.get(`/completed-goals?id=${id}`)
    }   
}

export default new goalTrackerDataService()
