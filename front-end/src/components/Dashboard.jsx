import { useParams } from "react-router-dom";
import "../styles/css/dashboard.css";
import { useEffect, useState } from "react";
import TestLine from "../components/LineChart";
import { PieChart } from "./PieChart";
import {
  getUserInfo,
  getUserSession,
  getUserPerf,
  getUserActivity,
} from "../services/apiManager.js";
import RadarGraph from "./RadarChart";
import ActivityChart from "../components/BarChart";
import KeyData from "./KeyData";
import "../styles/css/dashboard.css";

function Dashboard() {
  let [data, setData] = useState({ userInfos: {}, keyData: {} });
  let [session, setSession] = useState([]);
  let [perf, setPerf] = useState([]);
  let [activity, setActivity] = useState([]);

  let { id } = useParams();
  useEffect(() => {
    getUserInfo(id).then((userInfo) => setData(userInfo));
    getUserSession(id).then((userSession) => setSession(userSession));
    getUserPerf(id).then((userPerf) => setPerf(userPerf));
    getUserActivity(id).then((userActivity) => setActivity(userActivity));
  }, [id]);

  return (
    <div className="dashboard_wrapper">
      <div className="dashboard_header">
        <div className="hello">
          Bonjour <span className="name"> {data.userInfos.firstName}</span>
        </div>
        <div className="congrats">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </div>
      </div>
      <ActivityChart activity={activity.activity} className="activity_chart" />
      <div className="square_charts">
        <div className="linechart_wrapper">
          <TestLine session={session.sessions} />
        </div>
        <div className="radar_wrapper">
          <RadarGraph performance={perf.performance} className="radar" />
        </div>
        <div className="piechart_wrapper">
          <PieChart score={data.score} />
        </div>
      </div>

      <div className="key_data_wrapper">
        <KeyData
          x={data.keyData.calorieCount + "Kcal"}
          y="Calories"
          className="key_data"
          img="/assets/calories-icon.svg"
        />
        <KeyData
          x={data.keyData.proteinCount + "g"}
          y={"proteines"}
          className="key_data"
          img="/assets/protein-icon.svg"
        />
        <KeyData
          x={data.keyData.carbohydrateCount + "g"}
          y={"glucides"}
          className="key_data"
          img="/assets/carbs-icon.svg"
        />
        <KeyData
          x={data.keyData.lipidCount + "g"}
          y={"lipides"}
          className="key_data"
          img="/assets/fat-icon.svg"
        />
      </div>
    </div>
  );
}

export default Dashboard;
