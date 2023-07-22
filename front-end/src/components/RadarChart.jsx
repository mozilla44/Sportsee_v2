import { Radar, RadarChart, PolarGrid, PolarAngleAxis, /* PolarRadiusAxis */ ResponsiveContainer } from 'recharts';
import "../styles/css/radarchart.css"


function RadarGraph ({performance}) {
return (
    <ResponsiveContainer minWidth="100%" height="100%" className="radar" >
      <RadarChart className='chart' /* width="100"  */cx="50%" cy="50%" outerRadius="40%" data={performance} >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" stroke='white'/>
        <Radar name="Mike" dataKey="value" stroke="" fill="rgba(255, 1, 1)" fillOpacity={0.7}  />
      </RadarChart>
    </ResponsiveContainer>
  )};

  export default RadarGraph;

