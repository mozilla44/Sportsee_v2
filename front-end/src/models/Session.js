class Session {
    constructor(json){
        this.sessions = json.sessions 
        for (let session of this.sessions) {
            switch(session.day){
                case 1: 
                session.daychar = "L";
                break; 
                case 2: 
                session.daychar = "M";
                break; 
                case 3: 
                session.daychar = "M";
                break; 
                case 4: 
                session.daychar = "J";
                break; 
                case 5: 
                session.daychar = "V";
                break; 
                case 6: 
                session.daychar = "S";
                break; 
                case 7: 
                session.daychar = "D";
                break;
                default:
                    break 
            }
        }
    }
}
export default Session