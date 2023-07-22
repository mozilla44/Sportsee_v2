import Session from "../models/Session"
import Performance from "../models/Performance"
import Activity from "../models/Activity"
import UserInfo from "../models/UserInfo"

async function getUserInfo (id){
    let result = await fetch(`/mock.json`)
    let data = await result.json()
    data = data.USER_MAIN_DATA.find(user => user.id === id)
    return new UserInfo(data)
}

//TODO finish mock api calls 

async function getUserSession (id){
    let result = await fetch(`/mock.json`)
    let data = await result.json()
    data = data.USER_AVERAGE_SESSIONS.find(user => user.id === id)
    return new Session (data.data)
}

async function getUserActivity (id){
    let result = await fetch(`/mock.json`)
    let data = await result.json()
    data = data.USER_ACTIVITY.find(user => user.id === id)
    return new Activity(data.data)
}

async function getUserPerf (id){
    let result = await fetch(`/mock.json`)
    let data = await result.json()
    data = data.USER_PERFORMANCE.find(user => user.id === id)
    return  new Performance(data.data)
}




export {getUserInfo, getUserSession,getUserPerf,getUserActivity,}