class Activity {
    constructor(json){
        this.activity = json.sessions
        for(let day of json.sessions){
            switch(day.day){
                case '2020-07-01': 
                day.daychar = 1;
                break; 
                case '2020-07-02': 
                day.daychar = 2;
                break; 
                case '2020-07-03': 
                day.daychar = 3;
                break; 
                case '2020-07-04': 
                day.daychar = 4;
                break; 
                case '2020-07-05': 
                day.daychar = 5;
                break; 
                case '2020-07-06': 
                day.daychar = 6;
                break; 
                case '2020-07-07': 
                day.daychar = 7;
                break;
                default:
                    break 
            }
        }
    
}}
export default Activity