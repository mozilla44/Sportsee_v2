import Session from "../models/Session"
import Performance from "../models/Performance"
import Activity from "../models/Activity"
import UserInfo from "../models/UserInfo"

async function getUserInfo (id){
    let result = await fetch(`http://localhost:3001/user/${id}`)
    let data = await result.json()
    return new UserInfo(data.data)
}

async function getUserSession (id){
    let result = await fetch(`http://localhost:3001/user/${id}/average-sessions`)
    let data = await result.json()
    return new Session (data.data)
}

async function getUserActivity (id){
    let result = await fetch(`http://localhost:3001/user/${id}/activity`)
    let data = await result.json()
    return new Activity(data.data)
}

async function getUserPerf (id){
    let result = await fetch(`http://localhost:3001/user/${id}/performance`)
    let data = await result.json()
    return  new Performance(data.data)
}




export {getUserInfo, getUserSession,getUserPerf,getUserActivity,}