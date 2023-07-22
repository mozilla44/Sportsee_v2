import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/css/piechart.css";

export const PieChart = ({ score }) => {
  return (
    <ResponsiveContainer className="piechart" width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={score}
        startAngle={90}
      >
        <RadialBar
          minAngle={150}
          background={false}
          clockWise
          dataKey="value"
          cornerRadius={50}
        />
        <text
          className="objectif"
          x="50%"
          y="45%"
          style={{ fontSize: "1rem", fontWeight: "bold", /* outline:"3px solid pink", */ width:"500px"}}
          width={200}
          scaleToFit={true}
          textAnchor="middle"
          verticalAnchor="middle"
          display="flex"
        >
          {score && score[1].value * 100}% 
        </text>
        <text
          className="objectif"
          x="50%"
          y="52%"
          style={{ fontSize: "0.6rem",  /* outline:"3px solid pink", */ width:"500px"}}
          width={200}
          scaleToFit={true}
          textAnchor="middle"
          verticalAnchor="middle"
          display="flex"
        >
          de votre
        </text>
        <text
          className="objectif"
          x="50%"
          y="57%"
          style={{ fontSize: "0.6rem",  /* outline:"3px solid pink", */ width:"500px"}}
          width={200}
          scaleToFit={true}
          textAnchor="middle"
          verticalAnchor="middle"
          display="flex"
        >
          objectif
        </text>
       

        

        {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
      </RadialBarChart>
    </ResponsiveContainer>
  );
};
