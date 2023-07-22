export default class UserInfo {
    constructor(json) {
        Object.assign(this, json)
        this.score = [{value:1 ,fill:"transparent"},{value: this.todayScore,fill:"#FF0202"}]
        }

}