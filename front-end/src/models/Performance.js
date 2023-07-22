class Performance {
    constructor(json){
        this.performance = json.data 
        for (let perf of this.performance) {
            perf.kind = json.kind[perf.kind]
             switch(perf.kind){
                case "cardio": 
                perf.kind = "Cardio";
                break; 
                case "energy": 
                perf.kind = "Energie";
                break; 
                case "endurance": 
                perf.kind = "Endurance";
                break; 
                case "strength": 
                perf.kind = "Force";
                break; 
                case "speed": 
                perf.kind = "Vitesse";
                break; 
                case "intensity": 
                perf.kind = "Intensité";
                break; 
                default:
                    break 

            } 
        }
       this.performance.reverse()
    }
}
export default Performance;