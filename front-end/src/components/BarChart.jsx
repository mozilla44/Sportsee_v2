import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../styles/css/barchart.css"

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return <div className='barchart_tooltip'>
      <div>{payload[0].value}Kg</div>
     <div>{payload[1].value}Kcal</div>
     </div>
    
  }
  else return null
};

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul>
      {
        payload.map((entry, index) => (
          entry.value === "kilogram")?
            <li key={`item-${index}`}>{"Poids (kg)"}</li>:
            <li key={`item-${index}`}>{"calories brûlées (kcal)"}</li>
        )
      }
    </ul>
  );
}



function ActivityChart ({activity}){
    return (
        <ResponsiveContainer width="100%" height="100%" className="barchart_container">
          <BarChart
            width={500}
            height={300}
            data={activity}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="daychar" />
            <YAxis orientation='right'/>
            <Tooltip className="barchart_tooltip"  wrapperStyle={{ backgroundColor: "#E50201", outline: "none"  }} content={<CustomTooltip />}/>
            <Legend verticalAlign="top" iconType="circle"  content={renderLegend}/>
            <Bar radius={[30, 30, 0, 0]} dataKey="calories" fill="#282D30" barSize={12} />
            <Bar radius={[30, 1000, 0, 0]} dataKey="kilogram" fill="#E50201"  barSize={12}/>
          </BarChart>
        </ResponsiveContainer>
      );
}

export default ActivityChart;
