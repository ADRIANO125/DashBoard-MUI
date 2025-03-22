import React from "react";
import PieChart from "./PieChart";
import Header from "../../components/Header";



const Pie = () => {

  return (
    <div>
            <Header title={"Pie Chart"} subTitle={"Simple Pie Chart"}/>
      
      <PieChart />
    </div>
  );
};

export default Pie;
